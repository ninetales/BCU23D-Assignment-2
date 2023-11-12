/**********************************************************************
mobile-nav.js
***********************************************************************/

document.addEventListener('DOMContentLoaded', function(){

    const mobileNavBtn = document.querySelector('[data-mobile-drop-down-active]');
    
    document.addEventListener('click', function(event){

        if(event.target.hasAttribute('data-mobile-nav-btn-active') || event.target.closest('[data-mobile-nav-btn-active]')){

            const btn = event.target.closest('[data-mobile-nav-btn-active]') || event.target;
            const btnActive = btn.getAttribute('data-mobile-nav-btn-active');

            btn.setAttribute('data-mobile-nav-btn-active', 'false');

            if(btnActive === '' || btnActive === 'false'){
                btn.setAttribute('data-mobile-nav-btn-active', 'true');
                mobileNavBtn.setAttribute('data-mobile-drop-down-active', 'true');
            } else {
                btn.setAttribute('data-mobile-nav-btn-active', 'false');
                mobileNavBtn.setAttribute('data-mobile-drop-down-active', 'false');
            }

        }
    })

});
