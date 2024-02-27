import { Text } from '../text';
import classes from './header.module.scss';

interface HeaderProps {
  firstWord: string;
  secondWord: string;
}

export function Header({ firstWord, secondWord }: HeaderProps) {
  const [first, ...other] = firstWord.split(' ');

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        {first && <text>{first} </text>}
        <text>second</text>
        <Text variant="poppinsSemiBold" color="green">
          {firstWord}
        </Text>
        <Text variant="poppinsSemiBold">{secondWord}</Text>
      </div>
    </div>
  );
}
