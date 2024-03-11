import { useState } from 'react';

import { Dropdown } from '../../components/dropdown';
import { RadioFilter } from '../../components/radioFitler';
import { RangeFilter } from '../../components/rangeFilter';

interface CatalogFiltersProps {
  minPrice: string;
  maxPrice: string;
}

export function CatalogFilters({ minPrice, maxPrice }: CatalogFiltersProps) {
  const [price, setPrice] = useState(minPrice);

  return (
    <div>
      <Dropdown title="All Categories" />
      <RangeFilter
        title="Price"
        min={minPrice}
        max={maxPrice}
        text={`from ${minPrice} to ${price}`}
        onChange={(e) => setPrice(e.target.value)}
      />
      <RadioFilter
        title="Include"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
