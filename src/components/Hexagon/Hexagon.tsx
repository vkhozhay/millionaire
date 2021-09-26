import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

interface IProps {
  hovered: boolean
  variant: string
}

const variantsClassNames = {
  selected: { variantClass: styles.selected },
  correct: { variantClass: styles.correct },
  wrong: { variantClass: styles.wrong },
  active: { variantClass: styles.active },
  disable: { variantClass: styles.disable },
  default: { variantClass: styles.hexagon },
};

const Hexagon:FC<IProps> = ({ hovered, variant, children }) => {
  // @ts-ignore
  const { variantClass } = variantsClassNames[variant];
  return (
    <div className={classNames(
      styles.hexagon,
      hovered && styles.hover,
      variantClass && variantClass,
    )}
    >
      <svg className={classNames(styles.background)} viewBox="0 0 389 72" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.8137 5.09773C25.9857 2.2033 29.3933 0.5 33.012 0.5H355.988C359.607 0.5 363.014 2.2033 365.186 5.09773L388.375 36L365.186 66.9023C363.014 69.7967 359.607 71.5 355.988 71.5H33.012C29.3933 71.5 25.9857 69.7967 23.8137 66.9023L0.625116 36L23.8137 5.09773Z"
          fill="white"
          stroke="#D0D0D8"
        />
      </svg>
      {children}
    </div>
  );
};

export default Hexagon;
