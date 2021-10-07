import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs";
import CurrencyFormatter from "currency-formatter";

function Cart() {

    let list = localStorage.getItem('lists')
    console.log(list)

  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
     
  }, [products])

  return (
    <div className="cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__img">
                        <img src={`images/${product.image}`} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart__price">
                        {CurrencyFormatter.format(product.discountPrice, {
                          locale: "en-US",
                        })}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="detail__info">
                        <div className="detail__incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__totalPrice">
                        {CurrencyFormatter.format(
                          product.discountPrice * product.quantity,
                          { locale: "en-US" }
                        )}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">summary</div>
                  <div className="summary__detail">
                    <div className="row mb-10">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalQuantities}</div>
                      <div className="col-6">Total Price:</div>
                      <div className="col-6">
                        {CurrencyFormatter.format(totalPrice, {
                          locale: "en-US",
                        })}
                      </div>
                    </div>
                    <button type="button" className="checkout">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your Cart is Empty!"
        )}
      </div>
    </div>
  );
}

export default Cart;
