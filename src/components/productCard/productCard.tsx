import { Controller, useForm } from 'react-hook-form';

import { Button } from '../button';
import { ImageGallery } from '../imageGallery';
import { QuantitySelector } from '../quantitySelector';
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
  const { control } = useForm({
    defaultValues: {
      defaultSize: 'S',
      quantity: 1,
    },
  });

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
        <Controller
          render={() => <SizePicker />}
          name="defaultSize"
          control={control}
        />
        <div className={classes.buttonsCont}>
          <Button color="green" size="lg" className={classes.cartButton}>
            ADD TO CART
          </Button>
          <Controller
            render={() => (
              <QuantitySelector min={1} max={10} defaultValue={1} />
            )}
            name="quantity"
            control={control}
          />
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
