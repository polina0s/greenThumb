import { useState } from 'react';

import { ShopItemsCare } from '../../store/shopItems/types';
import { Dropdown } from '../dropdown';
import { Text } from '../text';
import classes from './careSection.module.scss';

type CareSectionProps = {
  options: ShopItemsCare[];
};

export function CareSection({ options }: CareSectionProps) {
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');

  const onOptionClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault;
  };

  return (
    <div className={classes.cont}>
      <div className={classes.section}>
        <div className={classes.sectionPicker}>
          <Dropdown title="Plant Care" defaultOpen={false} variant="list">
            <div className={classes.options}>
              {options.map((option) => {
                return (
                  <input
                    className={classes.option}
                    key={option.id}
                    type="button"
                    onClick={(e) => {
                      onOptionClick(e);
                      setHeader(option.name);
                      setText(option.text);
                    }}
                    value={option.name}
                  />
                );
              })}
            </div>
          </Dropdown>
        </div>
        <div className={classes.optionContent}>
          <Text variant="poppinsMedium" className={classes.optionHeader}>
            {header}
          </Text>
          <Text variant="openSansRegularLG" className={classes.optionText}>
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
}
