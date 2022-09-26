import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";
import { CardExterno } from "./styled";

export default function index() {
  return (
    <CardExterno>
      <div>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontStyle: "italic", color: "#0367A6" }}
        >
          Consultas
        </Typography>
      </div>
      <div>
        <AddCircleOutlineIcon sx={{ color: "#0367A6" , fontSize: 80}} />
      </div>
    </CardExterno>
  );
}
