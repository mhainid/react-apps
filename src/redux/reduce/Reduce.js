const contacts=[]

export const Reduce=(state = contacts , action)=>{
    switch(action.type){
        case "add" :
            return [...state,{nom:action.nom,email:action.Email,ville:action.ville}]
        case "edit" :
            return  state.map((contact,index)=> index === action.id ? {...contact,nom:action.nom,email:action.Email,ville:action.ville}:contact)
        case "effacer":
            return state.filter((contact,index)=> index != action.id )
        case "filtrer":
            return state.filter((contact)=> contact.ville === action.ville)
        case "reinitialiser":
            return []
    }
    return contacts
}