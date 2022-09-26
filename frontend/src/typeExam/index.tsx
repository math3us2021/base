import Menu from '../common/components/Menu/Menu';
import Card from '../common/components/Card';
import Button from '../common/components/Button';
import ButtonAdm from '../common/components/ButtonAdm';
import ChecklistExam from '../common/components/ChecklistExam';

export default function index() {
  const buttonAdm = () => { return <ButtonAdm/>}
  const checklistExam = () => { return <ChecklistExam/>}
  
  return (
    <div>
        <Menu body={checklistExam()} button={buttonAdm()} nome={"ADMINISTRADOR"}/>
    </div>
  )
}
