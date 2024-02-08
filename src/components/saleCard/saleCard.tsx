import img from '../../assets/images/Rectangle 51.png';
import star from '../../assets/images/Star 1.png';
import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import card from './saleCard.module.scss';

interface SaleCardProps {
  saleValue: number;
  name: string;
  newPrice: number;
  oldPrice: number;
}

export function SaleCard({
  saleValue,
  name,
  newPrice,
  oldPrice,
}: SaleCardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgWrap}>
        <div className={card.imgCont}>
          <img className={card.img} src={img} alt="" />
        </div>

        <div className={card.saleLabelCont}>
          <div className={card.saleStar}>
            <img src={star} alt="" />
          </div>
          <div className={card.saleValue}> {saleValue}% off</div>
        </div>
      </div>

      <div className={card.info}>
        <Text variant="openSansBold" color="gray">
          {name}
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
