import leafesBig from '../../assets/images/leafesBig.png';
import leafesSmall from '../../assets/images/leafesSmall.png';
import { Text } from '../../ui/text';
import banner from './banner.module.scss';

export function Banner() {
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
            Plants are our Passion
          </Text>
          <Text
            variant="poppinsRegular"
            element="div"
            className={banner.description}
          >
            Even if you don’t have a green thumb, you can still have a green
            home.
          </Text>
          <button className={banner.button}>GET PLANTING</button>
        </div>
      </div>
      <div className={banner.border} />
    </>
  );
}
