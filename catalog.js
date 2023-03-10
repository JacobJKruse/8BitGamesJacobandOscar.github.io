var system = "NES";

var nesbutton = document.getElementById("NES");
nesbutton.addEventListener("click", (event) => {
    event.preventDefault();
    
    console.log("button pressed");
    system = "NES";
    update();

});

var snesbutton = document.getElementById("SNES");
snesbutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "SNES";
    update();

});

var n64button = document.getElementById("N64");
n64button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "N64";
    update();

});

var gcbutton = document.getElementById("GC");
gcbutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "GC";
    update();

});

var wiibutton = document.getElementById("WII");
wiibutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "WII";
    update();

});

var gbbutton = document.getElementById("GB");
gbbutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "GB";
    update();

});

var gbabutton = document.getElementById("GBA");
gbabutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "GBA";
    update();

});

var dsbutton = document.getElementById("DS");
dsbutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "DS";
    update();

});

var ds3button = document.getElementById("3DS");
ds3button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button pressed");
    system = "3DS";
    update();

});

function update() {
    fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error:' + err);
        })
}



function appendData(data) {

    let mainContainer = document.getElementsByTagName("p");
    for (let x of mainContainer) {
        if (x.id == "0") {
            
            if(system == "SNES" ||system == "N64") {
            x.innerHTML = `<img class="center" width="200px"src="${data[system][0]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][0]["PRODUCT_NAME"]}</h3> <br> ${data[system][0]["PRODUCT_DESC"]} <br> Price: ${data[system][0]["PRICE"]} <br> Rating: ${data[system][0]["RATING"]}%`;
            }else{
            x.innerHTML = `<img class="center" height="200px"src="${data[system][0]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][0]["PRODUCT_NAME"]}</h3> <br> ${data[system][0]["PRODUCT_DESC"]} <br> Price: ${data[system][0]["PRICE"]} <br> Rating: ${data[system][0]["RATING"]}%`;
            }
        }
        else if (x.id == "1") {
            
            if(system == "SNES" ||system == "N64") {
                x.innerHTML = `<img class="center" width="200px"src="${data[system][1]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][1]["PRODUCT_NAME"]}</h3> <br> ${data[system][1]["PRODUCT_DESC"]} <br> Price: ${data[system][1]["PRICE"]} <br> Rating: ${data[system][1]["RATING"]}%`;
                }else{
            x.innerHTML = `<img class="center" height="200px"src="${data[system][1]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][1]["PRODUCT_NAME"]}</h3> <br> ${data[system][1]["PRODUCT_DESC"]} <br> Price: ${data[system][1]["PRICE"]} <br> Rating: ${data[system][1]["RATING"]}%`;
                }
        }
        else if (x.id == "2") {
            
            if(system == "SNES" ||system == "N64") {
                x.innerHTML = `<img class="center" width="200px"src="${data[system][2]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][2]["PRODUCT_NAME"]}</h3> <br> ${data[system][2]["PRODUCT_DESC"]} <br> Price: ${data[system][2]["PRICE"]} <br> Rating: ${data[system][2]["RATING"]}%`;
                }else{
            x.innerHTML = `<img class="center" height="200px"src="${data[system][2]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][2]["PRODUCT_NAME"]}</h3> <br> ${data[system][2]["PRODUCT_DESC"]} <br> Price: ${data[system][2]["PRICE"]} <br> Rating: ${data[system][2]["RATING"]}%`;
                }
        }
        else if (x.id == "3") {
            
            if(system == "SNES" ||system == "N64") {
                x.innerHTML = `<img class="center" width="200px"src="${data[system][3]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][3]["PRODUCT_NAME"]}</h3> <br> ${data[system][3]["PRODUCT_DESC"]} <br> Price: ${data[system][3]["PRICE"]} <br> Rating: ${data[system][3]["RATING"]}%`;
                }else{
            x.innerHTML = `<img class="center" height="200px"src="${data[system][3]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][3]["PRODUCT_NAME"]}</h3> <br> ${data[system][3]["PRODUCT_DESC"]} <br> Price: ${data[system][3]["PRICE"]} <br> Rating: ${data[system][3]["RATING"]}%`;
                }
        }
        else if (x.id == "4") {
            if(system == "SNES" ||system == "N64") {
                x.innerHTML = `<img class="center" width="200px"src="${data[system][4]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][4]["PRODUCT_NAME"]}</h3> <br> ${data[system][4]["PRODUCT_DESC"]} <br> Price: ${data[system][2]["PRICE"]} <br> Rating: ${data[system][4]["RATING"]}%`;
                }else{
            x.innerHTML = `<img class="center" height="200px"src="${data[system][4]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][4]["PRODUCT_NAME"]}</h3> <br> ${data[system][4]["PRODUCT_DESC"]} <br> Price: ${data[system][4]["PRICE"]} <br> Rating: ${data[system][4]["RATING"]}%`;
                }
        }
        else if (x.id == "5") {
            if(system == "SNES" ||system == "N64") {
                x.innerHTML = `<img class="center" width="200px"src="${data[system][5]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][5]["PRODUCT_NAME"]}</h3> <br> ${data[system][5]["PRODUCT_DESC"]} <br> Price: ${data[system][5]["PRICE"]} <br> Rating: ${data[system][5]["RATING"]}%`;
                }else{
            x.innerHTML = `<img class="center" height="200px"src="${data[system][5]["IMG_LINK"]}"> <br><h3 style="text-align:center;font-weight: bold;">${data[system][5]["PRODUCT_NAME"]}</h3> <br> ${data[system][5]["PRODUCT_DESC"]} <br> Price: ${data[system][5]["PRICE"]} <br> Rating: ${data[system][5]["RATING"]}%`;
                }
        }

    }
}


update();




