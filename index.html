<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>유림텔레콤 현장 대응 SOP 매뉴얼</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- 헤더 -->
  <header>
    <div class="header-left">
      <span class="header-logo">유림텔레콤</span>
    </div>
    <div class="header-center">
      <h2 class="main-title">현장 대응 SOP</h2>
      <p class="sub-title">신입 플래너 교육용</p>
    </div>
    <div class="header-right"></div>
  </header>

  <div class="container">
    <!-- 홈 화면 -->
    <section id="home" class="home-screen active">
      <div class="home-wrap">
        <div class="home-card">
          <h1 class="home-title">유림텔레콤 현장 대응 SOP</h1>
          <p class="home-desc">원하시는 메뉴를 선택해 주세요.</p>

          <div class="home-menu-grid">
            <button class="home-menu-btn" onclick="openSection('sop')">
              <span class="home-menu-icon">📖</span>
              <span class="home-menu-title">SOP 상황별 매뉴얼</span>
            </button>

            <button class="home-menu-btn" onclick="openSection('edu')">
              <span class="home-menu-icon">📚</span>
              <span class="home-menu-title">교육자료</span>
            </button>

            <button class="home-menu-btn" onclick="openSection('test')">
              <span class="home-menu-icon">📝</span>
              <span class="home-menu-title">테스트</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 상단 탭 -->
    <div id="top-bar" class="top-bar">
      <button class="tab-btn" onclick="goHome()">🏠 홈</button>
      <button class="tab-btn" id="tab-sop" onclick="switchTab('sop', event)">📖 SOP 매뉴얼</button>
      <button class="tab-btn" id="tab-edu" onclick="switchTab('edu', event)">📚 교육자료</button>
      <button class="tab-btn" id="tab-test" onclick="switchTab('test', event)">📝 테스트</button>
    </div>

    <!-- SOP -->
    <section id="sop" class="section-content">
      <div class="section-shell">
        <div class="section-header">
          <div class="section-title-wrap">
            <h3>📖 SOP 매뉴얼</h3>
            <p>카테고리별 현장 대응 상황과 실전 화법을 확인하세요.</p>
          </div>
          <div class="data-badge" id="sop-count-badge">로딩 중...</div>
        </div>

        <div id="sop-category-grid" class="category-grid"></div>
        <div id="sop-content-area"></div>
      </div>
    </section>

    <!-- 교육자료 -->
    <section id="edu" class="section-content">
      <div class="section-shell">
        <div class="section-header">
          <div class="section-title-wrap">
            <h3>📚 교육자료</h3>
            <p>교육 항목별 핵심 내용을 정리해 확인할 수 있습니다.</p>
          </div>
          <div class="data-badge" id="edu-count-badge">로딩 중...</div>
        </div>

        <div id="edu-content-area" class="edu-grid"></div>
      </div>
    </section>

    <!-- 테스트 -->
    <section id="test" class="section-content">
      <div class="section-shell">
        <div class="section-header">
          <div class="section-title-wrap">
            <h3>📝 테스트</h3>
            <p>구글시트에서 문제를 관리하고, 결과는 브라우저에 저장됩니다.</p>
          </div>
          <div class="data-badge" id="test-count-badge">로딩 중...</div>
        </div>

        <div class="role-select" id="role-selector">
          <button class="role-btn active" id="btn-planner" onclick="switchRole('planner')">👨‍💼 신입 플래너용</button>
          <button class="role-btn" id="btn-manager" onclick="switchRole('manager')">👑 점장/관리자용</button>
        </div>

        <div id="planner-intro" class="test-box">
          <h3 style="color: var(--primary); text-align: center; margin-top: 0;">📝 실전 세일즈 모의고사</h3>
          <p class="warning-text">
            ⚠️ 주의: [시험 시작하기]를 누르면 상단 메뉴가 숨겨집니다.<br>
            새로고침 시 입력 상태가 초기화됩니다.
          </p>
          <input type="text" id="planner-name-intro" placeholder="응시자 이름 입력 (예: 홍길동)" />
          <button class="submit-btn" onclick="startExam()">시험 시작하기</button>
        </div>

        <div id="planner-exam" class="test-box" style="display:none;">
          <h3 style="color: var(--primary); border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">
            응시자: <span id="display-name" style="color:#1e293b;"></span>
          </h3>
          <input type="hidden" id="planner-name" />
          <div id="test-question-area"></div>
          <button class="submit-btn" onclick="submitDynamicTest()">답안 최종 제출하기</button>
        </div>

        <div id="manager-view" class="test-box" style="display:none;">
          <div id="login-area">
            <h3 style="display:flex; align-items:center; gap:10px; margin-top:0; margin-bottom:20px;">🔒 관리자 로그인</h3>
            <input type="password" id="manager-pwd" placeholder="관리자 비밀번호 입력" />
            <button class="submit-btn" onclick="checkManagerPassword()">로그인</button>
          </div>

          <div id="dashboard-area" style="display:none;">
            <h3 style="color: var(--primary); margin-top:0;">📊 플래너 테스트 결과 현황</h3>
            <table id="result-table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>점수</th>
                  <th>응시 시간</th>
                </tr>
              </thead>
              <tbody id="result-body"></tbody>
            </table>
            <button onclick="clearData()" style="padding: 12px 20px; background: #cbd5e1; border:none; border-radius:12px; cursor:pointer; font-weight: 800; margin-top: 20px; width: 100%;">시험 기록 초기화</button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <script src="common.js"></script>
  <script src="sop.js"></script>
  <script src="edu.js"></script>
  <script src="test.js"></script>
  <script src="app.js"></script>
</body>
</html>
