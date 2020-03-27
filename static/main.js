console.log("dogbless")
var arr = [];
var v = ["rat","bat","pneumonoultramicroscopicsilicovolcanoconiosis","life"];
var j;
var seconds = 1000;

function addtoarr(){

  let d = document.getElementById("txtarea").value;
  let tokenized = d.split(",");
  for (l of tokenized){
    v.push(l)
  }
  document.getElementById("words").innerHTML = String(v)
}
function resetarr(){
  v = []
  document.getElementById("words").innerHTML = String(v)
}
function changesecods(){
  let zz = document.getElementById("seconds").value
  console.log(document.getElementById("seconds").value)
  if (+zz === +zz){
    seconds = zz*1000;
  }
}
function test(){
    cancelev()
    let x;
    for ( let s = 0; s < v.length; s++) {
      x = setTimeout(function(){ document.getElementById("cards").innerHTML = v[s]; console.log(s); j = s;}, seconds*s);
      arr.push(x)
    }

}
function cancelev(){

    for (vn of arr) {
      clearTimeout(vn)
    }
}

function resumev(){
  
  let x;
  let f = 0;
  for ( let s = j+1; s < v.length; s++) {
    if (f == 0){
      f += 1
      x = setTimeout(function(){ document.getElementById("cards").innerHTML = v[s]; console.log(s); j = s;}, 100);
    }
    else{
      x = setTimeout(function(){ document.getElementById("cards").innerHTML = v[s]; console.log(s); j = s;}, seconds*f);
      f+= 1
    }
    arr.push(x)
  }

}

function submitForm() {
    console.log("submit event");

    var fd = new FormData(document.getElementById("fileinfo"));

    $.ajax({
      url: "calculate/",
      
      type: "POST",
      data: fd,
      processData: false,  // tell jQuery not to process the data
      contentType: false,
      success: function(data){

        if (data["rsvp"] == "Wrong file type!"){
          document.getElementById("words").innerHTML =  String(data["rsvp"]);
        }
        else{
          let tokenized = data["rsvp"].split('%43')
         
          for (l of tokenized){
            v.push(l)
          }
          document.getElementById("words").innerHTML = " Pervious words + the highlights in the file";
        }
        
      }   // tell jQuery not to set contentType
      
    });
    //document.getElementById("makegood").style.visibility = 'hidden';
    
    return false;
}
