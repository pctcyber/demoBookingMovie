import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header/Header'
import LifeCircle from './pages/LifeCircle/LifeCircle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BaiTapChonXe from './pages/Hooks/BaiTapChonXe/BaiTapChonXe';
import UseStateEffect from './pages/Hooks/UseEffectHook';
import ReduxHook from './pages/Hooks/ReduxHook';
import Detail from './pages/Hooks/Detail';
import Loading from './Component/Loading/Loading';
import DemoHookUseCallBack from './pages/Hooks/useCallBack Hook/DemoHookUseCallBack';
import UseMemoHook from './pages/Hooks/useMemo Hook/UseMemoHook';
import UseRef from './pages/Hooks/UseRef';
import CheckOut from './pages/CheckOut/CheckOut';
import Login from './pages/Login/Login';

// import history
import {createBrowserHistory} from 'history'
import DemoJSS from './JSS_Styled_Components/DemoJSS/DemoJSS';
// đối tượng giúp chuyển hướng bất kì trang nào
export const history = createBrowserHistory()



function App() {
  return (

    <Router history = {history}>
      <div className="App">
        <Loading/>
        <Header/>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/checkout/:id' component={CheckOut} />

          <Route exact path='/lifecycle' render = {(propsRoute) => { // tham so chua cac props cua the route
            
            return <div>

            <h3>component lifecycle</h3>
            <LifeCircle {...propsRoute}/>
            </div>
          }}/>
          <Route exact path = '/usestatedemo' component = {UseStateHook}/>
          <Route exact path = '/chonXe' component = {BaiTapChonXe}/>
          <Route exact path = '/usestateeffect' component = {UseStateEffect}/>
          <Route exact path = '/reduxhook' component = {ReduxHook}/>
          <Route exact path = '/detail/:id' component = {Detail}/>
          <Route exact path = '/usecallback' component = {DemoHookUseCallBack}/>
          <Route exact path = '/usememo' component = {UseMemoHook}/>
          <Route exact path = '/useref' component = {UseRef}/>
          <Route exact path='/stylecomponents' component={DemoJSS} />
          <Route exact path='/' component={Home} />
        </Switch>
       
      </div>
    </Router>


  );
}

export default App;
