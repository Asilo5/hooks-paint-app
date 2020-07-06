import React, { useState } from 'react';
import './style.css';


const Name = () => {
   const [name, setName] = useState('');
    return (
      <form className="header-name">
          <input value={name}
                 onChange={(e) => setName(e.target.value)}
                 onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
                 placeholder='Untitled'
          />
      </form>
    );
}

export default Name;