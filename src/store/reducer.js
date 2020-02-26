const initialState = {
    age: 21
};
const reducer = (state = initialState, action) => {
    const newState = {...state}
    if(action.type === 'AGE_UP') {
        newState.age +=  1;
    }
    if(action.type === 'AGE_DOWN') {
        newState.age -= 1;
    }
    return newState;
}

export default reducer;