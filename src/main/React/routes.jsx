import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {UserPage} from 'pages/UserPage'

import {SomePage} from 'pages/SomePage'
import {ProductsList, EditProduct, UserList} from 'pages/products'

export default (
    <Route name="app" component={UserPage} path="/">
        <IndexRoute component={SomePage}/>
        <Route path="products" component={ProductsList}/>
        <Route path="products/new" component={EditProduct}/>
        
        
    </Route>
)
