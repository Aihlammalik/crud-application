import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth:170,
    },
  });


function UserList({ user, index, deleteHandler }) {
    const classes = useStyles();
    return (
        <div>


{/* NEW TABLE */}
<TableContainer component={Paper}>
<Table className={classes.table} aria-label="simple table">
<TableBody>
         
            <TableRow className={classes.table}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right" className={classes.table}>{user.user}</TableCell>
              <TableCell align="right" className={classes.table}>{user.id}</TableCell>
              <TableCell align="right" className={classes.table}>{user.userRole}</TableCell>
              <TableCell align="right" className={classes.table}>{user.Email}</TableCell>
              <TableCell align="right" className={classes.table}>  <Button variant="outlined" color="secondary" onClick={() => deleteHandler(index)}> delete
      </Button> </TableCell>
      <TableCell align="right" className={classes.table}>  <Button variant="outlined" color="primary" > Update
      </Button> </TableCell>
            </TableRow>
       
        </TableBody>
        </Table>
        </TableContainer>

            {/* <TableBody>
                <TableRow >


                    <TableCell align="">{index + 1}</TableCell>
                    <TableCell >{user.user}</TableCell>
                    <TableCell >{user.id}</TableCell>
                    <TableCell align="right">{user.userRole}</TableCell>
                    <TableCell align="">{user.Email}</TableCell>
                    <TableCell align="right">  <Button variant="outlined" color="secondary" onClick={() => deleteHandler(index)}> delete
      </Button> </TableCell>
                </TableRow>

            </TableBody> */}
        </div>
    )
}
export default UserList;