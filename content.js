chrome.storage.sync.get(["darkModeEnabled", "darkModeSchedule"], (data) => {
  const now = new Date();
  const currentHour = now.getHours();

  const shouldApply = () => {
    if (!data.darkModeSchedule?.enabled) return data.darkModeEnabled;
    const { startHour, endHour } = data.darkModeSchedule;
    return (startHour <= currentHour || endHour > currentHour);
  };

  if (shouldApply()) {
    const style = document.createElement("style");
    style.id = "dark-mode-toggle-style";
    style.textContent = `
      html, body {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
      }
      img, video {
        filter: brightness(0.8) contrast(1.1);
      }
      * {
        background-color: transparent !important;
        border-color: #444 !important;
        color: #e0e0e0 !important;
      }
    `;
    document.head.appendChild(style);
  }
});
