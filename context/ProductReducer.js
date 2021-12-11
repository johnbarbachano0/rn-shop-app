import { ACTIONS } from "./Actions";

export const productReducer = (products, action) => {
  const { type, payload } = action;
  const { cartProducts, orderedProducts } = products;
  console.log("cartProducts");
  console.log(cartProducts);
  var newCartProducts;
  switch (type) {
    case ACTIONS.ADD_TO_CART: {
      const product = cartProducts.filter((item) => item.id === payload.id);
      console.log("product");
      console.log(product);
      console.log(product.length > 0);
      const restOfProducts = cartProducts.filter(
        (item) => item.id !== payload.id
      );
      console.log("rest");
      console.log(restOfProducts);
      if (product.length > 0) {
        console.log("exec1");
        newCartProducts = [
          ...restOfProducts,
          { id: payload.id, qty: product[0].qty + 1 },
        ];
      } else {
        console.log("exec200");
        newCartProducts = [...restOfProducts, { id: payload.id, qty: 1 }];
      }
      console.log("newCart");
      console.log(newCartProducts);
      return { ...products, cartProducts: newCartProducts };
    }
    // case ACTIONS.REMOVE_FROM_CART: {
    //   const product = cartProducts.filter((item) => item.id === payload.id)[0];
    //   const restofProducts = cartProducts.filter(
    //     (item) => item.id !== payload.id
    //   );
    //   if (product.qty > 1) {
    //     newCartProducts = [
    //       ...restofProducts,
    //       { id: product.id, qty: product.qty - 1 },
    //     ];
    //   } else {
    //     newCartProducts = [...restofProducts];
    //   }
    //   console.log("remove");
    //   return { ...products, cartProducts: newCartProducts };
    // }
    // case ACTIONS.ADD_ORDER: {
    //   const newOrderedProducts = [...orderedProducts, payload.orders];
    //   const newCartProducts = [];
    //   return {
    //     ...products,
    //     cartProducts: newCartProducts,
    //     orderedProducts: newOrderedProducts,
    //   };
    // }
    default: {
      throw new Error();
    }
  }
};
