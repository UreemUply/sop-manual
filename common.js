const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vROVBZlJbe3DKK0q9NT8aYjcob7lhscT_O88TrdqhfUMWx1vIWX0vSiEH4M0Iq1iebOCe6Z_W20_cWM/pub?gid=1576805448&single=true&output=csv";

const COLOR_MAP = {
  핑크: "#E30678",
  파랑: "#3B82F6",
  블루: "#3B82F6",
  초록: "#22C55E",
  그린: "#22C55E",
  주황: "#F59E0B",
  오렌지: "#F59E0B",
  보라: "#8B5CF6",
  퍼플: "#8B5CF6",
  빨강: "#EF4444",
  레드: "#EF4444",
  청록: "#06B6D4",
  민트: "#14B8A6",
  회색: "#64748B",
  그레이: "#64748B"
};

const DEFAULT_COLOR = "#D8006C";
const DEFAULT_ICON = "📂";
const MANAGER_PASSWORD = "ureem!";

let sheetData = [];
let sopData = [];
let eduData = [];
let testData = [];
let dynamicTestAnswerKey = {};

function normalizeText(value) {
  return (value ?? "")
    .toString()
    .replace(/\uFEFF/g, "")
    .replace(/\u200B/g, "")
    .replace(/\u00A0/g, " ")
    .trim();
}

function getColorValue(colorName) {
  const raw = normalizeText(colorName);
  if (!raw) return DEFAULT_COLOR;
  if (raw.startsWith("#")) return raw;
  return COLOR_MAP[raw] || DEFAULT_COLOR;
}

function hexToRgba(hex, alpha = 1) {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map(ch => ch + ch).join("");
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i++;
      row.push(current);
      if (row.some(cell => cell !== "")) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  if (current !== "" || row.length > 0) {
    row.push(current);
    if (row.some(cell => cell !== "")) rows.push(row);
  }

  if (!rows.length) return [];

  const headers = rows[0].map(h => normalizeText(h));
  return rows.slice(1).map(cols => {
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = normalizeText(cols[idx] || "");
    });
    return obj;
  });
}

async function fetchSheetData() {
  const url = CSV_URL + (CSV_URL.includes("?") ? "&" : "?") + "t=" + Date.now();
  const res = await fetch(url);
  if (!res.ok) throw new Error("CSV 데이터를 불러오지 못했습니다.");
  const csvText = await res.text();
  return parseCSV(csvText);
}

function setLoadingState() {
  document.getElementById("sop-category-grid").innerHTML = "";
  document.getElementById("sop-content-area").innerHTML = `
    <div class="loading-state">
      <strong>데이터를 불러오는 중입니다.</strong>
      <div>구글시트 CSV 데이터를 읽고 있어요.</div>
    </div>
  `;
  document.getElementById("edu-content-area").innerHTML = `
    <div class="loading-state">
      <strong>교육자료를 불러오는 중입니다.</strong>
      <div>잠시만 기다려 주세요.</div>
    </div>
  `;
  document.getElementById("test-question-area").innerHTML = `
    <div class="loading-state">
      <strong>테스트 문항을 불러오는 중입니다.</strong>
      <div>잠시만 기다려 주세요.</div>
    </div>
  `;
}

function setErrorState(message) {
  document.getElementById("sop-content-area").innerHTML = `
    <div class="error-state">
      <strong>데이터 로드 실패</strong>
      <div>${escapeHtml(message)}</div>
      <div class="muted" style="margin-top:8px;">CSV URL과 구글시트 웹 게시 상태를 확인해 주세요.</div>
    </div>
  `;
  document.getElementById("edu-content-area").innerHTML = `
    <div class="error-state">
      <strong>교육자료 로드 실패</strong>
      <div>${escapeHtml(message)}</div>
    </div>
  `;
  document.getElementById("test-question-area").innerHTML = `
    <div class="error-state">
      <strong>테스트 로드 실패</strong>
      <div>${escapeHtml(message)}</div>
    </div>
  `;
}
