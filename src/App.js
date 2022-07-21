import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullName } from './component/profile/Full Name';
import { Profilephoto } from './component/profile/Profile photo';
import { Address } from './component/profile/Adress';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <FullName/>
      <Profilephoto/>
     <Address/>
    </div>
    
  );
}

export default App;
