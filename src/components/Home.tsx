import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome';

const Home = ({ mudarPagina }: { mudarPagina: (pagina: 'home' | 'cadastro' | 'lista') => void }) => {
  return (
    <div className="text-center">
      <FontAwesomeIcon icon="box-open" size="4x" className="text-blue-500 mb-4" />
      <h1 className="text-4xl font-bold mb-8">Cadastro e Listagem de Produtos</h1>
      <div className="space-x-4">
        <button
          onClick={() => mudarPagina('cadastro')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Cadastro
        </button>
        <button
          onClick={() => mudarPagina('lista')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Listagem
        </button>
      </div>
    </div>
  );
};

export default Home;