(function() {
    function isCellphone() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    function updateBodyClass() {
        if (isCellphone()) {
            document.body.classList.add('cellphone-mode');
        } else {
            document.body.classList.remove('cellphone-mode');
        }
    }
    // Run on initial load
    document.addEventListener('DOMContentLoaded', updateBodyClass);
    // Optional: update on resize (in case of device rotation or resizing)
    window.addEventListener('resize', updateBodyClass);
})();
