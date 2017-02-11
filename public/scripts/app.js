// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  $(function(){


       $.ajax({
         method: 'GET',
         url: `http://localhost:3000/api/quotes`,
        //  url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&market=US`,
         dataType: 'json',
         success: onSuccess
       });



  });

  // //enter instead of clicking search
  // $('#enter-search').keypress(function(e){
  //     if(e.which == 13){//Enter key pressed
  //     $('#search-button').click();//Trigger search button click event
  //     }
  //   });
  //
  // //load page with focus on search form
  // $("input:text:visible:first").focus();

}); //end of on document load action






var data;
  //ajax data set in global scope

function onSuccess(responseData){
    // console.log(responseData);
    data = responseData;
    console.log(data.data[0].phrase);
// BEGIN LOOPING
  for (var i=0; i<3; i++){


    phrase = data.data[i].phrase;
    author = data.data[i].author;
    // albumCover = data.tracks.items[i].album.images[1].url;
    // // artist = data.data[0].phrase;
    // track = data.tracks.items[i].name;
    // sample = data.tracks.items[i].preview_url;

    var varNewSection = `<div class="row result">

            <div class="song-artist">
              <h3 id="artist-${[i]}">Quote</h3>
              <h4 id="track-${[i]}">Author</h4>
            </div>

        </div>  <!-- -row-result close -->

        <hr>`;

    function appendHtml(){
    $(".container").append(varNewSection);
    }
    appendHtml();

    function appendArtist(){
      $(`#artist-${i}`).text(phrase);
    };
    appendArtist();

    function appendTrack(){
      $(`#track-${i}`).text(author);
    };
    appendTrack();


  }; //end loop




};//end onSuccess function
