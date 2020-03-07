function loadjson(file,callback){
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
	if(xhr.readyState===4 && xhr.status===200){
		callback(xhr.responseText);
 	}
  };
  xhr.send(null);
}

loadjson("data.json",function (text) {
        var data=JSON.parse(text);
       console.log(data);
       basics(data.details);
 })


var ch= document.querySelector(".child1");
function basics(det){
	var img = document.createElement("img");
	img.src="pic.jpg";
	img.alt="picture";
	ch.appendChild(img);

	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);

	var email=document.createElement("a");
    email.href="mailto:pravallikamoola33@gmail.com"
    email.textContent="pravallikamoola33@gmail.com"
	ch.appendChild(email);

}