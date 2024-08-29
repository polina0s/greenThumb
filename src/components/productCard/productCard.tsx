import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getShopItemById } from '../../store/shopItem/shopItem.actions';
import { allShopItemSelector } from '../../store/shopItem/shopItem.selectors';
import { useAppDispatch } from '../../store/store';
import { Button } from '../button';
import { ImageGallery } from '../imageGallery';
import { ModalImageGallery } from '../modalImageGallery';
import { QuantitySelector } from '../quantitySelector';
import { SizePicker } from '../sizePicker';
import { Text } from '../text';
import classes from './productCard.module.scss';

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
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const item = useSelector(allShopItemSelector);
  console.log(item);

  useEffect(() => {
    dispatch(getShopItemById({ id: +id }));
  }, [dispatch, id]);

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
        images={item.images}
      />
    </>
  );
}
