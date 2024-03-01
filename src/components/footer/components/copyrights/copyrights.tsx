import { Text } from '../../../text';
import classes from './copyrights.module.scss';

export function Copyrights() {
  return (
    <div className={classes.cont}>
      <Text color="lightGreen" fontFamily="publicSans">
        COPYRIGHT GREEN THUMB. ALL RIGHTS RESERVED
      </Text>
    </div>
  );
}
