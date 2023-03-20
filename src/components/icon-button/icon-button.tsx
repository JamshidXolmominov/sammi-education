import styles from './icon-button.module.css';
import cn from 'classnames';
import { IconButtonProps, icons } from './icon-button.props';

const IconButton = ({ appearance, icon, className, ...props }: IconButtonProps): JSX.Element => {
	const IconComponent = icons[icon];

	return (
		<button
			className={cn(styles.iconButton, className, {
				[styles.primary]: appearance == 'primary',
				[styles.white]: appearance == 'white',
			})}
			{...props}
		>
			<IconComponent />
		</button>
	);
};

export default IconButton;
