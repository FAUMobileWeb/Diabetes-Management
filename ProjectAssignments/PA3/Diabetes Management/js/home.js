$(function () {
    var site = {
        init: function (){
            var username = localStorage.getItem('loggedUser');

            $('#greeting').text('Hello ' + username + '!');

            this.eventBind();
        },

        /*Binds event handlers to events*/
        eventBind: function() {
            $('#logout').on('click', this.onLogOut);
        },

        /*On submit event handler*/
        onLogOut: function(e) {
            localStorage.setItem('loggedUser', '');

            window.location = 'index.html';
        }
    };

    /*Call to init*/
    site.init();
});
