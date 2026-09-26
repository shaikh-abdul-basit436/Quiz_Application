(function () {

    // -----------------------------------------
    // Get saved theme
    // -----------------------------------------

    let savedTheme = localStorage.getItem("quizTheme");

    if (savedTheme !== "light" && savedTheme !== "dark") {
        savedTheme = "dark";
        localStorage.setItem("quizTheme", "dark");
    }

    // -----------------------------------------
    // Apply theme immediately
    // -----------------------------------------

    function applyTheme(theme) {

        document.documentElement.classList.remove(
            "light-mode",
            "dark-mode"
        );

        document.documentElement.classList.add(
            theme + "-mode"
        );

        localStorage.setItem("quizTheme", theme);

        updateButton();
    }

    // -----------------------------------------
    // Update button icon
    // -----------------------------------------

    function updateButton() {

        const button = document.getElementById("themeToggle");

        if (!button) {
            return;
        }

        const isLight =
            document.documentElement.classList.contains("light-mode");

        button.textContent = isLight ? "☾" : "☀";

        button.title =
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode";
    }

    // -----------------------------------------
    // Create theme button automatically
    // -----------------------------------------

    function createButton() {

        let wrapper = document.querySelector(".theme-toggle");

        if (!wrapper) {

            wrapper = document.createElement("div");

            wrapper.className = "theme-toggle";

            wrapper.innerHTML = `
                <button
                    id="themeToggle"
                    type="button"
                    aria-label="Toggle theme"
                >☀</button>
            `;

            document.body.appendChild(wrapper);
        }

        const button = document.getElementById("themeToggle");

        if (!button) {
            return;
        }

        // Prevent duplicate event listeners
        if (button.dataset.themeReady === "true") {
            updateButton();
            return;
        }

        button.dataset.themeReady = "true";

        button.addEventListener("click", function () {

            const currentTheme =
                document.documentElement.classList.contains("light-mode")
                    ? "light"
                    : "dark";

            if (currentTheme === "light") {
                applyTheme("dark");
            } else {
                applyTheme("light");
            }

        });

        updateButton();
    }

    // -----------------------------------------
    // Apply saved theme BEFORE page interaction
    // -----------------------------------------

    document.documentElement.classList.remove(
        "light-mode",
        "dark-mode"
    );

    document.documentElement.classList.add(
        savedTheme + "-mode"
    );

    // -----------------------------------------
    // Wait for body
    // -----------------------------------------

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            createButton
        );

    } else {

        createButton();

    }

})();