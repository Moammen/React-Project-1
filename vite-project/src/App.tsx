import './index.css'
import { Fragment } from 'react/jsx-runtime'  
import ProductCrd from './components/ProductCrd';
import type { IProduct } from './interfaces';
import { productList } from './components/data';
function App() {
  const products = productList.map((product : IProduct) => (<ProductCrd key={product.id} productList={product} />));  

  return (
 <Fragment>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-2 rounded-lg m-5 p-5">
      {products}
    </div>
 </Fragment>

  )
}

export default App
