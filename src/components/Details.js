import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CurrencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";

function Details() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  useEffect(() => {

    dispatch({ type: "PRODUCT", id });

  }, [id]);

  const decQunatity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="container mt-100">
        <div className="row">
          <div className="col-6">
            <div className="detail__img">
              <img src={`/images/${product.image}`} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="detail__name">{product.name}</div>
            <div className="detail__price">
              <span className="detail__actualPrice">
                {" "}
                {CurrencyFormatter.format(product.price, { locale: "en-US" })}
              </span>
              <span className="detail__discountPrice">
                {" "}
                {CurrencyFormatter.format(product.discountPrice, {
                  locale: "en-US",
                })}
              </span>
            </div>
            <div className="detail__info">
              <div className="detail__incDec">
                <span className="dec" onClick={decQunatity}>
                  <BsDash />
                </span>
                <span className="quantity">{quantity}</span>
                <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                  <BsPlus />
                </span>
                <button
                  className="btn-default"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { product, quantity },
                    })
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="detail__p">
              <h4>Details:</h4>
              {product.desc}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
