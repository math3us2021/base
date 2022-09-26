import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ModalCentral, ModalEsquerda, Externo } from './styled';
import TextField from '@mui/material/TextField';
import TabelaConsulta from '../TabelaExam';

/////////////////Botão Select
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 600,
  height: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 15,
  p: 4,
}
const style1 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  // justifyContent: 'center',
  width: 670,
  height: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 15,
  p: 4,
}

export type TypeEmployees = {
  type_exam: string,
  valor: number,
  data_exam: Date,
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
    router.push('/homeAdm')
  }


  const { register, handleSubmit, formState: { errors } } = useForm<TypeEmployees>();

  const onSubmit = (data: TypeEmployees) => {
    axios.post('http://localhost:3333/exam', {
      type_exam: data.type_exam,
      valor: data.valor,
      data_exam: data.data_exam,
    })
  }


  return (
    <Externo>

     
        <div>
          <Box sx={style}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CADASTRO DE EXAME
              </Typography>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>



                <ModalCentral>
                  <ModalEsquerda>
                    <label>Tipo de exame</label>
                    <TextField size='small' id="type_exam" type="text" placeholder='Colonoscopia' variant="outlined" maxRows={9} {...register("type_exam")} />
                  </ModalEsquerda>
                </ModalCentral>

                <ModalCentral>
                  <div>
                    <label>Valor</label>
                    <TextField size='small' id="valor" type="number" placeholder='123456CRM' variant="outlined" maxRows={9} {...register("valor")} />
                  </div>
                  <div>
                    <label>Data do exame</label>
                    <TextField size='small' id="data_exam" type="date" placeholder='123456CRM' variant="outlined" maxRows={9} {...register("data_exam")} />
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
