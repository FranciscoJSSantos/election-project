import React from 'react';
import './Search.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import FormDialog from '../FormDialog/FormDialog';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'




function Search(){

  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleChangeState = (event) => {
    setState(Number(event.target.value) || '');
  };

  const handleChangeCity = (event) => {
    setCity(Number(event.target.value) || '');
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

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

  return( 
    <div className="search_container">
      <div className="search_dropdown">
        <FaMapMarkerAlt className="search_icon_map"/>
        <p>Aracaju, SE</p>
        <IoIosArrowDown className="search_icon_arrow" onClick={handleClickOpen}/>
      </div>

      <div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Pesquisar Local
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" sx={{ display: 'grid', alignItems: 'center'}}>
          <FormControl sx={{ m: 1, width: '96%' }} >
              <InputLabel id="demo-simple-select-autowidth-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={state}
                onChange={handleChangeState}
                input={<OutlinedInput label="Estado" />}
              >
                <MenuItem value={10}>Sergipe</MenuItem>
                <MenuItem value={20}>São Paulo</MenuItem>
                <MenuItem value={30}>Bahia</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '96%' }} fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">Município</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={city}
                onChange={handleChangeCity}
                input={<OutlinedInput label="Município" />}
              >
                <MenuItem value={10}>Aracaju</MenuItem>
                <MenuItem value={20}>Lagarto</MenuItem>
                <MenuItem value={30}>Itabaiana</MenuItem>
                <MenuItem value={40}>São Cristóvão</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
          <Button onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>

      <div>
        <FormDialog/>
      </div>
    </div>
  )
}

export default Search;