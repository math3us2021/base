import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function index(props: any) {
  const router = useRouter();


  return (
    <div>
      <div>
        <li>
          <div onClick={() => { router.push("/home") }} >
            <div>
              <HomeIcon style={{ color: "#0367A6" }} />
            </div>
            <div>
              <Button size="large" style={{ textAlign: "left", color: "#0367A6" }}
              > HOME
              </Button>
            </div>
          </div>
        </li>
      </div>
      <div>
        {props.adm}
      </div>
      <div>
        <li>
          <div onClick={() => { router.push("/login") }}>
            <div>
              <ExitToAppIcon style={{ color: "#0367A6" }} />
            </div>
            <div>
              <Button
                size="large"
                style={{ textAlign: "left", color: "#0367A6" }}
              >SAIR
              </Button>
            </div>
          </div>
        </li>
      </div>
    </div>
  )
}
