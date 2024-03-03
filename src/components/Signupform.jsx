
import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validation checks
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!/^[a-zA-Z ]+$/.test(value)) {
          error = 'Name should only contain alphabets and spaces';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'phoneNumber':
        if (!/^[0-9+\-]+$/.test(value)) {
          error = 'Phone number should only contain numbers, +, or -';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'Password should be 8 characters or more';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (Object.values(formData).some(value => value.trim() === '')) {
      setErrorMessage('Please fill out each field.');
      setSuccessMessage('');
      return;
    }

    // Check for any validation errors
    if (Object.values(errors).some((error) => error !== '')) {
      setErrorMessage('Form has errors. Please fix them before submitting.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('https://fypbackend.netlify.app/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        setSuccessMessage('User registered successfully');
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(`Registration failed: ${errorData.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage(`Error during registration: ${error.message}`);
      setSuccessMessage('');
    }
  };


  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign Up</h1>
          <p className="mt-2 text-gray-500">Fill in the details below to create an account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit} action="">
            <div className="relative mt-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`peer mt-1 w-full border-b-2 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
              />
              <label
                htmlFor="firstName"
                className={`pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm ${
                  errors.firstName ? 'text-red-500' : 'text-gray-800'
                } opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800`}
              >
                {errors.firstName ? errors.firstName : 'First Name'}
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="last Name"
                className={`peer mt-1 w-full border-b-2 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
              />
              <label
                htmlFor="lastName"
                className={`pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm ${
                  errors.lastName ? 'text-red-500' : 'text-gray-800'
                } opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800`}
              >
                {errors.lastName ? errors.lastName : 'Last Name'}
              </label>
            </div>
            <div class="relative mt-6">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
            />
            <label
              for="dateOfBirth"
              class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Date of Birth
            </label>
          </div>
          <div className="relative mt-6">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className={`peer mt-1 w-full border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
              />
              <label
                htmlFor="email"
                className={`pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm ${
                  errors.email ? 'text-red-500' : 'text-gray-800'
                } opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800`}
              >
                {errors.email ? errors.email : 'Email'}
              </label>
            </div>

            <div className="relative mt-6">
              <input
              type="tel"  // Change the input type to "tel" for phone numbers
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`peer mt-1 w-full border-b-2 ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
              />
              <label
              htmlFor="phoneNumber"
              className={`pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm ${
                errors.phoneNumber ? 'text-red-500' : 'text-gray-800'
              } opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800`}
              >
                {errors.phoneNumber ? errors.phoneNumber : 'Phone Number'}
                </label>
            </div>
            <div className="relative mt-6">
  <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Password"
    className={`peer mt-1 w-full border-b-2 ${
      errors.password ? 'border-red-500' : 'border-gray-300'
    } px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none`}
  />
  <label
    htmlFor="password"
    className={`pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm ${
      errors.password ? 'text-red-500' : 'text-gray-800'
    } opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800`}
  >
    {errors.password ? errors.password : 'Password'}
  </label>
</div>



            

            {/* ... (repeat for other input fields) ... */}

            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
            {errorMessage && (
               <div className="text-red-500 text-sm flex items-center justify-center">
                <span role="img" aria-label="Error">&#10060;</span> <strong>{errorMessage}</strong>
                </div>
                )}
                {successMessage && (
                <div className="text-green-500 text-sm flex items-center justify-center">
                  <span role="img" aria-label="Success">&#10004;</span> <strong>{successMessage}</strong>
                  </div>
                )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
