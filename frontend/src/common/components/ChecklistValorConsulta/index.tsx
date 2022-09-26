import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ModalCentral, ModalEsquerda, Externo } from './styled';
import TextField from '@mui/material/TextField';
import TabelaConsulta from '../TabelaConsulta';

/////////////////Botão Select
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 15,
  p: 4,
}
const style1 = {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  width: 470,
  height: 700,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 15,
  p: 4,
}


export type TypeConsulta = {
  valor: number,
  data_consulta: Date,
}

export default function Modal() {
  const [consulta, setConsulta] = React.useState<TypeConsulta[]>([]);
  const [age, setAge] = React.useState('');
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const router = useRouter();
  function close() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Exame não cadastrado!',
      showConfirmButton: false,
      timer: 1300
    })
    router.push('/homeAdm')
  }


  const { register, handleSubmit, formState: { errors } } = useForm<TypeConsulta>();

  const onSubmit = (data: TypeConsulta) => {

    axios.post('http://localhost:3333/consulta', {
      valor: data.valor,
      data_consulta: data.data_consulta,
    })
  }



  return (
    <Externo>

      <div>
        <Box sx={style}>

          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ALTERAR VALOR DA CONSULTA
            </Typography>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>


              <ModalCentral>
                <div>
                  <label>Valor</label>
                  <TextField size='small' id="valor" type="number" placeholder='123456CRM' variant="outlined" maxRows={9} {...register("valor")} />
                </div>
                <div>
                  <label>Data da alteração</label>
                  <TextField size='small' id="data_consulta" type="date" placeholder='123456CRM' variant="outlined" maxRows={9} {...register("data_consulta")} />
                </div>
              </ModalCentral>

              <Button sx={{ bgcolor: "#0367a6" }} variant="contained" type='submit'  >cadastrar</Button>
              <Button variant="contained" color='error' onClick={close}>Cancelar </Button>
            </form>
          </div>
        </Box>
      </div>
      <div>
        <Box sx={style1}>
          <div>

            <TabelaConsulta />
          </div>
        </Box>
      </div>
    </Externo>
  )
}
