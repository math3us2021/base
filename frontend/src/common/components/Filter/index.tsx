import React, { useEffect, useState } from 'react'
import { BoxDiv } from './styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';



export type BancoDoctor = {
    id: Number;
    name: string;
    cpf: string;
    rg: string;
    especialidade: string;
}

export default function filter() {
    const [doctor, setDoctor] = useState<BancoDoctor[]>([]);
    const [name, setName] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);

    function filterName(name: string) {}

        useEffect(() => {
            axios.get(`http://localhost:3333/doctor/name/${name}`)
                .then(res => {
                    setDoctor(res.data);
                }).catch(err => {
                    console.log(err);
                })
        }, []);

    


    console.log(name);
    return (
        <div> 
            <BoxDiv>
                <div>
                    <TextField placeholder='Digite o nome do médico' size='small'
                        value={name} onChange={(e) => setName(e.target.value)}
                    ></TextField>
                </div>
                <div>
                    <Button sx={{ bgcolor: "#0367a6" }} variant="contained"
                        onClick={() => filterName(name)}
                    >Buscar</Button>
                </div>
            </BoxDiv>
         
        </div>
    )
}
 