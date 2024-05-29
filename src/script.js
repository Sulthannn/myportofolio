export const elementToggleFunc = function (elem) {
  console.log("Toggling element", elem);
  elem.classList.toggle("active");
};

export const initializeSidebar = function () {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  console.log("Sidebar:", sidebar);
  console.log("SidebarBtn:", sidebarBtn);

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      console.log("Sidebar button clicked");
      elementToggleFunc(sidebar);
    });
  } else {
    console.error("Sidebar or SidebarBtn not found");
  }
};