import img from '../../assets/images/Rectangle 51.png';
import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import card from './bestSellCard.module.scss';

interface CardProps {
  title: string;
}

export function BestSellCard({ title }: CardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={img} alt="" />
        <Text variant="openSansSemiBold" color="white" className={card.title}>
          {title}
        </Text>
      </div>
      <Button color="green" size="md">
        Buy
      </Button>
    </div>
  );
}
