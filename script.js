const movements = [
  { plate: "LXP-4A23", carrier: "Transporte Alfa", operation: "Expedição", entry: "08:15", exit: "—", duration: "2h 18min", stage: "Balança", status: "Em operação" },
  { plate: "QWF-7F56", carrier: "Translog", operation: "Recebimento", entry: "07:42", exit: "09:05", duration: "1h 23min", stage: "Pátio", status: "Finalizado" },
  { plate: "BCD-3021", carrier: "Veloz Cargas", operation: "Expedição", entry: "08:30", exit: "—", duration: "45min", stage: "Cais", status: "Em operação" },
  { plate: "EFG-8H76", carrier: "Rota Sul", operation: "Recebimento", entry: "06:55", exit: "08:20", duration: "1h 32min", stage: "Balança", status: "Finalizado" },
  { plate: "JKL-2M34", carrier: "Transporte Alfa", operation: "Expedição", entry: "09:12", exit: "—", duration: "28min", stage: "Pátio", status: "Em operação" },
  { plate: "MNO-5P67", carrier: "Logística Brasil", operation: "Recebimento", entry: "10:05", exit: "11:40", duration: "1h 35min", stage: "Cais", status: "Finalizado" },
  { plate: "PQR-8T90", carrier: "Veloz Cargas", operation: "Expedição", entry: "10:32", exit: "—", duration: "12min", stage: "Entrada", status: "Em operação" },
  { plate: "STU-2V13", carrier: "Translog", operation: "Recebimento", entry: "11:20", exit: "12:10", duration: "50min", stage: "Balança", status: "Finalizado" }
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

const pageDetails = {
  overview: ["Acompanhamento da Movimentação Rodoviária", "Visão geral da operação em um só lugar"],
  movements: ["Movimentações de Veículos", "Consulte e acompanhe as movimentações da operação"],
  carriers: ["Transportadoras", "Compare o volume e os indicadores por transportadora"],
  reports: ["Relatórios", "Consulte relatórios disponíveis e organize suas análises"],
  settings: ["Configurações", "Preferências de visualização do painel"]
};

const navButtons = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const toast = document.getElementById("toast");
let toastTimeout;

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

function showPage(name) {
  pages.forEach(page => page.classList.toggle("active", page.id === `page-${name}`));
  navButtons.forEach(button => button.classList.toggle("active", button.dataset.page === name));
  document.getElementById("page-title").textContent = pageDetails[name][0];
  document.getElementById("page-subtitle").textContent = pageDetails[name][1];
  window.scrollTo({ top: 0, behavior: "smooth" });
}
navButtons.forEach(button => button.addEventListener("click", () => showPage(button.dataset.page)));
document.querySelectorAll("[data-goto]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.goto)));

function statusBadge(status) {
  const className = status === "Finalizado" ? "status-done" : "status-progress";
  return `<span class="status ${className}">${status}</span>`;
}

function renderMovementRows(list, targetId, compact = false) {
  const target = document.getElementById(targetId);
  if (!list.length) {
    target.innerHTML = `<tr><td colspan="${compact ? 6 : 8}" class="empty-row">Nenhuma movimentação encontrada com esses filtros.</td></tr>`;
    return;
  }
  target.innerHTML = list.map(item => compact
    ? `<tr><td><strong>${item.plate}</strong></td><td>${item.carrier}</td><td>${item.operation}</td><td>${item.entry}</td><td>${item.exit}</td><td>${statusBadge(item.status)}</td></tr>`
    : `<tr><td><strong>${item.plate}</strong></td><td>${item.carrier}</td><td>${item.operation}</td><td>${item.entry}</td><td>${item.exit}</td><td>${item.duration}</td><td>${item.stage}</td><td>${statusBadge(item.status)}</td></tr>`
  ).join("");
}

function renderCarriers() {
  document.getElementById("carrier-rows").innerHTML = carriers.map(row =>
    `<tr><td class="carrier-table-name">${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td><span class="status status-done">Ativa</span></td></tr>`
  ).join("");
}

function filteredMovements() {
  const plate = (document.getElementById("plate-filter").value || "").trim().toUpperCase();
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
  document.getElementById("movement-count").textContent = `${list.length} registro(s) demonstrativo(s) encontrado(s)`;
}
document.getElementById("search-movements").addEventListener("click", runMovementSearch);
document.getElementById("plate-filter").addEventListener("keydown", event => {
  if (event.key === "Enter") runMovementSearch();
});

document.getElementById("clear-filters").addEventListener("click", () => {
  document.getElementById("period-filter").value = "today";
  document.getElementById("carrier-filter").value = "all";
  document.getElementById("operation-filter").value = "all";
  document.getElementById("modal-filter").value = "Rodoviário";
  notify("Filtros da visão geral foram limpos.");
});

document.getElementById("export-csv").addEventListener("click", () => {
  const header = ["Placa", "Transportadora", "Tipo de operação", "Entrada", "Saída", "Tempo no terminal", "Etapa atual", "Status"];
  const rows = [header, ...filteredMovements().map(item => [item.plate, item.carrier, item.operation, item.entry, item.exit, item.duration, item.stage, item.status])];
  const csv = "\uFEFF" + rows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(";")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "movimentacoes-demonstrativas.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  notify("Arquivo CSV demonstrativo exportado.");
});

document.getElementById("filter-reports").addEventListener("click", () => {
  const selected = document.getElementById("report-type").value;
  document.querySelectorAll(".report-card").forEach(card => {
    card.hidden = selected !== "all" && card.dataset.type !== selected;
  });
});
document.querySelectorAll(".report-action").forEach(button => button.addEventListener("click", () => {
  notify("Relatório demonstrativo. A geração real depende da integração com os dados.");
}));
document.getElementById("carrier-search").addEventListener("click", () => notify("Indicadores ilustrativos: os filtros ainda não estão conectados a dados reais."));

document.getElementById("theme-select").addEventListener("change", event => {
  document.body.classList.toggle("dark", event.target.value === "dark");
  notify(`Tema ${event.target.value === "dark" ? "escuro" : "claro"} aplicado.`);
});

const date = new Date();
document.getElementById("current-date").textContent = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
document.getElementById("current-time").textContent = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) + " · dados fictícios";

renderMovementRows(movements, "latest-rows", true);
renderMovementRows(movements, "movement-rows");
renderCarriers();

const chartCanvas = document.getElementById("flowChart");
if (window.Chart && chartCanvas) {
  new Chart(chartCanvas, {
    type: "line",
    data: {
      labels: ["00h", "02h", "04h", "06h", "08h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"],
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
      plugins: { legend: { display: false }, tooltip: { mode: "index", intersect: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#8093ad", font: { size: 9 } } },
        y: { beginAtZero: true, grid: { color: "#edf2f9" }, ticks: { color: "#8093ad", font: { size: 9 } } }
      }
    }
  });
} else {
  chartCanvas.parentElement.innerHTML = "<p>Para visualizar o gráfico, conecte-se à internet para carregar a biblioteca Chart.js.</p>";
}
