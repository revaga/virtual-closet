 tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }

var n = 1;
var z = 1;
var b = 1;
var d = 1;
var a = 1;

var dressyess = 0;


function changeshirt() {
  var image = document.getElementById('shirtbase');
  if(dressyess == 1){
    var dressimage = document.getElementById('dressbase')
    dressimage.src = "dress/dressbase.png"
    var bottombaseimage = document.getElementById("bottombase")
    bottombaseimage.src = "pants/bottombase.png"
    dressyess = 0
  }
  
  if (n == 1) {
      image.src = "shirts/shirt1.png";
  }
  else if(n == 2){
    image.src = "shirts/shirt2.png";
    }
  else if(n == 3){
    image.src = "shirts/shirt6.png";
  }
  else if(n==4){
    image.src = "shirts/shirt5.png"
  }

  else{
    image.src = "shirts/shirtbase.png"
  }
  n = n + 1
  if(n>4){
    n=0
  }
}

function changebase() {
  var image = document.getElementById('bottombase');
  if(dressyess == 1){
    var dressimage = document.getElementById('dressbase')
    dressimage.src = "dress/dressbase.png"
    var shirtbaseimage = document.getElementById("shirtbase")
    shirtbaseimage.src = "shirts/shirtbase.png"
    dressyess = 0
  }
  else{
    var dressimage = document.getElementById("dressbase")
  }
  

  if(z == 1){
    image.src = "pants/pants2.png";
    }
  else if(z == 2){
    image.src = "pants/pants3.png";
    }
  else if(z == 3){
    image.src = "pants/pants4.png";
    }
  else if(z == 4){
    image.src = "pants/pants7.png";
    }
  else if(z == 5){
    image.src = "pants/pants8.png";
    }
  else{
  image.src = "pants/bottombase.png";
  }
  z = z + 1
  if(z>5){
  z=0
  }
}

function changeshoe() {
  var image = document.getElementById('shoebase');
  if (b == 1) {
      image.src = "shoe1.png";
  }
  else if(b == 2){
    image.src = "shoe2.png";
    }
  else if(b==3){
    image.src = "shoe3.png";
  }
  else{
  image.src = "shoe1.png";
  }
  b = b + 1
  if(b>3){
    b=0
  }
}

function changeacc() {
  var image = document.getElementById('accbase');

  if(a==1){
    image.src = "acc/Acc1.png"
  }
  else if(a ==2){
    image.src = "acc/Acc2.png"
  }
  else if(a ==3){
    image.src = "acc/Acc3.png"
  }else if(a ==4){
    image.src = "acc/Acc4.png"
  }
    else if(a ==5){
    image.src = "acc/Acc5.png"
  }
    else if(a ==6){
    image.src = "acc/Acc6.png"
  }
    else if(a ==7){
    image.src = "acc/Acc7.png"
  }
    else if(a ==8){
    image.src = "acc/Acc8.png"
  }
  else if(a ==9){
    image.src = "acc/Acc9.png"
  }
  else if(a ==10){
    image.src = "acc/Acc10.png"
  }
  else if(a == 11){
    image.src = "acc/Acc11.png"
  }
  else if(a ==12){
    image.src = "acc/Acc12.png"
  }
  else if(a ==13){
    image.src = "acc/Acc13.png"
  }
    else if(a ==14){
    image.src = "acc/Acc14.png"
  }
  else{
    image.src = "accessorybase.png"
  }
  
  a = a + 1
  if(a > 15){
    a=0
  }
}

function changedress() {
  var image = document.getElementById('dressbase');
  var imageshirt = document.getElementById('shirtbase')
  var imagebase = document.getElementById("bottombase")
  imageshirt.src = ""
  imagebase.src = ""
  if (d == 1) {
      image.src = "dress/dress1.png";
  }
  else if(d == 2){
    image.src = "dress/dress2.png";
    }
  else if(d == 3){
    image.src = "dress/dress3.png";
    }
  else if(d == 4){
    image.src = "dress/dress4.png";
    }
  else if(d == 5){
    image.src = "dress/dress5.png";
    }
  else if(d == 6){
    image.src = "dress/dress6.png";
    }
  else if(d == 7){
    image.src = "dress/dress7.png";
    }
  else{
  image.src = "dress/dress1.png";
  }
  d = d + 1
  if(d>7){
    d=0
  }
  dressyess = 1
}