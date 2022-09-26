import Menu from '../common/components/Menu/Menu';
import ButtonAdm from '../common/components/ButtonAdm';
import ChecklistValorConsulta from '../common/components/ChecklistValorConsulta';

export default function index() {
  const buttonAdm = () => { return <ButtonAdm/>}
  const checklistValorConsulta = () => { return <ChecklistValorConsulta/>}
  
  return (
    <div>
        <Menu body={checklistValorConsulta()} button={buttonAdm()} nome={"ADMINISTRADOR"}/>
    </div>
  )
}
