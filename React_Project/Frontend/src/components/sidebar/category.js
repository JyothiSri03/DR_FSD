import "./category.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="cakes"
          title="Cakes"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="cup cakes"
          title="Cup Cakes"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
