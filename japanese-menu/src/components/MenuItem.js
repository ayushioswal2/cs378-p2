import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const MenuItem = ({ title, description, imageName, price, quantity, addToCart, removeFromCart }) => {
    return (
        <div className="container my-3">
            <div className="row align-items-center"> 
                {/* Left Column */}
                <div className="col-4 text-center">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/${imageName}`} 
                        className="img-fluid rounded" 
                        alt={description} 
                        style={{ maxHeight: '150px', objectFit: 'cover' }} 
                    />
                </div>

                {/* Right Column */}
                <div className="col-8">
                    <h5 className="mb-1">{title}</h5>
                    <p className="text-muted">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">${price}</span>
						<div d-flex align-items-center gap-2>
							<button type="button" className="btn btn-secondary btn-xs rounded-circle" onClick = {addToCart}>+</button>
							<span className='mb-2'>{quantity}</span><button type="button" className="btn btn-secondary btn-xs rounded-circle" onClick = {removeFromCart}>-</button>
						</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
