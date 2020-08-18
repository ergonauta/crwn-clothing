import React from 'react';

import { Form, Input, Label } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Form className="group">
    <Input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <Label inputSize={otherProps.value.length}>{label}</Label> : null}
  </Form>
);

export default FormInput;
