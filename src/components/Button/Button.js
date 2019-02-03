import React from 'react';

import styles from './Button.module.scss';

const Button = props => {
  return <button className={styles.Button}>
		{props.children}
	</button>;
};

Button.propTypes = {};

export default Button;
