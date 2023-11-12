/**********************************************************************
cookies.js
***********************************************************************/

document.addEventListener('DOMContentLoaded', function(){

    document.addEventListener('click', function(event){

        if(event.target.hasAttribute('data-cookie-status-btn') || event.target.closest('[data-cookie-status-btn]')){

            const status = event.target.closest('[data-cookie-status-btn]').getAttribute('data-cookie-status-btn');
            console.log(status);

            if(status === "accept"){
                // Do something if accepted
                temporaryHide();
            } else {
                // Do something if declined
                temporaryHide();
            }

        }

    });

});

// Just a temporary function to visualy display that something is heppening when clicking on one of the cookie buttons
function temporaryHide() {
    document.querySelector('.cookies').setAttribute('data-cookie-visible', 'false');
}