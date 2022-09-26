import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ButtonModel from '../ButtonModel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



export default function buttonAdm(props: any) {
  const router = useRouter();

  const cadMedico = () => {return <AccountBoxIcon style={{ color: "#0367A6" }} />};
  const typeExam = () => {return <AssignmentIcon style={{ color: "#0367A6" }} />};
  const vlConsulta = () => {return <AttachMoneyIcon style={{ color: "#0367A6" }} />};
  const home = () => {return <HomeIcon style={{ color: "#0367A6" }} />};
  const exit = () => {return <ExitToAppIcon style={{ color: "#0367A6" }} />};

  return (
    <div>
      <div>
      <ButtonModel icon={home()} name={"Home"} rota={"/homeAdm"} />
      </div>
      <div>
      <ButtonModel icon={cadMedico()} name={"cad médico"} rota={"/cadastroMedico"} />
      </div>
      <div>
      <ButtonModel icon={typeExam()} name={"Tipo Exame"} rota={"/typeExam"}/>
      </div>
      <div>
      <ButtonModel icon={vlConsulta()} name={"Vl consulta"} rota={"/vlConsulta"} />
      </div>
      <div>
      <ButtonModel icon={exit()} name={"Sair"} rota={"/login"} />
      </div>
     
    </div>

  )
}
