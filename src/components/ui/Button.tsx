import Link from 'next/link';
import React, { ReactNode } from 'react';
import classes from './Button.module.css';

interface Props {
  children: ReactNode;
  link: string;
}

const Button: React.FC<Props> = ({ children, link }) => {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export default Button;
