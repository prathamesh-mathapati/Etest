import React, { useState } from 'react'

import './style.scss'

export const Pos = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      product_img:
        'https://blackpos.kmsteams.com/uploads/resized/1668156917150pexels-bedis-elacheche-891123.jpg',
      price: 100,
      product_name: 'kinle mineral water'
    },
    {
      id: 2,
      product_img:
        'https://blackpos.kmsteams.com/uploads/resized/1668156917150pexels-bedis-elacheche-891123.jpg',
      price: 100,
      product_name: 'kinle mineral water'
    },
    {
      id: 3,
      product_img:
        'https://blackpos.kmsteams.com/uploads/resized/1668156917150pexels-bedis-elacheche-891123.jpg',
      price: 100,
      product_name: 'kinle mineral water'
    },
    {
      id: 4,
      product_img:
        'https://blackpos.kmsteams.com/uploads/resized/1668156917150pexels-bedis-elacheche-891123.jpg',
      price: 100,
      product_name: 'kinle mineral water'
    }
  ])

  const [orderList, setOrderList] = useState([])
  return (
    <div>
      <div className='product-items'>
        {productData.map((items, index) => {
          return (
            <div className='card-product' key={index}>
              <img src={items.product_img} alt={items.product_img} />
              <span>
                {items.price} $
              </span>
              <p>
                {items.product_name}
              </p>
            </div>
          )
        })}
      </div>
      <div className='product-table'>
        <div className=''>Pruduct </div>
        <div className=''>Price </div>
        <div className=''>Qut </div>
        <div className=''>Subtotal </div>
        <div className=''>Action </div>
      </div>
      <div />
    </div>
  )
}
