import React, {useEffect} from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import CurrencyFormatter from "currency-formatter";
import Silder from "./Silder";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))

      
  }, [products])

  return (
    <div>
      <Header />
      <Silder />
      <div className="container">
        <h1>Select a Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product">
                <div className="product__img">
                  <Link to={`/details/${product.id}`}>
                    <img src={`/images/${product.image}`} alt="image name" />
                  </Link>
                </div>
                <div className="product__name">{product.name}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product__price">
                      <span className="actualPrice">
                        {" "}
                        {CurrencyFormatter.format(product.price, {
                          locale: "en-US",
                        })}
                      </span>{" "}
                      <span className="discountPrice">
                        {" "}
                        {product.discount}%
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product__discount__price">
                      {CurrencyFormatter.format(product.discountPrice, {
                        locale: "en-US",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
