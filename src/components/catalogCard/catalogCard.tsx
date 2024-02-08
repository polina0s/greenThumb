import img from '../../assets/images/Rectangle 51.png';
import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import card from './catalogCard.module.scss';

interface CatalogCardProps {
  name: string;
  price: number;
}

export function CatalogCard({ name, price }: CatalogCardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={img} alt="" />
      </div>
      <div className={card.info}>
        <Text variant="openSansBold" color="gray">
          {name}
        </Text>
        <Text variant="openSansRegularLG" color="gray">
          $ {price}
        </Text>
      </div>
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
