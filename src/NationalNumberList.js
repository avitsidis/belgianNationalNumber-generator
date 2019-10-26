import React from 'react';
import { NationalNumberItem } from './NationalNumberItem';

export class NationalNumberList extends React.Component {
  render() {
    const nationalNumberList = this.props.values.map(number => <li key={number.toString()}>
      <NationalNumberItem value={number} />
    </li>);
    return (<ul>{nationalNumberList}</ul>);
  }
}
