if(window.innerWidth === 800){
    const n_menu = document.querySelector('.ham-menu');
    const hidden_part = document.querySelector('.hidden-part');
    
    n_menu.addEventListener('click', function () {
        hidden_part.classList.toggle('isHidden')
    });
}

// (max-width: 991.98px)
// .content {
//     width: 100%;
//     margin-left: 0;
// }



if (window.location.pathname === '/login') {
    $(document).ready(function () {
        $("#btn-signUp").click(function () {
            $("#loginDiv").fadeOut(700);
            $("#signUpDiv").fadeIn();
        });
        $("#toLogin").click(function () {
            $("#signUpDiv").fadeOut(700);
            $("#loginDiv").fadeIn();
        });
    });

    // extracting login and signin information
    const button = document.querySelectorAll('.btn-success');
    button.forEach(el => {
        el.addEventListener('click', async (e) => {
            // console.log(el);
            // let sendToDb;

            if (el.innerHTML === 'Sign Up') {
                const email = document.querySelector('.signup-email').value;
                const password = document.querySelector('.signup-password').value;
                const name = document.querySelector('.signup-name').value;


                let sendToDb = await axios({
                    method: 'POST',
                    url: '/api/v1/user/signup',
                    data: {
                        email,
                        password,
                        name
                    }
                })
                if (sendToDb.data.status === "success") {
                    location.assign('/');
                } else {
                    alert('ALREADY RESGISTERED');
                }

            } else if (el.innerHTML === 'Login') {
                const email = document.querySelector('.login-email').value;
                const password = document.querySelector('.login-password').value;

                sendToDb = await axios({
                    method: 'POST',
                    url: '/api/v1/user/login',
                    data: {
                        email,
                        password
                    }
                })
                if (sendToDb.data.status === "success") {
                    location.assign('/');
                } else {
                    alert('WRONG PASSWORD OR EMAIL');
                }
            }

            // console.log('send', sendToDb);
        })
    })
}


// const account = document.querySelector('.display-logout-btn');
// if ($('.Logout')) {

//     const logout = document.querySelector('.Logout');

//     account.addEventListener('click', () => {
//         logout.classList.toggle('active');
//     })

//     $('.Logout').addEventListener('click', async (el) => {
//         const logout = await axios({
//             method: 'GET',
//             url: '/api/v1/user/logout',
//         })

//         console.log(logout);
//     }).catch(err => {
//         console.log('err')
//     })
// }

