
(function() {
    // Check for primary verification marker
    const primaryCheck = localStorage.getItem("notcrackedlol");
    
    if (!primaryCheck || parseInt(primaryCheck) < Date.now()) {
        // If missing or expired, close after 5 seconds
        setTimeout(() => {
            window.close();
        }, 5000);
    } else {
        // If valid set the secondary verification marker
        localStorage.setItem("notcrackedlolcheck2", "verified");
        
        // Keep refreshing the secondary marker while page is open
        setInterval(() => {
            localStorage.setItem("notcrackedlolcheck2", "verified");
        }, 1000);
        
        // Clean up when page closes
        window.addEventListener('beforeunload', function() {
            localStorage.removeItem("notcrackedlolcheck2");
        });
    }
})();
