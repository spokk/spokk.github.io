(function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

document.querySelectorAll("#nav li").forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

// set focus on modal close btn when it's open - https://www.w3.org/TR/wai-aria-1.1/#dialog
document.querySelectorAll("button.modal-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-target");
    document.querySelector(`#${modalId} > button.modal-close`).focus();
  });
});

document
  .querySelector("#burgerMenuToggle")
  .addEventListener("click", ({ target }) => {
    target.toggleAttribute("aria-expanded");
  });

const getTabButtons = () => document.querySelectorAll('button[role="tab"]');
const getTabPanels = () => document.querySelectorAll('div[role="tabpanel"]');
const keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  enter: 13,
  space: 32,
};
const direction = {
  37: -1,
  39: 1,
};

const resetAllTabs = () => {
  getTabButtons().forEach((btn) => {
    btn.setAttribute("tabindex", "-1");
    btn.setAttribute("aria-selected", false);
  });
};

const resetAllTabPanels = () => {
  getTabPanels().forEach((panel) => {
    panel.setAttribute("hidden", true);
    panel.classList.remove("is-active");
  });
};

const getPanelById = (tabId) =>
  [...getTabPanels()].find((panel) =>
    panel.getAttribute("aria-labelledby") === tabId ? panel : null
  );

const getActivePanel = () =>
  [...getTabPanels()].find((panel) =>
    panel.classList.contains("is-active") ? panel : null
  );

const getActiveBtn = () =>
  [...getTabButtons()].find((btn) =>
    btn.getAttribute("aria-selected") === "true" ? btn : null
  );

const setActiveBtn = (btn) => {
  btn.removeAttribute("tabindex");
  btn.setAttribute("aria-selected", true);
};

const setActivePanel = (panel) => {
  panel.removeAttribute("hidden");
  panel.classList.add("is-active");
};

const setBtnAndPanel = (btn, panel) => {
  resetAllTabs();
  resetAllTabPanels();
  setActiveBtn(btn);
  setActivePanel(panel);
  btn.focus();
};

const clickEventListener = (btn) => {
  const tabId = btn.getAttribute("id");
  const panel = getPanelById(tabId);

  setBtnAndPanel(btn, panel);
};

const switchTabOnArrowPress = (key) => {
  const activePanel = getActivePanel();
  const activeBtn = getActiveBtn();

  if (direction[key] === 1 && activeBtn.nextElementSibling) {
    setBtnAndPanel(
      activeBtn.nextElementSibling,
      activePanel.nextElementSibling
    );
  }

  if (direction[key] === -1 && activeBtn.previousElementSibling) {
    setBtnAndPanel(
      activeBtn.previousElementSibling,
      activePanel.previousElementSibling
    );
  }
};

const focusLastTab = (event) => {
  event.preventDefault();

  const btns = getTabButtons();
  const panels = getTabPanels();
  const lastBtn = btns[btns.length - 1];
  const lastPanel = panels[panels.length - 1];

  setBtnAndPanel(lastBtn, lastPanel);
};

const focusFirstTab = (event) => {
  event.preventDefault();

  const btns = getTabButtons();
  const panels = getTabPanels();

  setBtnAndPanel(btns[0], panels[0]);
};

const keyupEventListener = (event) => {
  var key = event.keyCode;

  switch (key) {
    case keys.left:
    case keys.right:
      switchTabOnArrowPress(key);
      break;
    case keys.delete:
      document.activeElement.blur();
      break;
    case keys.end:
      focusLastTab(event);
      break;
    case keys.home:
      focusFirstTab(event);
  }
};

getTabButtons().forEach((btn) => {
  btn.addEventListener("click", () => clickEventListener(btn));
  btn.addEventListener("keydown", keyupEventListener);
});

// random tab click for aria-live="polite"
// setInterval(() => tabButtons[Math.floor(Math.random() * 3)].click(), 2000);
