import React, { Component } from 'react';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
class TeslaBattery extends Component {
  render() {
    return (
      <form className='tesla-battery'>
        <h1>Range per Charge</h1>
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
