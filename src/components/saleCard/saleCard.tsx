import star from '../../assets/images/Star 1.png';
import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import card from './saleCard.module.scss';

interface SaleCardProps {
  saleValue: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  imgSrc: string;
}

export function SaleCard({
  saleValue,
  title,
  newPrice,
  oldPrice,
  imgSrc,
}: SaleCardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgWrap}>
        <div className={card.imgCont}>
          <img className={card.img} src={imgSrc} alt={title} />
        </div>
        <div className={card.saleLabelCont}>
          <div className={card.saleStar}>
            <img src={star} alt="" />
          </div>
          <Text variant="openSansBold" color="white" className={card.saleValue}>
            {saleValue}% off
          </Text>
        </div>
      </div>
      <div className={card.info}>
        <Text variant="openSansBold" color="gray">
          {title}
        </Text>
        <div className={card.price}>
          <Text variant="openSansRegularLG">$ {newPrice}</Text>
          <Text
            variant="openSansSemiBold"
            color="red"
            className={card.oldPrice}
          >
            $ {oldPrice}
          </Text>
        </div>
      </div>
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
