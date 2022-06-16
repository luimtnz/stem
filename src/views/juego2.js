import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import video from '../videos/Relacion entre industria 4.0 y STEM.mp4';
import Button from '@material-ui/core/Button';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';

const preguntas =[
  {
    pregunta: '¿Cuáles disciplinas han ayudado a muchos países a mejorar condiciones de vida, según el video?',
    opcion_1: 'Psicología y mentalidad',
    opcion_2: 'Matemáticas y filosofía',
    opcion_3: 'Ciencia y tecnología',
    opcion_4: 'Ética y cultura',
    respuesta: 'Ciencia y tecnología'
  }, 
  {
    pregunta: ' ¿Cuál de los siguientes factores se considera una restricción para la innovación, de acuerdo con la información del video?',
    opcion_1: 'Falta de formación profesional',
    opcion_2: 'Indisciplina en las escuelas',
    opcion_3: 'Desorganización en la política de un país',
    opcion_4: 'Inseguridad urbana',
    respuesta: 'Falta de formación profesional'
  },
  {
    pregunta: '¿De acuerdo con el video, cuál sería la meta de la 4ta revolución industrial desde la perspectiva de la academia y el sector privado?',
    opcion_1: 'Trabajar y monetizar',
    opcion_2: 'Adaptarse y sobrevivir',
    opcion_3: 'Pensar y ejecutar',
    opcion_4: 'Incluirse y sentirse identificado',
    respuesta: 'Adaptarse y sobrevivir'
  },
  {
    pregunta: '¿Cuáles cualidades se deberían potenciar en las futuras generaciones, según la información presentada?',
    opcion_1: 'Sinergia y colaboración',
    opcion_2: 'Rapidez y versatilidad',
    opcion_3: 'Honestidad y responsabilidad',
    opcion_4: 'Creatividad e innovación ',
    respuesta: 'Maquina a vapor '
  }
]

class juego2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      cambio: 0,
    };

    this.videoRef = React.createRef();
    
  }
  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Header />
                <video src={video} style={{
                  width: 1080, 
                  height: 400, 
                  display: 'block', 
                  justifycontent: 'center',
                  alignitems: 'center',
                  margin: 'auto',
                  marginTop:10 }}
                   controls ></video> 
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Table style={{width: '90%'}}>
                  <TableHead>    
                    <TableRow>
                      <TableCell>
                      <Typography style={{ AlignItems: 'center'}}
                      ><label for="preguntas">{preguntas[this.state.cambio].pregunta}</label>
                      </Typography>
                      <input
                          onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                          type="radio" id="preguntas" name="preguntas" 
                          value={preguntas[this.state.cambio].opcion_1}/>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_1}</label>
                      <input 
                          onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                          type="radio" id="preguntas" name="preguntas" value={preguntas[this.state.cambio].opcion_2}></input>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_2}</label>
                      <input
                         onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                         type="radio" id="preguntas" name="preguntas" value={preguntas[this.state.cambio].opcion_3}></input>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_3}</label>
                    <input
                         onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                         type="radio" id="preguntas" name="preguntas" value={preguntas[this.state.cambio].opcion_4}></input>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_4}</label>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Button onClick={() => this.setState({cambio: (this.state.cambio - 1 < 0) ? 0 : this.state.cambio - 1})}
                         variant="contained"
                         color= ''
                         type="submit"
                         style={{ position: 'fixed', top: '70%', lest: 50, marginBottom: 10, width: '15%' }}><FastRewind style={{color: '#50555a'}}/>
                            ANTERIOR  
                     </Button>
                         <Button onClick={() => this.setState({cambio: (this.state.cambio + 1 < -1) ? 0 : this.state.cambio + 1})}
                                 variant="contained"
                                 color= ''
                                 type="submit"
                                 style={{ position: 'fixed', top: '70%', right: 50, marginBottom: 10, width: '15%' }}>
                                  SIGUENTE
                            <FastForward style={{color: '#50555a'}}/></Button>
                  </TableBody>
                </Table>
              </Paper>      
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default juego2;