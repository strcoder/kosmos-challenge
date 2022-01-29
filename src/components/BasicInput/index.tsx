import React, { useState } from 'react';
import './styles.scss';

type BasicInputProps = {
  type?: string;
  label: string;
  register?: any;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: boolean;
};

const BasicInput = ({
  register,
  label = '',
  type = 'text',
  placeholder = '',
  defaultValue = '',
  autoComplete = false,
}: BasicInputProps) => {
  const [active, setActive] = useState('');

  return (
    <label htmlFor='' className={`BasicInput ${active}`}>
      <p>{label}</p>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register}
        type={type || 'text'}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        onBlur={() => setActive('')}
        onFocus={() => setActive('active')}
      />
    </label>
  );
};

export default BasicInput;
