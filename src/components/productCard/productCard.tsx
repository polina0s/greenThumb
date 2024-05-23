import { Controller, useForm } from 'react-hook-form';

import img from '../../assets/images/Rectangle 51.png';
import { Button } from '../button';
import { ImageGallery } from '../imageGallery';
import { QuantitySelector } from '../quantitySelector';
import { SizePicker } from '../sizePicker';
import { Text } from '../text';
import classes from './productCard.module.scss';

const plant = {
  name: 'Marble Queen Pothos',
  price: 350,
  description:
    'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
  images: [
    { src: img, alt: 'Marble Queen Pothos', id: 1 },
    { src: img, alt: 'Marble Queen Pothos', id: 2 },
    { src: img, alt: 'Marble Queen Pothos', id: 3 },
    { src: img, alt: 'Marble Queen Pothos', id: 4 },
  ],
  sizes: [
    { value: 'S', disabled: false },
    { value: 'M', disabled: false },
    { value: 'L', disabled: false },
  ],
};

export function ProductCard() {
  const { control } = useForm({
    defaultValues: {
      defaultSize: 'S',
      quantity: 1,
    },
  });

  return (
    <div className={classes.cont}>
      <ImageGallery images={plant.images} />
      <div className={classes.infoCont}>
        <div className={classes.info}>
          <Text variant="poppinsMedium" className={classes.name}>
            {plant.name}
          </Text>
          <Text variant="openSansRegularSM" className={classes.price}>
            ${plant.price}
          </Text>
          <Text variant="openSansRegularLG" className={classes.description}>
            {plant.description}
          </Text>
        </div>
        <Controller
          render={() => <SizePicker sizes={plant.sizes} />}
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
