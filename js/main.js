//exo 1 partie 1
var user = {
  firstName: 'Manon',
  lastName: 'Jac',
  placeOf_birth: 'Farnce',
  payment_by: ['cart-Master', 'cart-Visa', 'cart-Blue'],
  age: 28,

  birth_day: function(){
  var today = new Date();
  var birthday = today.getFullYear();
  return  birthday - this.age;
  }
};

  alert("she is " + user.firstName);
  alert("her father's name is " + user.lastName);
  alert("she was born in " + user.birth_day());

exo 1 partie 2
var liste = {
  country: ['FRANCE', 'ENGLAN', 'SPAIN', 'SWISSE'],
  payment: ['MASTER_CART', 'VISA_CART', 'BLUE_CART'],
  mini_age: 17
};

if(liste.mini_age >= 17){
  document.getElementById("object").innerHTML = "you have the rite to see this page";
}else{
  document.getElementById("object").innerHTML = "you are too fucking young";
}

 var pays = "FRANCE";

if (liste.country.indexOf(pays) < 0) {
  document.getElementById("objet").innerHTML = "pays est n'existe pas dans la liste de country";
}else{
    document.getElementById("objet").innerHTML = " pays existe dans la liste de country";
}

var payer = "MASTER_CART";
if(liste.payment.indexOf(payer) < 0){
    document.getElementById("payer").innerHTML = "payer est n'existe pas dans la liste de payement";
}else{
    document.getElementById("payer").innerHTML = " payer existe dans la liste de payement";
}

