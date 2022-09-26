import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function buttonModel(props: any) {
  const router = useRouter();


  return (
    <div>
      <div>
        <li>
          <div onClick={() => { router.push(props.rota) }} >
            <div>
              {/* <AccountBoxIcon style={{ color: "#0367A6" }} /> */}
              {props.icon}
            </div>
            <div>
              <Button size="large" style={{ textAlign: "left", color: "#0367A6" }}
              > {props.name}
              </Button>
            </div>
          </div>
        </li>
      </div>
    </div>

  )
}
