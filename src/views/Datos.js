import React from 'react';
import Header from '../components/Header';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
import im1 from '../quecarreraes/1.png';
import im2 from '../quecarreraes/2.png';
import im3 from '../quecarreraes/3.png';
import im4 from '../quecarreraes/4.png';

const IMAGES = [im1,im2,im3,im4]

const alfabeto =['A','C','D','E','F','G','I','J','L','M','N','P','R','S','T','U','V',' ']

const preguntas =[
  {
    respuesta: 'INGENERIA DE SISTEMA'
  }, 
  {
    respuesta: 'INGENERIA CIVIL'
  },
  {
    respuesta: 'INGENERIA MECANICA'
  },
  {
    respuesta: 'INGENERIA INDUSTRIAL'
  }
]


class Conductores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      cambio: 0,
      letra: "",
    }
  }

  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#add8e6' }}>
        <Header/>
        <img src={IMAGES[this.state.cambio]} alt="Logo" 
          style={{width: 400,
                 height: 500,
                  display: 'block',
                   justifycontent: 'center',
                   alignitems: 'center',
                   margin: 'auto',
                   marginTop:10}}/>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Table style={{width: '100%'}}>
                  <TableHead>
                  <TableRow>
                  <TableCell>
                    <input 
                        placeholder="¿Qué carrera es?" 
                        type="text"
                        class="m-2 form-control"
                        value={this.state.letra} ></input>
                     <div> {
                      alfabeto.map( (item, index) =>(
                        <Button 
                        key={index} onClick={()=> this.setState({letra: this.state.letra + item})}
                        variant="contained"
                        style={{ 
                        marginBottom: 10,margin: 5, padding: 2, justifycontent: 'center',
                        alignitems: 'center',position: 'center'}}>
                          {item}</Button>))}
                      </div> 
                      <Button 
                       variant="contained"
                       style={{ 
                        marginBottom: 10,margin: 5, padding: 2, justifycontent: 'center',
                        alignitems: 'center',position: 'center'}}
                       onClick={() => {
                        if (this.state.letra.length === preguntas[this.state.cambio].respuesta.length){
                          if (this.state.letra === preguntas[this.state.cambio].respuesta){
                            alert('Respuesta correcta')
                          }else{
                            alert('Respuesta incorrecta')
                          }
                        }else { console.log(this.state.letra.length + "  " + preguntas[this.state.cambio].respuesta.length)}
                        }}>
                        VALIDAR RESPUESTA
                      </Button>
                      <Button 
                       variant="contained"
                       style={{ 
                        marginBottom: 10,margin: 5, padding: 2, justifycontent: 'center',
                        alignitems: 'center',position: 'center'}}
                       id="clearbutton" onClick={() => {
                        this.setState({letra: this.state.letra.slice(0, -1)})}
                       }> borrar</Button>
                    </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  </TableBody>
                     <Button onClick={() => this.setState({cambio: (this.state.cambio - 1 < 0) ? 0 : this.state.cambio - 1})}
                              variant="contained"
                              type="submit"
                              style={{ position: 'fixed', top: '50%', lest: 50, marginBottom: 10, width: '15%' }}>
                      <FastRewind style={{color: '#50555a'}}/>
                              ANTERIOR  
                      </Button>
                      <Button onClick={() => this.setState({cambio: (this.state.cambio + 1 > IMAGES.length - 1) ? IMAGES.length - 1 : this.state.cambio + 1})}    
                            variant="contained"
                            type="submit"
                            style={{ position: 'fixed', top: '50%', right: 50, marginBottom: 10, width: '15%' }}>
                            SIGUENTE
                      <FastForward style={{color: '#50555a'}}/></Button>
                </Table>
              </Paper>      
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Conductores;

