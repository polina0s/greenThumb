import { Rating } from '../rating';
import { Text } from '../text';
import classes from './testimonialCard.module.scss';

interface ReviewCardProps {
  imgSrc: string;
  title: string;
  name: string;
}

export function TestimonialCard({ imgSrc, title, name }: ReviewCardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.imgCont}>
        <img className={classes.img} src={imgSrc} alt={name} />
      </div>
      <div className={classes.rating}>
        <Rating value={2.5} />
      </div>
      <Text color="darkGray" variant="poppinsRegular" className={classes.title}>
        {title}
      </Text>
      <Text color="lightGray" variant="poppinsRegular" className={classes.name}>
        {name}
      </Text>
    </div>
  );
}
