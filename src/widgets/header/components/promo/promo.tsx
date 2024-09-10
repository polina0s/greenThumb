import { Link } from '../../../../components/link';
import { Text } from '../../../../components/text';
import classes from './promo.module.scss';

export function Promo({ title }: { title: string }) {
  return (
    <div className={classes.promo}>
      <div className={classes.cont}>
        <div className={classes.section} />
        <Text
          className={classes.title}
          variant="openSansSemiBold"
          color="white"
        >
          {title}
        </Text>
        <div className={classes.section}>
          <div className={classes.infoCont}>
            <Text
              variant="openSansRegularSM"
              color="white"
              className={classes.currency}
            >
              USD
            </Text>
            <Link href="#" className={classes.support}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
