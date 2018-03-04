//Tugas 1
function shoutOut() {
    console.log("Hallo Function");
  }
  shoutOut();
  
  //Tugas 2
  function calculateMultiply(num1, num2) {
   return num1 * num2;
  }
  
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian);
  
  //Tugas 3
  function processSentence(name, age, address, hobby) {
    return name + " " + age + " " + address + " " + hobby ;
   }
   var name = "Tia";
   var age = 27;
   var address = "Komplek Kejaksaan Agung";
   var hobby = "Travel";
   
   var fullSentence = processSentence(name, age, address, hobby);
   console.log(fullSentence);