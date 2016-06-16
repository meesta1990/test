 $(document).ready(function(){
	var songs = $(".item");
	var array_songs = new Array();
	for(var i=0;songs.length;i++){
		window.HtmlViewer.showHTML($(".item").find(".song-name a").text());
		var song_name = $(songs[i]).find(".song-name a").text();
		var artist_name = $(songs[i]).find(".artist-name a").text();
		var album_name = $(songs[i]).find(".album-name a").text();
		
		var obj_song = new Object();
		obj_song.song_name = song_name;
		obj_song.artist_name = artist_name;
		obj_song.album_name = album_name;
		array_songs.push(obj_song);
	}
	var obj_temp = new Object();
	obj_temp.songs = array_songs;
	//window.HtmlViewer.showHTML(JSON.stringify(obj_temp));
 });