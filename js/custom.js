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

// random tab click for aria-live="polite"
setInterval(() => {
  document
    .querySelectorAll("#tabButton")
    [Math.floor(Math.random() * 3)].click();
}, 1000);
