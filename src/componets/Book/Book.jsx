import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import Book_list from '../Book_list/Book_list';

const Book = () => {
    const[books, setbooks] = useState([]);
    useEffect(()=>{
        
         fetch('./booksData.json')
         .then(res =>res.json())
         .then(data => setbooks(data))

    },[]);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>
             
            <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => <Book_list book = {book} key={book.bookId}></Book_list>)
                }
            </div>
        
        </div>
    );
};

export default Book;


// 1. state to store books
// 2. useEffect
// 3. fetch to load date
// 4. set the date to the books state