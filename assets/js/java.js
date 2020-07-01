<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>
<script>

  $(document).ready(function() {

    // Generate Gravatar URLs from email addresses and insert <img> tags into a div
    var addresses = [ 'apprentice@craic.com', 'no_gravatar@craic.com' ];

    for(var i=0; i<addresses.length; i++) {
      var address = addresses[i];
      var hash = CryptoJS.MD5(address);
      var url = "http://www.gravatar.com/avatar/" + hash.toString() + "?s=80&d=mm";
      $('#gravatars').append("<img src='" + url + "'/> " + address + "<br>");
    }
  });

  // If the image does not exist then use a specific image instead of the browser default
  function img_not_found(image){
    image.src = '/assets/image_not_found.png';
  }
</script>
