import ServImage01 from "assets/serv-01.jpg";
import ServImage02 from "assets/serv-02.jpg";
import ServImage03 from "assets/serv-03.jpg";
import ServImage04 from "assets/serv-04.jpg";
import ServImage05 from "assets/serv-05.jpg";

const products = [
    {
      id: 1,
      title: "1ª Habilitação Carro e Moto",
      slang: "Primeira-habilitacao-carro-e-moto",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
      image: ServImage01
    },
    {
      id: 2,
      title: "1ª Habilitação Carro",
      slang: "Habilitacao-carro",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
      image: ServImage02
    },
    {
      id: 3,
      title: "1ª Habilitação Moto",
      slang: "Habilitacao-moto",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
      image: ServImage03
    },
    {
      id: 4,
      title: "Mudança de Categoria Caminhão",
      slang: "Mudanca-Categ-Caminhao",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
      image: ServImage04
    },
    {
      id: 5,
      title: "Aulas Avulsas",
      slang: "Aulas-Avulsas",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
      image: ServImage05
    }
  ];

export const useProducts = () => {
    return products;
};

export const useProduct = ({ slang }) => {
    return products.find((p => p.slang === slang));
};
