import './App.css';
import Arrow from './mycomponents/arrow';
import MyFun from './mycomponents/boot';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import Stat from './mycomponents/state';
import Setstat from './mycomponents/setstat';
import Condition1 from './mycomponents/condition1';
import Refresh from './mycomponents/refresh';
import Newdemo from './mycomponents/newdemo';
import Anotherdemo from './mycomponents/anotherdemo';

function App() {
  return (
    <div className="App"> 
      <Hello age="24" name="Sayeed" />
     
      
      <Welcome name="class1" />
      <br/>
      <MyFun/>
      <br/>
      <br/>
      <Arrow/>
      <Stat/>  
      <br/>
      <Setstat/>    
      <Condition1/>
      <Refresh/>
      <Newdemo/>
      <br/>
      <Anotherdemo/>
      
     
    </div>
  );
}

export default App;
