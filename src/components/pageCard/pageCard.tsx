import img from '../../assets/images/Rectangle 51.png';
import { Text } from '../text';
import classes from './pageCard.module.scss';

interface PageCardProps {
  name: string;
  price: number;
  description: string;
}

export function PageCard({ name, price, description }: PageCardProps) {
  return (
    <div className={classes.cont}>
      <div className={classes.imgWrapper}>
        <div className={classes.imgCont}>
          <img className={classes.img} src={img} alt="img" />
        </div>
        <div className={classes.imgCont}>
          <img className={classes.img} src={img} alt="img" />
        </div>
        <div className={classes.imgCont}>
          <img className={classes.img} src={img} alt="img" />
        </div>
        <div className={classes.imgCont}>
          <img className={classes.img} src={img} alt="img" />
        </div>
      </div>
      <div className={classes.infoCont}>
        <div className={classes.info}>
          <Text variant="poppinsMedium" className={classes.name}>
            {name}
          </Text>
          <Text variant="openSansRegularSM" className={classes.price}>
            ${price}
          </Text>
          <Text variant="openSansRegularLG" className={classes.description}>
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
