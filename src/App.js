
import {Navbar, NavbarBrand} from 'reactstrap'
import React from 'react';
import Menu from './component/menuComponent'
import {DISHES} from './shared/dishes'

function App () {

    return(
      <div className='app'>
        <Navbar dark color = "primary">
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes = {DISHES} />
      </div>
    );
  }


export default App;
