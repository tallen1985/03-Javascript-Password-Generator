
// Assignment Code
var generateBtn = document.getElementById("generate");
var modalBox = document.getElementById('modalBox');
var closeModal = document.getElementById('closeModal');
var submitButton = document.getElementById('submitButton');
var passwordText = document.querySelector("#password");
var password = "";
  

// Add event listener to generate button
closeModal.addEventListener('click', function() {
  modalBox.style.display = 'none';
});
generateBtn.addEventListener('click', function() {
  modalBox.style.display = "block";
});
submitButton.addEventListener('click', function(e) {
  validateData();
  e.preventDefault();
});

function validateData() {
  let length = document.getElementById('lengthInput').value;
  let checkBox = document.getElementsByClassName('CB');
  let anythingChecked = false;
  
  for (let x = 0; x <= 3; x++){
    if (checkBox[x].checked) {
      console.log(checkBox[x]);
      anythingChecked = true;
    }
  }
  if (length >= 8 && length <= 128 && anythingChecked) {
    createPassword();
  } else {
    alert('please check at least one box and specify a length between 8 and 128');
  }
}

// Get user input and generate object with requirements.
function generateRequirements() {
  let length = document.getElementById('lengthInput')
  let checkBox = document.getElementsByClassName('CB');

  let requirements = {
    length: length.value,
    lowercase: checkBox[0].checked,
    uppercase: checkBox[1].checked,
    specialChar: checkBox[2].checked,
    numeric: checkBox[3].checked
    }

  return requirements;
}

// Generate possible Values from user requirements
function generateValues(requirements) {
  let lowercaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let specialChar = ["!","@","#","$","%","^","&","*"];
  let possibleValues = [];

 if (requirements.lowercase) {
   possibleValues.push(...lowercaseValues)
 }
 if (requirements.uppercase) {
   possibleValues.push(...uppercaseValues)
 }
 if (requirements.specialChar) {
   possibleValues.push(...specialChar)
 }
 if (requirements.numeric) {
   for (let x = 0; x <= 9; x++) {
      possibleValues.push(x);
    }
 }
  return possibleValues;
}

// Get requirements from user, validate requirements, create
//    possible values and generate password.
createPassword = () => {
let requirements = generateRequirements();
let possibleValues = generateValues(requirements);

for (let x = 0; x < requirements.length; x++) {
    let randNum = Math.round(Math.random() * (possibleValues.length - 1));
    console.log(randNum);
    password += possibleValues[randNum];
};

passwordText.value = password;
modalBox.style.display = 'none';
console.log(password);
};
