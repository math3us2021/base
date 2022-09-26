import * as React from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';


export default function BoxSx(props: any) {

  const router = useRouter();
  
  return (
    <Box
      sx={{
        width: 250,
        height: 250,
        margin: 5,
        borderRadius: 3,
        backgroundColor: '#9be2de',
        '&:hover': {
          backgroundColor: '#01afce',
          opacity: [0.9, 0.8, 0.7],
                },
        
      }}
      onClick={() => router.push(props.link)}
    >
        {props.card}
    </Box>
  );
}
