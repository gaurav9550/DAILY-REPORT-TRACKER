const menuItems = document.querySelectorAll(".menu li");


menuItems.forEach(item => {


    item.addEventListener("click",()=>{


        let section = item.getAttribute("data-section");


        let target = document.getElementById(section);



        if(target){


            target.scrollIntoView({

                behavior:"smooth"

            });


        }



        // active menu change

        menuItems.forEach(i=>{

            i.classList.remove("active");

        });


        item.classList.add("active");


    });



});