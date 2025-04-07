import { key } from "localforage";
import React from "react";
import { Link } from "react-router-dom";

const Book_list = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
   <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className=" bg-blue-200 py-6 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{author}</div>
        </h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          {tags.map((tag,index) => ( 
            <div className="badge badge-outlin bg-slate-400" key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book_list;
