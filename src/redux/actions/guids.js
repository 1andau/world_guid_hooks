//export -- это чтобы каждая функция могла по отдельности экспортироваться 

export const setGuids = (items) => ({
    type: 'SET_GUIDS', 
    payload: items,
})

