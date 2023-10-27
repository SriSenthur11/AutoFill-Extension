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
    // const $a = document.querySelector("#customerTypeDropDown");
    // $a.id = "dxc-list-item-4";

    // const $b = document.querySelector('#customerSubTypeDropDown').querySelector('.dxc-list-item dxc-dd-header-truncate');
    // $b.id = "dxc-list-item-2";

    //document.getElementsByName("firstName").value = "senthur";
    //document.getElementsByClassName("dxc-input-wrapper dxc-input-wrapper-left fullwidth").value="Senthur";


    // Functions for Dynamic Data to be Autofilled
    function randomText(){
        //return Math.random().toString(97,122).substring(2,9);
        
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
    // document.getElementById("firstNameInputField").value = "Sri";
    // document.getElementById("middleNameInputField").value = "Senthur";
    // document.getElementById("lastNameInputField").value = "MD";
    // document.getElementById("phoneNumberInputField").value = "9876543210";
    // document.getElementById("emailAddressInputField").value = "srisenthur@amdocs.com";
    
    // using focus 
    // $firstIF = document.getElementById("firstNameInputField");
    // $firstIF.focus();

    var ev = new Event('change', {bubbles: true});

    var firstname = document.getElementById("firstNameInputField");
    firstname.value = randomText();
    firstname.dispatchEvent(ev);

    // document.getElementById("firstNameInputField").focus();
    // document.getElementById("firstNameInputField").value = randomText();

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

    // Hard Code Data
    // document.getElementById("addressLine1InputField").value = "10/469";
    // document.getElementById("addressLine2InputField").value = "Avinashi";    
    // document.getElementById("cityInputField").value = "Coimbatore";
    // document.getElementById("zipCodeInputField").value = "641654";

    // Dynamic Data
    // document.getElementById("addressLine1InputField").value = "10/469";
    // document.getElementById("addressLine2InputField").value = randomText();
    // document.getElementById("cityInputField").value = randomText();
    // document.getElementById("zipCodeInputField").value = randomNumber();

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