import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import card from './catalogCard.module.scss';

interface CatalogCardProps {
  title: string;
  price: number;
  imgSrc: string;
}

export function CatalogCard({ title, price, imgSrc }: CatalogCardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={imgSrc} alt={title} />
      </div>
      <div className={card.info}>
        <Text variant="openSansBold" color="gray">
          {title}
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
