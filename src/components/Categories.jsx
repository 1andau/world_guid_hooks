import React from 'react';


// class Categories extends React.Component{
//   state = {
// activeItem : 3,
//   };


//   onSelectItem = (index)=> {
//     this.setState({
//       activeItem: index,
//     });
//   };
  
//   render(){
//     const {items, onClickItem} = this.props;
//     console.log(this.state);
//       return (
//          <div className="categories">
//        <ul>
//          <li>Все</li>

//       {items.map((name, index) => (
//           <li className = {this.state.activeItem === index ? 'active' : ''}
//            onClick={() => this.onSelectItem(index)} 
//            key = {`${name}_${index}`}>
//              {name}
//           </li>
   
//       ))}
//        </ul>

//      </div>
//       );
//   }
// }



 function Categories({ items, onClickItem }) {
const [activeItem, setActiveItem] = React.useState(null);

const oneSelectItem = (index) => {
  setActiveItem(index);
};
              return (
                 <div className="categories">
               <ul>
                 <li className = {activeItem === null ? 'active' : ''} onClick ={() => oneSelectItem(null)}>Все</li>

             {items &&
             items.map((name, index) => (

                 <li className = {activeItem === index ? 'active' : ''} 
                 //мы сказали что oneSelectItem получает index
                 onClick={() => oneSelectItem(index)} 
                 key = {`${name}_${index}`}>
                   {name}
                   </li>
               //тут мы создали анонимную функцию  onClick={() => alert(name)}
               //за счет которой кнопки выводят персональный текст для каждой кнопки 
             ))}
              </ul>
  
             </div>
   );
 }

export default Categories;



