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
import vid1 from '../imagen/Video 1.mp4';
import vid2 from '../imagen/Video 2.mp4';

const videos = [vid1,vid2]





class videosm extends React.Component {

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
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#f5f5f5' }}></Typography>
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

export default videosm;