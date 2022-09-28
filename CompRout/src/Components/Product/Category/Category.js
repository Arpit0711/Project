import React from 'react'
import ProductJSON from '../Product.json'
import './Category.css'
import {Link} from 'react-router-dom'

export default function Category() {
  return (
    <div>
        <h1>Different Products</h1>
        {ProductJSON.product.map((prod)=>(
            <div key={prod.prod_id} className="prodDiv">
                <h3>{prod.prod_name}</h3>
                <h5>{prod.desc}</h5>
                <Link to={`/sub_product/${prod.prod_name}`}>
                  <button>View more</button>
                </Link>
                </div>
        ))}
    </div>
  )
}
