import React from 'react';
import './styles.scss';

type RadioInputProps = {
  register?: any;
  options?: string[];
};

const RadioInput = ({
  register,
  options = [],
}: RadioInputProps) => {

  return (
    <div
      className='RadioInput'
    >
      {options.map((option) => (
        <React.Fragment key={option}>
          <p>{option}</p>
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            // {...register(option)}
            type='radio'
            key={option}
            value={option}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RadioInput;
