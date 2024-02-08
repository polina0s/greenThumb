import { Text } from '../../../../ui/text';
import copy from './copyrights.module.scss';

export function Copyrights() {
  return (
    <div className={copy.cont}>
      <Text color="lightGreen" fontFamily="publicSans">
        COPYRIGHT GREEN THUMB. ALL RIGHTS RESERVED
      </Text>
    </div>
  );
}
