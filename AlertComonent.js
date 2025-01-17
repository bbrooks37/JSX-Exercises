import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertComponent({ variant, message }) {
  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  );
}

export default AlertComponent;
