import React, { Component } from 'react'

class WantToReadShelf extends Component {
	render() {
    	return (
        <div>
          <h2>Want to Read</h2>
          {this.props.returnedBooks}          
        </div>
        )
    }
}
export default WantToReadShelf