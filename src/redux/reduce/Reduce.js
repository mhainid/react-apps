const fruits=['banane','pomme']

export const Reduce=(state = fruits , action)=>{
    switch(action.type){
        case "add_fruit" :
            return [...state,action.value]
        case "remove_fruit" :
            return []
        case "remove_1fruit" :
                return fruits.filter((_,i)=>i!=action.index)
    }
    return fruits
}