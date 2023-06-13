import React, { useState } from "react";
import { motion } from "framer-motion";

const GptForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [notification, setNotification] = useState(null);

  const handleAddButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== "") {
      // Handle successful form submission
      setNotification("Success! Form submitted successfully");
    } else {
      // Handle empty name field error
      setNotification("Error! Name field cannot be empty");
    }
    setTimeout(() => {
      setIsFormVisible(false);
      setName("");
      setNotification(null);
    }, 2000);

    // Reset form and notification state after 2 seconds
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-orange-300'>
      {/* Background content */}
      <motion.div
        className='fixed inset-0 bg-blur bg-cover bg-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: isFormVisible ? 0.5 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundImage: "url('background-image.jpg')" }} // Replace with your background image URL
      />

      {/* Form */}
      <div className='relative bg-gray-200 p-6 rounded-lg'>
        <h1 className='text-3xl mb-4'>My App</h1>

        {!isFormVisible ? (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        ) : (
          <form onSubmit={handleFormSubmit}>
            {/* Your form content here */}
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 font-bold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Other form fields go here */}

            <div className='flex items-center justify-end'>
              <button
                type='submit'
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Save
              </button>
            </div>
          </form>
        )}

        {/* Notification */}
        {notification && (
          <motion.div
            className='absolute top-4 right-4 p-4 rounded-md text-white bg-green-500'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {notification}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GptForm;
