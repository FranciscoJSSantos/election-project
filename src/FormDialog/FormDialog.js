import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { FaSearch } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import DialogActions from '@mui/material/DialogActions';
import './FormDialog.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const [searchCandidate, setSearchCandidate] = useState('');

  function changeeValueInfo(e){
    setSearchCandidate(e.target.value);
  }

  React.useEffect(() => {
    localStorage.setItem('nomeCandidato', searchCandidate);
  })

  
  return (
    <div>
      <Button className="button_search" onClick={handleClickOpen}>
        <FaSearch/>
      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Pesquisar Candidato
        </DialogTitle>
        <DialogContent className="dialog-content" dividers>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Nome, número, partido..."
              onChange={changeeValueInfo} 
            />
            <IconButton className={classes.iconButton} >
              <SearchIcon />
            </IconButton>
          </Paper>
        </DialogContent>
        <DialogActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
          <Button onClick={handleClose} aria-label="search">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const itemCandidato =  localStorage.getItem('nomeCandidato');