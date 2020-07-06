const notesReducer = (state, action) =>{
     switch(action.type){
          case 'FETCH_NOTES':
               return action.notes;
          case 'ADD_NOTE':
               return [
                    ...state,
                    action.notes
               ]
          case 'REMOVE_NOTE':
               return state.filter(s => s.title !== action.note.title);
          default:
               return state;
     }
}

export default notesReducer;