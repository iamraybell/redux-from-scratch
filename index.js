const createStore = require('./store');

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

//this creates are store.


const store = createStore(todos);
let unSub1 =  store.subscribe(()=>{
    console.log('im sub1');
});

store.dispatch({
    type: 'ADD_TODO',
    payload:{
        id:0,
        name:'read a book',
        complete: false,
    }
});

store.dispatch({
    type: 'ADD_TODO',
    payload:{
        id:1,
        name:'sleep',
        complete: true,
    }
});

store.dispatch({
    type: 'ADD_TODO',
    payload:{
        id:2,
        name:'cry',
        complete: true,
    }
});

store.dispatch({
    type: 'REMOVE_TODO',
    payload:{
        id:1,
    }
});

store.dispatch({
    type: 'UPDATE_TODO',
    payload:{
        id:2,
        name:'Be happy',
        complete: false,
    }
})
