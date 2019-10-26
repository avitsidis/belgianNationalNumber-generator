import React from 'react';

export class NationalNumberGenInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleBirthdateChange = this.handleBirthdateChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    this.state = { sex: 'male', birthdate: '' };
  }
  handleBirthdateChange(event) {
    const birthdate = event.target.value;
    this.setState({ birthdate: birthdate });
    this.props.onChange(birthdate, this.state.sex);
  }
  handleSexChange(event) {
    const sex = event.target.value;
    this.setState({ sex: sex });
    if (this.state.birthdate) {
      this.props.onChange(this.state.birthdate, sex);
    }
  }
  render() {
    const birthdate = this.state.birthdate;
    const sex = this.state.sex;
    return (<form>
      <fieldset>
        <label>
          Enter birth date:
      <input type="date" value={birthdate} onChange={this.handleBirthdateChange} required />
        </label>
        <label>
          Sex:
    <select value={sex} onChange={this.handleSexChange}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
      </fieldset>


    </form>);
  }
}
