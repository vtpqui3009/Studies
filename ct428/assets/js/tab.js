// window.addEventListener("load", function () {
  const sidebarItem = document.querySelectorAll(".sidebar-item");
  const panelContent = document.querySelectorAll(".panel-content");
  const handleChangeTab = (e) => {
    const tabId = e.target.dataset.tab;
    sidebarItem.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    panelContent.forEach((el) => {
      el.classList.remove("active");
      if (el.getAttribute("data-tab") === tabId) {
        el.classList.add("active");
      }
    });
  };
  sidebarItem.forEach((el) => el.addEventListener("click", handleChangeTab));
// });
