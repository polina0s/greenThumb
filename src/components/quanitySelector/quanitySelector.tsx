import { useState } from 'react';

import { Text } from '../text';
import classes from './quanitySelector.module.scss';

export function QuanitySelector() {
  const [quanity, setQuanity] = useState(1);

  const decreaseQuanity = () => {
    if (quanity > 1) setQuanity(quanity - 1);
  };

  return (
    <div>
      <Text
        variant="poppinsRegular"
        color="lightGray"
        className={classes.title}
      >
        Quanity
      </Text>
      <div className={classes.pickerCont}>
        <button className={classes.pickerButton} onClick={decreaseQuanity}>
          &ndash;
        </button>
        <Text className={classes.quanity}>{quanity}</Text>
        <button
          className={classes.pickerButton}
          onClick={() => setQuanity(quanity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
