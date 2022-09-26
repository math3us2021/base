import React from 'react'
import { BoxDiv } from './styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Options from '../ButtonOptions';

export default function filter() {
    return (
        <div>
            <BoxDiv action="">
            <div>
                <TextField  sx={{width: 120}} placeholder='Mês' size='small' ></TextField>
            </div>
            <div>
                <TextField  sx={{width: 120}} placeholder='Ano' size='small' ></TextField>
            </div>
            <div>
                <Button sx={{ bgcolor: "#0367a6" }} variant="contained">Buscar</Button>
            </div>
            </BoxDiv>
        </div>
    )
}
