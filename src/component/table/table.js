import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Data } from '../userData/data'
import { useState } from 'react';
import UserList from '../userData/userlist';
import Button from '@material-ui/core/Button';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Form from '../form/form'
const useStyles = makeStyles({
  table: {
    Width: 650,

  },
});





export default function BasicTable() {
  const classes = useStyles();
  const [users, setUser] = useState(Data)

  const deleteHandler = (index) => {
    // console.log("index" , index);
    let newUser = users.filter((user, i) => {
      if (i !== index) {
        return user
      }
    })

    setUser([...newUser])
    console.log("newUser", newUser);
  }


  const [user, setName] = useState("");
  const [id, setId] = useState("");
  const [userRole, setRole] = useState("");
  const [Email, setEmail] = useState("");

  const ctaHandler = () => {
    let userNew = {
      user,
      id,
      userRole,
      Email,
    }
    console.log("user", userNew);

    setUser([...users, userNew])
    setName("");
    setId("");
    setRole("");
    setEmail("");


  }



  return (
    <>
      <TextField id="standard-basic" label="Name" style={{ marginRight: 10 }} onChange={(e) => setName(e.target.value)} />
      <TextField id="standard-basic" label="Id" style={{ marginRight: 10 }} onChange={(e) => setId(e.target.value)} />
      <TextField id="standard-basic" label="Role" style={{ marginRight: 10 }} onChange={(e) => setRole(e.target.value)} />
      <TextField id="standard-basic" label="Email" style={{ marginRight: 10 }} onChange={(e) => setEmail(e.target.value)} />
      <TextField id="standard-basic" label="Extra Permissions" style={{ marginRight: 10 }} />


      {/* <input type="text" value={user} onChange ={(e)=>setName(e.target.value) }/> <br/>
<input type="text" value={id} onChange ={(e)=>setId(e.target.value)}/> <br/>
<input type="text" value={userRole} onChange ={(e)=>setRole(e.target.value) }/> <br/>
<input type="text" value={Email} onChange ={(e)=>setEmail(e.target.value) }/> <br/> */}
      <Button variant="contained" color="primary" onClick={ctaHandler} style={{ marginTop: 12 }}>
        Add user
      </Button>


      {/* <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
          <TableCell >No.</TableCell>

            <TableCell >User Name </TableCell>
            <TableCell >User Id</TableCell>
            <TableCell >User Role</TableCell>
            <TableCell >User Email</TableCell>
            
          </TableRow>
        </TableHead>
        

        {
          users.map((item,index)=>{
            return(
              <UserList index={index} user={item} deleteHandler={deleteHandler}/>
            )}
          )}

       

      </Table>
    </TableContainer> */}


      {/* NEW TABLE */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead >
            <TableRow>
              <TableCell >User Name</TableCell>
              <TableCell align="">User Id</TableCell>
              <TableCell align="">User Role</TableCell>
              <TableCell align="">User Email</TableCell>
            </TableRow>
          </TableHead> */}


          {
            users.map((item, index) => {
              return (
                <UserList index={index} user={item} deleteHandler={deleteHandler} />
              )
            }
            )}
        
        </Table>
      </TableContainer>
    </>
  );
}
