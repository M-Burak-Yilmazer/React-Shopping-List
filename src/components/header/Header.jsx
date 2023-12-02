import "./header.scss";

const Header = ({ data }) => {
  return (
    <div>
      <div className="header">
        <h1>Product List</h1>
        <input type="checkbox" className="toggler" name="icons" />
        <label htmlFor="icons" className="icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="btns">
          {data.map((item) => (
            <button key={item}>{item.toUpperCase()}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
