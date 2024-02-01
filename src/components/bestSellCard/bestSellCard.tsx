import img from '../../assets/images/Rectangle 51.png';
import { Button } from '../../ui/button';
import card from './bestSellCard.module.scss';

interface CardProps {
  title: string;
}

export function BestSellCard({ title }: CardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={img} alt="" />{' '}
        <p className={card.title}>{title}</p>
      </div>
      <Button color="green" size="md">
        Buy
      </Button>
    </div>
  );
}
