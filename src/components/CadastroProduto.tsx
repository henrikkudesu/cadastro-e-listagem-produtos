import React, { useState } from 'react';

interface Produto {
  nome: string;
  descricao: string;
  valor: number;
  disponivel: boolean;
}

const CadastroProduto = ({ mudarPagina }: { mudarPagina: (pagina: 'home' | 'cadastro' | 'lista') => void }) => {
  const [produto, setProduto] = useState<Produto>({
    nome: '',
    descricao: '',
    valor: 0,
    disponivel: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: name === 'valor' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const produtosSalvos = localStorage.getItem('produtos');
    const produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];

    produtos.push(produto);

    localStorage.setItem('produtos', JSON.stringify(produtos));

    mudarPagina('lista');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-6">
      <div className="max-w-md w-full bg-foreground shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-textPrimary mb-6">Cadastro de Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-textSecondary">Nome do Produto</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={produto.nome}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descricao" className="block text-sm font-medium text-textSecondary">Descrição</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={produto.descricao}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="valor" className="block text-sm font-medium text-textSecondary">Valor</label>
            <input
              type="number"
              id="valor"
              name="valor"
              value={produto.valor}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
              step="0.01"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-textSecondary">Disponível para Venda</label>
            <div className="flex items-center space-x-4 mt-2">
              <div>
                <input
                  type="radio"
                  id="sim"
                  name="disponivel"
                  checked={produto.disponivel === true}
                  onChange={() => setProduto({ ...produto, disponivel: true })}
                  className="mr-2"
                />
                <label htmlFor="sim">Sim</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="nao"
                  name="disponivel"
                  checked={produto.disponivel === false}
                  onChange={() => setProduto({ ...produto, disponivel: false })}
                  className="mr-2"
                />
                <label htmlFor="nao">Não</label>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="w-full py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Cadastrar Produto
            </button>
          </div>
        </form>
        <button
          onClick={() => mudarPagina('home')}
          className="mt-4 w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default CadastroProduto;