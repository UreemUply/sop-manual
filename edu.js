function renderEducationPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="edu-page">
      <div class="edu-hero">
        <div class="edu-hero-text">
          <p class="edu-badge">교육자료 센터</p>
          <h1>현장에서 바로 쓰는<br>교육자료 모음</h1>
          <p class="edu-desc">
            신입 교육, 상품 설명, 상담 스크립트, 테스트 자료까지
            한눈에 확인하고 빠르게 찾아볼 수 있는 교육자료 화면입니다.
          </p>
        </div>
        <div class="edu-hero-box">
          <div class="edu-hero-card">
            <strong>이번 주 추천</strong>
            <span>신입 응대 SOP</span>
          </div>
          <div class="edu-hero-card">
            <strong>업데이트</strong>
            <span>상품 교육 자료 최신본</span>
          </div>
        </div>
      </div>

      <div class="edu-toolbar">
        <input type="text" class="edu-search" placeholder="교육자료를 검색해보세요" />
        <div class="edu-filter">
          <button class="active">전체</button>
          <button>신입교육</button>
          <button>상품교육</button>
          <button>상황대응</button>
          <button>테스트</button>
        </div>
      </div>

      <div class="edu-section">
        <div class="section-title-wrap">
          <h2>주요 교육자료</h2>
          <span>자주 사용하는 자료</span>
        </div>

        <div class="edu-grid">
          <div class="edu-card">
            <div class="edu-card-top">
              <span class="edu-tag">신입교육</span>
              <span class="edu-date">2026.03</span>
            </div>
            <h3>신입 입문 교육 가이드</h3>
            <p>첫 출근부터 기본 업무 흐름까지 한 번에 정리한 자료</p>
            <button>바로보기</button>
          </div>

          <div class="edu-card">
            <div class="edu-card-top">
              <span class="edu-tag">상품교육</span>
              <span class="edu-date">2026.03</span>
            </div>
            <h3>요금제 추천 공식</h3>
            <p>고객 유형별 추천 멘트와 상담 흐름을 정리한 자료</p>
            <button>바로보기</button>
          </div>

          <div class="edu-card">
            <div class="edu-card-top">
              <span class="edu-tag">상황대응</span>
              <span class="edu-date">2026.03</span>
            </div>
            <h3>거절 극복 SOP</h3>
            <p>고객 반론 상황에서 바로 사용할 수 있는 대응 문구 모음</p>
            <button>바로보기</button>
          </div>

          <div class="edu-card">
            <div class="edu-card-top">
              <span class="edu-tag">테스트</span>
              <span class="edu-date">2026.03</span>
            </div>
            <h3>상품 이해도 테스트지</h3>
            <p>교육 후 바로 점검할 수 있는 실전형 테스트 자료</p>
            <button>바로보기</button>
          </div>

          <div class="edu-card">
            <div class="edu-card-top">
              <span class="edu-tag">신입교육</span>
              <span class="edu-date">2026.03</span>
            </div>
            <h3>고객 응대 기본 멘트</h3>
            <p>신입이 그대로 읽어도 자연스럽게 연결되는 응대 스크립트</p>
            <button>바로보기</button>
          </div>

          <div class="edu-card">
            <div class="edu-card-top">
              <span class="edu-tag">상황대응</span>
              <span class="edu-date">2026.03</span>
            </div>
            <h3>멘탈 관리 교육자료</h3>
            <p>신입이 흔들리는 상황별 멘탈 회복 포인트와 코칭 가이드</p>
            <button>바로보기</button>
          </div>
        </div>
      </div>

      <div class="edu-notice-wrap">
        <div class="edu-notice">
          <h2>공지사항</h2>
          <ul>
            <li><span>[공지]</span> 3월 교육자료 최신본이 업로드되었습니다.</li>
            <li><span>[안내]</span> SOP 자료는 상황별로 계속 추가 업데이트됩니다.</li>
            <li><span>[중요]</span> 테스트지는 현장 배포 전 최종본 확인 후 사용해주세요.</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
