import React, { Component } from 'react'
import ShelfChanger from './shelfChanger'
// SearchBooks is a controlled component because the state of the form 
// is controlled by this component's state rather than by the DOM
// for filtering, must install: npm install --save escape-string-regexp sort-by
class SearchBooks extends Component {
   
  state = {
    query: ''
  }
// takes in whatever the user just typed in, updates state (query) and fires render()
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }
  render() {
    // deconstruct state and props so they can be used without this.state. or this.props.
    const { query } = this.state
	const { returnedBooks } = this.props

	// if search box empty, populate  a new array showingBooks with full returned books array, to be rendered below (TBRB)
	// else populate showingBooks with array filtered to only include books with query value in title TBRB
	const showingBooks = query === ''
		? returnedBooks
		: returnedBooks.filter((book) => (
        	book.title.toLowerCase().includes(query.toLowerCase())
        ))
    return (
      <div className='list-contacts'>         
        <div className='search-box'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
		 
		{showingBooks.length !== returnedBooks.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingBooks.length} of {returnedBooks.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className='book-list'>
          {showingBooks.map((returnedBook) => (
            <li key={returnedBook.title} className='contact-list-item'>
              <div
                className='book-image'
                style={{
                  backgroundImage: `url(${returnedBook.backgroundImage})`
                }}
              ></div>
              <div className='book-details'>
                <p>{returnedBook.title}</p>
                <p>{returnedBook.authors}</p>
              </div>
              <ShelfChanger />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchBooks
