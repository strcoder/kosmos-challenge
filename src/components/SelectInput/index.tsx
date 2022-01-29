import React from 'react';
import './styles.scss';

type RadioInputProps = {
  options?: string[];
  onChange?: (arg0: any) => void;
};

const SelectInput = ({
  onChange,
  options = [],
}: RadioInputProps) => {

  return (
    <select
      onChange={onChange}
      className='SelectInput'
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectInput;
