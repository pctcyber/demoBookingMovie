import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header/Header'
import Loading from './Component/Loading/Loading';
import LifeCircle from './pages/LifeCircle/LifeCircle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BaiTapChonXe from './pages/Hooks/BaiTapChonXe/BaiTapChonXe';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/lifecycle' render = {(propsRoute) => { // tham so chua cac props cua the route
            
            return <div>

            <h3>component lifecycle</h3>
            <LifeCircle {...propsRoute}/>
            </div>
          }}/>
          <Route exact path = '/usestatedemo' component = {UseStateHook}/>
          <Route exact path = '/chonXe' component = {BaiTapChonXe}/>

          <Route exact path='/' component={Home} />
        </Switch>
        {/* <Route Home/>
    <Route Contact/>
    <Route Register/>
    <Route Login/> */}
      </div>
    </BrowserRouter>


  );
}

export default App;
