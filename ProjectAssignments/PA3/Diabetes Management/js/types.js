/*Events and event handlers for site*/
$(function () {
    var site = {
        /*Hides the validation message, binds event handlers to events, and loads, if any, input information from localStorage*/
        init: function (){
            this.eventBind();
        },

        /*Binds event handlers to events*/
        eventBind: function() {
            $('#logout').on('click', this.onLogOut);
        },

        /*On submit event handler*/
        onLogOut: function(e) {
            localStorage.setItem('loggedUser', '');

            window.location = "index.html";
        }
    };

    /*Call to init*/
    site.init();
});
