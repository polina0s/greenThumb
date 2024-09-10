import Delete from '../../../../assets/images/delete.svg';
import { QuantitySelector } from '../../../../components/quantitySelector';
import classes from './cartCard.module.scss';

interface CartCardProps {
  img?: string;
  name?: string;
  price?: number;
  quantity?: number;
  handleDeleteItem?: () => void;
}

export function CartCard({
  img,
  name,
  price,
  quantity,
  handleDeleteItem,
}: CartCardProps) {
  return (
    <div className={classes.cartCard}>
      <img className={classes.cartCardImg} src={img} alt={name} />
      <div>
        <p className={classes.cartCardName}>{name}</p>
        <div className={classes.cartCardInfo}>
          <QuantitySelector
            variant="small"
            min={1}
            max={10}
            defaultValue={quantity}
          />
          <p className={classes.cartCardPrice}>$ {price}</p>
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
