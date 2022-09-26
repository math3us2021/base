import Menu from '../common/components/Menu/Menu';
import Card from '../common/components/Card';
import Button from '../common/components/Button';
import ButtonAdm from '../common/components/ButtonAdm';
import CadastroMedico from '../common/components/CadastroMedico';

export default function index() {
  const buttonAdm = () => { return <ButtonAdm/>}
  const cadastroMedico = () => { return <CadastroMedico/>}
  
  return (
    <div>
        <Menu body={cadastroMedico()} button={buttonAdm()} nome={"ADMINISTRADOR"}/>
    </div>
  )
}
