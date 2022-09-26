import Menu from '../common/components/Menu/Menu';
import CreateExam from '../common/components/CreateExam';
import Button from '../common/components/Button';


export default function index() {
  const createExam = ()=>{return <CreateExam/>}
  const button = () => { return <Button/>}
  return (
    <div>
        <Menu body={createExam()} button={button()} />
    </div>
  )
}
