import React from 'react';
import Header from '../components/Header';
import im1 from '../imagintro/1.png';
import im2 from '../imagintro/2.png';
import im3 from '../imagintro/3.png';
import im4 from '../imagintro/4.png';


const IMAGES = [im1,im2,im3,im4]


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      cambio: 0,
    }
  }

  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffb6c1' }}>
        <Header/>
        <img src={IMAGES[this.state.cambio]} alt="Logo" 
          style={{width: 400,
                 height: 500,
                  display: 'block',
                   justifycontent: 'center',
                   alignitems: 'center',
                   margin: 'auto',
                   marginTop:10,
                  }}/>
                
      </div>
    );
  }
}

export default Main;