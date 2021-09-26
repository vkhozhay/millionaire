import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IProps> = ({ name, onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {name}
  </button>
);

export default Button;
