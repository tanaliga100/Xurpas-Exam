import { Switch, Link, Route, NavLink } from "react-router-dom";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import React, { useContext } from "react";
import { PokemonContext } from "../../context/poke-context";
import Item from "../../components/Item";

const index = () => {
  const { apiData, isLoading, error } = useContext(PokemonContext);
  return (
    <>
      <Box>
        <Paper elevation={2} sx={{}}>
          <Typography variant="h2" sx={{ px: 3 }}>
            Pokemon
          </Typography>
          <Typography variant="overline" sx={{ mx: 3 }}>
            Lists of all the pokemons{" "}
          </Typography>
        </Paper>
      </Box>

      <Container
        sx={{
          my: 6,
          p: 1,
        }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {apiData?.map((poke) => (
            <Box key={poke.name}>
              <NavLink
                to={`/pokemon/${poke.name}`}
                style={{ textDecoration: "none" }}
              >
                <Paper
                  sx={{
                    m: 1,
                    p: 2,
                    color: "warning.main",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="overline">
                    {poke.name.toString().toUpperCase()}
                  </Typography>
                </Paper>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default index;
