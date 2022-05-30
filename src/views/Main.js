import React from 'react';
import Header from '../components/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
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
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper>
                               <Button onClick={() => this.setState({cambio: this.state.cambio - 1})}
                                       variant="contained"
                                       color= ''
                                       type="submit"
                                       style={{ position: 'fixed', top: '80%', lest: 50, marginBottom: 10, width: '15%' }}><FastRewind style={{color: '#50555a'}}/>
                                                ANTERIOR  
                                </Button>
                                   <Button onClick={() => this.setState({cambio: this.state.cambio + 1})}
                                           variant="contained"
                                           color= ''
                                           type="submit"
                                           style={{ position: 'fixed', top: '80%', right: 50, marginBottom: 10, width: '15%' }}>
                                               SIGUENTE
                                      <FastForward style={{color: '#50555a'}}/></Button>
                               </Paper>
                               <img src={IMAGES[this.state.cambio]} alt="Logo" 
                                    style={{width: 400,
                                    height: 500,
                                    display: 'block',
                                    justifycontent: 'center',
                                    alignitems: 'center',
                                    margin: 'auto',
                                    marginTop:10}}/> 
                         </Grid>
                     </Grid>
                  </Container>
      </div>
    );
  }
}

export default Main;