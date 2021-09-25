
// Assignment Code
const generateBtn = document.getElementById("generate");
const modalBox = document.getElementById('modalBox');
const closeModal = document.getElementById('closeModal');
const submitButton = document.getElementById('submitButton');
const passwordText = document.querySelector("#password");
  

// Add event listener to generate button
closeModal.addEventListener('click', function() {
  modalBox.style.display = 'none';
});
generateBtn.addEventListener('click', function() {
  modalBox.style.display = "block";
});
submitButton.addEventListener('click', function(event) {
  validateData();
  event.preventDefault();
});

// Validation: Check to ensure user chose correct length and at
  // least one set of values, if correct populate requirements object.
function validateData() {
  const lengthInput = document.getElementById('lengthInput').value;
  const checkBox = document.getElementsByClassName('CB');
  let anythingChecked = false;
  
  for (let x = 0; x <= 3; x++){
    if (checkBox[x].checked) {
      anythingChecked = true;
    }
  }
  if (lengthInput >= 8 && length <= 128 && anythingChecked) {
    const requirements = {
    length: lengthInput,
    lowercase: checkBox[0].checked,
    uppercase: checkBox[1].checked,
    specialChar: checkBox[2].checked,
    numeric: checkBox[3].checked
    };

    createPassword(requirements);
  } else {
    alert('Please choose a length between 8 and 128 Characters and specify Possible Values');
  }
}

// Generate possible Values from user requirements
function generateValues(requirements) {
  const lowercaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const specialChar = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
  const possibleValues = [];

 if (requirements.lowercase) {
   possibleValues.push(...lowercaseValues);
 };
 if (requirements.uppercase) {
   for (let x = 0; x < lowercaseValues.length; x++) {
     possibleValues.push(lowercaseValues[x].toUpperCase())
   }
 };
 if (requirements.specialChar) {
   possibleValues.push(...specialChar);
 };
 if (requirements.numeric) {
   for (let x = 0; x <= 9; x++) {
      possibleValues.push(x);
    }
 };
  return possibleValues;
};

// Get requirements from user, validate requirements, create
//    possible values and generate password.
function createPassword(requirements) {
  let password = "";
  const possibleValues = generateValues(requirements);
  for (let x = 0; x < requirements.length; x++) {
      const randNum = Math.round(Math.random() * (possibleValues.length - 1));
      password += possibleValues[randNum];
  };

  passwordText.value = password;
  modalBox.style.display = 'none';
};
