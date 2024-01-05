// Home.js
import React from 'react';
import CardNavBar from '../components/CardNavBar';
import MovieCard from '../components/MovieCard';
import { MovieCardProps } from '../types/Interface';


const Home = () => {
  const movies: MovieCardProps[] = [
    {
      title: "Batman",
      description: "Testemunhe o renascimento do herói em 'Batman: O Cavaleiro das Trevas Ressurge'. Neste capítulo final da trilogia de Christopher Nolan, Gotham enfrenta uma nova ameaça, e Bruce Wayne precisa ressurgir como Batman. Explore as reviravoltas emocionantes, os personagens icônicos e a conclusão épica desta saga sombria. Em nosso site, desvende os segredos por trás da máscara e mergulhe nas trevas que envolvem este capítulo cativante.",
      imageUrl: "batman.jpg",
    },
    {
      title: "Interestelar",
      description: "Embarque em uma odisséia intergaláctica com 'Interestelar'. Dirigido por Christopher Nolan, este épico sci-fi leva você além dos limites do espaço e tempo. Explore a exploração interestelar, buracos de minhoca e a luta pela sobrevivência da humanidade. Nosso site oferece uma análise profunda, curiosidades fascinantes e uma imersão total no universo de 'Interestelar.",
      imageUrl: "inter.jpg",
    },
    {
      title: "velozes e furiosos 7",
      description: "Entre na pista da adrenalina com 'Velozes e Furiosos 7'. Este capítulo eletrizante da saga leva a ação para um novo patamar, com corridas alucinantes, manobras incríveis e homenagens emocionantes a Paul Walker. Explore a família, a velocidade e a emoção intensa que tornam este filme inesquecível. Em nosso site, desbrave os bastidores, descubra curiosidades sobre as cenas de ação e reviva a experiência emocionante que é 'Velozes e Furiosos 7.",
      imageUrl: "velo.jpg",
    },
  ];
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-md flex justify-center items-center text-white">
      <div className="flex flex-row">
        <CardNavBar />
        <div className='flex flex-row justify-center items-start g-4 p-4'>
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
