import classes from './rating.module.scss';
import { Star } from './star';

function starsValue({ value }: { value: number }) {
  const percents = [];
  let curValue = value;
  for (let i = 0; i < 5; i++) {
    if (curValue >= 1) {
      curValue--;
      percents.push(1);
    } else if (curValue === 0) {
      percents.push(0);
    } else if (curValue < 1 && curValue > 0) {
      percents.push(curValue);
      curValue = 0;
    }
  }

  return percents;
}

export function Rating({ value }: { value: number }) {
  const percents = starsValue({ value: value });
  return (
    <div className={classes.starsCont}>
      <svg
        className={classes.svgHidden}
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="mask-1">
            <path
              id="Star"
              d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
              fill="#FFF"
            />
          </clipPath>
        </defs>
      </svg>
      {percents.map((percent, index) => (
        <Star percent={percent * 100} key={index} />
      ))}
    </div>
  );
}
