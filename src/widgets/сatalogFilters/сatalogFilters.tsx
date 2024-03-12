import { useState } from 'react';

import { DropdownFilter } from '../../components/dropdownFilter';
import { RadioFilter } from '../../components/radioFitler';
import { RangeFilter } from '../../components/rangeFilter';

export function CatalogFilters() {
  const [price, setPrice] = useState('100');
  return (
    <div>
      <DropdownFilter onChange={(e) => console.log(e.target.value)} />
      <RangeFilter
        title="Price"
        min={100}
        max={1000}
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
