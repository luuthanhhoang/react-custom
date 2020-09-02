const { useState, useEffect } = require("react")

const useClock = () => {
  const [timeString, setTimeString] = useState('');

  const getTimeString = time => {
    const hour = `0${time.getHours()}`.slice(-2);
    const minutes = `0${time.getMinutes()}`.slice(-2);
    const second = `0${time.getSeconds()}`.slice(-2);
    return `${hour}:${minutes}:${second}`;
  }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      let time = new Date()
      const changeTextString = getTimeString(time)
      setTimeString(changeTextString);
    }, 1000)
    return () => {
      clearInterval(clockInterval);
    }
  }, []);
  return timeString;
}

export default useClock;