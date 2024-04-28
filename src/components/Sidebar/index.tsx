import { Bookmark, Heart, Search, Star, Users } from "react-feather";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="lateral-menu-container">
      <div className="lateral-menu-content">
        <h2>Discover</h2>
        <p>
          <Search className="icon" /> Browse
        </p>
        <p>
          <Heart className="icon" /> For You
        </p>
      </div>
      <div className="lateral-menu-content">
        <h2>Library</h2>
        <p>
          <Users className="icon" /> Chefs
        </p>
        <p>
          <Star className="icon" /> Favorites
        </p>
        <p>
          <Bookmark className="icon" /> My Recipes
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
