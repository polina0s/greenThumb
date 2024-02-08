import { Text } from '../../../../ui/text';
import logo from './logo.module.scss';

export function Logo() {
  return (
    <div className={logo.cont}>
      <Text variant="poppinsSemiBold" color="green" className={logo.text}>
        Green
      </Text>
      <Text variant="poppinsSemiBold" className={logo.text}>
        Thumb
      </Text>
    </div>
  );
}
