import img from '../../assets/images/Rectangle 51.png';
import { Text } from '../../ui/text';
import card from './categoryCard.module.scss';

interface CardProps {
  name: string;
}

export function CategoryCard({ name }: CardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={img} alt="" />
      </div>
      <Text variant="openSansBold" color="gray" className={card.name}>
        {name}
      </Text>
    </div>
  );
}
