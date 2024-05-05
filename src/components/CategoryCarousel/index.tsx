"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider, { Settings } from "react-slick";
import CategoryCard from "../CategoryCard";

import "./index.css";

const CategoryCarousel = () => {
  const settings: Settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
  };

  const categories = [
    "Pizza",
    "Japanese",
    "Snacks",
    "Brazilian",
    "Food",
    "Meal",
    "Chinese",
    "Indian",
    "Mexican",
    "Italian",
    "Burgers",
    "Desserts",
    "Vegetarian",
    "Seafood",
  ];

  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <CategoryCard label={category} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
