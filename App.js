import React, { useState } from 'react';

const CombinedEventHandlingExample = () => {
  // State to manage a counter and form input
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  // Event handler for button click
  const handleClick = () => {
    setCount(count + 1);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setMessage(`Submitted: ${inputValue}`);
  };

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler that takes parameters
  const handleCustomMessage = (msg) => {
    alert(msg);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Button Click Example */}
      <div>
        <p>You clicked the button {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* Form Submission Example */}
      <div style={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={inputValue} onChange={handleInputChange} />
          </label>
          <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      {/* Custom Message with Parameters */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleCustomMessage('Hello from the custom message handler!')}>
          Show Custom Message
        </button>
      </div>
    </div>
  );
};

export default CombinedEventHandlingExample;
