import styles from './rating.module.css';
import cn from 'classnames';
import { RatingProps } from './rating.props';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

const Rating = ({ rating, isEditabled = false, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		renderRating(rating);
	}, [rating]);

	const renderRating = (currentRating: number) => {
		const updateArray = ratingArray.map((r: JSX.Element, idx: number) => (
			<span
				className={cn(styles.star, {
					[styles.filled]: idx < currentRating,
					[styles.editable]: isEditabled,
				})}
				onMouseEnter={() => changeRatingDisplay(idx + 1)}
				onMouseLeave={() => changeRatingDisplay(rating)}
				onClick={() => clickRatingHandler(idx + 1)}
			>
				<StarIcon />
			</span>
		));

		setRatingArray(updateArray);
	};

	const changeRatingDisplay = (index: number) => {
		if (!isEditabled) {
			return;
		}

		renderRating(index);
	};

	const clickRatingHandler = (index: number) => {
		if (!isEditabled || !setRating) {
			return;
		}
		setRating(index);
	};

	return (
		<div className={styles.rating} {...props}>
			{ratingArray.map((rating, idx) => (
				<span key={idx}>{rating}</span>
			))}
		</div>
	);
};

export default Rating;
