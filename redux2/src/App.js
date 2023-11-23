import React from 'react'
import Product from './Product/Product'
import { Provider } from 'react-redux'
import { store } from './Redux/store'


function App() {
  return (
    <Provider store={store}>
    <div>
        <h2>App Component</h2>
        <hr />
        <Product/>

    </div>
    </Provider>
  )
}

export default App