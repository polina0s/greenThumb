import { Link } from '../../../../ui/link';
import { Text } from '../../../../ui/text';
import promo from './promo.module.scss';

export function Promo({ title }: { title: string }) {
  return (
    <div className={promo.promo}>
      <div className={promo.cont}>
        <div className={promo.section} />
        <Text variant="openSansSemiBold" color="white">
          {title}
        </Text>
        <div className={promo.section}>
          <div className={promo.infoCont}>
            <Text
              variant="openSansRegularSM"
              color="white"
              className={promo.currency}
            >
              USD
            </Text>
            <Link href="#" className={promo.support}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
