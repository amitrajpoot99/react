import {Provider} from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './User/Home'
import Contact from './User/Contact'
import User from './User/User'
import { store } from './Redux/store'
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/user' element={<User/>}/>

            </Routes>

        </BrowserRouter>
        
      </Provider>
    </>
  );
}

export default App;
