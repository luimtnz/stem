import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



class referencias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      show: false,
    }
  }


  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#f0ffff' }}>
        <Header/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#ffb6c1'}}></Typography>
                   <object
                   data={require('../videcien/REFERENCIAS.pdf')}
                   style={{width: 900,
                    height: 700,
                     display: 'block',
                      justifycontent: 'center',
                      alignitems: 'center',
                      margin: 'auto',
                      marginTop:10}}>
                       
                   </object>
         <Container>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Paper>
                <Table style={{textAlign: 'center', width: '95%'}}>
                  <TableHead >
                   </TableHead>
               </Table>
              </Paper>      
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default referencias;