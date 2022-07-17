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

import api from '../api';

function Search(){

  const [open, setOpen] = React.useState(false);

  //pega o valor do estado
  const [getEstado, setEstado] = React.useState('');

  const [getMunicipio, setMunicipio] = React.useState([]);

  const [city, setCity] = React.useState('');

  //está com a lista de estados
  const [getNewEstado, setNewEstado] = React.useState([]);

  React.useEffect(() => {
    api
      .get("?orderBy=nome")
      .then((response) => {
        setNewEstado(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const handleChangeState = (event) => {
    setEstado(String(event.target.value) || '');
  };

  const handleChangeState2 = (event) => {
    setCity(String(event.target.value) || '');
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

  React.useEffect(() => {
    api
      .get(`${getEstado}/distritos`)
      .then((response) => {
        setMunicipio(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [getEstado]);

  return( 
    <div className="search_container">

      <div className="search_dropdown">
        <FaMapMarkerAlt className="search_icon_map"/>
        <p>{city}, {getEstado}</p>
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
                value={getEstado}
                onChange={handleChangeState}
                input={<OutlinedInput label="Estado" 
                key={Math.random() * 100}/>}
                defaultValue=""
              >
                {getNewEstado.map((dados) => (
                    <MenuItem key={dados.id} value={dados.sigla}>{dados.nome}
                    </MenuItem>
                ))}
               
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '96%' }} fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">Município</InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={city}
                onChange={handleChangeState2}
                input={<OutlinedInput label="Município" />}
                defaultValue=""
              >
                {getMunicipio.map((dados) => (
                    <MenuItem key={dados.id} value={dados.nome}>{dados.nome}
                    </MenuItem>
                ))}
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