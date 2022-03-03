 
const initialState = {
items: [],
isLoaded: false, //если загружен то отображаем пиццы 
};
//этому пустому массиву мы гворим возьми этот initialState и 
//в массив items и замени этот массив на новый массив с пиццами
//дай все старые данные из этого объекта и замени свойсво 
//items на action.payload 
// B action.payload у нас будет хранится массив всех пицц
const guids = (state = initialState, action) =>{
if (action.type === 'SET_SORT_BY'){
return{
    ...state,
    items: action.payload,
};
}
return state; 
}

export default guids;