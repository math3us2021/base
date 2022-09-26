import styled from 'styled-components'

export const BodyLogin = styled.div`
 
`
export const Div = styled.div`
    height: 100vh;
      background-size: cover;

    box-sizing: border-box;
    color: #333;
`


export const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 5px;
  font-size: 1rem;
  margin-bottom: 20px;
  border-radius: 5px;
  border-color: #03acee;
  focus {
    border-bottom: 2px solid #4d42fa;
    background-size: cover;
    border: none;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://img.freepik.com/vetores-gratis/design-de-modelo-de-papel-de-parede-medico-abstrato_53876-61802.jpg');
  background-size: cover;
  
  width: 500px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 5px;
  border: 1px solid #0367A6;
  
  h2 {
    font-style: italic;
    font-size: 3rem;
    color: #0367A6; 
  }
  p {
    color: red;
    font-size: 1.5rem;
    
  }
 
  button {
    background-color: #0367A6;
    font-size: 1rem;
    color: #fff;
    width: 200px;
    height: 50px;
    // padding: 6px;
    border-radius: 5px;
    border-color: #0367A6;
  }
  label{
    margin-right: 300px;
    color: #0367A6;
  }
`;
