import React from 'react';

export default function Carousal() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_1280.jpg"
            className="d-block w-100"
            alt="Delicious burger with various toppings"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1311491582/photo/chilli-paneer-indian-snack-food.jpg?s=1024x1024&w=is&k=20&c=g-vkM3CtJIa3kCieeCFc2Lppc56gv4i532c-I__6IS0="
            className="d-block w-100"
            alt="Chilli Paneer, a popular Indian snack"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A="
            className="d-block w-100"
            alt="A table filled with spicy food dishes"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
