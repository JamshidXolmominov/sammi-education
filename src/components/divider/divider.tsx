import cn from 'classnames';
import styles from './divider.module.css';
import { DividerProps } from './divider.props';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return <hr className={cn(className, styles.divider)} {...props} />;
};

export default Divider;
