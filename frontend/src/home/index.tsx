import Menu from '../common/components/Menu/Menu';
import Card from '../common/components/Card';
import Button from '../common/components/Button';

export default function index() {
  const cards = () => { return <Card/>}
  const button = () => { return <Button/>}
  return (
    <div>
        <Menu body={cards()} button={button()} nome={"MÉDICO"} />
    </div>
  )
}
