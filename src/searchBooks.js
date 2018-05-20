import React, { Component } from 'react'
import ShelfChanger from './shelfChanger'

// for filtering, must npm install--save escape-string-regexp sort-by
class SearchBooks extends Component {
   
  state = {
    query: ''
  }
// takes in whatever the user just typed in, updates state (query) and re- render()s
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }
  
  render() {     
    const { query } = this.state
	const { returnedBooks } = this.props
	 
	const showingBooks = query === ''
		? returnedBooks
		: returnedBooks.filter((book) => (
        	book.title.toLowerCase().includes(query.toLowerCase())
        ))
	const book = {
  	title: 'Bible',
    author: '',
    cover: ''
  } 
    return (
      <div className='list-books'>         
        <div className='search-box'>
          <input
            className='search-books'
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
		 
		// Button to Show All books again after filtering out some
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
					book[title] = returnedBook.title;
					book[author] = returnedBook.authors;
					book[cover] = returnedBook.backgroundImage;
			 
              <ShelfChanger book={returnedBook.title} />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchBooks
