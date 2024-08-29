import leafesBig from '../../assets/images/leafesBig.png';
import leafesSmall from '../../assets/images/leafesSmall.png';
import { Button } from '../button';
import { Text } from '../text';
import classes from './banner.module.scss';

interface BannerProps {
  title: string;
  description: string;
  linkText: string;
  onClick: () => void;
}

export function Banner({ title, description, linkText, onClick }: BannerProps) {
  return (
    <>
      <div className={classes.cont}>
        <img className={classes.smallImg} src={leafesSmall} alt="" />
        <img className={classes.bigImg} src={leafesBig} alt="" />
        <div className={classes.content}>
          <Text
            variant="poppinsSemiBold"
            element="div"
            className={classes.title}
          >
            {title}
          </Text>
          <Text
            variant="poppinsRegular"
            element="div"
            className={classes.description}
          >
            {description}
          </Text>
          <Button
            className={classes.link}
            size="xl"
            color="white"
            element="a"
            onClick={onClick}
          >
            {linkText}
          </Button>
        </div>
      </div>
      <div className={classes.border} />
    </>
  );
}
