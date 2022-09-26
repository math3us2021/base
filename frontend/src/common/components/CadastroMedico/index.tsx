import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ModalCentral, ModalEsquerda, Externo } from './styled';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 700,
  height: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 15,
  p: 4,
}


export type TypeEmployees = {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  email: string;
  password: string;
  especialidade: string;
  crm: string;
  estado_crm: string;
}

export default function Modal() {

  const [age, setAge] = React.useState('');
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
 


  const { register, handleSubmit, formState: { errors } } = useForm<TypeEmployees>();

  const onSubmit = (data: TypeEmployees) => {
    axios.post('http://localhost:3333/doctor', {
      name: data.name,
      cpf: data.cpf,
      rg: data.rg,
      email: data.email,
      password: data.password,
      especialidade: data.especialidade,
      crm: data.crm,
      estado_crm: data.estado_crm,
    })
    cadastro()
  }
  function cadastro() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Médico cadastrado!',
      showConfirmButton: false,
      timer: 1300
    })
    router.push('/homeAdm')
  }

  return (
    <Externo>
          <Box sx={style}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CADASTRO DE MÉDICO
              </Typography>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>

              <ModalCentral>
              <ModalEsquerda>
                <span>Nome</span>
                <TextField size='small' id="name"  variant="outlined" {...register("name")} />
              </ModalEsquerda>

            </ModalCentral>

            <ModalCentral>
              <div>
                <label>CPF</label>
                <TextField size='small' id="cpf" type="cpf"  variant="outlined" {...register("cpf")} />
              </div>
              <div>
                <label>RG</label>
                <TextField size='small' id="rg" type="string"  variant="outlined" 
                {...register("rg")}/>
              </div>

            </ModalCentral>
            <ModalCentral>
              <div>
                <label>Email</label>
                <TextField sx={{ width: '360px' }} size='small' id="email" type="email" variant="outlined"  {...register("email")} />
              </div>
              <div>
                <label>Senha de acesso</label>
                <TextField size='small' id="password" type="string" variant="outlined" 
                {...register("password")} />
              </div>
            </ModalCentral>
            <ModalCentral>
              <div>
                <label>Especialidade</label>
                <TextField size='small' id="especialidade" type="text"  variant="outlined"  {...register("especialidade")} />
              </div>
              <div>
                <label>CRM</label>
                <TextField size='small' id="crm" type="text"  variant="outlined"  {...register("crm")} />
              </div>
              <div>
                <label>Estado do CRM</label>
                <TextField size='small' id="estado_crm" type="text"  variant="outlined"  {...register("estado_crm")} />
              </div>
        
            

            </ModalCentral>
            


                <Button sx={{ bgcolor: "#0367a6" }} variant="contained" type='submit'  >cadastrar</Button>
                <Button variant="contained" color='error' onClick={close}>Cancelar </Button>
              </form>
            </div>
          </Box>
       
       
     
    </Externo>

  )
}
