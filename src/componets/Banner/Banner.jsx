import React from 'react';
import bannerImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
      <p className="py-6">
        
      </p>
      <button className="btn btn-primary">View List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;