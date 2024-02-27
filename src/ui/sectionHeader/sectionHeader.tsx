import { Text } from '../text';
import classes from './sectionHeader.module.scss';

interface HeaderProps {
  firstWord: string;
  secondWord: string;
  shopArticle: boolean;
}

export function SectionHeader({
  firstWord,
  secondWord,
  shopArticle,
}: HeaderProps) {
  if (shopArticle)
    return (
      <div className={classes.header}>
        <div className={classes.title}>
          <Text
            className={classes.title}
            variant="poppinsSemiBold"
            color="green"
          >
            {firstWord}
          </Text>
          <Text className={classes.title} variant="poppinsSemiBold">
            {secondWord}
          </Text>
        </div>
        <div className={classes.articleCont}>
          <Text variant="poppinsRegular" className={classes.shopArticle}>
            Shop all &gt;
          </Text>
        </div>
      </div>
    );

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <Text className={classes.title} variant="poppinsSemiBold" color="green">
          {firstWord}
        </Text>
        <Text className={classes.title} variant="poppinsSemiBold">
          {secondWord}
        </Text>
      </div>
    </div>
  );
}
