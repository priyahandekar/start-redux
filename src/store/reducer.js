

//example for redux immutable way

// const initialState = {
//     age: 21,
//     history: []
// };
// const reducer = (state = initialState, action) => {
//     const newState = {...state}
//     if(action.type === 'AGE_UP') {
//         return {
//             ...state,
//             age: state.age + action.value,
//             history: [...state.history, {id: Math.random() ,age: state.age + action.value}]
//         }
//     };
//     if(action.type === 'AGE_DOWN') {
//         return {
//             ...state,
//             age: state.age - action.value,
//             history: [...state.history, {id: Math.random(), age: state.age - action.value}]
//         }
//     };
//     if(action.type === 'DEL_ITEM') {
//         return {
//             ...state,
//             history: state.history.filter(el => el.id !== action.key)
//         }
//     }
//     return newState;
// }

// export default reducer;

//------------example for redux combine multiple reducers--------

const initialState = {
        a: 1,
        b: 1
    };

    const reducer = (state=initialState, action) => {
        // switch (action.type) {
        //     case 'UPDATE_A':
        //     return {
        //         ...state,
        //         a: state.a + state.b
        //     }
        
        //     case 'UPDATE_B':
        //     return {
        //         ...state,
        //         b: state.a + state.b
        //     }
           
        // }
        if(action.type === "UPDATE_A") {
            return {
                ...state,
                a: state.a + state.b
            }
        }
        if(action.type === "UPDATE_B") {
            return {
                ...state,
                b: state.a + state.b
            }
        }
        return state; 
    }

    export default reducer;