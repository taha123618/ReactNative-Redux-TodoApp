// perform kise krna ha 
// kise krna a inc and decrement 
// better go with initialSate takee value change na ho 
const initialState = {
    list: []
};
const todo = (state = initialState, action) => {

    // kia type ha inc ha ya dec 
    switch (action.type) {
        case "ADDTODO":
            const { id, data } = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }]
            }
        case "DELETETODO":
            const newlist = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newlist
            }


        case "REMOVETODO": return {
            ...state,
            list: []
        }

        // ye zarore ha 
        default: return state;
    }
}

export default todo;

