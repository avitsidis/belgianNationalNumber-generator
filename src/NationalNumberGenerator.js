import React from 'react';
import { NationalNumberGenInput } from './NationalNumberGenInput';
import { NationalNumberList } from './NationalNumberList';

function formatNumber(number,format)
{
    var numberAsString = ''+number;
    return (format+numberAsString).substring(numberAsString.length);
}


function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
    }

const firstOfJanuary2000 = new Date(2000,0,1);

function builder(date,counter){
    counter = counter || 0;
    if( !(date instanceof Date))
    {
        throw new Error('date must be a Date');
    }
    if(!isNumber(counter))
    {
        throw new Error('counter must be a Number');
    }
    const datePart = `${formatNumber(date.getFullYear() % 100,'00')}`
                    +`${formatNumber(date.getMonth()+1,'00')}`
                    +`${formatNumber(date.getDate(),'00')}`;
    const counterPart = formatNumber(counter,'000');
    const bornBefore2000 = date < firstOfJanuary2000;
    const checksumPrefix = bornBefore2000 ? '' : '2';
    const checksumBase = parseInt(checksumPrefix+datePart+counterPart);
    const checksum = 97 - (checksumBase % 97);
    const checksumValue = checksum === 0 ? 97 : checksum;
    return `${datePart}.${counterPart}-${formatNumber(checksumValue,'00')}`;
}

const allValues = Array.from(new Array(999-1),(x,i)=> i+1);
const maleValues = allValues.filter(v => v%2 === 1);
const femaleValues = allValues.filter(v => v%2 === 0);


export class NationalNumberGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.state = {};
  }
  handleInputsChange(birthdate, sex) {
      debugger; 
    this.setState({ birthdate: birthdate, sex: sex });
  }

  getValues()
  {
    return this.state.sex === 'male' ? maleValues : femaleValues;
  }

  render() {
      const hasBirtdate = this.state.birthdate;
      
      const values = hasBirtdate ? 
        this.getValues().map(number => builder(new Date(this.state.birthdate),number)) : 
        [];
      const list = hasBirtdate ? <NationalNumberList values={values} /> : <div />;
    return (<div>
      <NationalNumberGenInput onChange={this.handleInputsChange} />
      <div>
        {list}
      </div>
    </div>);
  }
}
