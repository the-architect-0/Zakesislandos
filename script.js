// App Configuration - Add your apps here
const apps = [
    {
        id: 1,
        name: "YouTube",
        icon: '<i class="fab fa-youtube"></i>',
        color: "bg-red-500",
        url: "https://www.youtube.com",
        description: "Watch videos"
    },
    {
        id: 2,
        name: "Google",
        icon: '<i class="fab fa-google"></i>',
        color: "bg-blue-500",
        url: "https://www.google.com",
        description: "Search the web"
    },
    {
        id: 3,
        name: "Wikipedia",
        icon: '<i class="fab fa-wikipedia-w"></i>',
        color: "bg-gray-100",
        url: "https://en.wikipedia.org",
        description: "Free encyclopedia"
    },
    {
        id: 4,
        name: "Dictionary",
        icon: '<img src="assets/images/d1.jpg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Dictionary/",
        description: "English Dictionary"
    },
    {
        id: 5,
        name: "Museum",
        icon: '<img src="assets/images/m1.jpg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Museum/",
        description: "Museum"
    },
    {
        id: 6,
        name: "Zakes Jokes",
        icon: '<img src="assets/images/j2.jpeg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Zakesjokes/",
        description: "Dad Joke Generator"
    },
    {
       id: 7,
       name: "Zakes Library",
       icon: '<img src="assets/images/lib1.jpeg" class="desktop-icon-img"></img>',
       color: "bg-gray-100",
       url: "https://the-architect-0.github.io/Library/",
       description: "Read all the books your heart desires"
    },
    {
        id: 8,
        name: "Calculator",
        icon: '<img src="assets/images/c1.jpeg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/scientific-calculator/",
        description: "Calculator"
    },
    {
        id: 9,
        name: "Tetris",
        icon: '<img src="assets/images/te1.jpeg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Tetris/",
        description: "Tetris"
    },
    {
        id: 10,
        name: "Zakes Cosmetics",
        icon: '<img src="assets/images/cos1.jpeg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Cosmeticsstore/",
        description: "store"
    },
    {
        id: 11,
        name: "Weather",
        icon: '<img src="assets/images/wea1.jpg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Weather/",
        description: "Weather app"
    },
    {
        id: 12,
        name: "Music Studio",
        icon: '<img src="assets/images/pi1.png" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Vms/",
        description: "Virtual Music Studio"
    },
    {
        id: 13,
        name: "Notepad",
        icon: '<img src="assets/images/no1.jpg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Notepad/",
        description: "Notepad"
    },
    {
        id: 14,
        name: "To Do list",
        icon: '<img src="assets/images/td1.jpeg" class="desktop-icon-img"></img>',
        color: "bg-gray-100",
        url: "https://the-architect-0.github.io/Todolist/",
        description: "To Do List"
    }
    // Add more apps here following the same format:
    // {
    //     id: 4,
    //     name: "Your App Name",
    //     icon: '<i class="fas fa-icon-name"></i>',
    //     color: "bg-color-500",
    //     url: "https://your-app-url.com",
    //     description: "App description"
    // }
];

// Global State
let windows = [];
let activeWindowId = null;
let zIndexCounter = 100;
let isMobileView = false;
let isStartMenuOpen = false;

// DOM Elements
const desktopIcons = document.getElementById('desktop-icons');
const windowsContainer = document.getElementById('windows-container');
const taskbarApps = document.getElementById('taskbar-apps');
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
const startMenuApps = document.getElementById('start-menu-apps');
const viewToggle = document.getElementById('view-toggle');
const mobileView = document.getElementById('mobile-view');
const mobileIcons = document.getElementById('mobile-icons');
const exitMobileBtn = document.getElementById('exit-mobile');
const clock = document.getElementById('time');
const ampm = document.getElementById('ampm');
const loading = document.getElementById('loading');

// Initialize Application
function init() {
    console.log("🚀 Initializing Virtual Desktop...");
    
    // Create desktop icons
    createDesktopIcons();
    
    // Create mobile icons
    createMobileIcons();
    
    // Create start menu apps
    createStartMenuApps();
    
    // Setup event listeners
    setupEventListeners();
    
    // Start clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Hide loading screen
    setTimeout(() => {
        loading.style.display = 'none';
        console.log("✅ Virtual Desktop loaded!");
        console.log("💡 Add more apps in the 'apps' array in script.js");
    }, 1500);
}

// Create Desktop Icons
function createDesktopIcons() {
    desktopIcons.innerHTML = '';
    
    apps.forEach(app => {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.innerHTML = `
            <div class="desktop-icon-img ${app.color}">
                ${app.icon}
            </div>
            <div class="desktop-icon-label">${app.name}</div>
        `;
        
        icon.addEventListener('click', (e) => {
            if (e.detail === 2) { // Double click
                openApp(app);
            }
        });
        
        icon.addEventListener('click', () => openApp(app));
        
        desktopIcons.appendChild(icon);
    });
}

// Create Mobile Icons
function createMobileIcons() {
    mobileIcons.innerHTML = '';
    
    apps.forEach(app => {
        const icon = document.createElement('div');
        icon.className = 'mobile-icon';
        icon.innerHTML = `
            <div class="mobile-icon-img ${app.color}">
                ${app.icon}
            </div>
            <div class="mobile-icon-label">${app.name}</div>
        `;
        
        icon.addEventListener('click', () => {
            openApp(app);
            if (isMobileView) {
                switchToDesktopView();
            }
        });
        
        mobileIcons.appendChild(icon);
    });
}

// Create Start Menu Apps
function createStartMenuApps() {
    startMenuApps.innerHTML = '';
    
    apps.forEach(app => {
        const appElement = document.createElement('div');
        appElement.className = 'start-menu-app';
        appElement.innerHTML = `
            <div class="start-menu-app-icon ${app.color}">
                ${app.icon}
            </div>
            <div class="start-menu-app-name">${app.name}</div>
        `;
        
        appElement.addEventListener('click', () => {
            openApp(app);
            toggleStartMenu();
        });
        
        startMenuApps.appendChild(appElement);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Start button - toggle start menu
    startBtn.addEventListener('click', toggleStartMenu);
    
    // Close start menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
            closeStartMenu();
        }
    });
    
    // View toggle
  
    
    // Exit mobile view
    exitMobileBtn.addEventListener('click', switchToDesktopView);
    
    // Close active window when clicking on desktop
    document.getElementById('desktop').addEventListener('click', (e) => {
        if (e.target.id === 'desktop' || e.target.id === 'desktop-icons') {
            if (activeWindowId) {
                document.getElementById(activeWindowId)?.classList.remove('active');
                activeWindowId = null;
                updateTaskbar();
            }
        }
    });
    
    // Close start menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isStartMenuOpen) {
            closeStartMenu();
        }
    });
}

// Start Menu Functions
function toggleStartMenu() {
    if (isStartMenuOpen) {
        closeStartMenu();
    } else {
        openStartMenu();
    }
}

function openStartMenu() {
    startMenu.classList.add('active');
    isStartMenuOpen = true;
}

function closeStartMenu() {
    startMenu.classList.remove('active');
    isStartMenuOpen = false;
}

// Open Application
function openApp(app) {
    console.log(`📱 Opening: ${app.name}`);
    
    // Check if window already exists
    const existingWindow = windows.find(w => w.appId === app.id);
    if (existingWindow) {
        bringWindowToFront(existingWindow.id);
        return;
    }
    
    // Create window
    const windowId = 'window-' + Date.now();
    const window = createWindow(windowId, app);
    
    windowsContainer.appendChild(window);
    
    // Add to windows array
    windows.push({
        id: windowId,
        appId: app.id,
        element: window,
        isMinimized: false,
        isMaximized: false
    });
    
    // Position window (staggered)
    const offset = windows.length * 25;
    window.style.top = `${60 + offset}px`;
    window.style.left = `${60 + offset}px`;
    
    // Bring to front and add to taskbar
    bringWindowToFront(windowId);
    addToTaskbar(windowId, app);
    
    // On mobile, maximize
    if (window.innerWidth <= 768) {
        maximizeWindow(windowId);
    }
}

// Create Window
function createWindow(id, app) {
    const window = document.createElement('div');
    window.id = id;
    window.className = 'window';
    window.style.zIndex = zIndexCounter++;
    
    // Create web content using object tag (works better than iframe for some sites)
    const webContent = `
        <object class="web-content" 
                data="${app.url}" 
                type="text/html"
                aria-label="${app.name}">
            <div style="padding: 20px; color: white; text-align: center;">
                <h3 style="margin-bottom: 10px; font-size: 18px;">${app.name} cannot be embedded</h3>
                <p style="margin-bottom: 15px; color: #ccc;">Click the button below to open in a new tab</p>
                <button onclick="window.open('${app.url}', '_blank')" 
                        style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                               color: white; 
                               padding: 10px 20px; 
                               border: none; 
                               border-radius: 8px; 
                               margin-top: 10px; 
                               cursor: pointer;
                               font-weight: 600;
                               transition: all 0.3s ease;">
                    Open ${app.name} in New Tab
                </button>
            </div>
        </object>
    `;
    
    window.innerHTML = `
        <div class="window-header">
            <div class="window-title">
                <div class="${app.color} w-6 h-6 rounded-lg flex items-center justify-center">
                    ${app.icon}
                </div>
                <span>${app.name}</span>
            </div>
            <div class="window-controls">
                <button class="window-control-btn window-minimize" data-action="minimize">
                    <i class="fas fa-minus"></i>
                </button>
                <button class="window-control-btn window-maximize" data-action="maximize">
                    <i class="fas fa-expand"></i>
                </button>
                <button class="window-control-btn window-close" data-action="close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="window-content">
            ${webContent}
        </div>
    `;
    
    // Add window event listeners
    const header = window.querySelector('.window-header');
    const minimizeBtn = window.querySelector('[data-action="minimize"]');
    const maximizeBtn = window.querySelector('[data-action="maximize"]');
    const closeBtn = window.querySelector('[data-action="close"]');
    
    // Make draggable
    makeDraggable(window, header);
    
    // Control buttons
    minimizeBtn.addEventListener('click', () => minimizeWindow(id));
    maximizeBtn.addEventListener('click', () => toggleMaximize(id));
    closeBtn.addEventListener('click', () => closeWindow(id));
    
    // Click to bring to front
    window.addEventListener('mousedown', () => bringWindowToFront(id));
    
    return window;
}

// Make Element Draggable
function makeDraggable(element, handle) {
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    
    handle.addEventListener('mousedown', startDrag);
    
    function startDrag(e) {
        initialX = e.clientX - element.offsetLeft;
        initialY = e.clientY - element.offsetTop;
        
        isDragging = true;
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        
        // Bring to front
        bringWindowToFront(element.id);
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            // Constrain to screen bounds
            const maxX = window.innerWidth - element.offsetWidth;
            const maxY = window.innerHeight - element.offsetHeight - 55; // Subtract taskbar height
            
            currentX = Math.min(Math.max(0, currentX), maxX);
            currentY = Math.min(Math.max(0, currentY), maxY);
            
            element.style.left = currentX + 'px';
            element.style.top = currentY + 'px';
        }
    }
    
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }
}

// Window Management
function bringWindowToFront(windowId) {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;
    
    // Update z-index
    zIndexCounter++;
    window.element.style.zIndex = zIndexCounter;
    activeWindowId = windowId;
    
    // Update active state
    document.querySelectorAll('.window').forEach(w => {
        w.classList.remove('active');
    });
    window.element.classList.add('active');
    
    // Update taskbar
    updateTaskbar();
}

function minimizeWindow(windowId) {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;
    
    window.isMinimized = !window.isMinimized;
    window.element.style.display = window.isMinimized ? 'none' : 'block';
    updateTaskbar();
}

function toggleMaximize(windowId) {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;
    
    const maximizeBtn = window.element.querySelector('[data-action="maximize"] i');
    
    if (!window.isMaximized) {
        // Store original position and size
        window.originalTop = window.element.style.top;
        window.originalLeft = window.element.style.left;
        window.originalWidth = window.element.style.width;
        window.originalHeight = window.element.style.height;
        
        // Maximize
        window.element.style.top = '0';
        window.element.style.left = '0';
        window.element.style.width = '100%';
        window.element.style.height = 'calc(100vh - 55px)'; // Leave space for taskbar
        window.element.style.resize = 'none';
        maximizeBtn.className = 'fas fa-compress';
        window.isMaximized = true;
    } else {
        // Restore
        window.element.style.top = window.originalTop;
        window.element.style.left = window.originalLeft;
        window.element.style.width = window.originalWidth;
        window.element.style.height = window.originalHeight;
        window.element.style.resize = 'both';
        maximizeBtn.className = 'fas fa-expand';
        window.isMaximized = false;
    }
    
    bringWindowToFront(windowId);
}

function maximizeWindow(windowId) {
    const window = windows.find(w => w.id === windowId);
    if (!window || window.isMaximized) return;
    toggleMaximize(windowId);
}

function closeWindow(windowId) {
    const windowIndex = windows.findIndex(w => w.id === windowId);
    if (windowIndex === -1) return;
    
    // Remove from DOM
    windows[windowIndex].element.remove();
    
    // Remove from windows array
    windows.splice(windowIndex, 1);
    
    // Remove from taskbar
    removeFromTaskbar(windowId);
    
    // Update active window
    if (activeWindowId === windowId) {
        activeWindowId = null;
    }
}

// Taskbar Functions
function addToTaskbar(windowId, app) {
    const taskbarApp = document.createElement('div');
    taskbarApp.className = 'taskbar-app';
    taskbarApp.dataset.windowId = windowId;
    taskbarApp.innerHTML = `
        <div class="${app.color} w-3 h-3 rounded-full"></div>
        <span>${app.name}</span>
    `;
    
    taskbarApp.addEventListener('click', () => {
        const window = windows.find(w => w.id === windowId);
        if (window) {
            if (window.isMinimized) {
                minimizeWindow(windowId); // Restore
            } else {
                bringWindowToFront(windowId);
            }
        }
    });
    
    taskbarApps.appendChild(taskbarApp);
    updateTaskbar();
}

function removeFromTaskbar(windowId) {
    const app = document.querySelector(`[data-window-id="${windowId}"]`);
    if (app) app.remove();
}

function updateTaskbar() {
    document.querySelectorAll('.taskbar-app').forEach(app => {
        const windowId = app.dataset.windowId;
        const window = windows.find(w => w.id === windowId);
        
        if (window) {
            if (window.id === activeWindowId && !window.isMinimized) {
                app.classList.add('active');
            } else {
                app.classList.remove('active');
            }
        }
    });
}

// View Management
function toggleMobileView() {
    if (isMobileView) {
        switchToDesktopView();
    } else {
        switchToMobileView();
    }
}

function switchToMobileView() {
    isMobileView = true;
    mobileView.style.display = 'flex';
    viewToggle.innerHTML = '<i class="fas fa-desktop"></i><span>Desktop View</span>';
    
    // Close all windows when switching to mobile
    windows.forEach(w => closeWindow(w.id));
}

function switchToDesktopView() {
    isMobileView = false;
    mobileView.style.display = 'none';
    viewToggle.innerHTML = '<i class="fas fa-mobile-alt"></i><span>Mobile View</span>';
}

// Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const isPM = hours >= 12;
    
    hours = hours % 12 || 12;
    
    clock.textContent = `${hours}:${minutes}`;
    ampm.textContent = isPM ? 'PM' : 'AM';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally for object tag
window.openExternal = function(url) {
    window.open(url, '_blank');
};

