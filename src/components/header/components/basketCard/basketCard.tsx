import Delete from '../../../../assets/images/delete.svg';
import { QuantitySelector } from '../../../quantitySelector';
import classes from './basketCard.module.scss';

interface BasketCardProps {
  img?: string;
  name?: string;
  price?: number;
  quantity?: number;
  handleDeleteItem?: () => void;
}

export function BasketCard({
  img,
  name,
  price,
  quantity,
  handleDeleteItem,
}: BasketCardProps) {
  return (
    <div className={classes.basketCard}>
      <img className={classes.basketCardImg} src={img} alt={name} />
      <div>
        <p className={classes.basketCardName}>{name}</p>
        <div className={classes.basketCardInfo}>
          <QuantitySelector
            variant="small"
            min={1}
            max={10}
            defaultValue={quantity}
          />
          <p className={classes.basketCardPrice}>$ {price}</p>
          <button className={classes.deleteButton}>
            <Delete
              className={classes.deleteButtonImg}
              onClick={handleDeleteItem}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
