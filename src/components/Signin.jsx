import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validation checks
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'password':
        // Other validation checks for the password field if needed
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setFormData({ ...formData, [name]: value });
  };

  const handleSignin = async () => {
    try {
      // Validate form fields
      const validationErrors = {};
      if (formData.email.trim() === '') {
        validationErrors.email = 'Email is required';
      }
      if (formData.password.trim() === '') {
        validationErrors.password = 'Password is required';
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setErrorMessage('Please fix the errors before signing in.');
        setSuccessMessage('');
        return;
      }

      const response = await axios.post(
        'https://fypbackend.netlify.app/api/user/signin',
        formData,
        { withCredentials: true } // Include credentials in the request
      );

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        navigate('/user');
      } else {
        setErrorMessage(`Error: ${response.data.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error during signin:', error);
      setErrorMessage('An error occurred during signin. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">User Sign In</h1>
          <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
          <form action="">
            <div className="relative mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className={`peer mt-1 w-full border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
              />
              {errors.email && (
                <div className="text-red-500 text-sm flex items-center">
                  <span role="img" aria-label="Error" className="mr-1">&#10060;</span>
                  {errors.email}
                </div>
              )}
            </div>
            <div className="relative mt-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`peer mt-1 w-full border-b-2 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
              />
              {errors.password && (
                <div className="text-red-500 text-sm flex items-center">
                  <span role="img" aria-label="Error" className="mr-1">&#10060;</span>
                  {errors.password}
                </div>
              )}
            </div>
            <div className="my-6">
              <button
                type="button"
                onClick={handleSignin}
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign In
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Not Yet Registered?
              <a
                href="/signup"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Sign up
              </a>
              .
            </p>
            {errorMessage && (
              <div className="text-red-500 text-sm flex items-center justify-center">
                <span role="img" aria-label="Error" className="mr-1">&#10060;</span>
                <strong>{errorMessage}</strong>
              </div>
            )}
            {successMessage && (
              <div className="text-green-500 text-sm flex items-center justify-center">
                <span role="img" aria-label="Success" className="mr-1">&#10004;</span>
                <strong>{successMessage}</strong>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
