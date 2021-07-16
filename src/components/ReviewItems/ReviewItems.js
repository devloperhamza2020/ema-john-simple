import React from 'react';

const ReviewItems = (props) => {
    console.log(props);
    const { name, quantity, price, img, seller, stock, key } = props.product;

    const reviewItemsStyle = {
        borderBottom: "1px solid lightgreen",
        marginBottom: "5px",
        paddingBottom: "10px",
        marginLeft: "200px"
    }

    return (
        <div style={reviewItemsStyle} className="review-item">
            <div>
                <img src={img} alt="" />
            </div>
            <h4 className="product-name">{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>$ {price}</p>
            <p>only {stock} left in stock - order soon</p>
            <p>Quantity: {quantity}</p>
            <button
                className="main-btn"
                onClick={ () => props.handleRemoveProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;