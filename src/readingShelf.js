import React, { Component } from 'react'

class ReadingShelf extends Component {
	render() {
    	return (
        <div>
          <h1>Reading</h1>
          {this.props.returnedBooks}          
        </div>
        )
    }
}
export default ReadingShelf