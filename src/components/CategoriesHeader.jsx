import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="basketball">
              <button onClick={() => handleBtnName("basketball")}>
                Basketball
              </button>
            </Link>
            <Link to="football">
              <button onClick={() => handleBtnName("football")}>
                Football
              </button>
            </Link>
            <Link to="tennis">
              <button onClick={() => handleBtnName("tennis")}>Tennis</button>
            </Link>
            <Link to="running">
              <button onClick={() => handleBtnName("running")}>Running</button>
            </Link>
            <Link to="cricket">
              <button onClick={() => handleBtnName("cricket")}>Cricket</button>
            </Link>
            <Link to="gym">
              <button onClick={() => handleBtnName("gym")}>
                Gym shoes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
