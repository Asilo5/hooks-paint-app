import React, {useState, useEffect, useRef } from 'react';
import Name from '../Name/Name';
import ColorPicker from '../ColorPicker/ColorPicker';
import randomColor from 'randomcolor';

const Paint = () => {

    const [colors, setColors] = useState([]);
    const [activeColor, setActiveColor] = useState(null);

    const headerRef = useRef({ offsetHeight: 0 });

    useEffect(() => getColors(), []);

    const getColors = () => {
      const baseColor = randomColor().slice(1);
      fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(res => res.json())
      .then(res => {
        setColors(res.colors.map(color => color.hex.value))
        setActiveColor(res.colors[0].hex.value)
      })
    }
    return (
      <header ref={headerRef} style={{ borderTop: `10px solid ${activeColor}` }}>
        <section className="app">
          <Name />
        </section>
        <section style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            height={window.innerHeight - headerRef.current.offsetHeight}
          />
        </section>
      </header>
    )
};

export default Paint;