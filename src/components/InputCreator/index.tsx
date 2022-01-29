import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import BasicInput from '../BasicInput';
import SelectInput from '../SelectInput';
import './styles.scss';

const InputCreator = ({ fields, setFields }) => {
  const [type, setType] = useState('text');
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(type);
    const newField = {
      type,
      uid: new Date(),
      name: data.fieldName,
      component: type,
      label: data.name,
      options: data.options || '',
    };
    const list = fields;
    list.push(newField);
    setFields([...list]);
  };

  return (
    <form className='InputCreator' onSubmit={handleSubmit(onSubmit)}>
      <BasicInput
        type='text'
        label='Name'
        placeholder='Digita el nombre del campo'
        register={register('fieldName', { required: true })}
      />

      <SelectInput
        options={['text', 'select', 'radio']}
        onChange={(e) => setType(e.target.value)}
      />

      {type !== 'text' && (
        <BasicInput
          type='text'
          label='Opciones'
          placeholder='Separa las opciones por un ;'
          register={register('options', { required: true })}
        />
      )}

      <button type='submit' className='btn-primary'>
        Agregar
      </button>
    </form>
  );
};

export default InputCreator;
