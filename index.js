(function () {
    // Function to hide the target element when it appears
    function hideTargetElement() {
        const targetSelector = "#main-app > div > div > div > div > div.grid.grid-cols-2.lg\\:grid-cols-4.gap-3.mb-6";
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            targetElement.style.display = "none";
            console.log("Element hidden successfully");
        }
    }

    // Create a Mutation Observer to watch for changes in the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            hideTargetElement(); // Call the function whenever there's a change in the DOM
        });
    });

    // Start observing the body for changes in child elements
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Run the function once initially in case the element is already present
    hideTargetElement();
})();
