import './App.css';
import MyFun from './mycomponents/boot';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';


function App() {
  return (
    <div className="App"> 
      <Hello age="24" name="Sayeed" />
     
      
      <Welcome name="class1" />
      <br/>
      <MyFun/>

     
     
      
    </div>
  );
}

export default App;
