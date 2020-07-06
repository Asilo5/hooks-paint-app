import React, {useEffect, useState} from 'react';

const WindowSize = () => {
  
    const [[windowWidth, windowHeight], 
           setWindowSize
    ] = useState([window.innerWidth, window.innerHeight]);

    const [visible, setVisible] = useState(false);

     useEffect(() => {
        let timeoutId
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setVisible(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setVisible(false), 500);
        };
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

  return (
    <section className={`window-size ${visible ? '' : 'hidden'}`}>
      {windowWidth} x {windowHeight}
    </section>
  );
};

export default WindowSize;