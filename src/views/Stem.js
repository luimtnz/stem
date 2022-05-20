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
import vid1 from '../stem/STEM Parte 1.mp4';
import vid2 from '../stem/STEM Parte 2.mp4';
import vid3 from '../stem/STEM Parte 3.mp4';
import vid4 from '../stem/STEM Parte 4.mp4';
import vid5 from '../stem/STEM Parte 5.mp4';
import vid6 from '../stem/STEM Parte 6.mp4';
import vid7 from '../stem/STEM Parte 7.mp4';
import Modal from 'react-bootstrap/Modal';

const videos = [vid1,vid2,vid3,vid4,vid5,vid6,vid7]

const preguntas = [
  {
    pregunta: "¿STEM responde al acrónimo de... ?",
       opcion_1: "Ciencia, Trabajo, Economía, Matemáticas ",  
       opcion_2: "Ciencia, Tecnología, Economía y Matemáticas ", 
       opcion_3: "Ciencia, Tecnología Ingeniería y Matemáticas ",  
       opcion_4: "Conocimiento, Tecnología, Ingenio y Motricidad  ", 
       respuesta: 'Ciencia, Tecnología Ingeniería y Matemáticas '
  },
  {
    pregunta: "¿Porque se debe de desarrollar las habilidades de STEM?",
       opcion_1:  "Para poder desenvolverse en el mercado laboral", 
       opcion_2: "Porque pueden desaparecer las profesiones tradicionales", 
       opcion_3: "Para adquirir competencias y habilidades del siglo XXI",  
       opcion_4: "Todas las anteriores ", 
       respuesta: 'Todas las anteriores '
       
  },
  {
    pregunta: "Cuál NO es una característica de la enseñanza STEM",
      opcion_1: "Aprendizaje de memoria", 
       opcion_2: "Fomentar la creatividad", 
       opcion_3: "Incluir el trabajo en equipo", 
       opcion_4: "Fomentar el aprendizaje practico ", 
       respuesta: "Aprendizaje de memoria"
  },
]




class Stem extends React.Component {

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
        <Modal onHide={() => this.setState({ show: false})} show={ this.state.fin}>     
                <label for="preguntas">{preguntas[this.state.camb].pregunta}</label>
                    <Modal.Body>
                    <input
                    onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                     type="radio" 
                    name="preguntas" 
                    id="preguntas"
                    value={preguntas[this.state.camb].opcion_1}/>
                      <label for="preguntas">{preguntas[this.state.camb].opcion_1}</label>
                      <input 
                    onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                     id="preguntas" type="radio"
                     name="preguntas" 
                     value={preguntas[this.state.camb].opcion_2}></input>
                      <label for="preguntas">{preguntas[this.state.camb].opcion_2}</label>

                      <input
                      onChange={ event => { (event.target.value === preguntas[this.state.camb].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                      id="preguntas" type="radio" 
                      name="preguntas" 
                      value={preguntas[this.state.camb].opcion_3}></input>
                      <label for="preguntas"> {preguntas[this.state.camb].opcion_3}</label>  
                    
                    </Modal.Body>
                    <Button onClick={() => this.setState({camb: (this.state.camb + 1 > preguntas.length-1) ? preguntas.length-1 : this.state.camb + 1} )}
                                 variant="contained"
                                 color= ''
                                 type="submit"
                                 style={{ position: 'fixed', top: '25%', lest:10, marginBottom: 10, width: '15%' }}>
                                  SIGUENTE
                            <FastForward style={{color: '#50555a'}}/></Button>
                    <Modal.Footer>  
                         
                    </Modal.Footer>
                </Modal>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#f5f5f5' }}>S.T.E.M</Typography>
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

export default Stem;