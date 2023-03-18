window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".open_menu").addEventListener("click", function () {
        document.querySelector(".mob_menu").classList.add("mob_menu_visible");
    });
    document.body.addEventListener("click", function (e) {
        if (!e.target.closest(".open_menu")) {
            document.querySelector(".mob_menu").classList.remove("mob_menu_visible");
        }
    });

    const phoneInputField = document.querySelector("#phone");
    if(phoneInputField){
        const phoneInput = window.intlTelInput(phoneInputField, {
       // utilsScript:
        //    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    }
    const accItems = document.querySelectorAll(".accordion_item_header");
    for(let i=0; i < accItems.length; i++){
        accItems[i].addEventListener("click", function(event){
            const currentTarget = event.target.closest(".accordion_item");

            [].forEach.call(accItems, function(element){
                const item = element.closest(".accordion_item");
                if(item !== currentTarget){
                    element.closest(".accordion_item").classList.remove("active");
                }
            });

            currentTarget.classList.toggle("active");

        });
    }
});    