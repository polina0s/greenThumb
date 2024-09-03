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

  const onOptionClick = (option: ShopItemsCare) => {
    setHeader(option.name);
    setText(option.text);
  };

  return (
    <div className={classes.cont}>
      <div className={classes.section}>
        <div className={classes.sectionPicker}>
          <Dropdown title="Plant Care" defaultOpen={false} variant="list">
            <div className={classes.options}>
              {options.map((option) => {
                return (
                  <button
                    className={classes.option}
                    key={option.id}
                    onClick={() => onOptionClick(option)}
                  >
                    {option.name}
                  </button>
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
