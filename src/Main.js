import logo from './logo.svg';
import './Main.css';
import React from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './Character';
function Main() {
    return (
        <div className='page'>
            <BrowserRouter>
                
                <div className="toolbar">
                <Link  to={"/"} exact>
                    <h2>Home</h2>
                    </Link>
                    <Link  to={"/allies"} exact>
                    <h2>Allies</h2>
                    </Link>
                    <Link  to={"/teammates"} exact>
                    <h2>Teammates</h2>
                    </Link>
                    <Link  to={"/enemies"} exact>
                    <h2>Enemies</h2>
                    </Link>
                    <Link  to={"/enemies"} exact>
                    <h2>Saved Lives</h2>
                    </Link>
                </div>

                <Routes>
          <Route path='/' element={ <div className="container">
        <div className="main">
                    <div className='text'>
                        <h1>Captain <span>America</span></h1>
                        <h2 >Database</h2>
                    </div>
                    <img className='mainimage' src='https://www.xtrafondos.com/wallpapers/vertical/pelicula-capitan-america-el-soldado-de-invierno-366.jpg' alt='Logo' />

                </div>
             
            </div>}></Route>
            <Route path='/allies' element={
                <div className='container-c'>
              
                <Character />
                <Character />
                <Character />

                </div>
            }>


            </Route>
        </Routes>   
       
         
          
          
            </BrowserRouter>
                
        </div>
    );
}

export default Main;
