import React,{useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

const Header = () => {
  const [showNavExternal, setShowNavExternal] = useState(false);
  return (
    <>
      <MDBCollapse show={showNavExternal}>
        <div className='bg-dark p-4'>
          <h5 className='text-white h4'>Cadastrar-se</h5>
          <span className='text-muted'>Clique no botão + para se cadastrar.</span>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;



