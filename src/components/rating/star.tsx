import classes from './rating.module.scss';

export const Star = ({ percent = 0 }: { percent: number }) => {
  return (
    <>
      <div
        className={classes.star}
        id="maskDiv"
        style={{
          clipPath: 'url(#mask-1)',
          width: '23px',
          height: '23px',
          background: `linear-gradient(to right, #5BC08A ${percent}%, #FFF ${percent}%)`,
        }}
      />
    </>
  );
};
