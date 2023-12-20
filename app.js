let theme = document.getElementById("theme");

let body = document.getElementById("body");



let localTheme= localStorage.getItem("them");
console.log(localTheme)


body.classList.remove("theme-light");
body.classList.remove("theme-free");
body.classList.remove("theme-dark");
body.classList.add(localTheme);



theme.addEventListener("change",function changeTheme(){
    
    
    localStorage.setItem("them", theme.value)

       
    if (theme.value == "theme-dark"){
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
        
    }else if( theme.value =="theme-light") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
       
    }else if (theme.value == "theme-free"){
        body.classList.add("theme-free");
        body.classList.remove("theme-light");
        body.classList.remove("theme-dark");
    }z
});

