window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".open_menu").addEventListener("click", function () {
        document.querySelector(".mob_menu").classList.add("mob_menu_visible");
    });
    document.body.addEventListener("click", function (e) {
        if (!e.target.closest(".open_menu")) {
            document.querySelector(".mob_menu").classList.remove("mob_menu_visible");
        }
    });
});
/*const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });*/
    window.addEventListener("DOMContentLoaded", function(){
        const accItems = document.querySelectorAll(".accordion_item_header");
        for(let i=0; i < accItems.length; i++){
            accItems[i].addEventListener("click", function(event){
                
                [].forEach.call(accItems, function(element){
                    element.closest(".accordion_item").classList.remove("active")
                });

                const root = event.target.closest(".accordion_item");
                root.classList.toggle("active");

            });
        }
    }
    )