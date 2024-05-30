import React, { useEffect, useState } from "react";
import { FaRegClock, FaSortDown, FaCaretRight, FaStar } from "react-icons/fa";
import "./ingredient.css";
import axios from "axios";
import { CgSmartHomeRefrigerator } from "react-icons/cg";


function IngredientsPage() {
  const [isVegetableView, setIsVegetableView] = useState(false);
  const [isSpiceView, setIsSpiceView] = useState(false);
  const [dishDetails, setDishDetails] = useState({});

  useEffect(() => {
    axios
      .get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
      .then((val) => {
        console.log(val.data);
        setDishDetails(val.data);
      });
  }, []);

  if (!dishDetails) return <>Loading...</>;

  return (
    <div className="ingredients-page">
      <img
        src="https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
        alt={dishDetails.name}
        className="ingredients-image"
      />
      <div className="hero">
        <div>
          <h1>{dishDetails.name}</h1>
          <p id="rating">
            4.2 <FaStar />
          </p>
        </div>
        <h3 className="description">{dishDetails.description}</h3>
      </div>
      <p className="time">
        <FaRegClock /> {dishDetails.timeToPrepare}
      </p>
      <hr />
      <div className="ingredients">
        <div className="ingredients-hero">
          <h2>Ingredients</h2>
          <p>For 2 people</p>
        </div>
        <div className="vegetables">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3>Vegetables</h3>
            {isVegetableView ? (
              <FaSortDown onClick={() => setIsVegetableView(!isVegetableView)} />
            ) : (
              <FaCaretRight onClick={() => setIsVegetableView(!isVegetableView)} />
            )}
          </div>
          {isVegetableView && (
            <table className="content-table">
              {dishDetails.ingredients?.vegetables?.map((vegi, index) => (
                <tr key={index}>
                  <td>{vegi.name}</td>
                  <td>{vegi.quantity}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
        <div className="spices">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3>Spices</h3>
            {isSpiceView ? (
              <FaSortDown onClick={() => setIsSpiceView(!isSpiceView)} />
            ) : (
              <FaCaretRight onClick={() => setIsSpiceView(!isSpiceView)} />
            )}
          </div>
          {isSpiceView && (
            <table className="content-table">
              {dishDetails.ingredients?.spices?.map((spice, index) => (
                <tr key={index}>
                  <td>{spice.name}</td>
                  <td>{spice.quantity}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
      <div className="appliances">
        <h2 className="appliances-hero">Appliances</h2>
        <div className="appliance">
          {dishDetails.ingredients?.appliances?.map((appliance, index) => (
            <div key={index} id="appliance-card">
              <CgSmartHomeRefrigerator />
              <p>{appliance.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IngredientsPage;
