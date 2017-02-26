var links = document.querySelectorAll('a');

var linksarray = [].slice.call(links);

function disable(linksarray) {
    'use strict';
    linksarray.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

linksarray.forEach(disable);
