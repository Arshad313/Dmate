var show = document.getElementById("nav-link");
    var ul = document.getElementById("nav-link-ul")
   
    function showMenu(){
      show.style.right= "0";
      
    }
    function closeMenu(){
      show.style.right= "-100%";
     
    }
    


    const modal = document.querySelector(".modal");
    const previews = document.querySelectorAll(".products img");
    const original = document.querySelector(".full-img");
    const imgText = document.querySelector(".caption")

    previews.forEach(preview => {
        preview.addEventListener("click", () => {
            modal.classList.add("open");
            original.classList.add("open")
            const originalSrc = preview.getAttribute("data-original")
            original.src = `./assets/${originalSrc}`;
          
        })
    } )

    modal.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal")){
            modal.classList.remove("open");
            original.classList.remove("open")
        
        }
    })
   