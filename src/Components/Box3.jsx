import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

function Box3() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/user/content')
      .then(res => res.json())
      .then(data =>{ 
        console.log('Data fetched:', data);
        setItems(data.content)})
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const editItem = (id, newName) => {
    fetch(`http://localhost:4000/api/v1/user/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: newName }) // Send the new content
    })
    .then(() => {
      const updatedItems = items.map(item => item._id === id ? { ...item, name: newName } : item);
      setItems(updatedItems);

      // Reload the page after successfully updating the item
    window.location.reload();
    })
    .catch(error => console.error('Error updating item:', error));
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
  <div className="container">
    <h2>Edit Items</h2>
    {Array.isArray(items) && items.map(item => {
      console.log("Item:", item);
      return (
        <div key={item._id}>
          <span>{item.content}</span>
          <button onClick={() => {
            const newName = prompt('Edit item:', item.content);
            if (newName !== null) {
              editItem(item._id, newName);
            }
          }}>Edit</button>
        </div>
      );
    })}
  </div>
    </ResizableBox>
  );
}

export default Box3;
