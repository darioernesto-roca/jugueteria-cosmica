(function($) {
    "use strict"; // Strict mode

    // Function to initialize video settings
    function initVideo() {
        var video = document.getElementById('heroBackgroundVideo'); // Get the video element by its ID

        if (video) {
            video.autoplay = true;
            video.muted = true;
            video.loop = true;

            // Load the video and play it
            video.load();
            video.play().catch(function(error) {
                console.error('Error attempting to play video:', error);
            });
        }
    }

    // Call initVideo when the document is ready
    $(document).ready(function() {
        initVideo();
    });

})(jQuery);
