import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { Switch, Link, Route, NavLink } from "react-router-dom";
import Item from "../../components/Item";

const index = () => {
  return (
    <>
      <Container>
        <Typography variant="h2">Xurpas -Exam</Typography>
        <Typography variant="overline">A simulation of PokeDex App</Typography>

        <Typography mt={2} variant="h5">
          Tech Used:{" "}
        </Typography>
        <Paper elevation={1} sx={{ m: 2, p: 1 }}>
          <Item>Vite.js</Item>
        </Paper>
        <Paper elevation={1} sx={{ m: 2, p: 1 }}>
          <Item>React.js</Item>
        </Paper>
        <Paper elevation={1} sx={{ m: 2, p: 1 }}>
          <Item>React Router v5</Item>
        </Paper>
        <Paper elevation={1} sx={{ m: 2, p: 1 }}>
          <Item>MUI v5</Item>
        </Paper>
        <Paper elevation={1} sx={{ m: 2, p: 1 }}>
          <Item>useContext w/ Custom Hooks</Item>
        </Paper>
        <br />
        <NavLink to="/pokemon" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="warning" size="large">
            See Exam
          </Button>
        </NavLink>
      </Container>
    </>
  );
};

export default index;
