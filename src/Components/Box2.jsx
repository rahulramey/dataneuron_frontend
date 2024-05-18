import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Box = () => {
  const [counts, setCounts] = useState({ addCount: 0, updateCount: 0 });

  useEffect(() => {
    
      fetch('http://localhost:4000/api/v1/user/counts')
        .then(response => response.json())
        .then(data => setCounts(data))
        .catch(error => console.error('Error:', error));
    
  },[counts]);

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
        { 
          <div className="counts">
            <p>Add Count: {counts.addCount}</p>
            <p>Update Count: {counts.updateCount}</p>
          </div>
        }
      </div>
    </ResizableBox>
  );
};

export default Box;
