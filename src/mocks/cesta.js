import LogoImagem from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brocolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abobora.png";

export const cestaMock = {
  header: {
    title: "Detalhe da cesta",
  },
  details: {
    title: "Cesta de Verduras",
    logoSrc: LogoImagem,
    nameFarm: "Jenny Jack Farm",
    description:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha.",
    price: "R$ 40,00",
    buy: "Comprar",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};
