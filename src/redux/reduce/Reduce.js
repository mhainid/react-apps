

const inisialstate ={nbre:0}
export const Reduce = (state=inisialstate,action) => {
  switch(action.type){
    case "Incrementer":
        return{...state,nbre:state.nbre+parseInt(action.payload)}
    case "Decrementer":
        return{...state,nbre:state.nbre-action.payload}
    case "inisialiser":
        return{...state,nbre:0}
  }
  return state;
}
