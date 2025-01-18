import React, { useState } from 'react';
import Home from './components/Home';
import CadastroProduto from './components/CadastroProduto';
import ListaProdutos from './components/ListaProdutos';

function App() {
  const [pagina, setPagina] = useState<'home' | 'cadastro' | 'lista'>('home');

  const mudarPagina = (novaPagina: 'home' | 'cadastro' | 'lista') => {
    setPagina(novaPagina);
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary flex items-center justify-center">
      {pagina === 'home' && <Home mudarPagina={mudarPagina} />}
      {pagina === 'cadastro' && <CadastroProduto mudarPagina={mudarPagina} />}
      {pagina === 'lista' && <ListaProdutos mudarPagina={mudarPagina} />}
    </div>
  );
}

export default App;