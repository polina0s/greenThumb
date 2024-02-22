import { Text } from '../../ui/text';
import { Rating } from '../rating';
import classes from './reviewCard.module.scss';

interface ReviewCardProps {
  imgSrc: string;
  title: string;
  name: string;
}

export function ReviewCard({ imgSrc, title, name }: ReviewCardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.imgCont}>
        <img className={classes.img} src={imgSrc} alt="" />
      </div>
      <Rating value={4} />
      <Text color="darkGray" variant="poppinsRegular" className={classes.title}>
        ”{title}”
      </Text>
      <Text color='lightGray' variant='poppinsRegular' className={classes.name}>{name}</Text>
    </div>
  );
}
