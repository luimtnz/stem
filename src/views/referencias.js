import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";



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
        <Modal> 
          <Modal.Header >
          </Modal.Header>
        </Modal>
        <Header/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#ffb6c1'}}></Typography>
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