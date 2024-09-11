import Delete from '../../../../assets/images/delete.svg';
import { Text } from '../../../../components/text';
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
          <Text variant="openSansSemiBold" className={classes.quantity}>
            Quantity: {quantity}
          </Text>
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
