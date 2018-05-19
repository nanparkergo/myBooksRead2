import React, { Component } from 'react'

class ReadingShelf extends Component {
   
	render() {
      const readingArray = ['']
    	return (
        <div>
          <h2>Currently Reading</h2>
          {this.props.returnedBooks}          
        </div>
        )
    }
}
export default ReadingShelf