import React from 'react';
import useColor from '../hooks/useColor';

import styles from './Color.module.scss'

const Color = () => {
  const color = useColor();
  return <div style={{ backgroundColor: color }} className={styles.container} />
};

export default Color;