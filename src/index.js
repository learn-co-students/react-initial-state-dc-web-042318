import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './components/ToggleButton';
import Address from './components/Address';



ReactDOM.render(
 <ToggleButton />,
 <Address
 street="1440 G Street"
 city="Washington D.C."
 >,
  document.getElementById('root')
);
