import Input from "../Input";
import "./price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={"0 500"}
          title="₹200 - ₹500"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={"501 1000"}
          title="₹500 - ₹1000"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={"1001 1500"}
          title="₹1000 - ₹1500"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={"1501 5000"}
          title="Over ₹1500"
          name="price"
        />
      </div>
    </>
  );
};

export default Price;
