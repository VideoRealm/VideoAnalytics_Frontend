let Login = {

    render: async () => {
        return `
            <section class="section">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" id="email_input" type="email" placeholder="Enter your Email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="pass_input" type="password" placeholder="Enter your Password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="login_submit_btn">
                        Register
                        </button>
                    </p>
                </div>

            </section>
        `
    }
    
    , after_render: async () => {
        document.getElementById("login_submit_btn").addEventListener ("click",  () => {
            let email       = document.getElementById("email_input");
            let pass        = document.getElementById("pass_input");
            if (email.value == '' | pass.value == '') {
                alert (`The fields cannot be empty`)
            } 
            else {
                // authorize
            }    
        })
    }
}

export default Login;