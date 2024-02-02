import img from '../../assets/images/Rectangle 51.png';
import { Button } from '../../ui/button';
import card from './catalogCard.module.scss';

export function CatalogCard() {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={img} alt="" />
      </div>
      <div className={card.info}>
        <p className={card.name}>Marble Queen</p>
        <p className={card.price}>$ 350</p>
      </div>
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
