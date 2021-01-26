export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) * item.qty + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //   console.log(state);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "UPDATE_BASKET":
      //    console.log(action.item);
      var oldBasket = [...state.basket];
      const ind = state.basket.findIndex(
        (oldItem) => oldItem.id === action.item.id
      );
      // console.log(state.basket);
      if (ind >= 0) {
        oldBasket[ind].quantity = action.item.quantity;
      } else {
        console.log("this id is missingv");
      }

      return { ...state, basket: oldBasket };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      // console.log(newBasket);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        // console.log(newBasket);
        console.warn(`can't remove id = ${action.id} cos it does not exist`);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
