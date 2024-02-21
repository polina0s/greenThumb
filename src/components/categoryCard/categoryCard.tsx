import { Text } from '../../ui/text';
import card from './categoryCard.module.scss';

interface CardProps {
  title: string;
  imgSrc: string;
}

export function CategoryCard({ title, imgSrc }: CardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={imgSrc} alt={title} />
      </div>
      <Text variant="openSansBold" color="gray" className={card.name}>
        {title}
      </Text>
    </div>
  );
}
