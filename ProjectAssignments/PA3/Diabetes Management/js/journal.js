/*Events and event handlers for site*/
$(function () {
    var site = {
        init: function (){
            this.eventBind();
            if(localStorage.getItem('foodHistory') && localStorage.getItem('foodHistory') != '')
            {
                this.load();
            }
        },

        /*Binds event handlers to events*/
        eventBind: function() {
            $('#foodForm').on('submit', this.onSubmit);
        },

        /*On submit event handler*/
        onSubmit: function(e) {
            if(!localStorage.getItem("foodHistory"))
            {
                localStorage.setItem("foodHistory", "");
            }

            var lU = localStorage.getItem("loggedUser");
            var f = $('#foodItem').val();
            var m = $('#mtype').val();
            var d = Date();

            var foodEntry = {
                user: lU,
                food: f,
                meal: m,
                date: d
            };

            storeItem(foodEntry, 'foodHistory');

            location.reload();
        },

        load: function() {
			if(localStorage.getItem("foodHistory"))
            {
                var list = JSON.parse(localStorage.getItem('foodHistory'));

				var i;

				for(i = list.items.length; i--; i < 0)
				{
					if(list.items[i].user == localStorage.getItem('loggedUser'))
					{
						$('#history').append('<p>You ate ' + list.items[i].food + ' for ' + list.items[i].meal + ' on ' + list.items[i].date + '.</p>');
					}
				}
            }
        }
    };

    /*Call to init*/
    site.init();
});
