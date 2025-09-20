// ========================================
// IMPROVED EVENT DELEGATION EXAMPLES
// ========================================

/**
 * Example 1: Todo List with Event Delegation
 */
const todoContainer = document.querySelector('.todo-container');
const addTodoBtn = document.querySelector('.add-todo-btn');
const todoInput = document.querySelector('.todo-input');

// Single event listener handles all todo interactions
todoContainer.addEventListener('click', (event) => {
    const target = event.target;
    const todoItem = target.closest('.todo-item');

    // Check which button was clicked using event delegation
    if (target.matches('.delete-btn')) {
        deleteTodo(todoItem);
    } else if (target.matches('.complete-btn')) {
        toggleComplete(todoItem);
    } else if (target.matches('.edit-btn')) {
        editTodo(todoItem);
    }
});

// Functions for todo operations
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span class="todo-text">${text}</span>
        <div class="todo-actions">
            <button class="complete-btn">✓</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    todoContainer.appendChild(todoItem);
    todoInput.value = '';
}

function deleteTodo(todoItem) {
    if (todoItem) {
        todoItem.classList.add('fade-out');
        setTimeout(() => todoItem.remove(), 300);
    }
}

function toggleComplete(todoItem) {
    if (todoItem) {
        todoItem.classList.toggle('completed');
        const text = todoItem.querySelector('.todo-text');
        text.style.textDecoration = todoItem.classList.contains('completed') ?
            'line-through' :
            'none';
    }
}

function editTodo(todoItem) {
    if (todoItem) {
        const textSpan = todoItem.querySelector('.todo-text');
        const currentText = textSpan.textContent;
        const newText = prompt('Edit todo:', currentText);

        if (newText && newText.trim()) {
            textSpan.textContent = newText.trim();
        }
    }
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// ========================================
// EVENT PROPAGATION EXAMPLES
// ========================================

/**
 * Example 2: Understanding Event Propagation Phases
 */
const outerDiv = document.querySelector('.outer');
const middleDiv = document.querySelector('.middle');
const innerDiv = document.querySelector('.inner');

// Capturing phase listeners (third parameter = true)
outerDiv.addEventListener('click', (e) => {
    console.log('🔽 Outer DIV - Capturing Phase', e.target.className);
}, true);

middleDiv.addEventListener('click', (e) => {
    console.log('🔽 Middle DIV - Capturing Phase', e.target.className);
}, true);

innerDiv.addEventListener('click', (e) => {
    console.log('🔽 Inner DIV - Capturing Phase', e.target.className);

    // Uncomment to stop propagation in capturing phase
    // e.stopPropagation();
}, true);

// Bubbling phase listeners (default behavior)
innerDiv.addEventListener('click', (e) => {
    console.log('🔼 Inner DIV - Bubbling Phase', e.target.className);

    // Uncomment to stop propagation in bubbling phase
    // e.stopPropagation();
});

middleDiv.addEventListener('click', (e) => {
    console.log('🔼 Middle DIV - Bubbling Phase', e.target.className);
});

outerDiv.addEventListener('click', (e) => {
    console.log('🔼 Outer DIV - Bubbling Phase', e.target.className);
});

/**
 * Example 3: stopImmediatePropagation() Demo
 */
const demoButton = document.querySelector('.demo-button');

demoButton.addEventListener('click', (e) => {
    console.log('First listener executed');

    // Uncomment to see the difference
    // e.stopImmediatePropagation();
});

demoButton.addEventListener('click', (e) => {
    console.log('Second listener executed');
});

demoButton.addEventListener('click', (e) => {
    console.log('Third listener executed');
});

// ========================================
// CLASSLIST METHODS EXAMPLES
// ========================================

/**
 * Example 4: Comprehensive classList Usage
 */
const demoElement = document.querySelector('.demo-element');
const classListDemo = document.querySelector('.classlist-demo');

// Basic classList operations
function demoBasicMethods() {
    console.log('=== Basic classList Methods ===');

    // Add single and multiple classes
    demoElement.classList.add('highlight');
    demoElement.classList.add('bold', 'large', 'animated');
    console.log('After adding classes:', Array.from(demoElement.classList));

    // Remove classes
    demoElement.classList.remove('large');
    console.log('After removing "large":', Array.from(demoElement.classList));

    // Toggle class
    demoElement.classList.toggle('visible');
    console.log('After toggling "visible":', Array.from(demoElement.classList));

    // Check if class exists
    console.log('Contains "highlight":', demoElement.classList.contains('highlight'));

    // Replace class
    demoElement.classList.replace('bold', 'extra-bold');
    console.log('After replacing "bold" with "extra-bold":', Array.from(demoElement.classList));
}

// Advanced classList operations
function demoAdvancedMethods() {
    console.log('=== Advanced classList Methods ===');

    // Length property
    console.log('Number of classes:', demoElement.classList.length);

    // Get class by index
    console.log('First class:', demoElement.classList.item(0));
    console.log('Second class:', demoElement.classList.item(1));

    // Iterate through classes
    console.log('All classes:');
    demoElement.classList.forEach((className, index) => {
        console.log(`  ${index}: ${className}`);
    });

    // Convert to arrays for advanced operations
    const classEntries = Array.from(demoElement.classList.entries());
    const classValues = Array.from(demoElement.classList.values());
    const classKeys = Array.from(demoElement.classList.keys());

    console.log('Class entries (index-value pairs):', classEntries);
    console.log('Class values:', classValues);
    console.log('Class keys (indices):', classKeys);

    // CSS supports (feature detection)
    if (demoElement.classList.supports) {
        console.log('Browser supports classList.supports method');
    }
}

// ========================================
// THEME SWITCHER WITH IMPROVED LOGIC
// ========================================

/**
 * Example 5: Advanced Theme Switcher
 */
class ThemeManager {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.body = document.body;
        this.elementsToTheme = document.querySelectorAll('.theme-target');
        this.currentTheme = this.getSavedTheme() || 'light';

        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', (e) => {
                    if (!this.getSavedTheme()) {
                        this.applyTheme(e.matches ? 'dark' : 'light');
                    }
                });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme(this.currentTheme);
    }

    applyTheme(theme) {
        const oldTheme = theme === 'light' ? 'dark' : 'light';

        // Apply to body
        this.body.classList.remove(oldTheme);
        this.body.classList.add(theme);

        // Apply to all theme target elements
        this.elementsToTheme.forEach(element => {
            element.classList.remove(oldTheme);
            element.classList.add(theme);
        });

        // Update toggle button
        this.updateToggleButton(theme);

        // Update CSS custom properties for smooth transitions
        document.documentElement.style.setProperty(
            '--theme-transition',
            'background-color 0.3s ease, color 0.3s ease'
        );
    }

    updateToggleButton(theme) {
        const button = this.themeToggle;
        button.classList.remove('light', 'dark');
        button.classList.add(theme);

        const icon = theme === 'light' ? '🌙' : '☀️';
        const text = theme === 'light' ? 'Dark Mode' : 'Light Mode';
        button.innerHTML = `${icon} ${text}`;
    }

    saveTheme(theme) {
        localStorage.setItem('preferred-theme', theme);
    }

    getSavedTheme() {
        return localStorage.getItem('preferred-theme');
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

// ========================================
// COPY PROTECTION WITH CUSTOM BEHAVIOR
// ========================================

/**
 * Example 6: Enhanced Copy Protection
 */
class CopyProtection {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.init();
    }

    init() {
        this.elements.forEach(element => {
            element.addEventListener('copy', (e) => this.handleCopy(e));
            element.addEventListener('cut', (e) => this.handleCut(e));
            element.addEventListener('selectstart', (e) => this.handleSelect(e));
        });
    }

    handleCopy(event) {
        event.preventDefault();

        // Set custom clipboard data
        const customMessage = '🚫 This content is protected and cannot be copied.';
        event.clipboardData.setData('text/plain', customMessage);

        // Show notification
        this.showNotification('Copy protection active!', 'warning');

        // Log the attempt (for analytics)
        console.log('Copy attempt blocked at:', new Date().toISOString());
    }

    handleCut(event) {
        event.preventDefault();
        this.showNotification('Cut operation not allowed!', 'error');
    }

    handleSelect(event) {
        // Optionally prevent text selection entirely
        // event.preventDefault();

        // Or allow selection but warn user
        this.showTooltip(event.target, 'Content is protected');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-icon">${this.getIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">×</button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);

        // Manual close
        notification.querySelector('.notification-close')
            .addEventListener('click', () => {
                notification.classList.add('fade-out');
                setTimeout(() => notification.remove(), 300);
            });
    }

    showTooltip(element, message) {
        const tooltip = document.createElement('div');
        tooltip.className = 'protection-tooltip';
        tooltip.textContent = message;

        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';

        setTimeout(() => tooltip.remove(), 2000);
    }

    getIcon(type) {
        const icons = {
            info: 'ℹ️',
            warning: '⚠️',
            error: '❌',
            success: '✅'
        };
        return icons[type] || icons.info;
    }
}

// Initialize copy protection
document.addEventListener('DOMContentLoaded', () => {
    new CopyProtection('.protected-content');
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Event delegation helper function
 */
function delegate(container, selector, event, handler) {
    container.addEventListener(event, (e) => {
        const target = e.target.closest(selector);
        if (target && container.contains(target)) {
            handler.call(target, e);
        }
    });
}

// Usage example:
// delegate(document.body, '.dynamic-button', 'click', function(e) {
//     console.log('Button clicked:', this.textContent);
// });

/**
 * Performance monitoring for event listeners
 */
function performanceMonitor(eventName, element) {
    const start = performance.now();

    return function (originalHandler) {
        return function (event) {
            const handlerStart = performance.now();
            const result = originalHandler.call(this, event);
            const handlerEnd = performance.now();

            console.log(`Event "${eventName}" handler took ${handlerEnd - handlerStart}ms`);
            return result;
        };
    };
}

// Usage example:
// element.addEventListener('click', performanceMonitor('click', element)(myClickHandler));