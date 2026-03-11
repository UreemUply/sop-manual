function renderEdu(data) {
  const eduArea = document.getElementById("edu-content-area");
  const countBadge = document.getElementById("edu-count-badge");
  eduArea.innerHTML = "";

  if (!data.length) {
    countBadge.textContent = "0개 항목";
    eduArea.innerHTML = `<div class="empty-state">등록된 교육자료가 없습니다.</div>`;
    return;
  }

  const sections = {};

  data.forEach(row => {
    const category = normalizeText(row.category) || "교육자료";
    if (!sections[category]) {
      sections[category] = {
        category,
        title: normalizeText(row.title) || category,
        icon: normalizeText(row.icon) || "📚",
        color: getColorValue(row.color),
        items: []
      };
    }
    sections[category].items.push(row);
  });

  const sectionKeys = Object.keys(sections);
  countBadge.textContent = `${sectionKeys.length}개 카테고리`;

  sectionKeys.forEach(key => {
    const section = sections[key];
    const sortedItems = section.items.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--card-color", section.color);
    card.style.setProperty("--card-soft", hexToRgba(section.color, 0.10));
    card.style.setProperty("--card-strong", section.color);

    card.innerHTML = `
      <div class="card-color-line"></div>
      <div class="situation-tag" style="margin-top:10px;">
        ${escapeHtml(section.icon)} ${escapeHtml(section.title)}
      </div>
      <div class="content-box">
        <div class="box-title">📌 교육 핵심 내용</div>
        <ul class="edu-list">
          ${sortedItems.map(item => `<li>${escapeHtml(item.content || "-")}</li>`).join("")}
        </ul>
      </div>
    `;

    eduArea.appendChild(card);
  });
}
