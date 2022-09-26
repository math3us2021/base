import Menu from '../common/components/Menu/Menu';
import BoxTable from '../common/components/BoxTable';
import ButtonAdm from '../common/components/ButtonAdm';

export default function index() {
  const buttonAdm = () => { return <ButtonAdm/>}
  const boxTable = () => { return <BoxTable/>}
  
  return (
    <div>
        <Menu body={boxTable()} button={buttonAdm()} nome={"ADMINISTRADOR"}/>
    </div>
  )
}
