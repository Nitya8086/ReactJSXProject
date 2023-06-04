import React,{useReducer} from 'react';
import CandyContext from './CandyContext';

const getData = () =>{
    const data = localStorage.getItem("cart");
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    };

};
const getTotalAmount = () =>{
    const data = JSON.parse(localStorage.getItem('cart'))

    let totalAmount = 0;
    if(data){
     data.map(item => {

         return totalAmount += item.price*item.Quantity; 
     });
     return totalAmount;
    }
    else{
        return totalAmount;

    }


};



const defaultCandyState = {

    items : getData(), 
    totalAmount : getTotalAmount(),

}
const candyReducer = (state,action) =>{
    
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
        // console.log( typeof(action.item.price));


        const updatedAmount= state.totalAmount+action.item.price*action.item.Quantity

        // console.log('updatedAmount',typeof(updatedAmount));
        // console.log('totalAmount',typeof(state.totalAmount));
        // console.log('price',typeof(action.item.price));
        // console.log('Quantity',typeof(action.item.Quantity));
        console.log(state.items);
        localStorage.setItem('cart',JSON.stringify(updatedItems));
        
        
        return{
            items : updatedItems,
            totalAmount : updatedAmount


    };
   
    }

    if(action.type === 'REMOVE'){
        const exixtingIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
          const existingCandy  = state.items[exixtingIndex];
          const updatedTotalAmount = state.totalAmount-existingCandy.price;
         

         let updatedItems ;
         if(existingCandy.Quantity===1){
            updatedItems = state.items.filter(item => item.id !== action.id);
         }
         else{
            const updatedItem = { ...existingCandy, Quantity : existingCandy.Quantity- 1 };
            updatedItems = [...state.items];
            updatedItems[ exixtingIndex ] = updatedItem;
            
         }
         console.log(state.items);
         return{
            items : updatedItems,
            totalAmount : updatedTotalAmount
         };

    };
    return defaultCandyState;

};

const CandyProvider = (props) =>{
    const [candyState,dispatchCandyaction] = useReducer(candyReducer,defaultCandyState)

    
    const addCandy = (item) =>{
        // console.log(item);
       
        dispatchCandyaction({type: 'ADD',item : item});

    };
    const removeCandy = (id) =>{
        console.log(id);
        dispatchCandyaction({type : 'REMOVE',id : id});

    };
    const initialCart = (item) =>{
       

    };

    const candyContext = {
        items : candyState.items,
        totalAmount : candyState.totalAmount,
        addItem : addCandy,
        removeItem : removeCandy,
        initialCart : initialCart
       
    } 
    // console.log(candyContext.items)
       
    return(
        <CandyContext.Provider value = {candyContext}>
            {props.children}
        </CandyContext.Provider>
    )
    

};
export default CandyProvider;