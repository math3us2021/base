import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ModalCentral, ModalEsquerda, Externo } from './styled';
import TextField from '@mui/material/TextField';

/////////////////Botão Select
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import {useRouter} from 'next/router';


const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 600,
  height: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 15,
  p: 4,

}


export type TypeEmployees = {
  nome: String,
  cpf: String,
  email: String,
  perfil: String,
}

export default function Modal() {
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
    router.push('/home')
  }


  const { register, handleSubmit, formState: { errors } } = useForm<TypeEmployees>();

  const onSubmit = (data: TypeEmployees) => {
    axios.post('http://localhost:4000', {
      nome: data.nome,
      cpf: data.cpf,
      email: data.email,
      perfil: data.perfil
    })
  }


  return (
    <Externo>


      <Box sx={style}>
        <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            CADASTRO DE CONSULTA
          </Typography>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <ModalCentral>
              <div>
                <label>CRM (busca automática)</label>
                <TextField size='small' id="cpf" type="number" placeholder='123456CRM' variant="outlined" maxRows={9} {...register("cpf")} />
              </div>
              <div>
                <label>Tipo de exame</label>
                <TextField size='small' id="cpf" type="number" placeholder='123456CRM' variant="outlined" maxRows={9} {...register("cpf")} />
              </div>
            </ModalCentral>

            <ModalCentral>
              <ModalEsquerda>
                <span>Nome do médico</span>
                <TextField size='small' id="name" type="text" {...register("nome")} />
              </ModalEsquerda>
            </ModalCentral>
         

            <ModalCentral>
              <ModalEsquerda>
                <span>Nome do paciente</span>
                <TextField size='small' id="name" type="text" {...register("nome")} />
              </ModalEsquerda>
            </ModalCentral>
            <ModalCentral>
              <div>
                <label>CPF Paciente</label>
                <TextField size='small' placeholder='123456789-77' id="cpf" type="number" variant="outlined" maxRows={12} {...register("cpf")} />
              </div>
            </ModalCentral>



            <Button sx={{bgcolor: "#0367a6"}}variant="contained" type='submit'  >cadastrar</Button>
            <Button variant="contained" color='error' onClick={close}>Cancelar </Button>
          </form>
        </div>
      </Box>
    </Externo>
  )
}
