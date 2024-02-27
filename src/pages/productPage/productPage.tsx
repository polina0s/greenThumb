import { useParams } from 'react-router-dom';

import classes from './productPage.module.scss';

export function ProductPage() {
  const { id } = useParams();
  return (
    <div id={id} className={classes.cont}>
      product
    </div>
  );
}
