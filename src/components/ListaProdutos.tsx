import React, { useEffect, useState } from 'react';

interface Produto {
  nome: string;
  descricao: string;
  valor: number;
  disponivel: boolean;
}

const ListaProdutos = ({ mudarPagina }: { mudarPagina: (pagina: 'home' | 'cadastro' | 'lista') => void }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [ordemCrescente, setOrdemCrescente] = useState(true);

  useEffect(() => {
    const produtosSalvos = localStorage.getItem('produtos');
    if (produtosSalvos) {
      setProdutos(JSON.parse(produtosSalvos));
    }
  }, []);

  const ordenarProdutos = () => {
    const produtosOrdenados = [...produtos].sort((a, b) => ordemCrescente ? a.valor - b.valor : b.valor - a.valor);
    setProdutos(produtosOrdenados);
    setOrdemCrescente(!ordemCrescente);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-6">
      <div className="max-w-lg mx-auto p-6 bg-foreground shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-textPrimary mb-6">Lista de Produtos</h1>
        <button
          onClick={() => mudarPagina('cadastro')}
          className="w-full mb-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Cadastrar Novo Produto
        </button>
        <button
          onClick={ordenarProdutos}
          className="w-full mb-4 p-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Ordenar por Valor
        </button>
        <table className="min-w-full table-auto rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left text-textSecondary">Nome</th>
              <th className="px-4 py-2 text-left text-textSecondary">Valor</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr
                key={index}
                className={`border-t border-gray-600 ${produto.disponivel ? 'bg-green-200' : 'bg-red-200'}`}
                title={produto.disponivel ? 'Disponível para venda' : 'Não disponível para venda'}
              >
                <td className="px-4 py-2 text-gray-900">{produto.nome}</td>
                <td className="px-4 py-2 text-gray-900">
                  {produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => mudarPagina('home')}
          className="mt-4 w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ListaProdutos;