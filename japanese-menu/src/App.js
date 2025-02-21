import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import PopUp from './components/PopUp';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];





function App() {
	const [cart, setCart] = useState({})
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [orderSummary, setOrderSummary] = useState("");


	const addToCart = (item) => {
		setCart((prevCart) => ({
			...prevCart,
			[item.id]: (prevCart[item.id] || 0) + 1
		}));
	};

	const removeFromCart = (item) => {
		setCart((prevCart) => {
			const updatedCart = { ...prevCart };
			if (updatedCart[item.id] > 1) {
				updatedCart[item.id] -= 1;
			} else {
				delete updatedCart[item.id];
			}
			return updatedCart;
		});
	};

	const clearCart = () => {
        setCart({});
    };

    const calculateTotal = () => {
        return menuItems.reduce((total, item) => total + (cart[item.id] || 0) * item.price, 0).toFixed(2);
    };

    const placeOrder = () => {
        const template = menuItems.filter(item => cart[item.id]).map(item => `${item.title} x ${cart[item.id]}`).join('\n');

		if (Object.keys(cart).length === 0) {
			setOrderSummary("No items in cart")
		} else {
			setOrderSummary(template)
		}
		setIsPopupOpen(true);

        // alert(`Order Summary:\n${orderSummary}\n\nTotal: $${calculateTotal()}`);
    };

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/menuHeader.png`} className="menu-image"/>
	  <h3 className="menu-description">Fresh food everyday...</h3>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        
		{menuItems.map((menuItem) => (
			<MenuItem title={menuItem.title} description={menuItem.description} price={menuItem.price} imageName={menuItem.imageName} addToCart={() => addToCart(menuItem)}
                        removeFromCart={() => removeFromCart(menuItem)}
                        quantity={cart[menuItem.id] || 0}/>
		))}
      </div>
	  <div className="text-center">
			<h4>Total: ${calculateTotal()}</h4>
			<button className="btn btn-secondary mx-2" onClick={placeOrder}>Order</button>
			<button className="btn mx-2" onClick={clearCart} disabled={Object.keys(cart).length === 0}>Clear All</button>
		</div>
		<PopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        orderSummary={orderSummary}
      />
    </div>
  );
}

export default App;
