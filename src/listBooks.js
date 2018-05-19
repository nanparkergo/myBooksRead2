import React, { Component } from 'react'
import ShelfChanger from './shelfChanger'

// Purpose: render search results to page
// TODO: render to correct shelf based on state props from BookShelfChanger
 

class ListBooks extends Component {
  render() {     
    return (
      <ol className='book-list'>
        {this.props.returnedBooks.map((returnedBook) => (
          <li key={returnedBook.title} className='book-list-item'>
            <div className="book-cover"
              style={{
      			
                backgroundImage: `url(${returnedBook.backgroundImage})`
              }}
            ></div>
            <div className='contact-details'>
              <p>{returnedBook.title}</p>			   
              <p>{returnedBook.authors}</p>
            </div>
             <ShelfChanger />
          </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks
