import { HhData } from '@/src/interfaces/page.interface';
import Card from '../card/card';
import styles from './hh-data.module.css';
import RateIcon from './rate.svg';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhData): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>All Vacations</div>
				<div className={styles.countValue}>{count}</div>
			</Card>

			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Junior</div>
					<div className={styles.salaryValue}>{juniorSalary}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Middle</div>
					<div className={styles.salaryValue}>{middleSalary}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Senior</div>
					<div className={styles.salaryValue}>{seniorSalary}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};

export default HhData;
