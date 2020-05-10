import Utils        from '../../services/Utils.js'

let getCamera = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting camera data', err)
   }
}

let Camera

let LiveStream = {
    render : async () => {
        let request = Utils.parseRequestURL()
        Camera = request.id == 2 ? { title: "Brazil - Rio", url: "http://189.90.46.138:80/mirante_rio_01/index.m3u8" } 
                         : { title: "Chech Republic", url: "http://live.idnes.cz/slow/amc_720p/playlist.m3u8" };
        //await getCamera(request.id)

        return /*html*/`
            <section class="section">
                <h1> ${Camera.title}</h1>
                <video id="video" onclick="this.play()"></video>
            </section>
        `
    }
    , after_render: async () => {
        var video = document.getElementById('video');
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(Camera.url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        }
        // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
        // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
        // This is using the built-in support of the plain video element, without using hls.js.
        // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
        // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
            video.addEventListener('loadedmetadata', function() {
            video.play();
            });
        }
    }
}

export default LiveStream;