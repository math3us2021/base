import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '../Table';
import Mes from '../Mes';
import Filter from '../Filter';
import FilterData from '../FilterData';
import { Externo } from './styled';


export default function BoxSx(props: any) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: 500,
          backgroundColor: '#DAF3FF',
          borderRadius: 3,
          boxShadow: 1,
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <Externo>
          <div>
          <FilterData />
          </div>
          <div>
            <Mes />
          </div>
          <div>
            <Filter />
          </div>
          <div>
            <Table />
            {props.children}
          </div>
        </Externo>
      </Box>
    </div>


  );
}
