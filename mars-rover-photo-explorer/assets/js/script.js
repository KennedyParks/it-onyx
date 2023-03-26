function searchPhotos() {
  var rover = document.querySelector('input[name="rover"]:checked').value;
  var date = document.querySelector('input[name="date"]').value;
  var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + date + "&api_key=58OviRQvpYN8de8b23TeMc32MlZ6D8YidCb7EsaZ";
  if (date === "") {
    document.querySelector('#error').innerHTML = "Please enter a date";
    document.querySelector('#photo-count').innerHTML = "";
    document.querySelector('#photos').innerHTML = "";
  } else {
    document.querySelector('#error').innerHTML = "";
    $.getJSON(url, function(data) {
      var photos = data.photos.slice(0, 25);
      var html = "";
      if (photos.length === 0) {
        document.querySelector('#photo-count').innerHTML = "";
        document.querySelector('#error').innerHTML = "No photos for this date. Try another date or select another rover!";
        document.querySelector('#photos').innerHTML = "";
      } else {
        document.querySelector('#photo-count').innerHTML = photos.length + " photos found!";
        for (var i = 0; i < photos.length; i++) {
          var photo = photos[i];
          html += "<div><img src='" + photo.img_src + "' onclick='enlargeImage(this)'></div>";
        }
        document.querySelector('#error').innerHTML = "";
        document.querySelector('#photos').innerHTML = html;
      }
    });
  }
}

function clearPage() {
  location.reload();
}

function enlargeImage(img) {
  img.style.width = "100%";
  
}