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
              className={promo.info}
            >
              USD
            </Text>
            <Text
              element="a"
              variant="openSansBold"
              color="white"
              className={promo.info}
            >
              Support
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
