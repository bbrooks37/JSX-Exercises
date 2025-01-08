import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertComponent from './AlertComponent';
import ButtonComponent from './ButtonComponent';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="container mt-5">
      {alertVisible && (
        <AlertComponent variant="warning" message="This is an alert message!" />
      )}
      <ButtonComponent variant="primary" label="Show Alert" onClick={showAlert} />
      <ButtonComponent variant="secondary" label="Hide Alert" onClick={hideAlert} />
    </div>
  );
}

export default App;
