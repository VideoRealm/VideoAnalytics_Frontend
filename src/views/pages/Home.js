// --------------------------------
//  Define Data Sources
// --------------------------------

let getCamerasList = async () => {
     /*const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://iptv-russia.ru/list/webcams-worldwide.m3u`, options)
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting the list of cameras', err)
    }*/
}

let Home = {
    render : async () => {
        let cameras = [ {id: 1, title: "Chech Republic", url: "http://live.idnes.cz/slow/amc_720p/playlist.m3u8"}, 
                        {id: 2, title: "Brazil - Rio", url: "http://189.90.46.138:80/mirante_rio_01/index.m3u8"} ]; 
                        //await getCamerasList()
        //console.log(cameras)
        let view =  `
            <section class="section">
                <h1 class="is-size-5 has-text-weight-semibold"> Avalaible iptv playlists </h1>
                <ul>
                    ${ cameras.map(camera => 
                        `<li><a href="#/cam/${camera.id}">${camera.title}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;