import React from 'react';

import { Typography, Grid, Box } from '@mui/material';
import Formulario from './Components/Formulario';
import useStyles from './styles';

const FormularioInscricao = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.imagemFundo}>
      <Grid container spacing={2} sx={styles.container} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography sx={styles.titulo} variant="h3">
            Learn to code by watching others
          </Typography>
          <Typography sx={styles.text}>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorialsis great, but understanding how developers think
            is invaluable.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Formulario />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormularioInscricao;
