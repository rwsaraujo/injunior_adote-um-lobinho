const wolvesUrl="../wolves.json";fetch(wolvesUrl).then(r=>r.json()).then(json=>{if(0<json.length)for(let i=0;i<2;i++){var wolvesList=document.querySelector(".wolves-list"),aWolfDiv=document.createElement("div"),aWolfImageDiv=document.createElement("div"),aWolfImageImg=document.createElement("img"),aWolfTextDivContainer=document.createElement("div"),aWolfTextProfileDivContainer=document.createElement("div"),aWolfTextProfileNameH3=document.createElement("h3"),aWolfTextProfileAgeP=document.createElement("p"),aWolfTextDescriptionP=document.createElement("p");aWolfDiv.classList.add("a-wolf","flex"),aWolfImageDiv.classList.add("wolf-img"),aWolfTextDivContainer.classList.add("wolf-txt","flex","column"),aWolfImageImg.setAttribute("src",""+json[i].link_image),aWolfImageImg.setAttribute("alt",""+json[i].name),aWolfTextProfileNameH3.append(json[i].name),aWolfTextProfileAgeP.append(json[i].age+" anos"),aWolfTextDescriptionP.append(json[i].description),aWolfImageDiv.appendChild(aWolfImageImg),aWolfTextProfileDivContainer.appendChild(aWolfTextProfileNameH3),aWolfTextProfileDivContainer.appendChild(aWolfTextProfileAgeP),aWolfTextDivContainer.appendChild(aWolfTextProfileDivContainer),aWolfTextDivContainer.appendChild(aWolfTextDescriptionP),aWolfDiv.appendChild(aWolfImageDiv),aWolfDiv.appendChild(aWolfTextDivContainer),wolvesList.appendChild(aWolfDiv)}else document.querySelector(".section-wolves-title").innerHTML="Não temos nenhum lobinho no momento."});