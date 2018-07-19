//function getfile(file,callback){
  //var xhr=new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange=function(){
    //if(xhr.readyState === 4 && xhr.status == "200"){
      //callback(xhr.responseText);
    //}
  //};
  //xhr.send(null);
//}
//getfile("data.json",function(text)
//{
  //var data=JSON.parse(text);
  //console.log(data);
  //details(data.basics);
//  objective(data.Careerobjective);
//  educate(data.education);
  //skills(data.technical);
  //achieve(data.achievements);
//})


function loadjson(file){
  return new Promise((resolve,reject)=>{
     return fetch(file).then(response=>{
       if(response.ok){
         resolve(response.json());
       }else{
         reject(new Error('error'));
       }
       })
       })
}
var newfile= loadjson("data.json");
newfile.then(data=>{

  details(data.basics);
    objective(data.Careerobjective);
    educate(data.education);
  skills(data.technical);
  achieve(data.achievements);
})

var child=document.querySelector(".childone");

function details(det){
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

  var name=document.createElement("h3");
  name.textContent=det.name;
  child.appendChild(name);

  var phoneno=document.createElement("h4");
  phoneno.textContent=det.phoneno;
  child.appendChild(phoneno);

  var mail=document.createElement("a");
  mail.href="mailto:himakavya9785@gmail.com";
  mail.textContent=det.email;
  child.appendChild(mail);

  var print=document.createElement("h2");
  print.textContent="ADDRESS";
  child.appendChild(print);

  var line=document.createElement("hr");
  child.appendChild(line);

  var address=document.createElement("h3");
  address.textContent=det.address;
  child.appendChild(address);
}

var child1=document.querySelector(".childtwo");

function objective(inf) {

  var print1=document.createElement("h2");
  print1.textContent="CAREER OBJECTIVE";
  child1.appendChild(print1);
  var line1=document.createElement("hr");
  child1.appendChild(line1);

  var info=document.createElement("h2");
  info.textContent=inf.info;
  child1.appendChild(info);
}
var child1=document.querySelector(".childtwo");

 function educate(ed){
   var head=document.createElement("h2");
   head.textContent="Education Qualification";
   child1.appendChild(head);


   var line2=document.createElement("hr");
   child1.appendChild(line2);

   for(i=0;i<ed.length;i++)
   {
      var deg=document.createElement("h3");
      deg.textContent=ed[i].degree;
      child1.appendChild(deg);

      var eduul=document.createElement("ul");
      var eduli=document.createElement("li");
      eduli.textContent=ed[i].institute;
      eduul.appendChild(eduli);
      child1.append(eduul);

      var datal=document.createElement("ul");
      var datai=document.createElement("li");
      datai.textContent=ed[i].data;
      datal.appendChild(datai);
      child1.append(datal);
}
   }
   function skills(skillinfo)
   {
     var head3=document.createElement("h2");
     head3.textContent="Technical Skills";
     child1.appendChild(head3);


     var line3=document.createElement("hr");
     child1.appendChild(line3);

     var skilldata=document.createElement("table");
     skilldata.border="1";
     child1.appendChild(skilldata);

     tabledata="";
     for (var i = 0; i < skillinfo.length; i++) {
       tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>"
     }
     skilldata.innerHTML=tabledata;
   }
   function achieve(achieveinfo)
   {
     var head4=document.createElement("h2");
     head4.textContent="Achievements";
     child1.appendChild(head4);


     var line4=document.createElement("hr");
     child1.appendChild(line4);

     var Au1=document.createElement("ul");
     var Al1=document.createElement("li");
     Al1.textContent=achieveinfo.A1;
     Au1.appendChild(Al1);
     child1.appendChild(Au1);

     var Au2=document.createElement("ul");
     var Al2=document.createElement("li");
     Al2.textContent=achieveinfo.A2;
     Au2.appendChild(Al2);
     child1.appendChild(Au2);



     var Au3=document.createElement("ul");
     var Al3=document.createElement("li");
     Al3.textContent=achieveinfo.A3;
     Au3.appendChild(Al3);
     child1.appendChild(Au3);


     var Au4=document.createElement("ul");
     var Al4=document.createElement("li");
     Al4.textContent=achieveinfo.A4;
     Au4.appendChild(Al4);
     child1.appendChild(Au4);

     }
