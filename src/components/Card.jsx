import React from "react";

function Card({ cart }) {
  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <p>-{item.title}</p>
              <p>Price: ${item.quan * item.price}</p>
              <p>Quantity:{item.quan}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
