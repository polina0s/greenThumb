import { Button } from '../button';
import { ImageGallery } from '../imageGallery';
import { QuanitySelector } from '../quanitySelector';
import { SizePicker } from '../sizePicker';
import { Text } from '../text';
import classes from './productCard.module.scss';

interface PageCardProps {
  name: string;
  price: number;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export function ProductCard({
  name,
  price,
  description,
  img1,
  img2,
  img3,
  img4,
}: PageCardProps) {
  return (
    <div className={classes.cont}>
      <ImageGallery
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        alt1={name}
        alt2={name}
        alt3={name}
        alt4={name}
      />
      <div className={classes.infoCont}>
        <div className={classes.info}>
          <Text variant="poppinsMedium" className={classes.name}>
            {name}
          </Text>
          <Text variant="openSansRegularSM" className={classes.price}>
            ${price}
          </Text>
          <Text variant="openSansRegularLG" className={classes.description}>
            {description}
          </Text>
        </div>
        <SizePicker />
        <div className={classes.buttonsCont}>
          <Button color="green" size="lg" className={classes.cartButton}>
            ADD TO CART
          </Button>
          <QuanitySelector />
        </div>
        <Text
          variant="openSansRegularSM"
          color="lightGray"
          className={classes.shippingText}
        >
          Free standard shipping
        </Text>
      </div>
    </div>
  );
}
