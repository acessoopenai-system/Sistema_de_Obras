// Mock da lista de obras para preencher a tabela
document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('obras-tbody');
  const data = [
    { id: 18, cliente: 'João Silva', obra: 'Residencial Jardim', status: 'Em andamento', inicio: '01/08/2025', previsao: '15/12/2025', orcamento: 'R$ 388.000' },
    { id: 11, cliente: 'Comercial PE Ltda', obra: 'Loja Centro', status: 'Planejada', inicio: '20/09/2025', previsao: '30/03/2026', orcamento: 'R$ 520.000' },
    { id: 9, cliente: 'Maria Souza', obra: 'Casa Praia', status: 'Concluída', inicio: '05/01/2025', previsao: '20/06/2025', orcamento: 'R$ 260.000' },
  ];

  tbody.innerHTML = data.map(row => `
    <tr>
      <td>${row.id}</td>
      <td>${row.cliente}</td>
      <td>${row.obra}</td>
      <td>${row.status}</td>
      <td>${row.inicio}</td>
      <td>${row.previsao}</td>
      <td>${row.orcamento}</td>
      <td>
        <button class="ghost" onclick="window.location='obra-detalhe.html'">Abrir</button>
        <button class="danger">Excluir</button>
      </td>
    </tr>
  `).join('');
});