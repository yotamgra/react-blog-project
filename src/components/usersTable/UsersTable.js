import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useContext } from "react";
import { BlogContext } from "../../BlogContext";
import { Link } from "react-router-dom";

function createData(name, username, email, id) {
  return { name, username, email, id };
}

const UsersTable = () => {
  const { users, SetUser } = useContext(BlogContext);

  const rows = users.map((user) =>
    createData(user.name, user.username, user.email, user.id)
  );

  return (
    <>
      <h1>Users</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">UserName</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={() => {
                    console.log(row.id-1);
                  SetUser(users[row.id-1]);
                }}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to="/user-posts" className="name-in-table">{row.name}</Link>
                </TableCell>

                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersTable;
