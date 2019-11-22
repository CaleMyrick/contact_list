
function filterFunction(){
  var input = document.getElementById("value");
  var filter = input.value.toUpperCase();
  ul = document.getElementById("uoList");
  li = ul.getElementsByTagName("li");

  //for loop | hiding items that do not match search

  for(i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display="";
    }else{
      li[i].style.display="none"
    }
  }

}
