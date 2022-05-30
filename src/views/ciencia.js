import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
import Button from '@material-ui/core/Button';
import vid1 from '../videcien/parte 1.mp4';
import vid2 from '../videcien/parte 2.mp4';
import vid3 from '../videcien/parte 3.mp4';
import vid4 from '../videcien/parte 4.mp4';
import vid5 from '../videcien/parte 5.mp4';
import Modal from 'react-bootstrap/Modal';

const videos = [vid1,vid2,vid3,vid4,vid5]

const preguntas = [
  {
    pregunta: "La ciencia no puede tener… ",
       opcion_1: "Muchos significados",  
       opcion_2: "Un único significado", 
       opcion_3: "Ideologías empericas",  
       opcion_4: "Varias doctrinas", 
       respuesta: 'Un único significado'
  },
  {
    pregunta: "Alguna de las características de la Ciencia son:",
       opcion_1:  "Sistemático, verificable, objetiva, sistemática y acumulativa", 
       opcion_2: "Sistemático, no verificable, objetiva, sistemática y acumulativa", 
       opcion_3: "Sistemático, verificable, objetiva, sistemática y parcial",  
       opcion_4: "Inconsecuente, verificable, objetiva, sistemática y acumulativa", 
       respuesta: 'Sistemático, verificable, objetiva, sistemática y acumulativa'
       
  },
  {
    pregunta: "¿Cuál NO es un tipo de ciencia?",
      opcion_1: "Ciencias naturales", 
       opcion_2: "Ciencia actual", 
       opcion_3: "Ciencias formales", 
       opcion_4: "Ciencias sociales", 
       respuesta: "Ciencia actual"
  },
]




class ciencia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      vi: 0,
      cambio: 0,
      fin: false,
      camb: 0,
    
    }

    
  }
  render() {
  
    return (
      <div className="login-container" style={{ backgroundColor: '#48d1cc' }}>
        
        <Header/>
        <Modal onHide={() => this.setState({ fin: false})} show={ this.state.fin}>
        
   
                <label for="preguntas">{preguntas[this.state.camb].pregunta}</label>
                    <Modal.Body>
                      <div>
                        <input
                        onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                        name="preguntas" id="preguntas" type="radio" value={preguntas[this.state.camb].opcion_1 }/>
                        <label for="preguntas">{preguntas[this.state.camb].opcion_1 }</label>
                      </div>
                      <div>
                      <input 
                        onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                        type="radio" name="preguntas" id="preguntas" checked="preguntas" value={preguntas[this.state.camb].opcion_2 } ></input>
                          <label for="preguntas">{preguntas[this.state.camb].opcion_2}</label>
                      </div>
                      <div>
                      <input
                      onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                      type="radio" name="preguntas" id="preguntas" value={preguntas[this.state.camb].opcion_3}></input>
                      <label for="preguntas">{preguntas[this.state.camb].opcion_3}</label> 
                     </div><div>
                      <input 
                        onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                        type="radio" name=" preguntas" id="preguntas" value={preguntas[this.state.camb].opcion_4}></input>
                          <label for="preguntas">{preguntas[this.state.camb].opcion_4}</label>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer>  
                    <Button onClick={() => this.setState({camb: (this.state.camb + 1 > preguntas.length-1) ? preguntas.length-1 : this.state.camb + 1} )}
                                 variant="contained"
                                 color= ''
                                 type="submit"
                                 style={{ position: 'fixed', top: '35%', lest:10, marginBottom: 10, width: '15%' }}>
                                  SIGUENTE
                            <FastForward style={{color: '#50555a'}}/></Button>
                    </Modal.Footer>
                    
                </Modal>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#f5f5f5' }}>CIENCIA</Typography>
        <video src={videos[this.state.vi]}  alt= 'logo' style={{
                  width: 1080, 
                  height: 400, 
                  display: 'block', 
                  justifycontent: 'center',
                  alignitems: 'center',
                  margin: 'auto',
                  marginTop:10 }}
                   controls autoPlay></video> 

          <Grid container spacing={3}>
            <Grid item xs={11}>
               <Paper>
                  <Table style={{width: '95%'}}>
                    <Button onClick={() => this.setState({cambio: (this.state.vi - 1 < 0) ? 0 : this.state.vi - 1})}
                         variant="contained"
                         color= ''
                         type="submit"
                         style={{ position: 'fixed', top: '50%', lest: 50, marginBottom: 10, width: '15%' }}><FastRewind style={{color: '#50555a'}}/>
                            ANTERIOR  
                     </Button>
                         <Button onClick={() => this.setState({
                            vi: (this.state.vi + 1 < -1) ? 0 : this.state.vi + 1,
                            fin: (this.state.vi === videos.length -1) ? true : false
                          },
                           )}
                                 variant="contained"
                                 color= ''
                                 type="submit"
                                 style={{ position: 'fixed', top: '50%', right: 50, marginBottom: 10, width: '15%' }}>
                                  SIGUENTE
                            <FastForward style={{color: '#50555a'}}/></Button>
                     <TableHead>
                       <TableRow>
                        </TableRow>
                      </TableHead>             
                     </Table>
                </Paper>
              </Grid>
            </Grid>
      </div>
    );
 
  }
  
}

export default ciencia;
