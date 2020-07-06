import React from 'react';

import Paint from '../Paint/Paint';
import WindowSize from '../WindowSize/WindowSize';

function App() {

  return (
    <section className="app">
      <h1>Paint Board</h1>
      <Paint />
      <WindowSize />
    </section>
  );
}

export default App;
