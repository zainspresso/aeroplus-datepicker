// @author       Zain Bouziane / Bart Roos (Vliegclub Rotterdam)
(function() {
    'use strict';

    function appendDateInput() {
        let navline = document.querySelector('.dhx_cal_navline');
        if (navline && !document.querySelector('#dt')) {
            let dateInput = document.createElement('input');
            dateInput.type = 'date';
            dateInput.id = 'dt';
            dateInput.onchange = function(event) {
                let scheduler = window.scheduler;
                if (scheduler) {
                    scheduler.setCurrentView(new Date(Date.parse(event.target.value)));
                }
            };
            navline.appendChild(dateInput);
        }
    }

    // Observe changes in the DOM to handle dynamic content loading
    const observer = new MutationObserver(() => {
        appendDateInput();
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check in case the target element is already present
    appendDateInput();
})();
