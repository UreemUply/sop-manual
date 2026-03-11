function openSection(sectionId) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("top-bar").classList.add("visible");

  document.querySelectorAll(".section-content").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");
  const targetTab = document.getElementById("tab-" + sectionId);
  if (targetTab) targetTab.classList.add("active");

  if (sectionId === "test") resetTestView();
}

function goHome() {
  document.getElementById("home").classList.add("active");
  document.getElementById("top-bar").classList.remove("visible");

  document.querySelectorAll(".section-content").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
}

function switchTab(tabName, event) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("top-bar").classList.add("visible");

  document.querySelectorAll(".section-content").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  if (event) event.target.classList.add("active");
  document.getElementById(tabName).classList.add("active");

  if (tabName === "test") resetTestView();
}

async function initGoogleSheetContent() {
  try {
    setLoadingState();

    if (!CSV_URL || CSV_URL.includes("여기에_구글시트_CSV_URL")) {
      throw new Error("코드 상단의 CSV_URL에 구글시트 CSV 주소를 넣어주세요.");
    }

    sheetData = await fetchSheetData();

    sopData = sheetData.filter(row => normalizeText(row["menu"]).replace(/\s+/g, "").toUpperCase() === "SOP");
    eduData = sheetData.filter(row => normalizeText(row["menu"]).replace(/\s+/g, "").toUpperCase() === "EDU");
    testData = sheetData.filter(row => normalizeText(row["menu"]).replace(/\s+/g, "").toUpperCase() === "TEST");

    console.log("sheetData", sheetData);
    console.log("sopData", sopData);
    console.log("eduData", eduData);
    console.log("testData", testData);

    renderSOP(sopData);
    renderEdu(eduData);
    renderTest(testData);
  } catch (error) {
    console.error(error);
    setErrorState(error.message || "알 수 없는 오류가 발생했습니다.");
  }
}

document.addEventListener("DOMContentLoaded", initGoogleSheetContent);
