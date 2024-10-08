import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '../../components/loader';
import { TestimonialCard } from '../../components/testimonialCard';
import { Text } from '../../components/text';
import { useAppDispatch } from '../../store/store';
import { allTestimonialsSelector } from '../../store/testimonials';
import { getTestimonials } from '../../store/testimonials/testimonials.actions';
import classes from './testimonials.module.scss';

export function Testimonials() {
  const dispatch = useAppDispatch();
  const { testimonials, isLoading } = useSelector(allTestimonialsSelector);

  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch]);

  return (
    <div className={classes.cont}>
      <div className={classes.headerCont}>
        <Text variant="poppinsMedium" className={classes.headerTitle}>
          Testimonials
        </Text>
        <Text variant="openSansSemiBold" className={classes.headerDesc}>
          Plant parents love us
        </Text>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.cards}>
          {testimonials.map((el) => {
            return (
              <TestimonialCard
                imgSrc={el.img}
                title={el.title}
                name={el.name}
                rating={el.rating}
                key={el.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
