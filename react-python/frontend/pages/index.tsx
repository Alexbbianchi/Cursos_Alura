import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/components/@types/professor";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {

  const professores: Professor[] = [
    {
      id: 1,
      nome: "Alexssandro",
      foto: "https:github.com/alexbbianchi.png",
      descricao: "Sou formado em análise e desenvolvimento de sistema.",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Jessika",
      foto: "https:github.com/jessikasuniga.png",
      descricao: "Sou formado em análise e desenvolvimento de sistema.",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Alexssandro",
      foto: "https:github.com/alexbbianchi.png",
      descricao: "Sou formado em análise e desenvolvimento de sistema.",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Alexssandro",
      foto: "https:github.com/alexbbianchi.png",
      descricao: "Sou formado em análise e desenvolvimento de sistema.",
      valor_hora: 100
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores} ></Lista>
    </Box>
  );
};

export default Home;
