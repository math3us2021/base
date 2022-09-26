import * as React from 'react';
import Box from '@mui/material/Box';


export default function BoxSx(props: any) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 1000,
          height: 50,
          backgroundColor: '#0367a6',
          borderRadius: 2,
          boxShadow: 23,
          color: '#fff',
          fontSize: 40,
          marginBottom: 2,
        }}
      >
        <div>
          SETEMBRO
        </div>
      </Box>
    </div>

  );
}
