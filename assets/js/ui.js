document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;

      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabPanes.forEach(pane => {
        if (pane.id === tabId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // Limpa o formulário se `new=true` estiver na URL
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('new')) {
    // Limpa campos de formulário
    const form = document.querySelector('.form-grid');
    if (form) {
      form.querySelectorAll('input, select, textarea').forEach(input => {
        input.value = '';
      });
    }

    // Limpa a lista de etapas
    const etapasList = document.querySelector('.etapas-list');
    if (etapasList) {
      etapasList.innerHTML = '';
    }

    // Limpa a tabela de materiais
    const materiaisTable = document.querySelector('.table tbody');
    if (materiaisTable) {
      materiaisTable.innerHTML = '';
    }
    const materiaisTotal = document.querySelector('.table tfoot');
    if (materiaisTotal) {
      materiaisTotal.innerHTML = '';
    }

    // Limpa a visão geral do orçamento
    const orcamentoGrid = document.querySelector('.orcamento-grid');
    if (orcamentoGrid) {
      orcamentoGrid.querySelectorAll('strong').forEach(el => {
        el.textContent = 'R$ 0,00';
      });
    }

    // Limpa a lista de anexos
    const anexosGrid = document.querySelector('.anexos-grid');
    if (anexosGrid) {
      anexosGrid.innerHTML = '';
    }
  }

  // Feedback de "Salvar" e Validação
  const saveButton = document.getElementById('save-button');
  const saveAlert = document.getElementById('save-alert');
  const form = document.querySelector('.form-grid');

  if (saveButton && saveAlert && form) {
    saveButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o envio do formulário
      form.classList.add('was-validated');

      if (form.checkValidity()) {
        saveAlert.style.display = 'block';
        setTimeout(() => {
          saveAlert.style.display = 'none';
        }, 3000); // O alerta desaparece após 3 segundos
      }
    });
  }
});
