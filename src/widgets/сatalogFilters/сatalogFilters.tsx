import { useState } from 'react';

import { Dropdown } from '../../components/dropdown';
import { RadioFilter } from '../../components/radioFitler';
import { RangeFilter } from '../../components/rangeFilter';

export function CatalogFilters() {
  const [price, setPrice] = useState('100');
  const [open, setOpen] = useState(false);

  // onDropdownClick;

  return (
    <div>
      <Dropdown
        open={open}
        title="All Categories"
        onChange={(e) => console.log(e.target.value)}
        onClick={(e) => setOpen(!open)}
      />
      <RangeFilter
        title="Price"
        min="100"
        max="1000"
        text={`from 100 to ${price}`}
        onChange={(e) => setPrice(e.target.value)}
      />
      <RadioFilter
        title="Include"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
