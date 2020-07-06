import React, { useState } from 'react';


const Name = () => {
   const [name, setName] = useState('');
    return (
      <form>
          <input value={name}
                 onChange={(e) => setName(e.target.value)}
                 onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
                 placeholder='Untitled'
          />
      </form>
    );
}

export default Name;