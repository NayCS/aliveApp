import React, { Component } from 'react'


class Login extends Component {
    state = {

    }
    render() {
        return (
            <script src="https://apis.google.com/js/platform.js" async defer></script>

            <meta name="google-signin-client_id" content="279342258921-8ve1iummg629an97hu2ifp9d29u861u2.apps.googleusercontent.com"></meta>

            <div class="g-signin2" data-onsuccess="onSignIn"></div>

                function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }

        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" /> */}

                <p>You are not signed in. Click here to sign in.</p>
                <button id="loginButton">Login with Google</button>
            </header>
        </div>


            <a href="#" onclick="signOut();">Sign out</a>
            <script>
                function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
                    console.log('User signed out.');
});
}
</script>

        )
    }
}

export default Login