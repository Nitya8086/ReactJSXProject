import React,{useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {

    items :[], 
    totalAmount : 0,

};
const cartItemReducer = (state,action) =>{
    
    if(action.type ==='ADD'){
        const exixtingIndex = state.items.findIndex(
            (item) => item.id===action.item.id

        );
        
        const existingCandy  = state.items[exixtingIndex];
        
       let updatedItems;

        if(existingCandy){
            const updatedItem = {
                ...existingCandy,
                Quantity : existingCandy.Quantity + action.item.Quantity,
            };//update item end here
            
            updatedItems = [...state.items];
            updatedItems[exixtingIndex]=updatedItem;
            // console.log(updatedItems);
            
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
       


        const updatedAmount= state.totalAmount+action.item.price*action.item.Quantity

        console.log(state.items);
        localStorage.setItem('cart',JSON.stringify(updatedItems));
        
        
        return{
            items : updatedItems,
            totalAmount : updatedAmount


    };
   
    }
    if (action.type === "REM") {
        let updatedItems;
        let updatedTotalAmount;
        let amount;
        //for checking existing item
        const exisitingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
      
        const exisistingItem = state.items[exisitingCartItemIndex];
        
        amount = exisistingItem.price * exisistingItem.Quantity; //it will grape total amount of particular item
        updatedTotalAmount = state.totalAmount - amount;
        updatedItems = state.items.filter((item) => item.id !== action.id);
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
    
return defaultCartState;
}
const CartContextProvider = (props) => {
    const [cartItemState,dispatchCartItemaction] = useReducer(cartItemReducer,defaultCartState);

    const addCartHandeler = (item) =>{
        
        dispatchCartItemaction({type : 'ADD', item : item })
        

    };

    const removeCartHandeler = (id) =>{
      console.log("dispach",id);
        dispatchCartItemaction({type : 'REM', id : id})

    };

    const cartItemContext = {
        items : cartItemState.items,
        totalAmount : cartItemState.totalAmount,
        addItem : addCartHandeler,
        removeItem : removeCartHandeler,
        
       
    }
    console.log('cartitem',cartItemContext.items);
   
  return (
    <CartContext.Provider value={cartItemContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;