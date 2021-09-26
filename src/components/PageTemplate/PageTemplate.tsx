import React, { FC } from 'react';
import styles from './styles.module.scss';
import Button from '../Button/Button';

interface IProps {
  actionName:string,
  actionHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PageTemplate:FC<IProps> = ({ actionName, actionHandler, children }) => (
  <div className={styles.pageContainer}>
    <div className={styles.handImg} />
    <div className={styles.pageContent}>
      {children}
      <Button name={actionName} onClick={actionHandler} />
    </div>
  </div>
);

export default PageTemplate;
