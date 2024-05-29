import { createSlice } from '@reduxjs/toolkit';

// Helper functions for local storage with expiry
const setWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};

// Redux slice for cart
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: getWithExpiry('cart') || [],
        total: 0,
    },
    reducers: {
        addtoCart: (state, action) => {
            const { id, color, size, image } = action.payload;
        
            const existingItemIndex = state.cart.findIndex(item =>
                item.id === id && item.color === color && item.size === size && item.image === image
            );
        
            if (existingItemIndex !== -1) {
                // If item already exists with same options, update its quantity
                state.cart[existingItemIndex].quantity += 1;
            } else {
                // If item doesn't exist or options are different, add it to the cart
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        
            // Update local storage with expiry
            setWithExpiry('cart', state.cart, 1296000000); 
        },
        
        updateQuantity: (state, action) => {
            const { index, quantity } = action.payload;
            state.cart = state.cart.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        quantity,
                        totalPrice: item.price * quantity
                    };
                } else {
                    return item;
                }
            });
            setWithExpiry('cart', state.cart, 1296000000);
        },
        
        calculateTotal: (state) => {
            state.total = state.cart.reduce((total, item) => total + (item.totalPrice || (item.price * item.quantity)), 0);
        },  
        removefromCart: (state, action) => {
            const { id, color, size, image } = action.payload;
        
            const existingItemIndex = state.cart.findIndex(item =>
                item.id === id && item.color === color && item.size === size && item.image === image
            );
        
            // Check if the item exists in the cart
            if (existingItemIndex !== -1) {
                // If item exists, remove it from the cart
                state.cart.splice(existingItemIndex, 1);
            }
        
            // Update local storage with expiry
            setWithExpiry('cart', state.cart, 1296000000);
        },
        
        
        
        
        
        
        
        
        
        
        
        updateCart: (state, action) => {
            state.cart = action.payload;
            setWithExpiry('cart', state.cart, 1296000000);
        },
    },
});

export const { addtoCart, updateQuantity, removefromCart, updateCart, calculateTotal } = CartSlice.actions;
export default CartSlice.reducer;
