import React from 'react';
import {Header} from './components';
import {Home, Cart} from './pages';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';

function App() {
  const [guids, setGuids] = React.useState([]); //в setGuids мы будем хранить все пиццы 
 React.useEffect(() => {
   axios.get('http://localhost:3000/db.json').then(({data}) => {
setGuids(data.guids);

});

    
}, []);          // щас мы вот че делаем, мы пишем   React.useEffect что есть анонимная функция которая будет выполнятся когда нас нужно, и потом скажет что пустой массив для юсЭффект говорит что это компонент дидмоунт, и теперь означает чо приложение будет выполнять этот эффект только один раз при первом рендере 

  return (
    <div className="wrapper">
 <Header /> 

      <div className="content">
      <Routes>
      <Route path="/" element={<Home items={guids}/>} exact/>
       <Route path="/cart" element={<Cart />} exact /> 
      </Routes>

      </div>
    </div>
  );
}

export default App;


