var PlaylistCreator = function () {

	function generatePlaylistClassicJazz() {
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_1",
			cssSelectorAncestor: "#jp_container_1"
		}, [
				{
					title: "Classic Jazz Demo",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/01 Classic Jazz Demo.mp3"
				},
				{
					title: "All Blues",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/All Blues.mp3"
				},
				{
					title: "Desafinado",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/Desafinado.mp3"
				},
				{
					title: "Fly Me To The Moon",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/Fly Me To The Moon.mp3"
				},
				{
					title: "Georgia",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/Georgia.mp3"
				},
				{
					title: "Spain",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/Spain.mp3"
				},
				{
					title: "Sugar",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/Sugar.mp3"
				},
				{
					title: "Summertime",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Classic Jazz/Summertime.mp3"
				}
			], {
				swfPath: "jPlayer",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true,
			});
	}

	function generatePlaylistDanceMusic() {
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_2",
			cssSelectorAncestor: "#jp_container_2"
		}, [
				{
					title: "Dance Music Demo",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/01 Dance Music Demo.mp3"
				},
				{
					title: "Ain't Nobody",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Ain't Nobody.mp3"
				},
				{
					title: "Pick Up The Pieces",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Pick Up The Pieces.mp3"
				},
				{
					title: "Play That Funky Music White Boy",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Play That Funky Music White Boy.mp3"
				},
				{
					title: "September",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/September.mp3"
				},
				{
					title: "Superstition",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Superstition.mp3"
				},
				{
					title: "Too Close",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Too Close.mp3"
				},
				{
					title: "Urgent",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Urgent.mp3"
				},
				{
					title: "Word Up",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Dance Music/Word Up.mp3"
				}
			], {
				swfPath: "jPlayer",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true
			});

	}

	function generatePlaylistSmoothJazz() {
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_3",
			cssSelectorAncestor: "#jp_container_3"
		}, [
				{
					title: "Smooth Jazz Demo",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/01 Smooth Jazz Demo.mp3"
				},
				{
					title: "Breezin",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Breezin.mp3"
				},
				{
					title: "Careless Whisper",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Careless Whisper.mp3"
				},
				{
					title: "Change The World",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Change The World.mp3"
				},
				{
					title: "Daddy's Gonna Miss You",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Daddy's Gonna Miss You.mp3"
				},
				{
					title: "Europa",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Europa.mp3"
				},
				{
					title: "Faithfully",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Faithfully.mp3"
				},
				{
					title: "Hotel California",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Hotel California.mp3"
				},
				{
					title: "La Isla Bonita",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/La Isla Bonita.mp3"
				},
				{
					title: "More Than Words",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/More Than Words.mp3"
				},
				{
					title: "Stop Look Listen",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Stop Look Listen.mp3"
				},
				{
					title: "Waterfalls",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/Waterfalls.mp3"
				},
				{
					title: "You Gotta Be",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Smooth Jazz/You Gotta Be.mp3"
				}

			], {
				swfPath: "jPlayer",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true
			});

	}

	function generatePlaylistWeddingCeremony() {
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_4",
			cssSelectorAncestor: "#jp_container_4"
		}, [
				{
					title: "Wedding Ceremony Demo",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Wedding Ceremony/01 Wedding Ceremony Demo.mp3"
				},
				{
					title: "Pachelbel's Canon in D",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Wedding Ceremony/Pachelbel's Canon In D.mp3"
				},
				{
					title: "The Wedding Song",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Wedding Ceremony/The Wedding Song.mp3"
				},
				{
					title: "Unity",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Wedding Ceremony/Unity.mp3"
				},
				{
					title: "Wagner Bridal Chorus",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Wedding Ceremony/Wagner Bridal Chorus (Here Comes The Bride).mp3"
				}
			], {
				swfPath: "jPlayer",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true
			});

	}

	function generatePlaylistLive() {
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_5",
			cssSelectorAncestor: "#jp_container_5"
		}, [
				{
					title: "I Can't Make You Love Me",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/I Can't Make You Love Me.mp3"
				},
				{
					title: "Maputo",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/Maputo.mp3"
				},
				{
					title: "Mercy Mercy Mercy",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/Mercy Mercy Mercy.mp3"
				},
				{
					title: "People Make The World Go Round",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/People Make The World Go Round.mp3"
				},
				{
					title: "Street Life",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/Street Life.mp3"
				},
				{
					title: "The Chicken",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/The Chicken.mp3"
				},
				{
					title: "Til The Rivers Run Dry",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/Til The Rivers Run Dry.mp3"
				},
				{
					title: "Tom Cat",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/Tom Cat.mp3"
				},
				{
					title: "Well You Needn't",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Jason Weber Band - Live At Simply Sharon's/Well You Needn't.mp3"
				}
			], {
				swfPath: "jPlayer",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true
			});

	}

	function generatePlaylistLatinJazz() {
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_6",
			cssSelectorAncestor: "#jp_container_6"
		}, [
				{
					title: "Oye Como Va",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/01 Oye Como Va.mp3"
				},
				{
					title: "Europa",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/02 Europa.mp3"
				},
				{
					title: "Sway",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/03 Sway.mp3"
				},
				{
					title: "Besame Mucho",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/04 Besame Mucho.mp3"
				},
				{
					title: "Let's Get Loud",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/05 Lets Get Loud.mp3"
				},
				{
					title: "Desafinado",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/06 Desafinado.mp3"
				},
				{
					title: "Maria Maria",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/07 Maria Maria.mp3"
				},
				{
					title: "Brazil",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/08 Brazil.mp3"
				},
				{
					title: "I Need To Know",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/09 I Need To Know.mp3"
				},
				{
					title: "Sabor A Mi",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/10 Sabor A Mi.mp3"
				},
				{
					title: "Spain",
					free: true,
					mp3: "http://www.jasonweber.net/media/samples/mp3/Latin/11 Spain.mp3"
				}
			], {
				swfPath: "jPlayer",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true,
			});
	}

	return {
		init: function () {
			generatePlaylistClassicJazz();
			generatePlaylistDanceMusic();
			generatePlaylistSmoothJazz();
			generatePlaylistWeddingCeremony();
			generatePlaylistLive();
			generatePlaylistLatinJazz();
		},
	};

}();