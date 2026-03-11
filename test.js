function renderTest(data) {
  const testArea = document.getElementById("test-question-area");
  const countBadge = document.getElementById("test-count-badge");
  testArea.innerHTML = "";

  if (!data.length) {
    countBadge.textContent = "0문항";
    testArea.innerHTML = `<div class="empty-state">등록된 테스트 문항이 없습니다.</div>`;
    dynamicTestAnswerKey = {};
    return;
  }

  const sorted = data.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
  countBadge.textContent = `${sorted.length}문항`;

  const questionsHtml = sorted.map((q, idx) => `
    <div class="question">
      <h4>${idx + 1}. ${escapeHtml(q.title)}</h4>
      <label><input type="radio" name="q${idx + 1}" value="1"> ${escapeHtml(q.choice1)}</label>
      <label><input type="radio" name="q${idx + 1}" value="2"> ${escapeHtml(q.choice2)}</label>
      <label><input type="radio" name="q${idx + 1}" value="3"> ${escapeHtml(q.choice3)}</label>
    </div>
  `).join("");

  testArea.innerHTML = questionsHtml;

  dynamicTestAnswerKey = sorted.reduce((acc, q, idx) => {
    acc[`q${idx + 1}`] = {
      answer: String(q.answer),
      score: 10
    };
    return acc;
  }, {});
}

function switchRole(role) {
  document.getElementById("btn-planner").classList.remove("active");
  document.getElementById("btn-manager").classList.remove("active");
  document.getElementById("planner-intro").style.display = "none";
  document.getElementById("planner-exam").style.display = "none";
  document.getElementById("manager-view").style.display = "none";

  document.getElementById("btn-" + role).classList.add("active");

  if (role === "planner") {
    document.getElementById("planner-intro").style.display = "block";
  } else {
    document.getElementById("manager-view").style.display = "block";
    document.getElementById("login-area").style.display = "block";
    document.getElementById("dashboard-area").style.display = "none";
    document.getElementById("manager-pwd").value = "";
  }
}

function resetTestView() {
  document.getElementById("btn-planner").classList.add("active");
  document.getElementById("btn-manager").classList.remove("active");
  document.getElementById("role-selector").style.display = "flex";
  document.getElementById("planner-intro").style.display = "block";
  document.getElementById("planner-exam").style.display = "none";
  document.getElementById("manager-view").style.display = "none";
}

function startExam() {
  const nameInput = document.getElementById("planner-name-intro").value.trim();
  if (!nameInput) {
    alert("응시자 이름을 정확히 입력해야 시험을 시작할 수 있습니다.");
    return;
  }

  if (!testData.length) {
    alert("테스트 문항 데이터가 없습니다. 구글시트를 확인해 주세요.");
    return;
  }

  document.getElementById("planner-name").value = nameInput;
  document.getElementById("display-name").innerText = nameInput;

  document.getElementById("top-bar").classList.remove("visible");
  document.getElementById("role-selector").style.display = "none";
  document.getElementById("planner-intro").style.display = "none";
  document.getElementById("planner-exam").style.display = "block";
}

function submitDynamicTest() {
  const name = document.getElementById("planner-name").value;
  let total = 0;
  let max = 0;

  for (const key in dynamicTestAnswerKey) {
    const info = dynamicTestAnswerKey[key];
    max += info.score;
    const checked = document.querySelector(`input[name="${key}"]:checked`);
    if (!checked) {
      alert("아직 풀지 않은 문제가 있습니다. 모든 문제를 풀어주세요.");
      return;
    }
    if (checked.value === info.answer) {
      total += info.score;
    }
  }

  const date = new Date().toLocaleString();
  const records = JSON.parse(localStorage.getItem("sopTestResults_ureem")) || [];
  records.push({ name, score: total, date });
  localStorage.setItem("sopTestResults_ureem", JSON.stringify(records));

  alert(`${name} 플래너님, 답안이 제출되었습니다!\n점수: ${total}점 / ${max}점\n\n확인 버튼을 누르면 초기화면으로 이동합니다.`);
  location.reload();
}

function checkManagerPassword() {
  const pwd = document.getElementById("manager-pwd").value;
  if (pwd === MANAGER_PASSWORD) {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("dashboard-area").style.display = "block";
    loadResults();
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}

function loadResults() {
  const records = JSON.parse(localStorage.getItem("sopTestResults_ureem")) || [];
  const tbody = document.getElementById("result-body");
  tbody.innerHTML = "";

  if (!records.length) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;">아직 응시한 플래너가 없습니다.</td></tr>';
    return;
  }

  records.slice().reverse().forEach(record => {
    const row = `
      <tr>
        <td style="font-weight:800;">${escapeHtml(record.name)}</td>
        <td style="color:${record.score >= 80 ? "#e30678" : "#ef4444"}; font-weight:900;">${record.score}점</td>
        <td style="color:#64748b; font-size:0.84rem;">${escapeHtml(record.date)}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function clearData() {
  if (confirm("정말 모든 시험 기록을 삭제하시겠습니까? (복구 불가)")) {
    localStorage.removeItem("sopTestResults_ureem");
    loadResults();
  }
}
