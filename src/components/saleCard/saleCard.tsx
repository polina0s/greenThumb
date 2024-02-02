import img from '../../assets/images/Rectangle 51.png';
import star from '../../assets/images/Star 1.png';
import { Button } from '../../ui/button';
import card from './saleCard.module.scss';

export function SaleCard() {
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
          <div className={card.saleValue}>
            25% <br /> off
          </div>
        </div>
      </div>

      <div className={card.info}>
        <p className={card.name}>String of Hearts</p>
        <p className={card.newPrice}>
          $ 350 <span className={card.oldPrice}>$ 450</span>
        </p>
      </div>

      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
