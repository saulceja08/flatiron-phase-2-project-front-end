import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Games from './Games';
import Consoles from './Consoles';
import Support from './Support';

function HeaderTabs({ gameData }) {
  const imageUrl = 'https://logolook.net/wp-content/uploads/2021/08/Call-of-Duty-Logo-2011.png';

  // Step 1: Add state variables to manage the form data
  const [showSupportBox, setShowSupportBox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // Step 3: Handle form submission and data appending
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation here before appending the data
    const formData = {
      name,
      email,
      comment,
    };
    // Here you can use a suitable method like fetch() to post the data to the server
    // Example using fetch:
    fetch('http://localhost:3000/games/support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data submitted successfully:', data);
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
    // Clear the form after submission
    setName('');
    setEmail('');
    setComment('');
    // Hide the support box after submission
    setShowSupportBox(false);
  };

  return (
    <div className='tab-list'>
      <div className='tab-image'>
        <img src={imageUrl} alt='Tab Icon' />
      </div>
      <div className="tabs">
        <SearchBar gameData={gameData} placeholder="Search for ..." />
        <Games />
        <Consoles />
        {/* Step 2: Pass props and handlers to the Support component */}
        <Support
          showSupportBox={showSupportBox}
          setShowSupportBox={setShowSupportBox}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          comment={comment}
          setComment={setComment}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default HeaderTabs;


