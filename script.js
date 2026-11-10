
/* =========================================
   DADOS DEMONSTRATIVOS
========================================= */


const movements = [
  {
    plate: "LXP-4A23",
    ship: "PRESTIGE DIVA",
    flow: "B099-P1",
    window: "311",
    bl: "BL-DEMO-001",
    driver: "Carlos Almeida",
    carrier: "Transporte Alfa",
    operation: "Expedição",
    entry: "08:15",
    entryPAN: "09/10/2026 08:15",
    axles: 6,
    tareWeight: 17080,
    tareDate: "09/10/2026 08:30",
    collectorDate: "—",
    grossWeight: null,
    netWeight: null,
    grossDate: "—",
    overweight: "Não",
    exit: "—",
    duration: "2h 18min",
    stage: "Balança",
    status: "Parado"
  },
  {
    plate: "QWF-7F56",
    ship: "PRESTIGE DIVA",
    flow: "B099-P1",
    window: "112",
    bl: "BL-DEMO-002",
    driver: "Marcos Oliveira",
    carrier: "Translog",
    operation: "Recebimento",
    entry: "07:42",
    entryPAN: "09/10/2026 07:42",
    axles: 6,
    tareWeight: 18340,
    tareDate: "09/10/2026 07:55",
    collectorDate: "09/10/2026 08:10",
    grossWeight: 45200,
    netWeight: 26860,
    grossDate: "09/10/2026 08:40",
    overweight: "Não",
    exit: "09:05",
    duration: "1h 23min",
    stage: "Pátio",
    status: "Finalizado"
  },
  {
    plate: "BCD-3021",
    ship: "PRESTIGE DIVA",
    flow: "B101-P1",
    window: "211",
    bl: "BL-DEMO-003",
    driver: "João Ferreira",
    carrier: "Veloz Cargas",
    operation: "Expedição",
    entry: "08:30",
    entryPAN: "09/10/2026 08:30",
    axles: 7,
    tareWeight: 17100,
    tareDate: "09/10/2026 08:45",
    collectorDate: "—",
    grossWeight: null,
    netWeight: null,
    grossDate: "—",
    overweight: "Não",
    exit: "—",
    duration: "45min",
    stage: "Cais",
    status: "Em operação"
  },
  {
    plate: "EFG-8H76",
    ship: "PRESTIGE DIVA",
    flow: "B102-P1",
    window: "311",
    bl: "BL-DEMO-004",
    driver: "Pedro Santos",
    carrier: "Rota Sul",
    operation: "Recebimento",
    entry: "06:55",
    entryPAN: "09/10/2026 06:55",
    axles: 6,
    tareWeight: 18900,
    tareDate: "09/10/2026 07:10",
    collectorDate: "09/10/2026 07:25",
    grossWeight: 46800,
    netWeight: 27900,
    grossDate: "09/10/2026 07:50",
    overweight: "Não",
    exit: "08:20",
    duration: "1h 32min",
    stage: "Balança",
    status: "Finalizado"
  },
  {
    plate: "JKL-2M34",
    ship: "PRESTIGE DIVA",
    flow: "B099-P1",
    window: "411",
    bl: "BL-DEMO-005",
    driver: "Rafael Costa",
    carrier: "Transporte Alfa",
    operation: "Expedição",
    entry: "09:12",
    entryPAN: "09/10/2026 09:12",
    axles: 6,
    tareWeight: 16860,
    tareDate: "—",
    collectorDate: "—",
    grossWeight: null,
    netWeight: null,
    grossDate: "—",
    overweight: "Não",
    exit: "—",
    duration: "28min",
    stage: "Pátio",
    status: "Em operação"
  },
  {
    plate: "MNO-5P67",
    ship: "PRESTIGE DIVA",
    flow: "B101-P1",
    window: "211",
    bl: "BL-DEMO-006",
    driver: "Lucas Martins",
    carrier: "Logística Brasil",
    operation: "Recebimento",
    entry: "10:05",
    entryPAN: "09/10/2026 10:05",
    axles: 7,
    tareWeight: 17600,
    tareDate: "09/10/2026 10:20",
    collectorDate: "09/10/2026 10:35",
    grossWeight: 44000,
    netWeight: 26400,
    grossDate: "09/10/2026 11:10",
    overweight: "Não",
    exit: "11:40",
    duration: "1h 35min",
    stage: "Cais",
    status: "Finalizado"
  },
  {
    plate: "PQR-8T90",
    ship: "PRESTIGE DIVA",
    flow: "B102-P1",
    window: "411",
    bl: "BL-DEMO-007",
    driver: "André Lima",
    carrier: "Veloz Cargas",
    operation: "Expedição",
    entry: "10:32",
    entryPAN: "09/10/2026 10:32",
    axles: 6,
    tareWeight: null,
    tareDate: "—",
    collectorDate: "—",
    grossWeight: null,
    netWeight: null,
    grossDate: "—",
    overweight: "Não",
    exit: "—",
    duration: "12min",
    stage: "Entrada",
    status: "Em operação"
  },
  {
    plate: "STU-2V13",
    ship: "PRESTIGE DIVA",
    flow: "B099-P1",
    window: "311",
    bl: "BL-DEMO-008",
    driver: "Felipe Rocha",
    carrier: "Translog",
    operation: "Recebimento",
    entry: "11:20",
    entryPAN: "09/10/2026 11:20",
    axles: 6,
    tareWeight: 18200,
    tareDate: "09/10/2026 11:30",
    collectorDate: "09/10/2026 11:40",
    grossWeight: 42000,
    netWeight: 23800,
    grossDate: "09/10/2026 11:55",
    overweight: "Não",
    exit: "12:10",
    duration: "50min",
    stage: "Balança",
    status: "Finalizado"
  }
];

const carriers = [
  ["Transporte Alfa", 342, "28%", "50 min", "88 t/h"],
  ["Translog", 225, "18%", "46 min", "82 t/h"],
  ["Veloz Cargas", 198, "16%", "42 min", "76 t/h"],
  ["Rota Sul", 146, "12%", "55 min", "68 t/h"],
  ["Logística Brasil", 98, "8%", "48 min", "63 t/h"],
  ["JSL", 73, "6%", "52 min", "59 t/h"],
  ["TCT", 65, "5%", "47 min", "57 t/h"],
  ["Outras", 98, "8%", "51 min", "54 t/h"]
];

/* =========================================
   INFORMAÇÕES DAS PÁGINAS
========================================= */

const pageDetails = {
  overview: [
    "Acompanhamento da Movimentação Rodoviária",
    "Visão geral da operação em um só lugar"
  ],

  movements: [
    "Movimentações de Veículos",
    "Consulte e acompanhe as movimentações da operação"
  ],

  carriers: [
    "Transportadoras",
    "Compare o volume e os indicadores por transportadora"
  ],

  reports: [
    "Relatórios",
    "Consulte relatórios disponíveis e organize suas análises"
  ],

  settings: [
    "Configurações",
    "Preferências de visualização do painel"
  ],

  vehicles: [
    "Cadastro de Veículos",
    "Cadastre e gerencie os veículos da operação"
  ],
};

/* =========================================
   ELEMENTOS DA INTERFACE
========================================= */

const navButtons = document.querySelectorAll(".menu__link");
const pages = document.querySelectorAll(".pagina");
const toast = document.getElementById("toast");

let toastTimeout;

/* =========================================
   NOTIFICAÇÕES
========================================= */

function notify(message) {
  toast.textContent = message;

  toast.classList.add("notificacao--visivel");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("notificacao--visivel");
  }, 2800);
}

/* =========================================
   NAVEGAÇÃO ENTRE PÁGINAS
========================================= */

function showPage(name) {
  if (!pageDetails[name]) return;

  pages.forEach(page => {
    page.classList.toggle(
      "pagina--ativa",
      page.id === `page-${name}`
    );
  });

  navButtons.forEach(button => {
    button.classList.toggle(
      "menu__link--ativo",
      button.dataset.page === name
    );
  });

  document.getElementById("page-title").textContent =
    pageDetails[name][0];

  document.getElementById("page-subtitle").textContent =
    pageDetails[name][1];

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll("[data-goto]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.goto);
  });
});

/* =========================================
   SITUAÇÃO DOS VEÍCULOS
========================================= */

function statusBadge(status) {
  let className;

  if (status === "Finalizado") {
    className = "situacao--concluido";
  } else if (status === "Parado") {
    className = "situacao--parado";
  } else {
    className = "situacao--andamento";
  }

  return `<span class="situacao ${className}">${status}</span>`;
}
/* =========================================
   TABELAS DE MOVIMENTAÇÕES
========================================= */



function renderMovementRows(list, targetId, compact = false) {
  const target = document.getElementById(targetId);

  if (!target) return;

  if (!list.length) {
    target.innerHTML = `
      <tr>
        <td colspan="20" class="tabela__linha-vazia">
          Nenhuma movimentação encontrada com esses filtros.
        </td>
      </tr>
    `;
    return;
  }

  const mostrarValor = (valor) => {
    return valor === null || valor === undefined || valor === ""
      ? "—"
      : valor;
  };

  target.innerHTML = list.map(item => {
    const classeLinha = item.status === "Parado"
      ? "tabela__linha--parado"
      : "";

    return `
      <tr class="${classeLinha}">
        <td><strong>${mostrarValor(item.plate)}</strong></td>
        <td>${mostrarValor(item.ship)}</td>
        <td>${mostrarValor(item.flow)}</td>
        <td>${mostrarValor(item.window)}</td>
        <td>${mostrarValor(item.bl)}</td>
        <td>${mostrarValor(item.driver)}</td>
        <td>${mostrarValor(item.carrier)}</td>
        <td>${mostrarValor(item.entryPAN)}</td>
        <td>${mostrarValor(item.axles)}</td>
        <td>${mostrarValor(item.tareWeight)}</td>
        <td>${mostrarValor(item.tareDate)}</td>
        <td>${mostrarValor(item.collectorDate)}</td>
        <td>${mostrarValor(item.grossWeight)}</td>
        <td>${mostrarValor(item.netWeight)}</td>
        <td>${mostrarValor(item.grossDate)}</td>
        <td>${mostrarValor(item.overweight)}</td>
        <td>${mostrarValor(item.exit)}</td>
        <td>${mostrarValor(item.duration)}</td>
        <td>${mostrarValor(item.stage)}</td>
        <td>${statusBadge(item.status)}</td>
      </tr>
    `;
  }).join("");
}


/* =========================================
   TABELA DE TRANSPORTADORAS
========================================= */

function renderCarriers() {
  document.getElementById("carrier-rows").innerHTML =
    carriers.map(row => `
      <tr>
        <td class="tabela__nome-transportadora">${row[0]}</td>
        <td>${row[1]}</td>
        <td>${row[2]}</td>
        <td>${row[3]}</td>
        <td>${row[4]}</td>
        <td>
          <span class="situacao situacao--concluido">Ativa</span>
        </td>
      </tr>
    `).join("");
}

/* =========================================
   FILTROS DAS MOVIMENTAÇÕES
========================================= */

function filteredMovements() {
  const plate = (
    document.getElementById("plate-filter").value || ""
  ).trim().toUpperCase();

  const carrier = document.getElementById("movement-carrier").value;
  const operation = document.getElementById("movement-operation").value;

  return movements.filter(item =>
    item.plate.includes(plate) &&
    (carrier === "all" || item.carrier === carrier) &&
    (operation === "all" || item.operation === operation)
  );
}

function runMovementSearch() {
  const list = filteredMovements();

  renderMovementRows(list, "movement-rows");

  document.getElementById("movement-count").textContent =
    `${list.length} registro(s) demonstrativo(s) encontrado(s)`;
}

document.getElementById("search-movements").addEventListener(
  "click",
  runMovementSearch
);

document.getElementById("plate-filter").addEventListener(
  "keydown",
  event => {
    if (event.key === "Enter") {
      runMovementSearch();
    }
  }
);

/* =========================================
   LIMPAR FILTROS
========================================= */

document.getElementById("clear-filters").addEventListener("click", () => {
  document.getElementById("period-filter").value = "today";
  document.getElementById("carrier-filter").value = "all";
  document.getElementById("operation-filter").value = "all";
  document.getElementById("modal-filter").value = "Rodoviário";

  notify("Filtros da visão geral foram limpos.");
});

/* =========================================
   EXPORTAR CSV
========================================= */


document.getElementById("export-csv").addEventListener("click", () => {
  const header = [
    "Placa",
    "Navio",
    "Fluxo",
    "Janela",
    "BL",
    "Motorista",
    "Transportadora",
    "Entrada PAN",
    "Eixos",
    "Peso Tara",
    "Data Tara",
    "Data Coletor",
    "Peso Cheio",
    "Peso Líquido",
    "Data Cheio",
    "Sobrepeso",
    "Saída",
    "Duração",
    "Etapa",
    "Situação"
  ];

  const rows = [
    header,
    ...filteredMovements().map(item => [
      item.plate,
      item.ship,
      item.flow,
      item.window,
      item.bl,
      item.driver,
      item.carrier,
      item.entryPAN,
      item.axles,
      item.tareWeight,
      item.tareDate,
      item.collectorDate,
      item.grossWeight,
      item.netWeight,
      item.grossDate,
      item.overweight,
      item.exit,
      item.duration,
      item.stage,
      item.status
    ])
  ];


  const formatarValor = (valor) => {
    return valor === null || valor === undefined || valor === ""
      ? "—"
      : valor;
  };

  
  const csv = "\uFEFF" + rows.map(row =>
    row.map(value =>
      `"${String(formatarValor(value)).replaceAll('"', '""')}"`
    ).join(";")
  ).join("\r\n");


  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "movimentacoes-demonstrativas.csv";

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);

  notify("Arquivo CSV demonstrativo exportado.");
});

/* =========================================
   FILTROS DOS RELATÓRIOS
========================================= */

document.getElementById("filter-reports").addEventListener("click", () => {
  const selected = document.getElementById("report-type").value;

  document.querySelectorAll(".relatorio").forEach(card => {
    card.hidden = selected !== "all" && card.dataset.type !== selected;
  });
});

document.querySelectorAll(".relatorio__acao").forEach(button => {
  button.addEventListener("click", () => {
    notify(
      "Relatório demonstrativo. A geração real depende da integração com os dados."
    );
  });
});

/* =========================================
   TRANSPORTADORAS
========================================= */

document.getElementById("carrier-search").addEventListener("click", () => {
  notify(
    "Indicadores ilustrativos: os filtros ainda não estão conectados a dados reais."
  );
});

/* =========================================
   MODO CLARO E ESCURO
========================================= */

// Recupera o tema salvo
const themeSelect = document.getElementById("theme-select");
const temaSalvo = localStorage.getItem("tema") || "light";

// Aplica o tema ao carregar a página
document.body.classList.toggle("tema--escuro", temaSalvo === "dark");

// Atualiza o seletor
themeSelect.value = temaSalvo;

// Alterna e salva o tema
themeSelect.addEventListener("change", event => {
    const darkMode = event.target.value === "dark";

    document.body.classList.toggle("tema--escuro", darkMode);

    localStorage.setItem("tema", darkMode ? "dark" : "light");

    notify(`Tema ${darkMode ? "escuro" : "claro"} aplicado.`);
});

/* =========================================
   DATA E HORÁRIO
========================================= */

const date = new Date();

document.getElementById("current-date").textContent =
  date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

document.getElementById("current-time").textContent =
  date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  }) + " · dados fictícios";

/* =========================================
   INICIALIZAÇÃO DAS TABELAS
========================================= */

renderMovementRows(movements, "latest-rows", true);
renderMovementRows(movements, "movement-rows");
renderCarriers();

/* =========================================
   GRÁFICO DE FLUXO DE VEÍCULOS
========================================= */

const chartCanvas = document.getElementById("flowChart");

if (window.Chart && chartCanvas) {
  new Chart(chartCanvas, {
    type: "line",

    data: {
      labels: [
        "00h", "02h", "04h", "06h",
        "08h", "10h", "12h", "14h",
        "16h", "18h", "20h", "22h"
      ],

      datasets: [{
        label: "Veículos",
        data: [32, 48, 44, 72, 85, 76, 98, 112, 138, 121, 132, 105],
        borderColor: "#1877f2",
        backgroundColor: "rgba(24,119,242,.10)",
        fill: true,
        tension: .35,
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 5
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: "index",
          intersect: false
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: "#8093ad",
            font: {
              size: 9
            }
          }
        },

        y: {
          beginAtZero: true,
          grid: {
            color: "#edf2f9"
          },
          ticks: {
            color: "#8093ad",
            font: {
              size: 9
            }
          }
        }
      }
    }
  });

} else if (chartCanvas) {
  chartCanvas.parentElement.innerHTML =
    "<p>Para visualizar o gráfico, conecte-se à internet para carregar a biblioteca Chart.js.</p>";
}
