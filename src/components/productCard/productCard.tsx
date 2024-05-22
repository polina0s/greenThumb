import { Controller, useForm } from 'react-hook-form';

import { Button } from '../button';
import { GalleryImg, ImageGallery } from '../imageGallery';
import { QuantitySelector } from '../quantitySelector';
import { SizePicker } from '../sizePicker';
import { Text } from '../text';
import classes from './productCard.module.scss';

interface PageCardProps {
  name: string;
  price: number;
  description: string;
  images: GalleryImg[];
}

export function ProductCard({
  name,
  price,
  description,
  images,
}: PageCardProps) {
  const { control } = useForm({
    defaultValues: {
      defaultSize: 'S',
      quantity: 1,
    },
  });

  return (
    <div className={classes.cont}>
      <ImageGallery images={images} />
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
