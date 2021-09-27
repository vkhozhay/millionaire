import React, { FC } from 'react';
import styles from './styles.module.scss';

const MobileHeaderActions:FC = ({ children }) => (
  <div className={styles.mobileHeader}>
    {children}
  </div>
);

export default MobileHeaderActions;
