var arr = [];
//test array for words
var wordlist = ["rat","bat","pneumonoultramicroscopicsilicovolcanoconiosis","life"];
var resumecounter;
var seconds = 1000;
//This function adds to our word array
function addtoarr(){

  let d = document.getElementById("txtarea").value;
  let tokenized = d.split(",");
  for (l of tokenized){
    wordlist.push(l)
  }
  document.getElementById("words").innerHTML = String(v)
}
//This function restarts the array
function resetarr(){
  wordlist = []
  document.getElementById("words").innerHTML = String(v)
}
//This function changes user input to seconds
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
    for ( let s = 0; s < wordlist.length; s++) {
      x = setTimeout(function(){ document.getElementById("cards").innerHTML = wordlist[s]; console.log(s); resumecounter = s;}, seconds*s);
      arr.push(x)
    }

}
//This function cancels the word presentation. 
function cancelev(){

    for (vn of arr) {
      clearTimeout(vn)
    }
}
//This function resumes the word presentation. 
function resumev(){
  //resume 
  let x;
  let f = 0;
  for ( let s = resumecounter+1; s < wordlist.length; s++) {
    if (f == 0){
      f += 1
      x = setTimeout(function(){ document.getElementById("cards").innerHTML = wordlist[s]; console.log(s); resumecounter = s;}, 100);
    }
    else{
      x = setTimeout(function(){ document.getElementById("cards").innerHTML = wordlist[s]; console.log(s); resumecounter = s;}, seconds*f);
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
            wordlist.push(l)
          }
          document.getElementById("words").innerHTML = " Pervious words + the highlights in the file";
        }
        
      }   // tell jQuery not to set contentType
      
    });
    //document.getElementById("makegood").style.visibility = 'hidden';
    
    return false;
}
