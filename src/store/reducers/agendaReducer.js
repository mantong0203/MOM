const initState ={
    agendas:[
        {id:'1',title:'pick up kids',content:'pick up kids after school'},
        {id:'2',title:'go to bank',content:'open an account for kid'},
        {id:'3',title:'grocery shopping',content:'shop for fish, milk, fruits'}
    ]
}
const agendaReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_AGENDA':
      console.log('created agenda', action.agenda)
  }
  return state
}

export default agendaReducer