
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?;]" + name + "(=([^;#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Get and display the parameters
  var festiv_name = getUrlParameter('festival');
  festiv_name=festiv_name.replace("@","'");
festiv_name=festiv_name.replace("_"," ");
  var sender = getUrlParameter('name');
  var image=getUrlParameter('image');

  // Display the values (you can use these values as needed)
  //alert('param1: ' + festiv_name + '\nparam2: ' + sender);

  document.getElementById("festival_name").innerHTML+=festiv_name;
  if(sender!=null){
    document.getElementById("sender_info").innerText="Heartly wishes by "+sender.replace("_"," ");
  }
  if(image!=null){
    document.getElementById("image").style.backgroundImage="url(bg/"+image+")";
    document.getElementById("msg").innerText="hey 😀,\n"+Database[festiv_name].English;
  }
  else{
    window.location.href("index.html");
  }

  document.getElementById("whatsapp").addEventListener('click',function(){
    var name=document.getElementById("user_name").value;
    festiv_name = festiv_name.replace(" ","_");
      festiv_name = festiv_name.replace("'","@");
     name = name.replace(" ","_")

    
    var redirect="https://udhayadeepan.github.io/FestivalWishMaker/wishes.html?festival="+festiv_name+";name="+name+";image="+image ;
    var textMsg=name+" sent a special wish for you😍\n click the below link to see the wish \n"+redirect; 
    var link='https://wa.me/?text='+textMsg;
     
      console.log(link);
    window.open(link,'_blank');

  });
  
document.getElementById("festival_name").addEventListener('click',function(){
  window.location.href="index.html";
});
