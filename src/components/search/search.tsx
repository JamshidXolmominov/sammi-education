import styles from './search.module.css';
import cn from 'classnames';
import { SearchProps } from './search.props';
import Input from '../input/input';
import Button from '../button/button';
import SearchIcon from './search.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const searchHandler = () => {
		if (!search.length) return;
		router.push({ pathname: '/search', query: { q: search } });
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input placeholder='Search...' className={styles.input} value={search} onChange={e => setSearch(e.target.value)} />
			<Button appearance='primary' className={styles.button} onClick={searchHandler}>
				<SearchIcon />
			</Button>
		</div>
	);
};

export default Search;
