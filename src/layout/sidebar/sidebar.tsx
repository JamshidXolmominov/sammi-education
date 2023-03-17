import Menu from '../menu/menu';
import { SidebarProps } from './sidebar.props';
import cn from 'classnames';
import styles from './sidebar.module.css';
import Logo from '../logo.svg';
import Link from 'next/link';
import { Divider, Search } from '@/src/components';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href={'/'}>
				<Logo />
				<Divider />
			</Link>
			<Search />
			<Menu />
		</div>
	);
};

export default Sidebar;
