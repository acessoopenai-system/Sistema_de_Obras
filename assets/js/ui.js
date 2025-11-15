// Tabs simples na página de detalhe da obra
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tabs button');
  const sections = {
    dados: document.getElementById('tab-dados'),
    etapas: document.getElementById('tab-etapas'),
    materiais: document.getElementById('tab-materiais'),
    orcamento: document.getElementById('tab-orcamento'),
    anexos: document.getElementById('tab-anexos'),
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Object.values(sections).forEach(sec => sec.style.display = 'none');
      const key = btn.dataset.tab;
      sections[key].style.display = 'block';
    });
  });
});