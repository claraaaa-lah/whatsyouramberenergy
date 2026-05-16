(function () {
  "use strict";

  const data = window.QUIZ_DATA;
  const LETTERS = ["A", "B", "C", "D", "E"];

  const state = {
    currentIndex: 0,
    answers: new Array(data.questions.length).fill(null),
    scores: {}
  };

  const screens = {
    landing: document.getElementById("screen-landing"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result")
  };
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const shareBtn = document.getElementById("share-btn");
  const shareStatus = document.getElementById("share-status");
  const progressLabel = document.getElementById("progress-label");
  const progressPercent = document.getElementById("progress-percent");
  const progressFill = document.getElementById("progress-fill");
  const questionPrompt = document.getElementById("question-prompt");
  const answersList = document.getElementById("answers-list");
  const questionCard = document.querySelector(".question-card");
  const resultEmoji = document.getElementById("result-emoji");
  const resultTitle = document.getElementById("result-title");
  const resultDescription = document.getElementById("result-description");
  const resultTraits = document.getElementById("result-traits");
  const resultCloser = document.getElementById("result-closer");

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
      el.classList.toggle("active", key === name);
      el.classList.remove("fade-in");
    });
    const active = screens[name];
    void active.offsetWidth;
    active.classList.add("fade-in");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetState() {
    state.currentIndex = 0;
    state.answers = new Array(data.questions.length).fill(null);
    state.scores = Object.keys(data.archetypes).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
  }

  function renderQuestion() {
    const q = data.questions[state.currentIndex];
    const total = data.questions.length;
    const num = state.currentIndex + 1;
    const pct = Math.round((num / total) * 100);

    progressLabel.textContent = `Question ${num} of ${total}`;
    progressPercent.textContent = `${pct}%`;
    progressFill.style.width = `${pct}%`;
    questionPrompt.textContent = q.prompt;

    answersList.innerHTML = "";
    q.answers.forEach((answer, i) => {
      const li = document.createElement("li");
      li.style.listStyle = "none";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${LETTERS[i]}</span><span>${escapeHtml(answer.text)}</span>`;
      btn.addEventListener("click", () => onAnswerSelected(answer.archetype, btn));
      li.appendChild(btn);
      answersList.appendChild(li);
    });

    // subtle re-entrance on question change
    if (questionCard) {
      questionCard.classList.remove("fade-in");
      void questionCard.offsetWidth;
      questionCard.classList.add("fade-in");
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function onAnswerSelected(archetypeKey, btnEl) {
    answersList.querySelectorAll(".option-btn").forEach((b) => {
      b.classList.remove("selected");
      b.disabled = true;
    });
    btnEl.classList.add("selected");

    state.answers[state.currentIndex] = archetypeKey;
    state.scores[archetypeKey] = (state.scores[archetypeKey] || 0) + 1;

    setTimeout(() => {
      if (state.currentIndex < data.questions.length - 1) {
        state.currentIndex += 1;
        renderQuestion();
      } else {
        showResult();
      }
    }, 320);
  }

  function determineWinner() {
    const entries = Object.entries(state.scores);
    const maxScore = Math.max(...entries.map(([, v]) => v));
    const tied = entries.filter(([, v]) => v === maxScore).map(([k]) => k);

    if (tied.length === 1) return tied[0];

    const q8Choice = state.answers[state.answers.length - 1];
    if (q8Choice && tied.includes(q8Choice)) return q8Choice;

    for (const key of data.tieBreakPriority) {
      if (tied.includes(key)) return key;
    }
    return tied[0];
  }

  function showResult() {
    const winnerKey = determineWinner();
    const archetype = data.archetypes[winnerKey];

    resultEmoji.textContent = archetype.emoji || "✦";
    resultTitle.textContent = archetype.name;
    resultDescription.textContent = archetype.description;
    resultCloser.textContent = archetype.closer ? `"${archetype.closer}"` : "";

    resultTraits.innerHTML = "";
    archetype.traits.forEach((t) => {
      const div = document.createElement("div");
      div.className = "trait-item";
      div.textContent = t;
      resultTraits.appendChild(div);
    });

    shareBtn.dataset.archetypeName = archetype.name;
    shareStatus.textContent = "";

    progressFill.style.width = "100%";
    showScreen("result");
  }

  async function handleShare() {
    const archetypeName = shareBtn.dataset.archetypeName || "";
    const shareText = `I got ${archetypeName} on Which Amber Glenn's energy are you? ♥`;
    const shareData = {
      title: data.title,
      text: shareText,
      url: typeof window !== "undefined" ? window.location.href : ""
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        flashStatus("Shared ♥");
        return;
      }
    } catch (err) {
      if (err && err.name === "AbortError") return;
    }

    try {
      const toCopy = `${shareText}\n${shareData.url}`.trim();
      await navigator.clipboard.writeText(toCopy);
      flashStatus("Copied to clipboard ♥");
    } catch (e) {
      flashStatus("Couldn't share — copy the URL manually");
    }
  }

  function flashStatus(msg) {
    shareStatus.textContent = msg;
    clearTimeout(flashStatus._t);
    flashStatus._t = setTimeout(() => {
      shareStatus.textContent = "";
    }, 2400);
  }

  startBtn.addEventListener("click", () => {
    resetState();
    renderQuestion();
    showScreen("quiz");
  });

  restartBtn.addEventListener("click", () => {
    resetState();
    showScreen("landing");
  });

  shareBtn.addEventListener("click", handleShare);

  resetState();
})();
