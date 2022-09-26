import React from 'react';
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export type TableProps = {
  id: number;
  valor: number;
  data_consulta: string;
};

export default function CustomizedTables(props: any) {
  const [banco, setBanco] = useState<TableProps[]>([]);

 
  function deleteRow(id: number) {
    axios.delete(`http://localhost:3333/consulta/${id}`);
  }
  useEffect(() => {
    
  }, [deleteRow(props.id)]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/consulta")
      .then((res) => setBanco(res.data));
  }, []);

  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{ width: 400, backgroundColor: "#daf3ff" }}
      >
        <Table
          sx={{ width: 400, backgroundColor: "#daf3ff" }}
          aria-label="customized table"
        >
          <TableHead sx={{ backgroundColor: "#daf3ff" }}>
            <TableRow sx={{ backgroundColor: "#daf3ff" }}>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Valor</StyledTableCell>
              <StyledTableCell align="right">Data</StyledTableCell>
              <StyledTableCell align="right">Ação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {banco.map((row) => (
              <StyledTableRow key={row.valor}>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.valor}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.data_consulta}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button sx={{bgcolor: "#9be2de"}} variant="contained" type="submit"
                  onClick={() => deleteRow(row.id)}>               
                    Delet
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
