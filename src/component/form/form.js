import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
const [name,setName] = useState("");
const [id,setId] = useState("");
const [role,setRole] = useState("");
const [email,setEmail] = useState("");

const ctaHandler = () =>{
  let user  = {
    name,
    id,
    role,
    email,
  }
  console.log("user" , user);
}

  return (


    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="User" onChange ={(e)=>setName(e.target.value) }/>
      <TextField id="standard-basic" label="Id" onChange ={(e)=>setId(e.target.value) }/>
      <TextField id="standard-basic" label="Role" onChange ={(e)=>setRole(e.target.value) }/>
      <TextField id="standard-basic" label="Email" onChange ={(e)=>setEmail(e.target.value) }/>
<button onClick={ctaHandler}>submit</button>
      
    </form>
  );
}
