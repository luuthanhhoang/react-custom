import React from 'react';
import useClock from '../hooks/useClock';

const Clock = () => {
  const timeString = useClock();
  return <div>
    <p>{timeString}</p>
  </div>
};

export default Clock;