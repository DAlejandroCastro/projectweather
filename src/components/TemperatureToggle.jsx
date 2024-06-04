import React from 'react';

const TemperatureToggle = ({isCelsius, toggleTemperature}) => {
  return (
    <button onClick={toggleTemperature}>
      Cambiar a °{isCelsius ? 'F' : 'C'}
    </button>
  )
}

export default TemperatureToggle;