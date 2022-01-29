import React, { useEffect, useState } from 'react';
import BasicInput from './components/BasicInput';
import InputCreator from './components/InputCreator';
import RadioInput from './components/RadioInput';
import SelectInput from './components/SelectInput';

const App = () => {
  const [fields, setFields] = useState([]);
  useEffect(() => {
    fetch('../fields.json').then((res) => res.json()).then((data) => setFields(data.fields));
  }, []);

  console.log(fields);
  return (
    <section className='Home'>
      <div>
        <p><strong>Creador de inputs</strong></p>
        <InputCreator fields={fields} setFields={setFields} />
      </div>
      <div className='Example'>
        <p><strong>Example</strong></p>
        <div>
          {fields.map((field) => (
            <React.Fragment key={field.uid}>
              {field.component === 'text' && (
                <BasicInput
                  type={field.type}
                  label={field.label}
                />
              )}
              {field.component === 'select' && (
                <SelectInput
                  options={field.options.split(/\s*;\s*/)}
                />
              )}
              {field.component === 'radio' && (
                <RadioInput
                  options={field.options.split(/\s*;\s*/)}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
