import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonComponent({ variant, label, onClick }) {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
}

export default ButtonComponent;
