//this is our reducer.  this is a pure function.
function todos(state = [], action){
    switch (action.type){
        case 'ADD_TODO':
            return state.concat([action.todo])
        default:
            return state;
    }
};

//this creates are store.
function createStore () {
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

    return {
        getState,
        subscribe,
    }
}

const store = createStore();
let unSub1 =  store.subscribe(()=>{
    console.log('im sub1');
});