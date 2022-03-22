import React from 'react'
import { Filter } from '../components/Filter/Filter'
import { ProductContainer } from '../components/ProductContainer/ProductContainer'
export const ProductListing = () => {
    return (
        <div className='main-container'>
            <Filter />
            <ProductContainer />
        </div>
    )
}

