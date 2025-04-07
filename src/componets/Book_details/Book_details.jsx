import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Book_details = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)
    const book = data.find(book=> book.bookId === id)
    // console.log(data);
    const {bookId: currentBookId, image,bookName,review} = book;
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">
              {review}
            </p>
            <button className='btn btn-outline mr-8 btn-accent'> Mark as  Read</button>
            <button className='btn btn-accent'> Wish List</button>
          </div>
        </div>
      </div>
    );
};

export default Book_details;