let coll = document.getElementsByClassName("collaps-buttom");
let i;
for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}

function closeColaps(){
    let off = document.getElementById('colapsContent')
    console.log(off.style.display);
    if (off.style.display == "block") {
        off.style.display = "none";
    } else {
    off.style.display = "block";
    }
}

let load = document.getElementById('colapsSection');
let iframe = document.getElementsByTagName('iframe');
load.addEventListener('click', (e) => {
    if(e.target.id == "inova") {
        console.log(e.target.id);
        console.log(iframe);
        let destino = 'https://estartando-devs.github.io/inova';
        document.getElementById('iframe').src=destino;
    }

    if(e.target.id == "esdevs") {
        console.log(e.target.id);
        console.log(iframe);
        let destino = 'http://estartandodevs.com.br/';
        document.getElementById('iframe').src=destino;
    }

    if(e.target.id == "goods") {
        console.log(e.target.id);
        console.log(iframe);
        let destino = 'http://www.generalgoods.com.br/';
        document.getElementById('iframe').src=destino;
    }
});




