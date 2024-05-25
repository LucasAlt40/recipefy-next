import Image from "next/image";
import "./index.css";
import background from "@/../public/images/mealHome6.png";

interface Props {
  label: string;
}

const CategoryCard = ({ label }: Props) => {
  return (
    <div className="category-card">
      <Image src={background} alt="category image" />
      <h1>{label}</h1>
    </div>
  );
};

export default CategoryCard;
