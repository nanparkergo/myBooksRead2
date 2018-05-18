import React, { Component } from 'react'

class ShelfChanger extends Component {
  state = {
  	detectSelectChange: ''
  }
  render() {
    return (
      <div className="shelf-changer">
      <p>SELECT should be here</p>
       	<select>
      		<option value="none" disabled>Move it! ...</option>
      		<option value="currentlyReading">Currently Reading</option>
      		<option value="wantToRead">Want to Read</option>
      		<option value="read">Read</option>
      		<option value="none">None</option>
      	</select>      
      </div>
    )
  }
}

export default ShelfChanger