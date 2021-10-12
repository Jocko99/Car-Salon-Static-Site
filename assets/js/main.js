window.onload=function(){
var strana = window.location.href;
if(strana.indexOf("index.html")!==-1){
    linkovi();
    slajder();
    typeWriter(".ispis","true",30);
}else if(strana.indexOf("registracija.html")!==-1){
    linkovi();
    document.getElementById("zakazi").addEventListener("click",zakazi);
    //Dinamicko ispisivanje na stranici registracija
    var listaTehnicki = ["upravljanje","zaustavljanje","osvetljavanje puta","davanje zvučnih znakova","odvoženje i regulisanje izduvnih gasova.."];
    var tehnicki = "<ul>";
    for(var i=0;i<listaTehnicki.length;i++){
        tehnicki+= `<li>${listaTehnicki[i]}</li>`;
    }
    tehnicki+="</ul>";
    document.getElementById("listaTehnickog").innerHTML=tehnicki;
    //zavrsetak dinamickog ispsivanje
}else if(strana.indexOf("servis.html")!==-1){
    linkovi();
    var listaServisa = ["Zupčasti kaiš,","PK kaiš,","Španeri,","Pumpa za vodu,","Kočiono i ulje menjača (ako je predviđena zamena),","Test akumulatora,","Svećice,","Silen blokovi i amortizeri (provera stanja)"]
    var servis = "<ul>";
    for(var i=0;i<listaServisa.length;i++){
        servis+= `<li>${listaServisa[i]}</li>`;
    }
    servis+="</ul>";
    document.getElementById("listaServ").innerHTML=servis;
    document.getElementById("zakazi").addEventListener("click",zakazi);
}else if(strana.indexOf("vozila.html")!==-1){
    linkovi();
    automobili();
}else if(strana.indexOf("kontakt.html")!==-1){
    document.getElementById("posalji").addEventListener("click",posalji);
    linkovi();
}else if(strana.indexOf("autor.html")!==-1){
    autor();
}





}

$(document).ready(function(){
    function meni(){
        var hamburger = $("#sideNav a");
        hamburger.click(function(){
            var hamburgerUl = $("#sideNav ul");
            hamburgerUl.toggle(function(){
                $(this).find("ul").slideDown();
            },function(){
              $(this).find("ul").slideUp();  
            })
        })
    }
    meni();
    var strana = window.location.href;
if(strana.indexOf("index.html")!==-1){
    $('.num').counterUp({
        delay: 10,
    time: 1000
    }); 
}else if(strana.indexOf("vozila.html")!==-1){
        var broj=0;
        $('#viseAuta').click(function(event){
            event.preventDefault(); 
            if(broj % 2 == 0){
          $('.prikaziVise').show();
          $(this).html("Prikaži manje");
        }else{
            $('.prikaziVise').hide();
            $(this).html("Prikaži više")
        }
        broj++;
        });
}
    
    $("#scrollToTop").click(function(){

        $("html").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function(){
        let top = $(this)[0].scrollY;
        if(top > 500){
            $("#scrollToTop").show();
        } else {
            $("#scrollToTop").hide();
        }
    });
})



function linkovi(){
    //Dinamicko ispisivanje liste top-header 1
    var kontakt = ["+381 66 333 222","autojockovic@gmail.com"];
    var ulKontakt = "<ul class='contact_links'>"
    for(let i=0;i<kontakt.length;i++){
        ulKontakt+= "<li>"+kontakt[i]+"</li>";
    }
    ulKontakt+="</ul>";
    document.getElementsByClassName("top-header-links")[0].innerHTML+=ulKontakt;
    document.getElementsByClassName("top-header-links")[1].innerHTML+=ulKontakt;
    
    //Dinamicko ispsivanje liste top-header 2
    var mreze = ["Autor","Dokumentacija","<i class='fab fa-facebook-f '></i>","<i class='fab fa-instagram'></i>"];
    var mrezeLoc = ["autor.html","dokumentacija.pdf","https://www.facebook.com","https://www.instagram.com"]
    var ulMreze = "<ul class='social_links'>";
    for(var i=0;i<mreze.length;i++){
        for(var i=0;i<mrezeLoc.length;i++)
        ulMreze+= `<li><a href="${mrezeLoc[i]}">${mreze[i]}</a></li>`;
    }
    ulMreze+= "</ul>";
    document.getElementsByClassName("social")[0].innerHTML=ulMreze;
    document.getElementsByClassName("social")[1].innerHTML=ulMreze;
    //Dinamicko ispisivanje navigacije
    var nav=["Početna","Vozila","Registracija","Servis","Kontakt"];
    var navLoc=["index.html","vozila.html","registracija.html","servis.html","kontakt.html"];
    var ulNav="<ul class='d-flex justify-content-between mt-4'>";
    for(var i=0;i<nav.length;i++){
        for(var i=0;i<navLoc.length;i++)
        ulNav+= `<li><a href="${navLoc[i]}">${nav[i]}</a></li>`;
    }
    ulNav+="</ul>";
    document.getElementById("meni").innerHTML = ulNav;

}
var povecaj=0;
function slajder(){
    var slikeSlajd = ["assets/images/bmwWallpaper.jpg","assets/images/bmwWallpaper1.jpg"];
    setTimeout(slajder,3000);
    document.getElementById("slajder").src=slikeSlajd[povecaj];
    if(povecaj<slikeSlajd.length-1){
        povecaj++;
    }else{
        povecaj=0;
    }
}
function zakazi(){
    var ime = document.getElementById("firstName").value.trim();
    var regexIme = /^[A-ZŽĐŠ][a-zčćžšđ]{2,14}(\s[A-Z]{1}[a-z]{2,14})?$/
    var isValidIme = regexIme.test(ime);
    if(!isValidIme){
        document.getElementById("firstName-error").textContent="Nije dobro uneto ime";
        document.getElementById("firstName").classList.add("error");
        document.getElementById("firstName").classList.remove("correct");
    }else{
        document.getElementById("firstName-error").textContent="";
        document.getElementById('firstName').classList.remove("error");
        document.getElementById("firstName").classList.add("correct");
    }
    var prezime = document.getElementById("lastName").value.trim();
    var regexPrezime = /^[A-Z]{1}[a-z]{2,18}(\s[A-Z]{1}[a-z]{2,18})*$/;
    var isValidPrezime = regexPrezime.test(prezime);
    if(!isValidPrezime){
        document.getElementById("lastName-error").textContent="Nije dobro uneto prezime";
        document.getElementById("lastName").classList.add("error");
        document.getElementById("lastName").classList.remove("correct");
    }else{
        document.getElementById("lastName-error").textContent="";
        document.getElementById('lastName').classList.remove("error");
        document.getElementById("lastName").classList.add("correct");
    }
    var telefon = document.getElementById("mobilni").value.trim();
    var regexTelefon = /^06[0-69]{1}\/\d{3}\-\d{3,4}$/;
    var isValidTelefon = regexTelefon.test(telefon);
    if(!isValidTelefon){
        document.getElementById("mobilni-error").textContent="Broj telefona mora biti u formati 06x/xxx-xxx(x)";
        document.getElementById("mobilni").classList.add("error");
        document.getElementById("mobilni").classList.remove("correct");
    }else{
        document.getElementById("mobilni-error").textContent="";
        document.getElementById('mobilni').classList.remove("error");
        document.getElementById("mobilni").classList.add("correct");
    }
    var email = document.getElementById("mail").value.trim();
    var regexEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var isValidEmail = regexEmail.test(email);
    if(!isValidEmail){
        document.getElementById("email-error").textContent="Nije dobro unet email";
        document.getElementById("mail").classList.add("error");
        document.getElementById("mail").classList.remove("correct");
    }else{
        document.getElementById("email-error").textContent="";
        document.getElementById('mail').classList.remove("error");
        document.getElementById("mail").classList.add("correct");
    }
    var regOznaka = document.getElementById("regOznaka").value.trim();
    var regexOznaka = /^[A-ZČĆŠ]{2}\-(\d{3,4}|[A-Z]{3,10})\-[A-ZČĆŠĐŽ]{2}$/
    var isValidOznaka = regexOznaka.test(regOznaka);
    if(!isValidOznaka){
        document.getElementById("oznaka-error").textContent="Registracija može biti u formatu BG-001-AA ili BG-NIKOLA-AA";
        document.getElementById("regOznaka").classList.add("error");
        document.getElementById("regOznaka").classList.remove("correct");
    }else{
        document.getElementById("oznaka-error").textContent="";
        document.getElementById("regOznaka").classList.remove("error");
        document.getElementById("regOznaka").classList.add("correct");
    }
}
function posalji(){
    var ime = document.getElementById("firstName").value.trim();
    var regexIme = /^[A-ZŽĐŠ][a-zčćžšđ]{2,14}(\s[A-Z]{1}[a-z]{2,14})?$/
    var isValidIme = regexIme.test(ime);
    if(!isValidIme){
        document.getElementById("firstName-error").textContent="Nije dobro uneto ime";
        document.getElementById("firstName").classList.add("error");
        document.getElementById("firstName").classList.remove("correct");
    }else{
        document.getElementById("firstName-error").textContent="";
        document.getElementById('firstName').classList.remove("error");
        document.getElementById("firstName").classList.add("correct");
    }
    var prezime = document.getElementById("lastName").value.trim();
    var regexPrezime = /^[A-Z]{1}[a-z]{2,18}(\s[A-Z]{1}[a-z]{2,18})*$/;
    var isValidPrezime = regexPrezime.test(prezime);
    if(!isValidPrezime){
        document.getElementById("lastName-error").textContent="Nije dobro uneto prezime";
        document.getElementById("lastName").classList.add("error");
        document.getElementById("lastName").classList.remove("correct");
    }else{
        document.getElementById("lastName-error").textContent="";
        document.getElementById('lastName').classList.remove("error");
        document.getElementById("lastName").classList.add("correct");
    }
    var email = document.getElementById("mail").value.trim();
    var regexEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var isValidEmail = regexEmail.test(email);
    if(!isValidEmail){
        document.getElementById("email-error").textContent="Nije dobro unet email";
        document.getElementById("mail").classList.add("error");
        document.getElementById("mail").classList.remove("correct");
    }else{
        document.getElementById("email-error").textContent="";
        document.getElementById('mail').classList.remove("error");
        document.getElementById("mail").classList.add("correct");
    }
}
function autor(){
    var kontakt = ["+381 66 333 222","autojockovic@gmail.com"];
    var ulKontakt = "<ul class='contact_links'>"
    for(let i=0;i<kontakt.length;i++){
        ulKontakt+= "<li>"+kontakt[i]+"</li>";
    }
    ulKontakt+="</ul>";
    document.getElementsByClassName("top-header-links")[0].innerHTML+=ulKontakt;
    document.getElementsByClassName("top-header-links")[1].innerHTML+=ulKontakt;
    
    //Dinamicko ispsivanje liste top-header 2
    var mreze = ["Autor","Dokumentacija","<i class='fab fa-facebook-f '></i>","<i class='fab fa-instagram'></i>"];
    var mrezeLoc = ["autor.html","dokumentacija.pdf","https://www.facebook.com","https://www.instagram.com"]
    var ulMreze = "<ul class='social_links'>";
    for(var i=0;i<mreze.length;i++){
        for(var i=0;i<mrezeLoc.length;i++)
        ulMreze+= `<li><a href="${mrezeLoc[i]}">${mreze[i]}</a></li>`;
    }
    ulMreze+= "</ul>";
    document.getElementsByClassName("social")[0].innerHTML=ulMreze;
    document.getElementsByClassName("social")[1].innerHTML=ulMreze;
}
function automobili(){
    var audiA5 = ["Kilometraža:","130.324km","Kubikaža:","1968cm","Snaga motora:","130kw/177ks","Gorivo:","Dizel","Menjač:","Automatski","Karoserija:","Limuzina"];
    var bmw316 = ["Kilometraža:","120.124km","Kubikaža:","1995cm","Snaga motora:","85kw/116ks","Gorivo:","Dizel","Menjač:","Automatski","Karoserija:","Limuzina"];
    var audiA6 = ["Kilometraža:","100.324km","Kubikaža:","1968cm","Snaga motora:","140kw/190ks","Gorivo:","Dizel","Menjač:","Automatski","Karoserija:","Limuzina"];
    var passat = ["Kilometraža:","60.324km","Kubikaža:","1968cm","Snaga motora:","100kw/139ks","Gorivo:","Dizel","Menjač:","Automatski","Karoserija:","Limuzina"];
    var pezo = ["Kilometraža:","70.334km","Kubikaža:","1997cm","Snaga motora:","110kw/150ks","Gorivo:","Dizel","Menjač:","Automatski","Karoserija:","Limuzina"];
    var pAudi = "";
    var pBmw = "";
    var pAudiA6 = "";
    var pPassat = "";
    var pPezo = "";
    for(var i=0;i<audiA5.length;i++){
         pAudi+= `<p class="col-6">${audiA5[i]}</p>`
    }
    document.getElementById("audi").innerHTML=pAudi;
    for(var i=0;i<bmw316.length;i++){
        pBmw+= `<p class="col-6">${bmw316[i]}</p>`
    }
    document.getElementById("bmw").innerHTML=pBmw;
    for(var i=0;i<audiA6.length;i++){
        pAudiA6+= `<p class="col-6">${audiA6[i]}</p>`
    }
    document.getElementById("audiA6").innerHTML=pAudiA6;
    for(var i=0;i<passat.length;i++){
        pPassat+= `<p class="col-6">${passat[i]}</p>`
    }
    document.getElementById("passat").innerHTML=pPassat;
    for(var i=0;i<pezo.length;i++){
        pPezo+= `<p class="col-6">${pezo[i]}</p>`
    }
    document.getElementById("pezo").innerHTML=pPezo;
}