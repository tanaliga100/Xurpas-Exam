import React, { useEffect } from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Stack,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useState } from "react";
import Item from "../../components/Item";
import Wrapper from "../../components/Wrapper";

const index = () => {
  // ALL PROPERTIES
  const [details, setDetails] = useState([]);

  // INDIVIDUAL PROPERTY
  const [pokeName, setPokeName] = useState([]);
  const [pokeImages, setPokeImages] = useState("");
  const [pokeType, setPokeType] = useState([]);
  const [pokeAbilities, setPokeAbilities] = useState([]);
  const [pokeStats, setPokeStats] = useState([]);

  const params = useParams();
  console.log(params);

  //   FETCH SINGLE POKE
  let url = `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`;
  // HELPER FUNCTION
  async function fetchCurrentPoke() {
    const request = await fetch(url);
    const response = await request.json();
    setDetails(response);
    setPokeImages(response.sprites);
    setPokeName(response.name);
    setPokeType(response.types);
    setPokeAbilities(response.abilities);
    setPokeStats(response.stats);
  }
  useEffect(() => {
    fetchCurrentPoke();
  }, [url]);

  console.log("PokeDetails", details);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "",
          color: "primary.main",
        }}
      >
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
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <Wrapper>
          <Container sx={{}}>
            <Box key={pokeImages.back_default}>
              <Paper
                elevation={1}
                sx={{
                  width: "max-content",
                  height: "max-content",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={pokeImages.back_default}
                  style={{ width: "200px", height: "200px" }}
                />
              </Paper>
            </Box>
            <Typography variant="h4">
              <Box sx={{ m: 1, p: 2 }} key={pokeName} elevation={1}>
                {" "}
                <Typography
                  variant="body1"
                  sx={{ m: 1, p: 2, color: "warning.main" }}
                >
                  {" "}
                  {pokeName}
                </Typography>
              </Box>
            </Typography>
          </Container>
          <Container sx={{ p: 1, color: "success.main" }}>
            <Typography variant="overline"> TYPES :</Typography>
            {pokeType.map((t) => (
              <Paper>
                <Box sx={{ m: 1, p: 1 }} key={t.slot}>
                  <Typography variant="overline">{t.type.name}</Typography>
                </Box>
              </Paper>
            ))}
          </Container>
        </Wrapper>

        <Wrapper>
          <br />
          <Container sx={{ p: 1, color: "error.main" }}>
            <Typography variant="overline"> ABILITIES :</Typography>
            {pokeAbilities.map((a) => (
              <Paper>
                <Box sx={{ m: 1, p: 1 }} key={a.slot}>
                  <Typography variant="overline">{a.ability.name}</Typography>
                </Box>
              </Paper>
            ))}
          </Container>
          <br />
          <Container sx={{ p: 1, color: "primary.main" }}>
            <Typography variant="overline"> STATS :</Typography>

            {pokeStats.map((s) => (
              <Box>
                <Paper sx={{ m: 1 }} key={s.stat.name}>
                  <Typography variant="overline">
                    {s.stat.name} : {s.base_stat}{" "}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Container>
        </Wrapper>
      </Container>
    </>
  );
};

export default index;
