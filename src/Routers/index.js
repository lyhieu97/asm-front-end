import React from 'react'
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import MainAdmin from '../Page/Layout/MainAdmin'
import Main from '../Page/Layout/Main'

//Admin 
import Dashboard from '../Page/View/Admin/Dashboard'
import ProductManager from '../Page/View/Admin/Product'
import AddProducts from '../Page/View/Admin/Add'
import UpdateProduct from '../Page/View/Admin/Update'
import Category from '../Page/View/Admin/Category'
import AddCt from '../Page/View/Admin/AddCt'
import UpdateCt from '../Page/View/Admin/UpdateCt'
import Blog from '../Page/View/Admin/Blog'


//Main
import Detail from '../Page/View/Main/Detail'
import Cart from '../Page/View/Main/Cart'
import Home from '../Page/View/Main/Home'
import About from '../Page/View/Main/About'
import Contact from '../Page/View/Main/Contact'
import Blogs from '../Page/View/Main/Blog'
import Blogdt from '../Page/View/Main/BlogDetail'

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                             <Route path='/admin'  exact component={Dashboard} />
                            <Route path='/admin/products' component={ProductManager} />
                            <Route path='/admin/addproducts' component={AddProducts} />
                            <Route path='/admin/updateproducts/:id' component={UpdateProduct} />
                            <Route path='/admin/categorys' component={Category} />
                            <Route path='/admin/addcategory' component={AddCt} />
                            <Route path='/admin/updatecategory/:id' component={UpdateCt} />
                            <Route path='/admin/blog' component={Blog} />
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/detail/:id' component={Detail}/>
                            <Route path='/cart/:id' component={Cart}/>
                            <Route path='/blog' component={Blogs}/>
                            <Route path='/blogdetail/:id' component={Blogdt}/>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
