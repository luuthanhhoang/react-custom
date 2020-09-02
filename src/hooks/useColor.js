import { useState, useEffect, useRef } from "react";

const useColor = () => {
  const [color, setColor] = useState('');
  const colorRef = useRef('green')

  const changeColor = colorCurrent => {
    const COLOR_LIST = ['green', 'red', 'yellow', 'black', 'blue'];
    const indexCurrent = COLOR_LIST.indexOf(colorCurrent);
    let indexColor = indexCurrent;
    while (indexCurrent === indexColor) {
      indexColor = Math.trunc(Math.random() * 5);
    }
    return COLOR_LIST[indexColor];
  }

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const colorChange = changeColor(colorRef.current);
      colorRef.current = colorChange;
      setColor(colorChange);

    }, 1000)
    return () => {
      clearInterval(colorInterval);
    }
  }, [])

  return color;
};

export default useColor;