import React, {Fragment} from 'react';
import logo from './img/logo.svg'
import './style/style.css'
import './style/bootstrap.min.css'
let Header = () =>{
    return(
        <Fragment>
        <div className='home-background'>
        </div>
        <header className='container-fluid'>
            <div className='row pt-4 d-flex justify-content-between'>
                <div className='col-1 d-flex justify-content-center align-items-center p-3'>
                    <img src={logo}/>
                </div>
                
                <div className='col-6 navbar'>
                    
                </div>
            </div>




        </header>
        </Fragment>
    );
}
export {Header};