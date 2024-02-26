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
              xmlns="http://www.w3.org/2000/svg"
              d="M11.4128 0.630615L14.0321 8.77065H22.5084L15.6509 13.8015L18.2703 21.9415L11.4128 16.9107L4.55527 21.9415L7.1746 13.8015L0.317101 8.77065H8.79343L11.4128 0.630615Z"
              fill="#56B280"
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
