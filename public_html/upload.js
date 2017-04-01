$(document).ready(function() {

  $('.upload-btn').on('click', function (){
      $('#upload-input').click();
      $('.progress-bar').text('0%');
      $('.progress-bar').width('0%');
  });

  $(".overlay").hide();

  $("#retry").click(function() {
    location.reload();
  });

  $(".socialMed").click(function(){
    alert("Not implemented yet! :)");
  });

  $('#upload-input').on('change', function(){
    var files = $(this).get(0).files;

    if (files.length > 0){
      var formData = new FormData();

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        formData.append('uploads[]', file, file.name);
      }

      $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data){
            console.log('upload successful!\n' + JSON.stringify(data.url));
            $(".overlay").show();
            $(".uploadContent").hide();
            $("html").css("background-color", "#303030");
            $("#outputtedImg").attr("src",data.url);
        },
        xhr: function() {
          // create an XMLHttpRequest
          var xhr = new XMLHttpRequest();
          xhr.upload.addEventListener('progress', function(evt) {

            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              percentComplete = parseInt(percentComplete * 100);

              // update the Bootstrap progress bar with the new percentage
              $('.progress-bar').text(percentComplete + '%');
              $('.progress-bar').width(percentComplete + '%');

              if (percentComplete === 100) {
                $('.progress-bar').html('Done');
              }

            }

          }, false);

          return xhr;
        }
      });

    }
  });
});