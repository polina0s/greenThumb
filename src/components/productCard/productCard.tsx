import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import img1 from '../../assets/images/image 10.png';
import img2 from '../../assets/images/image 13.png';
import img4 from '../../assets/images/image 14.png';
import img3 from '../../assets/images/image 16.png';
import { Button } from '../button';
import { ImageGallery } from '../imageGallery';
import { ModalImageGallery } from '../modalImageGallery';
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
    { src: img1, alt: 'Marble Queen Pothos', id: 1 },
    { src: img2, alt: 'Marble Queen Pothos', id: 2 },
    { src: img3, alt: 'Marble Queen Pothos', id: 3 },
    { src: img4, alt: 'Marble Queen Pothos', id: 4 },
  ],
  sizes: [
    { value: 'S', disabled: false },
    { value: 'M', disabled: false },
    { value: 'L', disabled: false },
  ],
  id: 1,
};

interface ProductValues {
  defaultSize: string;
  quantity: number;
  name: string;
  price: number;
  img: string;
  id: number;
}

export function ProductCard() {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];

  const { control, handleSubmit } = useForm<ProductValues>({
    defaultValues: {
      defaultSize: 'S',
      quantity: 1,
      name: plant.name,
      price: plant.price,
      img: plant.images[0].src,
      id: plant.id,
    },
  });

  const onSubmit = (data: ProductValues) => {
    const found = basket.find((item: ProductValues) => item.id === data.id);
    if (found) {
      const newQuantity = data.quantity + found.quantity;
      console.log(newQuantity);
      data.quantity = found.quantity + data.quantity;
      const newBasket = basket.map((item: ProductValues) =>
        item.id === data.id ? data : item,
      );
      localStorage.setItem('basket', JSON.stringify(newBasket));
    } else {
      const newBasket = [...basket, data];
      localStorage.setItem('basket', JSON.stringify(newBasket));
    }
  };

  const [open, setOpen] = useState(false);
  const onCloseButtonClick = () => {
    setOpen(false);
  };
  const onZoomButtonClick = () => setOpen(true);

  return (
    <>
      <div className={classes.cont}>
        <ImageGallery
          images={plant.images}
          onZoomButtonClick={onZoomButtonClick}
        />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => (
                <SizePicker
                  sizes={plant.sizes}
                  ref={field.ref}
                  defaultSize={field.value}
                  onChange={field.onChange}
                  name={field.name}
                />
              )}
              name="defaultSize"
              control={control}
            />
            <div className={classes.buttonsCont}>
              <Button
                color="green"
                size="lg"
                className={classes.cartButton}
                type="submit"
              >
                ADD TO CART
              </Button>
              <Controller
                render={({ field }) => (
                  <QuantitySelector
                    variant="large"
                    ref={field.ref}
                    min={1}
                    max={10}
                    defaultValue={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  />
                )}
                name="quantity"
                control={control}
              />
            </div>
          </form>
          <Text
            variant="openSansRegularSM"
            color="lightGray"
            className={classes.shippingText}
          >
            Free standard shipping
          </Text>
        </div>
      </div>
      <ModalImageGallery
        open={open}
        handleClose={onCloseButtonClick}
        images={plant.images}
      />
    </>
  );
}
