import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { GetShopItemsResponseData } from '../../store/shopItems/types';
import { Button } from '../button';
import { ImageGallery } from '../imageGallery';
import { ModalImageGallery } from '../modalImageGallery';
import { QuantitySelector } from '../quantitySelector';
import { SizePicker } from '../sizePicker';
import { Text } from '../text';
import classes from './productCard.module.scss';

export interface ProductValues {
  defaultSize: string;
  quantity: number;
  name: string;
  price: number;
  img: string;
  id: number;
}

type ProductCardProps = {
  id: number;
  item: GetShopItemsResponseData;
  handleAddItemToCart: (data: ProductValues) => void;
};

export function ProductCard({
  item,
  id,
  handleAddItemToCart,
}: ProductCardProps) {
  const { control, handleSubmit } = useForm<ProductValues>({
    defaultValues: {
      defaultSize: 'S',
      quantity: 1,
      name: item.name,
      price: item.price,
      img: item.images[0].src,
      id: +id,
    },
  });

  const [open, setOpen] = useState(false);
  const onCloseButtonClick = () => {
    setOpen(false);
  };
  const onZoomButtonClick = () => setOpen(true);

  return (
    <>
      <div className={classes.cont}>
        <ImageGallery
          images={item.images}
          onZoomButtonClick={onZoomButtonClick}
        />
        <div className={classes.infoCont}>
          <div className={classes.info}>
            <Text variant="poppinsMedium" className={classes.name}>
              {item.name}
            </Text>
            <Text variant="openSansRegularSM" className={classes.price}>
              ${item.price}
            </Text>
            <Text variant="openSansRegularLG" className={classes.description}>
              {item.description}
            </Text>
          </div>
          <form onSubmit={handleSubmit(handleAddItemToCart)}>
            <Controller
              render={({ field }) => (
                <SizePicker
                  sizes={item.sizes}
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
                    ref={field.ref}
                    min={1}
                    max={10}
                    value={field.value}
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
        images={item.images}
      />
    </>
  );
}
