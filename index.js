
///todos reducer
function todos(state = [], action){

    switch (action.type){
        case 'ADD_TODO':
            return state.concat([action.payload])
        case 'REMOVE_TODO':
            return state.filter((todo)=>{
                return todo.id !== action.payload.id;
            })
        case 'UPDATE_TODO':
            return state.map((todo)=>{
                return (todo.id === action.payload.id) ? 
                {...action.payload}: 
                todo;
        })
        default:
            return state;
    }
};


function goals(state = [], action){

    switch (action.type){
        case 'ADD_GOAL':
            return state.concat([action.payload])
        case 'REMOVE_GOAL':
            return state.filter((goal)=>{
                return goal.id !== action.payload.id;
            })
        default:
            return state;
    }
};

const rootReducer = (state={}, action) =>{
    return {
        goals: goals(state.goals, action),
        todos: todos(state.todos, action),
    }
}
//this creates are store.


const store = createStore(rootReducer);
let unSub1 =  store.subscribe(()=>{
    console.log('im sub1');
});

