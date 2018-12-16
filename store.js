const createStore = (reducer)=>{
    let state;
    let listeners = [];
    const getState = () => state;
    const subscribe = (listener) => {
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(curItem =>{
                curItem !== listener;
            })
        }
    }

     const dispatch = (action) => {
        state = reducer(state, action);
        console.log(state)
        listeners.forEach((listener)=>{
            listener();
        })
     }
     
    return {
        getState,
        subscribe,
        dispatch,
    }
}