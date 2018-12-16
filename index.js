
///todos reducer
function todos(state = [], action){

    switch (action.type){
        case 'ADD_TODO':
            return state.concat([action.payload])
        case 'REMOVE_TODO':
            console.log(action.payload.id)
            return state.filter((todo)=>{
                return parseInt(todo.id) !== parseInt(action.payload.id);
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
                return parseInt(goal.id) !== parseInt(action.payload.id)
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


