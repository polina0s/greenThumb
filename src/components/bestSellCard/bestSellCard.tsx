import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import card from './bestSellCard.module.scss';

interface CardProps {
  title: string;
  imgSrc: string;
}

export function BestSellCard({ title, imgSrc }: CardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={imgSrc} alt={title} />
        <Text variant="openSansSemiBold" color="white" className={card.title}>
          {title}
        </Text>
      </div>
      <Button element="a" color="green" size="md">
        Buy
      </Button>
    </div>
  );
}
