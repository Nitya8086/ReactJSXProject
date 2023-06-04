import React from 'react';
 
const CandyContext = React.createContext({

    items : [],
    totalAmount : 0,
    addItem : (item) =>{},
    removeItem : (id) =>{},
    initialCart : (item) =>{}

});
export default CandyContext;
