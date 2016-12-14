/*Events and event handlers for site*/
$(function () {
    var site = {
        init: function (){
            var loggedUser = localStorage.getItem('loggedUser');

            if(loggedUser == null || loggedUser == '')
            {
                clearItems('acceptedUsers');

                var user = {
                    username: "jdoe123",
                    password: "pass123",
                    name: "John Doe"
                };

                localStorage.setItem('acceptedUsers', '');

                storeItem(user, 'acceptedUsers');

                this.eventBind();
            }
            else {
                window.location = "home.html";
            }
        },

        /*Binds event handlers to events*/
        eventBind: function() {
            $('#loginForm').on('submit', this.onSubmit);
        },

        /*On submit event handler*/
        onSubmit: function(e) {
            var username = $('#username').val();
            var password = $('#password').val();

            var list = JSON.parse(localStorage.getItem('acceptedUsers'));

            var i;

            for (i = 0; i < list.items.length; i++)
            {
                if(list.items[i].username == username)
                {
                    if(list.items[i].password == password)
                    {
                        localStorage.setItem('loggedUser', username);

                        return true;
                    }
                }
            }

            return false;
        }
    };

    /*Call to init*/
    site.init();
});
