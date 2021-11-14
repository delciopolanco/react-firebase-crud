import { useState, Fragment } from 'react';
import Select from 'react-select';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const SelectSearch = ({ options, placeholder, isClearable, isSearchable, isDisabled, isLoading }) => {
  console.log('SelectSearch RENDERIZADO');
  const [clear] = useState(isClearable);
  const [searchable] = useState(isSearchable);
  const [disabled] = useState(isDisabled);
  const [loading] = useState(isLoading);

  return (
    <Fragment>
      <Select
        
        classNamePrefix="select"
        isDisabled={disabled}
        isLoading={loading}
        isClearable={clear}
        isSearchable={searchable}
        placeholder={placeholder}
        name="color"
        options={colourOptions}
      />
    </Fragment>
  )
}

export { SelectSearch };