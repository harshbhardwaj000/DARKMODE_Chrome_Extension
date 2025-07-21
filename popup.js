document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleDarkMode");
  const schedule = document.getElementById("toggleSchedule");

  chrome.storage.sync.get(["darkModeEnabled", "darkModeSchedule"], (data) => {
    toggle.checked = data.darkModeEnabled ?? false;
    schedule.checked = data.darkModeSchedule?.enabled ?? false;
  });

  toggle.addEventListener("change", () => {
    chrome.storage.sync.set({ darkModeEnabled: toggle.checked });
    chrome.tabs.reload(); // apply immediately
  });

  schedule.addEventListener("change", () => {
    chrome.storage.sync.set({
      darkModeSchedule: {
        enabled: schedule.checked,
        startHour: 20,
        endHour: 7
      }
    });
    chrome.tabs.reload();
  });
});
