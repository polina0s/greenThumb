import leafesBig from '../../assets/images/leafesBig.png';
import leafesSmall from '../../assets/images/leafesSmall.png';
import { Text } from '../../ui/text';
import banner from './banner.module.scss';

interface BannerProps {
  title: string;
  description: string;
}

export function Banner({ title, description }: BannerProps) {
  return (
    <>
      <div className={banner.cont}>
        <img className={banner.smallImg} src={leafesSmall} alt="" />
        <img className={banner.bigImg} src={leafesBig} alt="" />
        <div className={banner.content}>
          <Text
            variant="poppinsSemiBold"
            element="div"
            className={banner.title}
          >
            {title}
          </Text>
          <Text
            variant="poppinsRegular"
            element="div"
            className={banner.description}
          >
            {description}
          </Text>
          <button className={banner.button}>GET PLANTING</button>
        </div>
      </div>
      <div className={banner.border} />
    </>
  );
}
