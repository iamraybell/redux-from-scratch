let curTodoId = 0;
let curGoalId = 0;

const addTODOS = ()=> {
    let el = document.getElementById('todoToAdd');
    let name = el.value;
    let id = curTodoId;
    curTodoId +=1;
    store.dispatch({
        type:'ADD_TODO',
        payload:{
            name,
            id,
        }
    })
    el.value = ''
}

const addGoal = () => {
    let el = document.getElementById('goalToAdd');
    let name = el.value;
    let id = curGoalId;
    curGoalId +=1;
    console.log(curGoalId)
    store.dispatch({
        type:'ADD_GOAL',
        payload:{
            name,
            id,
        }
    })
    el.value = ''
};

store.subscribe(()=>{
    let list = document.getElementById('todosList');
    list.innerHTML = null;
    for(let item of store.getState().todos){
        let newItem = document.createElement('li');
        newItem.innerHTML = item.name;
        newItem.id = item.id;
        newItem.addEventListener('click', ()=>{
            console.log(newItem.id)
            store.dispatch({
                type: 'REMOVE_TODO',
                payload: {id: newItem.id},
            })
        })
        list.appendChild(newItem);
    }
});

store.subscribe(()=>{
    let list = document.getElementById('goalsList');
    list.innerHTML = null;
    for(let item of store.getState().goals){
        let newItem = document.createElement('li');
        newItem.innerHTML = item.name;
        newItem.id = item.id;
        console.log(item)
        newItem.addEventListener('click', ()=>{
            console.log(newItem.id)
            console.log(newItem.id)
            store.dispatch({
                type: 'REMOVE_GOAL',
                payload: {id: newItem.id},
            })
        })
        list.appendChild(newItem);
    }
});