const page = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#f4f7fb">
  <meta name="robots" content="noindex,nofollow">
  <title>수업 노트</title>
  <style>
    :root{color-scheme:light;--ink:#17263d;--muted:#718096;--line:#e3e9f2;--paper:#f4f7fb;--blue:#315fe8;--blue-dark:#254bcc;--mint:#d8f4e9;--mint-ink:#16764e}
    *{box-sizing:border-box}html{min-width:320px;background:var(--paper)}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.55 Pretendard,"Apple SD Gothic Neo","Noto Sans KR",Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}button,input,textarea{font:inherit}button{cursor:pointer}button:disabled{cursor:not-allowed;opacity:.48}a{color:inherit}::selection{background:#dce6ff;color:var(--ink)}
    .page{min-height:100dvh;padding:24px 22px 60px}.header{max-width:1120px;margin:0 auto 32px;display:flex;align-items:center;justify-content:space-between}.brand{display:inline-flex;align-items:center;gap:11px;text-decoration:none;font-weight:750;letter-spacing:-.035em}.brand-mark{width:38px;height:38px;display:grid;place-items:center;border-radius:13px;background:var(--ink);color:#fff;box-shadow:0 6px 16px #17263d22}.brand-name{font-size:17px}.header-label,.eyebrow{color:var(--muted);font-size:13px;font-weight:650;letter-spacing:.02em}.header-label{display:inline-flex;align-items:center;gap:7px}.content{width:min(100%,980px);margin:0 auto}.narrow{width:min(100%,700px);margin:0 auto}.card{border:1px solid var(--line);border-radius:22px;background:#fff;box-shadow:0 10px 30px #1b315008}.primary,.secondary,.quiet,.danger{min-height:46px;border:1px solid transparent;border-radius:13px;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;font-size:14px;font-weight:700;transition:transform .15s ease,background .15s ease,border-color .15s ease}.primary{background:var(--blue);color:#fff;box-shadow:0 5px 12px #315fe82e}.primary:hover{background:var(--blue-dark);transform:translateY(-1px)}.secondary{background:#edf2ff;color:#294fbe}.secondary:hover{background:#e2eaff}.quiet{border-color:var(--line);background:#fff;color:#47566f}.quiet:hover{border-color:#bac8df;background:#f8faff}.danger{border-color:#f4d5d4;background:#fff8f7;color:#b6423d}.danger:hover{background:#fff0ef}.input,.textarea{width:100%;min-height:48px;border:1px solid #dbe3ef;border-radius:12px;outline:0;background:#fff;color:var(--ink);padding:11px 13px;font-size:15px}.textarea{min-height:92px;resize:vertical}.input:focus,.textarea:focus{border-color:#6786ee;box-shadow:0 0 0 3px #315fe81a}.input::placeholder,.textarea::placeholder{color:#9aa6b8}.field{display:grid;gap:7px}.field>span:first-child{color:#53627a;font-size:13px;font-weight:700}.status{display:inline-flex;align-items:center;gap:7px;border-radius:999px;background:#edf8f3;color:#287451;padding:5px 10px;font-size:12px;font-weight:700}.dot{width:7px;height:7px;border-radius:50%;background:#39a876}.error{border:1px solid #f2cdca;border-radius:12px;background:#fff6f5;color:#a33e39;padding:11px 13px;font-size:14px}.muted{color:var(--muted)}.gate-card{overflow:hidden}.gate-bar{height:7px;background:linear-gradient(90deg,#315fe8,#73a5ff 58%,#d8f4e9)}.gate-inner{padding:clamp(25px,6vw,47px)}.gate-title{margin:20px 0 8px;max-width:520px;font-size:clamp(29px,7vw,42px);line-height:1.18;letter-spacing:-.055em}.gate-copy{margin:0 0 26px;max-width:460px;font-size:15px}.form{display:grid;gap:12px}.input-wrap{position:relative}.input-wrap .input{padding-left:42px}.key-icon{position:absolute;left:14px;top:15px;color:#8290a5}.gate-rule{height:1px;margin:25px 0 16px;background:#e9eef5}.gate-note{margin:0;font-size:13px}
    .dashboard-heading{display:flex;align-items:end;justify-content:space-between;gap:24px;margin:4px 0 23px}.dashboard-heading h1{margin:5px 0 2px;font-size:clamp(29px,5vw,38px);line-height:1.2;letter-spacing:-.055em}.dashboard-heading p{margin:0;font-size:14px}.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}.stat{min-height:93px;padding:17px 18px;display:flex;align-items:center;gap:13px}.stat-mark{width:40px;height:40px;flex:0 0 40px;display:grid;place-items:center;border-radius:13px;background:#edf2ff;color:#315fe8;font-size:17px;font-weight:800}.stat:nth-child(2) .stat-mark{background:#e8f7ef;color:#27815a}.stat:nth-child(3) .stat-mark{background:#fff4da;color:#98701b}.stat .eyebrow{display:block}.stat strong{display:block;margin-top:1px;font-size:22px;line-height:1.25;letter-spacing:-.045em}.list-section{margin-top:34px}.section-heading{display:flex;align-items:center;gap:10px;margin-bottom:14px}.section-heading h2{margin:0;font-size:20px;letter-spacing:-.035em}.section-heading .muted{font-size:13px}.student-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}.student-card{min-width:0;padding:20px}.student-head{display:flex;align-items:center;gap:12px}.avatar{width:42px;height:42px;flex:0 0 42px;display:grid;place-items:center;border-radius:14px;background:#e9efff;color:#3154c0;font-size:18px;font-weight:800}.student-name{min-width:0;flex:1}.student-name h3{margin:0;font-size:18px;line-height:1.3;letter-spacing:-.035em;overflow-wrap:anywhere}.student-name span{color:var(--muted);font-size:13px}.count{flex:0 0 auto;border-radius:999px;background:#f0f3f8;color:#56647a;padding:4px 9px;font-size:12px;font-weight:700}.student-meta{display:grid;grid-template-columns:.85fr 1.15fr;gap:10px;margin-top:18px;padding:14px 0;border-top:1px solid #edf0f5;border-bottom:1px solid #edf0f5}.student-meta>div{min-width:0;display:grid;gap:3px}.student-meta>div+div{border-left:1px solid #edf0f5;padding-left:14px}.student-meta span{color:var(--muted);font-size:12px}.student-meta strong{font-size:13px;line-height:1.45;overflow-wrap:anywhere}.progress-line{padding:13px 0 14px}.progress-line p{margin:3px 0 0;font-size:14px;font-weight:650;overflow-wrap:anywhere}.actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}.actions button{min-height:42px;padding:0 10px;font-size:13px}.history{margin-top:15px;border-top:1px solid #edf0f5;padding-top:12px}.history summary{display:flex;align-items:center;justify-content:space-between;cursor:pointer;list-style:none;color:#485973;font-size:13px;font-weight:700}.history summary::-webkit-details-marker{display:none}.history summary:after{content:"+";color:var(--blue);font-size:18px;font-weight:500}.history[open] summary:after{content:"−"}.history summary span{margin-left:auto;margin-right:12px;color:#8290a5;font-size:12px;font-weight:600}.history ol{margin:12px 0 0;padding:0;list-style:none}.history li{padding:13px 0;border-top:1px solid #eef1f6}.history-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}.history-row time{font-size:12px;text-align:right}.session{display:inline-flex;border-radius:8px;padding:4px 9px;background:var(--ink);color:#fff;font-size:12px;font-weight:700}.history li>strong{display:block;font-size:14px}.history li>p{margin:4px 0 0;color:#65738a;font-size:13px;white-space:pre-wrap;overflow-wrap:anywhere}.history-empty{margin:12px 0 4px;color:#8390a2;font-size:13px}.admin-notes{margin:10px 0 2px;border-radius:12px;padding:12px;background:#fff8e8}.admin-notes span{color:#8d6717;font-size:12px;font-weight:750}.admin-notes p{margin:4px 0 0;color:#655736;font-size:13px;white-space:pre-wrap;overflow-wrap:anywhere}.history-controls{display:flex;justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid #edf0f5}.history-controls button{min-height:39px;padding:0 10px;font-size:12px}.empty{min-height:275px;padding:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-mark{width:44px;height:44px;margin-bottom:12px;display:grid;place-items:center;border-radius:14px;background:#edf2ff;color:var(--blue);font-size:20px}.empty h3{margin:0;font-size:18px;letter-spacing:-.03em}.empty p{max-width:370px;margin:7px 0 17px;font-size:14px}.footnote{margin:21px 0 0;color:#8894a7;text-align:center;font-size:12px}
    .student-summary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}.summary{min-height:112px;padding:18px 19px;display:flex;flex-direction:column;justify-content:space-between;gap:12px}.summary strong{font-size:17px;line-height:1.4;letter-spacing:-.025em;overflow-wrap:anywhere}.lesson-panel{margin-top:18px;padding:23px}.lesson-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:15px;margin-bottom:18px}.lesson-panel h2{margin:5px 0 0;font-size:22px;letter-spacing:-.035em}.session-count{border-radius:999px;padding:5px 11px;background:#edf2ff;color:#3458c6;font-size:13px;font-weight:750}.lesson-detail{min-height:190px;border:1px solid #e7ecf4;border-radius:17px;padding:20px;background:linear-gradient(130deg,#f7f9fd 0%,#fbfcff 70%,#f1f5ff 100%)}.lesson-detail-top{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}.lesson-detail h3{margin:19px 0 8px;font-size:21px;line-height:1.35;letter-spacing:-.035em}.lesson-detail p{margin:0;color:#53627a;white-space:pre-wrap;overflow-wrap:anywhere}.lesson-nav{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:16px}.lesson-nav .muted{font-size:13px}.lesson-empty{min-height:180px;border:1px dashed #d7e0ec;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#53627a;text-align:center;padding:20px}.lesson-empty strong{color:var(--ink);font-size:15px}.lesson-empty span{font-size:13px}.notes{margin-top:18px;padding:20px 22px;display:flex;align-items:flex-start;gap:13px}.notes-mark{width:27px;height:27px;flex:0 0 27px;display:grid;place-items:center;border-radius:9px;background:#fff4d9;color:#9b6c10;font-weight:800}.notes p{margin:4px 0 0;color:#46566e;white-space:pre-wrap;overflow-wrap:anywhere}.student-footnote{margin:18px 0 0;color:#8894a7;text-align:center;font-size:13px}
    .modal-backdrop{position:fixed;z-index:40;inset:0;display:grid;place-items:center;overflow-y:auto;padding:22px;background:#10223c88;backdrop-filter:blur(5px)}.modal{width:min(100%,560px);max-height:min(92dvh,860px);overflow-y:auto;border:1px solid #e3e9f2;border-radius:22px;background:#fff;box-shadow:0 30px 90px #10223c40}.modal-head{position:sticky;top:0;z-index:1;display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:22px 24px 15px;border-bottom:1px solid #edf0f5;background:#fff}.modal-head h2{margin:4px 0 0;font-size:21px;letter-spacing:-.04em}.modal-body{padding:21px 24px 24px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.span{grid-column:1/-1}.form-actions{display:flex;justify-content:flex-end;gap:10px;padding-top:7px}.success{display:flex;align-items:flex-start;gap:12px;border:1px solid #d9efe4;border-radius:14px;padding:14px;background:#f4fbf7}.success-check{width:31px;height:31px;flex:0 0 31px;display:grid;place-items:center;border-radius:10px;background:#dff5e9;color:#258255}.success strong{font-size:14px}.success p{margin:3px 0 0;color:#5f7184;font-size:13px}.link-box{min-height:72px;word-break:break-all;font-size:13px}.link-warning{margin:13px 0 0;color:#758196;font-size:12px;line-height:1.55}.close{width:38px;height:38px;border:1px solid var(--line);border-radius:12px;background:#fff;color:#53627a;font-size:22px;line-height:1}
    @media(max-width:640px){.page{padding:18px 15px 45px}.header{margin-bottom:24px}.card{border-radius:18px}.dashboard-heading{align-items:stretch;flex-direction:column;gap:15px}.dashboard-heading>.primary{width:100%}.stats{grid-template-columns:1fr 1fr;gap:9px}.stat{min-height:80px;padding:12px;gap:9px}.stat:last-child{grid-column:1/-1}.stat-mark{width:34px;height:34px;flex-basis:34px;border-radius:11px}.stat strong{font-size:19px}.student-grid{grid-template-columns:1fr}.student-card{padding:17px}.student-meta{grid-template-columns:.8fr 1.2fr}.history-controls{flex-direction:column}.history-controls button{width:100%}.student-summary{grid-template-columns:1fr 1fr}.summary:first-child{grid-column:1/-1}.summary{min-height:104px;padding:15px}.lesson-panel{padding:18px}.lesson-nav{flex-wrap:wrap}.lesson-nav .muted{order:1;width:100%;text-align:center}.lesson-nav>button{flex:1}.form-grid{grid-template-columns:1fr}.span{grid-column:auto}.modal-backdrop{align-items:end;padding:0}.modal{width:100%;max-height:92dvh;border-radius:22px 22px 0 0}.modal-head{padding:19px 18px 14px}.modal-body{padding:17px 18px calc(22px + env(safe-area-inset-bottom))}.form-actions>button{flex:1}}
  </style>
</head>
<body><div id="app"></div>
<script>
const app = document.getElementById("app");
const bookSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14"/><path d="M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1h-4a4 4 0 0 0-4 2 4 4 0 0 0-4-2H4a1 1 0 0 1-1-1Z"/></svg>';
let adminToken = "";
let adminStudents = [];
let studentData = null;
let lessonIndex = 0;
let modalState = null;
let pageError = "";
let saving = false;

function esc(value) { return String(value == null ? "" : value).replace(/[&<>"']/g, function(ch) { return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]; }); }
function localNow() { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0,16); }
function dateText(value) { if (!value) return "일정 미정"; const d = new Date(value); if (Number.isNaN(d.getTime())) return value; return new Intl.DateTimeFormat("ko-KR", {timeZone:"Asia/Seoul",year:"numeric",month:"long",day:"numeric",weekday:"short",hour:"numeric",minute:"2-digit"}).format(d); }
function money(value) { return new Intl.NumberFormat("ko-KR").format(Number(value) || 0) + "원"; }
function header(label) { return '<header class="header"><a class="brand" href="/" aria-label="수업 노트 홈"><span class="brand-mark">' + bookSvg + '</span><span class="brand-name">수업 노트</span></a><span class="header-label">' + label + '</span></header>'; }
function shell(label, content, narrow) { return '<main class="page">' + header(label) + '<section class="' + (narrow ? "narrow" : "content") + '">' + content + '</section></main>'; }
function showGate(kind, error) {
  const isAdmin = kind === "master";
  const title = isAdmin ? "마스터 링크로 접속해 주세요" : "학생 전용 코드로 열기";
  const copy = isAdmin ? "관리자 링크에 접근 코드가 포함되어 있습니다. 주소창의 전체 링크를 다시 확인해 주세요." : "선생님이 공유한 링크를 열거나, 전용 코드를 입력해 주세요.";
  const label = isAdmin ? "관리자 접근 코드" : "학생 전용 코드";
  const body = '<div class="card gate-card"><div class="gate-bar"></div><div class="gate-inner"><span class="eyebrow">' + (isAdmin ? "관리자 전용" : "내 수업 기록") + '</span><h1 class="gate-title" style="font-size:28px;margin:9px 0 7px">' + title + '</h1><p class="muted gate-copy">' + copy + '</p><form class="form" id="codeForm"><label class="field"><span>' + label + '</span><span class="input-wrap"><span class="key-icon">⌑</span><input class="input" id="accessCode" autocomplete="off" autocapitalize="none" spellcheck="false" required></span></label>' + (error ? '<p class="error" role="alert" style="margin:0">' + esc(error) + '</p>' : '') + '<button class="primary" type="submit">' + (isAdmin ? "관리 화면 열기" : "수업 기록 열기") + '</button></form>' + (!isAdmin ? '<div class="gate-rule"></div><p class="muted gate-note">학생마다 다른 전용 코드가 발급됩니다. 본인에게 공유된 링크와 코드를 사용해 주세요.</p>' : '') + '</div></div>';
  app.innerHTML = shell(isAdmin ? "마스터 관리" : "학생 전용 공간", body, true);
}
function linkFormToken() { try { return decodeURIComponent(location.hash.slice(1)).trim(); } catch { return ""; } }
function api(url, token, options) {
  options = options || {};
  const headers = new Headers(options.headers || {});
  if (token) headers.set("Authorization", "Bearer " + token);
  if (options.studentToken) { headers.set("X-Student-Key", options.studentToken); delete options.studentToken; }
  if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return fetch(url, Object.assign({}, options, {headers:headers,cache:"no-store"})).then(function(response) {
    return response.json().catch(function() { return {}; }).then(function(result) {
      if (!response.ok) throw new Error(result.error || "요청을 처리하지 못했습니다.");
      return result;
    });
  });
}
function studentMarkup() {
  const s = studentData.student, lessons = studentData.lessons || [], lesson = lessons[lessonIndex];
  let content = '<div style="margin-bottom:24px"><div class="eyebrow" style="margin-bottom:7px">' + esc(s.subject || "수업 기록") + '</div><h1 style="margin:0;font-size:clamp(27px,5vw,38px);letter-spacing:-.05em;line-height:1.2">' + esc(s.name) + '님의 수업</h1><p class="muted" style="margin:8px 0 0;font-size:14px">수업에서 배운 내용과 다음 일정을 확인할 수 있어요.</p></div>';
  content += '<section class="student-summary"><article class="card summary"><span class="eyebrow">현재 진도</span><strong>' + esc(s.progress || "아직 입력되지 않았어요") + '</strong></article><article class="card summary"><span class="eyebrow">다음 수업</span><strong>' + esc(dateText(s.nextClass)) + '</strong></article><article class="card summary"><span class="eyebrow">수업료 · 1회</span><strong>' + esc(money(s.fee)) + '</strong></article></section>';
  content += '<section class="card lesson-panel"><div class="lesson-panel-head"><div><span class="eyebrow">회차별 수업 내역</span><h2>지난 수업</h2></div>' + (lessons.length ? '<span class="session-count">' + (lessonIndex + 1) + ' / ' + lessons.length + '</span>' : '') + '</div>';
  if (lesson) {
    content += '<div class="lesson-detail"><div class="lesson-detail-top"><span class="session">' + lesson.sessionNumber + '회차</span><time class="muted" datetime="' + esc(lesson.heldAt) + '">' + esc(dateText(lesson.heldAt)) + '</time></div><h3>' + esc(lesson.topic) + '</h3><p>' + esc(lesson.summary || "수업 내용이 추가되면 여기에 표시됩니다.") + '</p></div><div class="lesson-nav"><button class="quiet" type="button" data-action="previous-session" ' + (lessonIndex === 0 ? "disabled" : "") + '>이전 회차</button><span class="muted">수업을 한 회차씩 넘겨볼 수 있어요</span><button class="secondary" type="button" data-action="next-session" ' + (lessonIndex >= lessons.length - 1 ? "disabled" : "") + '>다음 회차</button></div>';
  } else {
    content += '<div class="lesson-empty"><strong>아직 등록된 수업 내역이 없어요.</strong><span>첫 수업이 등록되면 회차별로 확인할 수 있습니다.</span></div>';
  }
  content += '</section><section class="card notes"><span class="notes-mark">!</span><div><span class="eyebrow">안내 사항</span><p>' + esc(s.notes || "추가로 전달된 안내 사항이 없습니다.") + '</p></div></section><p class="student-footnote">수업 내용에 수정이 필요하면 선생님께 알려 주세요.</p>';
  return content;
}
function loadStudent(code) {
  if (!code) { studentData = null; showGate("student", ""); return; }
  app.innerHTML = shell("학생 전용 기록", '<div class="card" style="padding:26px;display:flex;align-items:center;gap:12px"><span class="status"><span class="dot"></span>확인 중</span><span>수업 기록을 불러오는 중입니다.</span></div>', true);
  api("/api/student", "", {method:"GET",studentToken:code}).then(function(result) {
    studentData = result; lessonIndex = Math.max(0, (result.lessons || []).length - 1);
    app.innerHTML = shell("학생 전용 기록", studentMarkup(), false);
  }).catch(function(error) { studentData = null; showGate("student", error.message || "학생 기록을 불러오지 못했습니다."); });
}
function adminCards() {
  return adminStudents.map(function(s) {
    const lessons = s.lessons || [];
    const history = lessons.length ? '<ol>' + lessons.slice().reverse().map(function(l) { return '<li><div class="history-row"><span class="session">' + l.sessionNumber + '회</span><time class="muted" datetime="' + esc(l.heldAt) + '">' + esc(dateText(l.heldAt)) + '</time></div><strong>' + esc(l.topic) + '</strong>' + (l.summary ? '<p>' + esc(l.summary) + '</p>' : '') + '</li>'; }).join("") + '</ol>' : '<p class="history-empty">아직 등록된 수업 내역이 없습니다.</p>';
    return '<article class="card student-card"><div class="student-head"><span class="avatar">' + esc((s.name || "학생").slice(0,1)) + '</span><div class="student-name"><h3>' + esc(s.name) + '</h3><span>' + esc(s.subject || "과목 미입력") + '</span></div><span class="count">' + lessons.length + '회</span></div><div class="student-meta"><div><span>회당 수업료</span><strong>' + esc(money(s.fee)) + '</strong></div><div><span>다음 수업</span><strong>' + esc(dateText(s.nextClass)) + '</strong></div></div><div class="progress-line"><span class="eyebrow">현재 진도</span><p>' + esc(s.progress || "진도 미입력") + '</p></div><div class="actions"><button class="quiet" type="button" data-action="edit-student" data-id="' + s.id + '">정보 수정</button><button class="secondary" type="button" data-action="add-lesson" data-id="' + s.id + '">수업 기록 추가</button></div><details class="history"><summary>수업 내역 보기 <span>' + lessons.length + '회</span></summary>' + history + (s.notes ? '<div class="admin-notes"><span>학생에게 보일 안내 사항</span><p>' + esc(s.notes) + '</p></div>' : '') + '<div class="history-controls"><button class="quiet" type="button" data-action="rotate-link" data-id="' + s.id + '">학생 링크 재발급</button><button class="danger" type="button" data-action="delete-student" data-id="' + s.id + '">학생 삭제</button></div></details></article>';
  }).join("");
}
function modalMarkup() {
  if (!modalState) return "";
  let eyebrow = "학생 관리", title = "", body = "";
  if (modalState.type === "student") {
    const s = modalState.student || {name:"",subject:"",fee:"",progress:"",nextClass:"",notes:""};
    title = modalState.student ? "학생 정보 수정" : "학생 등록";
    body = '<form class="form-grid" id="studentForm"><label class="field"><span>학생 이름</span><input class="input" name="name" maxlength="80" value="' + esc(s.name) + '" required placeholder="예: 김하늘"></label><label class="field"><span>과목 또는 수업 분야</span><input class="input" name="subject" maxlength="100" value="' + esc(s.subject) + '" placeholder="학생마다 다르게 입력"></label><label class="field"><span>회당 수업료 (원)</span><input class="input" name="fee" type="number" min="0" step="1000" value="' + esc(s.fee) + '" placeholder="예: 60000"></label><label class="field"><span>다음 수업 일정</span><input class="input" name="nextClass" type="datetime-local" value="' + esc(s.nextClass || "") + '"></label><label class="field span"><span>현재 진도</span><input class="input" name="progress" maxlength="300" value="' + esc(s.progress) + '" placeholder="예: 미분법 — 도함수의 활용"></label><label class="field span"><span>학생에게 보일 안내 사항</span><textarea class="textarea" name="notes" maxlength="1000" placeholder="준비물, 과제 안내 등">' + esc(s.notes) + '</textarea></label>' + (pageError ? '<p class="error span">' + esc(pageError) + '</p>' : '') + '<div class="form-actions span"><button class="quiet" type="button" data-action="close-modal">취소</button><button class="primary" type="submit" ' + (saving ? "disabled" : "") + '>' + (saving ? "저장 중…" : modalState.id ? "변경 저장" : "학생 등록") + '</button></div></form>';
  } else if (modalState.type === "lesson") {
    title = modalState.student.name + "님 수업 기록"; eyebrow = "회차 기록 추가";
    body = '<form class="form-grid" id="lessonForm"><label class="field span"><span>수업 날짜와 시간</span><input class="input" name="heldAt" type="datetime-local" value="' + esc(modalState.heldAt || localNow()) + '" required></label><label class="field span"><span>이번 회차 주제</span><input class="input" name="topic" maxlength="120" value="' + esc(modalState.topic || "") + '" required placeholder="이번 수업에서 다룬 내용"></label><label class="field span"><span>수업 내용 또는 과제</span><textarea class="textarea" name="summary" maxlength="1500" placeholder="학생 페이지에 표시할 내용을 입력하세요">' + esc(modalState.summary || "") + '</textarea></label>' + (pageError ? '<p class="error span">' + esc(pageError) + '</p>' : '') + '<div class="form-actions span"><button class="quiet" type="button" data-action="close-modal">취소</button><button class="primary" type="submit" ' + (saving ? "disabled" : "") + '>' + (saving ? "저장 중…" : "회차 기록 저장") + '</button></div></form>';
  } else if (modalState.type === "link") {
    title = "학생 전용 링크"; eyebrow = modalState.name + "님";
    const href = location.origin + "/student#" + modalState.token;
    body = '<div class="success"><span class="success-check">✓</span><div><strong>새 링크를 발급했습니다.</strong><p>이 링크를 받은 사람은 해당 학생의 수업 기록을 볼 수 있습니다.</p></div></div><label class="field" style="margin-top:19px"><span>학생에게 공유할 링크</span><textarea class="textarea link-box" id="shareLink" readonly>' + esc(href) + '</textarea></label><button class="primary" style="width:100%;margin-top:12px" type="button" data-action="copy-link">' + (modalState.copied ? "복사했어요" : "링크 복사") + '</button><p class="link-warning">링크는 이 화면에서만 확인할 수 있습니다. 다시 잃어버리면 새 링크를 발급해 주세요. 새 링크는 이전 링크를 사용할 수 없게 만듭니다.</p>';
  }
  return '<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-label="' + esc(title) + '"><div class="modal-head"><div><div class="eyebrow">' + esc(eyebrow) + '</div><h2>' + esc(title) + '</h2></div><button class="close" type="button" data-action="close-modal" aria-label="닫기">×</button></div><div class="modal-body">' + body + '</div></section></div>';
}
function renderAdmin() {
  const lessons = adminStudents.reduce(function(total,s) { return total + (s.lessons || []).length; }, 0);
  const next = adminStudents.filter(function(s) { const d = new Date(s.nextClass); return s.nextClass && !Number.isNaN(d.getTime()) && d.getTime() >= Date.now(); }).length;
  let content = '<div class="dashboard-heading"><div><span class="eyebrow">과외 운영</span><h1>학생 관리</h1><p class="muted">학생별 정보와 수업 기록을 관리합니다.</p></div><button class="primary" type="button" data-action="new-student">＋ 학생 등록</button></div>';
  if (pageError && !modalState) content += '<p class="error" role="alert">' + esc(pageError) + '</p>';
  content += '<section class="stats" aria-label="운영 요약"><article class="card stat"><span class="stat-mark">人</span><div><span class="eyebrow">관리 학생</span><strong>' + adminStudents.length + '명</strong></div></article><article class="card stat"><span class="stat-mark">✓</span><div><span class="eyebrow">누적 수업</span><strong>' + lessons + '회</strong></div></article><article class="card stat"><span class="stat-mark">◷</span><div><span class="eyebrow">예정 수업</span><strong>' + next + '건</strong></div></article></section>';
  content += '<section class="list-section"><div class="section-heading"><h2>학생 목록</h2><span class="muted">' + adminStudents.length + '명</span></div>';
  if (!adminStudents.length) content += '<div class="card empty"><span class="empty-mark">＋</span><h3>아직 등록된 학생이 없습니다.</h3><p class="muted">학생을 등록하면 이름, 수업료, 진도와 수업 기록을 관리할 수 있어요.</p><button class="secondary" type="button" data-action="new-student">첫 학생 등록</button></div>';
  else content += '<div class="student-grid">' + adminCards() + '</div>';
  content += '</section><p class="footnote">학생 전용 링크는 발급 시 한 번만 표시됩니다. 분실한 경우 수업 내역에서 새 링크를 발급할 수 있어요.</p>';
  app.innerHTML = '<main class="page">' + header("마스터 관리") + '<div class="content">' + content + '</div>' + modalMarkup() + '</main>';
}
function loadAdmin(token) {
  if (!token) { adminToken = ""; showGate("master", ""); return; }
  adminToken = token;
  app.innerHTML = shell("마스터 관리", '<div class="card" style="padding:26px">관리자 정보를 불러오는 중입니다.</div>', true);
  api("/api/admin/students", token).then(function(result) {
    adminStudents = result.students || []; pageError = ""; renderAdmin();
  }).catch(function(error) { adminStudents = []; adminToken = ""; showGate("master", error.message || "관리자 링크를 확인해 주세요."); });
}
function boot() {
  const path = location.pathname;
  if (path === "/master" || path === "/master/") loadAdmin(linkFormToken());
  else if (path === "/student" || path === "/student/") loadStudent(linkFormToken());
  else { studentData = null; showGate("student", ""); }
}
document.addEventListener("submit", function(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  if (form.id === "codeForm") {
    const value = new FormData(form).get("accessCode") || document.getElementById("accessCode").value;
    const code = String(value).trim();
    if (code.length < 32) { showGate(location.pathname.indexOf("master") >= 0 ? "master" : "student", "전용 코드를 확인해 주세요."); return; }
    if (location.pathname === "/master" || location.pathname === "/master/" || location.pathname === "/student" || location.pathname === "/student/") location.hash = encodeURIComponent(code);
    else location.href = "/student#" + encodeURIComponent(code);
    return;
  }
  if (form.id === "studentForm") saveStudentForm(form);
  if (form.id === "lessonForm") saveLessonForm(form);
});
async function saveStudentForm(form) {
  if (saving) return;
  const fields = Object.fromEntries(new FormData(form).entries());
  const payload = {name:String(fields.name || "").trim(),subject:String(fields.subject || "").trim(),fee:Number(fields.fee || 0),progress:String(fields.progress || "").trim(),nextClass:String(fields.nextClass || ""),notes:String(fields.notes || "").trim()};
  if (!payload.name || !Number.isInteger(payload.fee) || payload.fee < 0) { pageError = "학생 이름과 0원 이상의 회당 수업료를 입력해 주세요."; modalState.student = payload; renderAdmin(); return; }
  const editingId = modalState && modalState.id;
  saving = true; pageError = "";
  const submit = form.querySelector('button[type="submit"]'); if (submit) { submit.disabled = true; submit.textContent = "저장 중…"; }
  try {
    if (editingId) await api("/api/admin/students/" + editingId, adminToken, {method:"PATCH",body:JSON.stringify(payload)});
    else { const result = await api("/api/admin/students", adminToken, {method:"POST",body:JSON.stringify(payload)}); modalState = {type:"link",name:result.student.name,token:result.accessToken,copied:false}; }
    if (editingId) modalState = null;
    const result = await api("/api/admin/students", adminToken);
    adminStudents = result.students || [];
  } catch(error) { pageError = error.message || "학생 정보를 저장하지 못했습니다."; if (modalState && modalState.type === "student") modalState.student = payload; }
  saving = false; renderAdmin();
}
async function saveLessonForm(form) {
  if (saving || !modalState || !modalState.student) return;
  const fields = Object.fromEntries(new FormData(form).entries());
  const student = modalState.student;
  const payload = {heldAt:String(fields.heldAt || ""),topic:String(fields.topic || "").trim(),summary:String(fields.summary || "").trim()};
  saving = true; pageError = "";
  const submit = form.querySelector('button[type="submit"]'); if (submit) { submit.disabled = true; submit.textContent = "저장 중…"; }
  try {
    await api("/api/admin/students/" + student.id + "/lessons", adminToken, {method:"POST",body:JSON.stringify(payload)});
    modalState = null;
    const result = await api("/api/admin/students", adminToken);
    adminStudents = result.students || [];
  } catch(error) { pageError = error.message || "수업 내역을 저장하지 못했습니다."; modalState = Object.assign({},modalState,payload); }
  saving = false; renderAdmin();
}
function studentById(id) { return adminStudents.find(function(s) { return String(s.id) === String(id); }); }
document.addEventListener("click", async function(event) {
  const target = event.target instanceof Element ? event.target.closest("[data-action]") : null;
  if (!target) return;
  const action = target.getAttribute("data-action"), id = target.getAttribute("data-id"), student = id ? studentById(id) : null;
  if (action === "previous-session") { lessonIndex = Math.max(0, lessonIndex - 1); app.innerHTML = shell("학생 전용 기록", studentMarkup(), false); }
  else if (action === "next-session") { lessonIndex = Math.min((studentData.lessons || []).length - 1, lessonIndex + 1); app.innerHTML = shell("학생 전용 기록", studentMarkup(), false); }
  else if (action === "new-student") { pageError = ""; modalState = {type:"student",student:null,id:null}; renderAdmin(); }
  else if (action === "edit-student" && student) { pageError = ""; modalState = {type:"student",student:student,id:student.id}; renderAdmin(); }
  else if (action === "add-lesson" && student) { pageError = ""; modalState = {type:"lesson",student:student,heldAt:localNow()}; renderAdmin(); }
  else if (action === "close-modal" || (action === "backdrop" && event.target === target)) { modalState = null; pageError = ""; renderAdmin(); }
  else if (action === "copy-link" && modalState && modalState.type === "link") {
    try { await navigator.clipboard.writeText(location.origin + "/student#" + modalState.token); modalState.copied = true; renderAdmin(); }
    catch { const field = document.getElementById("shareLink"); if (field) { field.focus(); field.select(); } }
  }
  else if (action === "rotate-link" && student) {
    if (!confirm(student.name + "님의 기존 링크를 중지하고 새 링크를 발급할까요?")) return;
    try { const result = await api("/api/admin/students/" + student.id + "/token", adminToken, {method:"POST"}); modalState = {type:"link",name:student.name,token:result.accessToken,copied:false}; pageError = ""; renderAdmin(); }
    catch(error) { pageError = error.message || "새 링크를 만들지 못했습니다."; renderAdmin(); }
  }
  else if (action === "delete-student" && student) {
    if (!confirm(student.name + "님의 학생 정보와 모든 수업 내역을 삭제할까요? 삭제한 기록은 복구할 수 없습니다.")) return;
    try { await api("/api/admin/students/" + student.id, adminToken, {method:"DELETE"}); const result = await api("/api/admin/students", adminToken); adminStudents = result.students || []; pageError = ""; renderAdmin(); }
    catch(error) { pageError = error.message || "학생 정보를 삭제하지 못했습니다."; renderAdmin(); }
  }
});
window.addEventListener("hashchange", boot);
boot();
</script></body></html>`;

const encoder = new TextEncoder();
const jsonHeaders = { "content-type": "application/json; charset=utf-8", "cache-control": "private, no-store, max-age=0", pragma: "no-cache", vary: "Authorization, X-Student-Key", "x-content-type-options": "nosniff" };

function json(data, status) { return new Response(JSON.stringify(data), {status:status || 200,headers:jsonHeaders}); }
function error(message, status) { return json({error:message},status); }
async function digest(token) { const value = await crypto.subtle.digest("SHA-256", encoder.encode(token)); return Array.from(new Uint8Array(value), function(byte) { return byte.toString(16).padStart(2,"0"); }).join(""); }
function newToken() { return Array.from(crypto.getRandomValues(new Uint8Array(32)), function(byte) { return byte.toString(16).padStart(2,"0"); }).join(""); }
function safeEqual(a,b) { let diff = a.length ^ b.length; const size = Math.max(a.length,b.length); for(let i=0;i<size;i++) diff |= (a.charCodeAt(i)||0) ^ (b.charCodeAt(i)||0); return diff === 0; }
async function readBody(request) { const length = Number(request.headers.get("content-length") || 0); if(length > 24000 || !request.body) return null; const reader = request.body.getReader(), chunks=[]; let size=0; try { while(true) { const item=await reader.read(); if(item.done) break; size += item.value.byteLength; if(size>24000) { await reader.cancel(); return null; } chunks.push(item.value); } const bytes=new Uint8Array(size); let offset=0; for(const chunk of chunks) { bytes.set(chunk,offset); offset+=chunk.byteLength; } const data=JSON.parse(new TextDecoder().decode(bytes)); return data && typeof data === "object" && !Array.isArray(data) ? data : null; } catch { return null; } }
function text(value,max) { if(typeof value !== "string") return null; const clean=value.trim(); return clean.length<=max ? clean : null; }
function fee(value) { const n=typeof value === "number" ? value : Number(value); return Number.isInteger(n) && n>=0 && n<=10000000 ? n : null; }
function idValue(value) { if(!/^\d{1,10}$/.test(value)) return null; const id=Number(value); return Number.isSafeInteger(id)&&id>0 ? id : null; }
async function isAdmin(request,env) { const configured=env.ADMIN_TOKEN_HASH, header=request.headers.get("authorization")||"", match=header.match(/^Bearer (.{1,200})$/); if(!configured||!match) return false; return safeEqual(await digest(match[1]),configured); }
async function studentId(request,env) { const token=request.headers.get("X-Student-Key"); if(!token||token.length>200||!env.DB) return null; const row=await env.DB.prepare("SELECT id FROM students WHERE token_hash = ? LIMIT 1").bind(await digest(token)).first(); return row ? row.id : null; }
function studentPayload(body) { const name=text(body.name,80), subject=text(body.subject == null ? "" : body.subject,100), amount=fee(body.fee), progress=text(body.progress == null ? "" : body.progress,300), nextClass=text(body.nextClass == null ? "" : body.nextClass,40), notes=text(body.notes == null ? "" : body.notes,1000); if(!name||subject===null||amount===null||progress===null||nextClass===null||notes===null) return null; return {name:name,subject:subject,fee:amount,progress:progress,nextClass:nextClass,notes:notes}; }
async function adminApi(request,env,url) {
  if(!(await isAdmin(request,env))) return error("인증이 필요합니다.",401);
  if(!env.DB) return error("저장소를 사용할 수 없습니다.",503);
  const path=url.pathname, method=request.method;
  if(path==="/api/admin/students" && method==="GET") {
    try {
      const [studentRows,lessonRows]=await Promise.all([
        env.DB.prepare("SELECT id, name, subject, fee, progress, next_class AS nextClass, notes, created_at AS createdAt, updated_at AS updatedAt FROM students ORDER BY name COLLATE NOCASE, id").all(),
        env.DB.prepare("SELECT id, student_id AS studentId, session_number AS sessionNumber, held_at AS heldAt, topic, summary, created_at AS createdAt FROM lessons ORDER BY student_id, session_number").all()
      ]);
      const map=new Map(); for(const row of lessonRows.results||[]) { const list=map.get(row.studentId)||[]; list.push(row); map.set(row.studentId,list); }
      return json({students:(studentRows.results||[]).map(function(s) { return Object.assign({},s,{lessons:map.get(s.id)||[]}); })});
    } catch { return error("학생 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",503); }
  }
  if(path==="/api/admin/students" && method==="POST") {
    const body=await readBody(request), fields=body&&studentPayload(body); if(!fields) return error("학생 이름, 수업료와 입력 내용을 확인해 주세요.",400);
    const token=newToken();
    try { const student=await env.DB.prepare("INSERT INTO students (name, subject, fee, progress, next_class, notes, token_hash) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id, name, subject, fee, progress, next_class AS nextClass, notes, created_at AS createdAt, updated_at AS updatedAt").bind(fields.name,fields.subject,fields.fee,fields.progress,fields.nextClass,fields.notes,await digest(token)).first(); if(!student) return error("학생 정보를 저장하지 못했습니다.",503); return json({student:student,accessToken:token},201); }
    catch { return error("학생 정보를 저장하지 못했습니다. 입력 내용을 확인해 주세요.",503); }
  }
  const match=path.match(/^\/api\/admin\/students\/(\d+)(?:\/(lessons|token))?$/);
  if(!match) return error("요청한 항목을 찾을 수 없습니다.",404);
  const id=idValue(match[1]), action=match[2]||""; if(!id) return error("학생을 찾을 수 없습니다.",404);
  if(action==="lessons" && method==="POST") {
    const body=await readBody(request); if(!body) return error("입력 내용을 확인해 주세요.",400);
    const heldAt=text(body.heldAt,40), topic=text(body.topic,120), summary=text(body.summary == null ? "" : body.summary,1500); if(!heldAt||!topic||summary===null) return error("수업 날짜와 주제를 입력해 주세요.",400);
    try { const existing=await env.DB.prepare("SELECT id FROM students WHERE id = ?").bind(id).first(); if(!existing) return error("학생을 찾을 수 없습니다.",404); const lesson=await env.DB.prepare("INSERT INTO lessons (student_id, session_number, held_at, topic, summary) VALUES (?, (SELECT COALESCE(MAX(session_number), 0) + 1 FROM lessons WHERE student_id = ?), ?, ?, ?) RETURNING id, student_id AS studentId, session_number AS sessionNumber, held_at AS heldAt, topic, summary, created_at AS createdAt").bind(id,id,heldAt,topic,summary).first(); await env.DB.prepare("UPDATE students SET updated_at = CURRENT_TIMESTAMP WHERE id = ?").bind(id).run(); return json({lesson:lesson},201); }
    catch { return error("수업 내역을 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.",503); }
  }
  if(action==="token" && method==="POST") {
    const token=newToken();
    try { const row=await env.DB.prepare("UPDATE students SET token_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? RETURNING id").bind(await digest(token),id).first(); if(!row) return error("학생을 찾을 수 없습니다.",404); return json({accessToken:token}); }
    catch { return error("새 학생 링크를 만들지 못했습니다. 잠시 후 다시 시도해 주세요.",503); }
  }
  if(!action && method==="PATCH") {
    const body=await readBody(request), fields=body&&studentPayload(body); if(!fields) return error("학생 이름, 수업료와 입력 내용을 확인해 주세요.",400);
    try { const student=await env.DB.prepare("UPDATE students SET name = ?, subject = ?, fee = ?, progress = ?, next_class = ?, notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? RETURNING id, name, subject, fee, progress, next_class AS nextClass, notes, created_at AS createdAt, updated_at AS updatedAt").bind(fields.name,fields.subject,fields.fee,fields.progress,fields.nextClass,fields.notes,id).first(); if(!student) return error("학생을 찾을 수 없습니다.",404); return json({student:student}); }
    catch { return error("학생 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.",503); }
  }
  if(!action && method==="DELETE") {
    try { const existing=await env.DB.prepare("SELECT id FROM students WHERE id = ?").bind(id).first(); if(!existing) return error("학생을 찾을 수 없습니다.",404); await env.DB.batch([env.DB.prepare("DELETE FROM lessons WHERE student_id = ?").bind(id),env.DB.prepare("DELETE FROM students WHERE id = ?").bind(id)]); return json({ok:true}); }
    catch { return error("학생을 삭제하지 못했습니다. 잠시 후 다시 시도해 주세요.",503); }
  }
  return error("요청한 작업을 찾을 수 없습니다.",404);
}
async function studentApi(request,env) {
  if(request.method!=="GET") return error("요청한 작업을 찾을 수 없습니다.",405);
  if(!env.DB) return error("저장소를 사용할 수 없습니다.",503);
  try {
    const id=await studentId(request,env); if(!id) return error("학생 전용 코드가 올바르지 않습니다.",401);
    const [student,lessons]=await Promise.all([
      env.DB.prepare("SELECT id, name, subject, fee, progress, next_class AS nextClass, notes FROM students WHERE id = ? LIMIT 1").bind(id).first(),
      env.DB.prepare("SELECT id, session_number AS sessionNumber, held_at AS heldAt, topic, summary FROM lessons WHERE student_id = ? ORDER BY session_number").bind(id).all()
    ]);
    if(!student) return error("학생 전용 코드가 올바르지 않습니다.",401);
    return json({student:student,lessons:lessons.results||[]});
  } catch { return error("수업 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",503); }
}

export default {
  async fetch(request,env) {
    const url=new URL(request.url);
    if(url.pathname.startsWith("/api/admin/")) return adminApi(request,env,url);
    if(url.pathname==="/api/student") return studentApi(request,env);
    if(request.method!=="GET" && request.method!=="HEAD") return new Response("Method not allowed",{status:405,headers:{allow:"GET, HEAD"}});
    if(!["/","/student","/student/","/master","/master/"].includes(url.pathname)) return new Response("Not found",{status:404});
    if(request.method==="HEAD") return new Response(null,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    return new Response(page,{headers:{
      "content-type":"text/html; charset=utf-8",
      "cache-control":"private, no-store, max-age=0",
      "x-content-type-options":"nosniff",
      "x-frame-options":"DENY",
      "referrer-policy":"no-referrer",
      "content-security-policy":"default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; img-src 'self' data:; base-uri 'none'; form-action 'self'; frame-ancestors 'none'"
    }});
  }
};
