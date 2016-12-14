/*Utility functions to manipulate localStorage*/
function updateLSTaskCount(taskCount) {
    localStorage['tasksCreated'] = taskCount;
}

function storeItem(listValue, listName) {
    if(localStorage[listName] == '')
    {
        var list =
            {
                items: []
            };

        list.items.push(listValue);

        localStorage[listName] = JSON.stringify(list);

    }
    else
    {
        var list = JSON.parse(localStorage.getItem(listName));
        list.items.push(listValue);
        localStorage[listName] = JSON.stringify(list);

    }
}

function removeItem(listValue, listName) {
    var list = JSON.parse(localStorage.getItem(listName));

    var i;

    for (i = 0; i < list.items.length; i++)
    {
        if(list.items[i].tname == listValue.tname)
        {
            break;
        }
    }

    list.items.splice(i, 1);
    localStorage[listName] = JSON.stringify(list);
}

function replaceItem(unique, newListValue, listName) {
    var test = localStorage.getItem(listName);

    debugger;

    if(test == '')
    {
        storeItem(newListValue, listName);
        return;
    }

    var list = JSON.parse(localStorage.getItem(listName));

    var i;

    for(i = 0; i < list.items.length; i++)
    {
        if(list.items[i].loggedUser == newListValue.loggedUser)
        {
            list.items[i] = newListValue;
            break;
        }
    }

    debugger;

    if(i == list.items.length)
    {
        storeItem(newListValue, listName);
        return;
    }

    localStorage[listName] = JSON.stringify(list);
}

function clearItems(listName) {
    localStorage[listName] = '';
}
