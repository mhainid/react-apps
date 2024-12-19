const fruits=[]
export const Reduce = (state = fruits,action) =>{

    switch(action.type){
        case "addfruit":
            if(state.some((fruit)=>fruit.id ===action.id)){
                alert("this id is aleredy exist")
                return state
            }
            return [...state,{id:action.id,fruit:action.fruit,quantite:action.quantite}]
        case "addprix" :
            const newstate = state.map((fruit)=>fruit.id === action.id ? {...fruit,quantite:parseInt(fruit.quantite)+1 }:fruit)
            return newstate
        case "moinprix" :
            const newstatemoin = state.map((fruit)=>fruit.id === action.id && fruit.quantite > 0  ? {...fruit,quantite:parseInt(fruit.quantite)-1 }:fruit)
            return newstatemoin 
        case "supprimer"    :
            return state.filter((fruit)=>fruit.id !== action.id )
        case "vider" :
            return []
            
        default:
            return state
    }
}