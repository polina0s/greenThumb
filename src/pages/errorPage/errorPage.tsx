import { Button } from '../../components/button';
import { Text } from '../../components/text';
import classes from './errorPage.module.scss';

export function ErrorPage() {
  return (
    <div className={classes.cont}>
      <div className={classes.messageCont}>
        <Text
          variant="poppinsSemiBold"
          element="div"
          className={classes.messageText}
        >
          page not found
        </Text>
        <Button element="a" className={classes.messageBtn}>
          return to main page
        </Button>
      </div>
    </div>
  );
}
