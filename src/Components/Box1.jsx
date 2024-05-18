import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Box1 = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAdd = () => {
    fetch('http://localhost:4000/api/v1/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setContent(''); // Clears the input field after adding
      })
      .catch(error => console.error('Error:', error));
      window.location.reload();

  };

  return (
    <ResizableBox 
      className="box" 
      width={300} 
      height={300} 
      minConstraints={[150, 150]} 
      maxConstraints={[600, 600]}
      resizeHandles={['se', 'sw', 'ne', 'nw', 'n', 's', 'e', 'w']}
    >
      <div className="content">
        <input
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="Enter content"
        />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
        </div>
        <p>{message}</p>
      </div>
    </ResizableBox>
  );
};

export default Box1;
