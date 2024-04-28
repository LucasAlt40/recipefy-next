import Image from "next/image";
import "./index.css";
import background from "@/../public/images/mealHome6.jpg";
import { FC } from "react";

interface Props {
  label: string
}

const CategoryCard: FC<Props> = ({ label }) => {
  return (
    <div className="category-card">
      <Image src={background} alt="category image"/>
      <h1>{label}</h1>
    </div>
  );
};

export default CategoryCard;
