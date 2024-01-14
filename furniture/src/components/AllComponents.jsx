import {Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home'
import Product from './Product';
import NoPage from './NoPage';
function AllComponents() {
    const location = useLocation()
    return ( 
        
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navigation/>}>
            <Route path='/' index element={<Home/>}/>
            <Route path='/home'  element={<Home/>}/>
            <Route path='/product'  element={<Product/>}/>
            <Route path='*'  element={<NoPage/>}/>
        </Route>
    </Routes>
        );
}

export default AllComponents;