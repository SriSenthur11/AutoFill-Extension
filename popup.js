const autofillButton = document.getElementById('auto-fill');

autofillButton.addEventListener('click', (event) => {
    const autoFilling = event.target.value;

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id},
            args: [autoFilling],
            func : Autof
        });
    });
});

function Autof(autoFilling){

    // Functions for Dynamic Data to be Autofilled
    function randomText(){
        
        let length = 10; 
        const characters = 'abcdefghijklmnopqrstuvwxyz'; 
        let result = ''; 
        for(let i = 0; i < length; i++) { 
            result +=  characters.charAt(Math.floor(Math.random() * characters.length)); 
        } 
        return result;    
    }

    function randomNumber(){
        return Math.floor(Math.random() * 1000000000) + 9000000000;
    }

    function randomZip(){
        return Math.floor(Math.random() * 100000) + 600000;
    }


    //Contact Details
    var ev = new Event('change', {bubbles: true});

    var firstname = document.getElementById("firstNameInputField");
    firstname.value = randomText();
    firstname.dispatchEvent(ev);

    var middlename = document.getElementById("middleNameInputField");
    middlename.value = randomText();
    middlename.dispatchEvent(ev);

    var lastname = document.getElementById("lastNameInputField");
    lastname.value = randomText();
    lastname.dispatchEvent(ev);

    var phonenumber = document.getElementById("phoneNumberInputField");
    phonenumber.value = randomNumber();
    phonenumber.dispatchEvent(ev);

    var emailaddress = document.getElementById("emailAddressInputField");
    emailaddress.value = randomText() + '@amdocs.com';
    emailaddress.dispatchEvent(ev);


    // Personal ID Details
    var documentId = document.getElementById("DocumentIDInputField");
    documentId.value = Math.random().toString(32).substring(2,9);;
    documentId.dispatchEvent(ev);


    // Address Details
    var addressLine1 = document.getElementById("addressLine1InputField");
    addressLine1.value = randomText();
    addressLine1.dispatchEvent(ev);

    var addressLine2 = document.getElementById("addressLine2InputField");
    addressLine2.value = randomText();
    addressLine2.dispatchEvent(ev);

    var city = document.getElementById("cityInputField");
    city.value = randomNumber();
    city.dispatchEvent(ev);

    var zipCode = document.getElementById("zipCodeInputField");
    zipCode.value = randomZip();
    zipCode.dispatchEvent(ev);

}
