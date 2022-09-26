import Menu from '../common/components/Menu/Menu';
import Consult from '../common/components/ChecklistQuery';
import Button from '../common/components/Button';

export default function index() {

  const checklist = () => {return <Consult />}
  const button = () => { return <Button/>}
  return (
    <div>
        <Menu body={checklist()} button={button()}/>
    </div>
  )
}
