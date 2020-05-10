let Footer = {
    render: async () => {
        let view = `
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    VideoRealm (c)
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Footer;