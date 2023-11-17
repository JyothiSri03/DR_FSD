import Category from "./sidebar/category";
import Price from "./sidebar/price";
import "./sidebar.css";
const Sidebar = ({ handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
