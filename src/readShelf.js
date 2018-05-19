import React, { Component } from 'react'

class ReadShelf extends Component {
	render() {
    	return (
        <div>
          <h2>Read</h2>
          {this.props.returnedBooks}          
        </div>
        )
    }
}
export default ReadShelf