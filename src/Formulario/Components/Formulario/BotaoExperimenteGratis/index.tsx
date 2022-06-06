import React from 'react';

import { Typography, Box } from '@mui/material';
import useStyles from './styles';

const BotaoExperimenteGratis = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <Typography component="span" sx={styles.titulo}>
        Try it free 7 days
      </Typography>
      <Typography component="span" sx={styles.text}>
        then $20/mo. thereafter
      </Typography>
    </Box>
  );
};

export default BotaoExperimenteGratis;
