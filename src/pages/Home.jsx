import React from 'react';
import {Categories, SortPopup, Block} from '../components';

function Home({items}) {
return (
    <div className="container">
    <div className="content__top">

<Categories 
onClickItem = {(name) => console.log(name)}
items = {['Туристические','Нетуристические', 'Specialty']}/>
{/* теперь делаем сортировку по категориям, для этого в SortPopup создаем массив  */}

<SortPopup
 items = {[
 { name:'Популярности', type: 'popular'},
 { name:'Бюджету', type: 'price'},
 { name: 'Алфавиту', type: 'alphabet'},
]} 
/> 

    </div>
    <h2 className="content__title">All</h2>
    <div className="content__items">
     
 { items.map((obj) =>  (
   <Block key = {obj.id} {...obj}  />
 
  ))}  
    </div>
  </div>


  )

}

export default Home;

