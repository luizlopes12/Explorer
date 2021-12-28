import React, {Fragment} from 'react';
import logo from './img/logo.svg'
import './style/style.css'
import './style/bootstrap.min.css'
let Header = () =>{
    return(
        <Fragment>
        <div className='home-background'>
        </div>
        <header className='container'>
            <div className='row pt-4'>
                <div className='col'>
                    <img src={logo}/>
                </div>
                <div className='col'>
                    
                </div>
            </div>




        </header>
        </Fragment>
    );
}
export {Header};