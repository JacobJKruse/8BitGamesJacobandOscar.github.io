function updateIndex(){
  fetch('indexInfo.json')
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                getReviews(data);
              })
              .catch(function (err) {
                console.log('error:' + err);
              })
  }

            function getReviews(data) {
              let mainContainer = document.getElementById("myData");
              let div = document.createElement("div");
              div.innerHTML = ` <h2><img class="bd-placeholder-img rounded-circle"width="140" height="140" src=${data.REVIEWS.MAIN[0].IMG} ><br> ${data.REVIEWS.MAIN[0].NAME} <br> </h2> <p>${data.REVIEWS.MAIN[0].REVIEW} <br> -${data.REVIEWS.MAIN[0].DATE}</p> `;
              mainContainer.appendChild(div);
              let mainContainer2 = document.getElementById("myData2");
              let div2 = document.createElement("div");
              div2.innerHTML = `<h2><img class="bd-placeholder-img rounded-circle" src=${data.REVIEWS.MAIN[1].IMG} width="140" height="140"> <br> ${data.REVIEWS.MAIN[1].NAME}</h2><p>${data.REVIEWS.MAIN[1].REVIEW} <br> -${data.REVIEWS.MAIN[1].DATE}</p>`;
              mainContainer2.appendChild(div2);
              let mainContainer3 = document.getElementById("myData3");
              let div3 = document.createElement("div");
              div3.innerHTML = `<h2><img class="bd-placeholder-img rounded-circle" src=${data.REVIEWS.MAIN[2].IMG} width="140" height="140"><br>  ${data.REVIEWS.MAIN[2].NAME}</h2><p>${data.REVIEWS.MAIN[2].REVIEW}  <br> -${data.REVIEWS.MAIN[2].DATE}</p>`;
              mainContainer3.appendChild(div3);
  
              let mainContainerAd1 = document.getElementById("AD1");
              let divAD1 = document.createElement('div');
              divAD1.innerHTML = `<h1 class="featurette-heading fw-bold lh-1">${data.ADS.MAIN[0].TITLE}<h1><p style="lead">${data.ADS.MAIN[0].DESC}</p>`;
              mainContainerAd1.appendChild(divAD1);
  
              let mainContainerAd1IMG = document.getElementById("AD1IMG");
              let divAD1IMG = document.createElement('div');
              divAD1IMG.innerHTML = `<img height="300px" width="300px"src="${data.ADS.MAIN[0].IMG}">`;
              mainContainerAd1IMG.appendChild(divAD1IMG);
  
              let mainContainerAd2 = document.getElementById("AD2");
              let divAD2 = document.createElement('div');
              divAD2.innerHTML = `<h1 class="featurette-heading fw-bold lh-1">${data.ADS.MAIN[1].TITLE}<h1><p style="lead">${data.ADS.MAIN[1].DESC}</p>`;
              mainContainerAd2.appendChild(divAD2);
  
              let mainContainerAd2IMG = document.getElementById("AD2IMG");
              let divAD2IMG = document.createElement('div');
              divAD2IMG.innerHTML = `<img height="300px"  width="300px"src="${data.ADS.MAIN[1].IMG}">`;
              mainContainerAd2IMG.appendChild(divAD2IMG);
  
            }

  updateIndex();