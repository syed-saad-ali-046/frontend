import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/user/profile', { withCredentials: true });
      setUserProfile(response.data.user);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('User not authenticated. Please login.');
      } else {
        setError('Error fetching user profile');
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []); // Empty dependency array to run the effect only once

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePicture', file);

      const response = await axios.post('http://localhost:8000/api/user/upload-profile-picture', formData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        alert(response.data.message);
        // Refresh the user profile after uploading the picture
        fetchUserProfile();
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert('An error occurred during the upload. Please try again.');
    }
  };

  return (
    <div class="bg-white p-8 rounded-lg shadow-md text-gray-900 max-w-md mx-auto">
    {error && <p class="text-red-500">{error}</p>}
    <div class="flex items-center justify-center">
        {userProfile.profilePicture && (
            <div class="w-20 h-20 overflow-hidden rounded-full">
                <img
                    src={`data:image/jpeg;base64,${userProfile.profilePicture}`}
                    alt="Profile"
                    class="w-full h-full object-cover"
                    onError={(e) => console.error('Error loading image:', e.target, e.nativeEvent)}
                />
            </div>
        )}
    </div>
    <h1 class="text-2xl font-semibold mt-4 border-b border-gray-300 pb-2 text-center">User Profile</h1>
    <p class="mt-2">
        <span class="text-gray-500">Email:</span> {userProfile.email}
    </p>
    <p>
        <span class="text-gray-500">Phone:</span> {userProfile.phoneNumber}
    </p>
    <p>
        <span class="text-gray-500">First Name:</span> {userProfile.firstName}
    </p>
    <p>
        <span class="text-gray-500">Last Name:</span> {userProfile.lastName}
    </p>
    <label class="block mt-4" htmlFor="profilePicture">Upload Profile Picture:</label>
    <input type="file" id="profilePicture" name="profilePicture" accept="image/*" onChange={handleFileChange} class="mt-1" />
    <button
        type="button"
        onClick={handleUpload}
        class="mt-4 bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
    >
        Upload
    </button>
</div>

  );
};

export default UserProfile;
