import { useState } from 'react';

import Next from '../../assets/images/next.svg';
import Previous from '../../assets/images/prev.svg';
import { Image } from '../modalImageGallery';
import classes from './carousel.module.scss';

interface CarouselProps {
  images: Image[];
}

export function Carousel({ images }: CarouselProps) {
  const [indexSlide, setIndexSlide] = useState(0);

  const nextSlide = () => {
    setIndexSlide((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const prevSlide = () => {
    setIndexSlide((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={prevSlide}>
        <Previous className={classes.buttonImg} />
      </button>
      <img
        className={classes.image}
        src={images[indexSlide].src}
        alt={images[indexSlide].alt}
      />
      <button className={classes.button} onClick={nextSlide}>
        <Next className={classes.buttonImg} />
      </button>
    </div>
  );
}
