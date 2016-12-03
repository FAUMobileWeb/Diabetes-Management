/*Events and event handlers for site*/
$(function () {
    var site = {
        /*Hides the validation message, binds event handlers to events, and loads, if any, input information from localStorage*/
        init: function (){
            this.eventBind();
            if(localStorage.getItem('weightHistory') && localStorage.getItem('weightHistory') != '')
            {
                this.load();
            }
        },

        /*Binds event handlers to events*/
        eventBind: function() {
            $('#weightForm').on('submit', this.onSubmit);
        },

        /*On submit event handler*/
        onSubmit: function(e) {
            if(!localStorage.getItem("weightHistory"))
            {
                localStorage.setItem("weightHistory", "");
            }

            var lU = localStorage.getItem("loggedUser");
            var w = $('#weight').val();
            var d = Date();

            var weightEntry = {
                user: lU,
                weight: w,
                date: d
            };

            storeItem(weightEntry, 'weightHistory');

            location.reload();
        },

        load: function() {
            var list = JSON.parse(localStorage.getItem('weightHistory'));

            var i;

            for(i = list.items.length; i--; i < 0)
            {
                if(list.items[i].user == localStorage.getItem('loggedUser'))
                {
                    $('#history').append('<p>Your weight on ' + list.items[i].date + ' was ' + list.items[i].weight + ' lbs.</p>');
                }
            }
        }
    };

    /*Call to init*/
    site.init();
});
