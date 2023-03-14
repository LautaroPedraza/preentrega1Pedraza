import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext); //custom hook

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantityproducts, setQuantityProducts] = useState(0);

  const addProduct = (product, quantity) => {
    let cartProduct = {
      product,
      quantity,
    };

    if (!isInCart(product)) {
      setCartProducts([...cartProducts, cartProduct]);
    } else {
      let cartProduct = cartProducts.find((item) => item.id === product.Id);
      cartProduct.quantity += quantity;
    }
    setQuantityProducts(quantityproducts + quantity);
  };

  const removeItemCart = (itemCart) => {
    setQuantityProducts(quantityproducts - itemCart.quantity);
    const newList = cartProducts.filter((item) => item !== itemCart);
    setCartProducts(newList);
  };

  const clearCart = () => {
    setCartProducts([]);
    setQuantityProducts(0);
  };

  const calculateTotalBuy = () => {
    let total = 0;
    cartProducts.forEach((item) => {
      total += item.quantity * item.product.price;
    });
    return total.toFixed(2);
  };

  const isInCart = (product) => {
    return (
      cartProducts.find((item) => item.product.id === product.id) !== undefined
    );
  };

  const context = {
    quantityproducts,
    cartProducts,
    calculateTotalBuy,
    addProduct,
    removeItemCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};