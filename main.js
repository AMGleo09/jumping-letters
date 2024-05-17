const letters = document.querySelectorAll(".letters span");

        letters.forEach((letter)=>{
            letter.addEventListener( "mouseover", (e)=> {
                e.target.classList.add("active");
        })


                    


    })