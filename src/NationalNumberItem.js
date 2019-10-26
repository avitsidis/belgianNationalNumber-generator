import React from 'react';

export class NationalNumberItem extends React.Component {
  render() {
    const nationalNumber = this.props.value;
    return (<span>{nationalNumber}</span>);
  }
}
