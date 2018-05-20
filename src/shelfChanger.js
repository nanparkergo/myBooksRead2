import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SearchBooks from './searchBooks';

class ShelfChanger extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);    
  }
  render() {
  	const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.label;
	console.log("book", this.props);
 
    return (
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'currentRead', label: 'currently reading' },
          { value: 'wantRead', label: 'want to read' },
      	  { value: 'read', label: 'read' },
          { value: 'none', label: 'none' },
        ]}
      />
    );
  }
}

export default ShelfChanger