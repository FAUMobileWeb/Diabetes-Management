/*Events and event handlers for site*/
$(function () {
    var site = {
        /*Hides the validation message, binds event handlers to events, and loads, if any, input information from localStorage*/
        init: function (){
            var list = JSON.parse(localStorage.getItem('profiles'));

            var i;

            for(i = 0; i < list.items.length; i++)
            {
                if(list.items[i].loggedUser == localStorage.getItem('loggedUser'))
                {
                    break;
                }
            }

            $('#firstName').val(list.items[i].firstName);
            $('#lastName').val(list.items[i].lastName);
            $('#age').val(list.items[i].age);
            $('#dtype').val(list.items[i].dtype);

            this.eventBind();
        },

        /*Binds event handlers to events*/
        eventBind: function() {
            $('#profileForm').on('submit', this.onSubmit);
        },

        /*On submit event handler*/
        onSubmit: function(e) {
            var lU = localStorage.getItem('loggedUser');
            var fN = $('#firstName').val();
            var lN = $('#lastName').val();
            var a = $('#age').val();
            var dt = $('#dtype').val();

            var profile = {
                loggedUser: lU,
                firstName: fN,
                lastName: lN,
                age: a,
                dtype: dt
            }

            if(!localStorage.getItem('profiles'))
            {
                localStorage.setItem('profiles', '');
            }

            debugger;

            replaceItem(lU, profile, 'profiles');

            location.reload(); 
        }
    };

    /*Call to init*/
    site.init();
});
