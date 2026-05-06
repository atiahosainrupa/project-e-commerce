import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice"; 

const MyCart = () => {
  const dispatch = useDispatch();
  
  
  const cartItems = useSelector((state) => state.cart.items); 

  const shipping = 5.00;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">My Cart</h2>
        
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 mb-4 flex items-center gap-4 shadow-sm bg-white">
          
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-24 h-24 object-cover rounded-lg bg-gray-100" 
              />
              
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.category}</p>
                <p className="font-bold text-xl mt-2">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden bg-gray-50">
                  <button 
                    onClick={() => dispatch(decreaseQty(item.id))} 
                    className="px-3 py-1 hover:bg-gray-200 transition font-bold"
                  >-</button>
                  <span className="px-4 font-semibold">{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(increaseQty(item.id))} 
                    className="px-3 py-1 hover:bg-gray-200 transition font-bold"
                  >+</button>
                </div>
                
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-[#ED363D] text-white px-5 py-2 rounded-lg hover:bg-red-700 transition font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
             <p className="text-gray-500 text-xl">Our cart is currently empty. Start exploring our latest collections!</p>
          </div>
        )}
      </div>

    
      <div className="w-full md:w-1/3 border rounded-xl p-6 h-fit shadow-md bg-white">
        <h2 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h2>
        <div className="flex justify-between mb-3 text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 border-b pb-4 text-gray-600">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-2xl font-bold mb-8">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-[#1C1C1E] text-white py-4 rounded-xl font-bold hover:bg-black transition text-lg shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default MyCart;