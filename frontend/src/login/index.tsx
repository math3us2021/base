import React from 'react'
import { Input, Form, BodyLogin, Div } from './style'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useRouter } from 'next/router';


interface IFormInputs {
  email: string
  password: string
}

const schema = Yup.object({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .max(8, 'Senha deve ter no máximo 8 caracteres')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
}).required()

export default function index() {

  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();


  return (
    <BodyLogin>
      <Form >

        <h2>Clinica Lavis</h2>


        <label htmlFor="Email">Email *</label>
        <Input
          type="email"
          id="email"
          placeholder="Digite o email"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Senha *</label>
        <Input
          type="password"
          id="password"
          placeholder="Digite a senha"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <button
          type="submit"
          name="Entrar"
          className="btn btn-primary btn-block"
          onClick={() => { router.push("/homeAdm") }}
        >
          Entrar
        </button>
      </Form>
    </BodyLogin>

  )
}


