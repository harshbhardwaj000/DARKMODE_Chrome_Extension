# 🌙 Universal Dark Mode Toggle  

A simple Chrome extension that **forces dark mode on all websites** with optional customization and scheduling.  
  

## ✨ Features  

- ✅ Force dark mode on all websites  
- ✅ Toggle dark mode instantly from the toolbar    
- ✅ Schedule dark mode (e.g., enable at night)  
- ✅ Works offline & doesn’t track browsing data  

---

## 📦 Installation  

1. **Clone or Download** this repository  
   ```bash
   git clone https://github.com/harshbhardwaj000/DARKMODE_Chrome_Extension.git
   ```
2. Open **Google Chrome** → go to `chrome://extensions/`  
3. Enable **Developer Mode** (top right)  
4. Click **Load unpacked**  
5. Select the project folder  

---

## 🖱 Usage  

- Click the **extension icon** in the toolbar  
- Toggle **Dark Mode ON/OFF**  
- Adjust settings like **brightness, contrast, or color filters**  
- (Optional) Set a **schedule** for auto dark mode  

---

## 📂 Project Structure  

```
📁 universal-dark-mode-toggle
 ├── manifest.json        # Chrome extension configuration
 ├── popup.html           # UI for popup
 ├── popup.js             # Logic for UI interactions
 ├── background.js        # Background service
 ├── content.js           # Injects dark mode styles
 ├── styles.css           # Custom CSS for dark mode
 ├── icons/               # Extension icons (16, 48, 128 px)
 └── README.md            # This file
```

---

## 🔧 Permissions  

This extension requires:  
- `activeTab` → To modify current tab’s styles  
- `scripting` → To inject dark mode styles  
- `storage` → To save user preferences  

---

## 🛠 Development  

Want to improve the extension?  

1. Fork this repo  
2. Make your changes  
3. Submit a **Pull Request**  

---

## 📜 License  

This project is licensed under the **MIT License** – feel free to use & modify!  

---

## 💡 Future Enhancements  

- [ ] Per-site customization  
- [ ] Keyboard shortcuts  
- [ ] Sync settings across devices  

---

## 🤝 Contributing  

Contributions are welcome! Feel free to open an issue or submit a PR.  

---

## ⭐ Support  

If you find this useful, **give it a ⭐ on GitHub**!  
