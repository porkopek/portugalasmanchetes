import React from 'react';
import { CircularProgress, Box, Typography } from '@material-ui/core';

interface ILoaderProps {}
export default function Loader({}: ILoaderProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      left={0}
      right={0}
      top={0}
      bottom={0}
      height="100vh"
      width="100vw"
    >
      <CircularProgress />
      <Typography variant="caption" component="span">
        A carregar o conteúdo...
      </Typography>
    </Box>
  );
}
