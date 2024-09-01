import { ShopItemsCare } from '../../store/shopItems/types';
import { Dropdown } from '../dropdown';
import classes from './careSection.module.scss';

type CareSectionProps = {
  options: ShopItemsCare[];
};

export function CareSection({ options }: CareSectionProps) {
  return (
    <div className={classes.cont}>
      <div className={classes.section}>
        <div className={classes.header}>
          <Dropdown title="Plant Care" defaultOpen={false} variant="list">
            <div className={classes.options}>
              {options.map((option) => {
                return (
                  <button className={classes.option} key={option.id}>
                    {option.name}
                  </button>
                );
              })}
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
