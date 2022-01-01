import React from "react";
import PropTypes from "prop-types";
import { withStyles ,makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    background: ""
  },
  input: {
    color: "white"
  },
  name:{
      color:"white"
  }
};
const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none',
        color:'red',
        
    }
}))
function Inputs(props) {
  const { classes ,name, label, value,error=null, onChange} = props;
  const classes1 = useStyles();
  return (
    <TextField
    variant="outlined"
    label={label}
    name={name}
    // required = "true"
    value={value}
    onChange={onChange}
    className={classes.root}
    classes1={{ root: classes1.root, label: classes1.label }}
    {...(error && {error:true,helperText:error})}

      defaultValue="color"
     
      InputProps={{
        className: classes.input
      }}
    />
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Inputs);