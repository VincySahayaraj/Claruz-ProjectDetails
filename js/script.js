
    $(document).ready(function(){
            // Get references to the image and video container
    var playButton = document.getElementById('poster');
    var videoContainer = document.getElementById('video-main');

    // Attach a click event listener to the image
    playButton.addEventListener('click', function() {
      // Show the video container and set the source of the iframe
      //videoContainer.style.display = 'block';
      //document.getElementById('videop').src ="https://www.youtube-nocookie.com/embed/2wwU6q57QGc?si=g3O90slGHTdSHMPQ?autoplay=1";

      
      
      // Hide the image
      playButton.style.display = 'none';

      jQuery(".video-main").attr("style", "display : block");

      $("#videop").attr("src","https://www.youtube.com/embed/2wwU6q57QGc?si=kQc8648cFrYjMptn");

      //$("#videop")[0].src += "?autoplay=1";

      var vi = jQuery("#videop");
        vi.attr("src", vi.data("autoplay-src") );
     
    });

      var itemsToShow = 4;
    var itemsIncrement = 4;

    // Hide items beyond the initial set
    $('.projects-item:gt(' + (itemsToShow - 1) + ')').addClass('hidden');

    // Lazy load items
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                $(entry.target).removeClass('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    $('.projects-item.hidden').each(function (index, element) {
        observer.observe(element);
    });

    // Handle "Load More" button click
    $('.loadmore').on('click', function () {
        // Show the next set of items
        $('.projects-item.hidden:lt(' + itemsIncrement + ')').removeClass('hidden');

        // Lazy load the new items
        $('.projects-item.hidden').each(function (index, element) {
            observer.observe(element);
        });

        // If no more hidden items, hide the "Load More" button
        if ($('.projects-item.hidden').length === 0) {
            $('.loadmore').hide();
        }
    });

    $(".menu").click(function(){
        $(this).toggleClass("is-active");
        $('.ham-menu').toggleClass("ham-open");
        $('body').toggleClass("no-scroll");
      });

      $(".ham-menu ul li a").click(function(){
        $('.menu').removeClass("is-active");
        $('.ham-menu').removeClass("ham-open");
        $('body').removeClass("no-scroll");
      });

    });



  

    