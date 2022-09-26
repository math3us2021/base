import React, { useEffect, useState } from "react";
import axios from "axios";
import { BoxDiv } from './styled';
import { DataGrid, GridRowsProp, GridColDef, GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";



export type BancoDoctor = {
  id: Number;
  name: string;
  cpf: string;
  rg: string;
  especialidade: string;

}

export default function App() {

  const [doctor, setDoctor] = useState<BancoDoctor[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/doctor")
      .then(res => {
        setDoctor(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);
  console.log(doctor);
  const columns: GridColumns = [
    {
      field: 'Nome',
      // headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 200,
      renderCell: (cellValues: GridRenderCellParams<BancoDoctor>) => {
        return (
          <div>
            <p>{cellValues.row.name}</p>
            </div>
        )
      }
    },

    {
      field: 'especialidade',
      // headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 200,
      renderCell: (cellValues: GridRenderCellParams<BancoDoctor>) => {
        return (
          <div>
            <p>{cellValues.row.especialidade}</p>
            </div>
        )
      }
    },
    {
      field: 'Qtd de consultas',
      // headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 200,
      renderCell: (cellValues: GridRenderCellParams<BancoDoctor>) => {
        return (
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: `var(--${cellValues.row.cpf})`,
            }}>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{cellValues.row.tipo}</Typography>
          </div>
        )
      }
    },
    {
      field: 'Valor Total',
      // headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 200,
      renderCell: (cellValues: GridRenderCellParams<BancoDoctor>) => {
        return (
          <div>
            {cellValues.row.name}
          </div>
        )
      }
    },
    {
      field: 'Detalhado',
      // headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 200,
    },
    
  ];


  return (
    <div>

      <BoxDiv>
    
          <div
            style={{ height: 350, width: 1000 }}>
            <DataGrid rows={doctor} columns={columns}
              sx={{
                height: 350,
                boxShadow: 23,
                width: '100%', '& .super-app-theme--header': {
                  backgroundColor: '#0367a6', color: '#fff',
                },
                '& .super-app.negative': {
                  backgroundColor: 'rgba(157, 255, 118, 0.49)',
                  color: '#1a3e72',
                  fontWeight: '600',
                },
                '& .super-app.positive': {
                  backgroundColor: '#d47483',
                  color: '#1a3e72',
                  fontWeight: '300',
                },
                color: '#333',
              }} />
          </div>
      
      </BoxDiv>



    </div>
  )
}
