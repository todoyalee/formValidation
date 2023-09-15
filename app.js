const nameElem=document.getElementById('name') ;
const emailElem=document.getElementById('email') ;
const passwordElem=document.getElementById('password') ;
const CpasswordElem=document.getElementById('confirm-password') ;
const termsElem=document.getElementById('terms') ;
const form=document.getElementById('form') ;

form.addEventListener('submit', handleForm) ;

function handleForm(event){
    event.preventDefault() ;
    verifyInputs() ;
}


function verifyInputs(){
    //get the user inputted values
    const name=nameElem.value.trim() ;  // trim is used to remove whiteSpaces from both ends(if user enters them) ;
    const email=emailElem.value.trim() ;
    const password=passwordElem.value.trim() ;
    const Cpassword=CpasswordElem.value.trim() ;

    if(name === ''){
        //display error and error class
        dealErrorFor(nameElem,'name cannot be empty') ;
    }else {
        //add success class
        dealSuccessFor(nameElem) ;
    }
    if(email === '') {
        dealErrorFor(emailElem,'email cannot be empty') ;
    }else if(!checkEmail(email)){
        dealErrorFor(emailElem,'email is not valid') ;
    }
    else {
        dealSuccessFor(emailElem) ;
    } 

    if(password === ''){
        dealErrorFor(passwordElem,'password cannot be empty') ;
    }else { 
        dealSuccessFor(passwordElem) ;
    }


    if(Cpassword === '') {
        dealErrorFor(CpasswordElem,'Confirm password is required') ;
    }else if (password !== Cpassword){
            dealErrorFor(Cpassword,'password didint match ') ;
    }else {
        dealSuccessFor(CpasswordElem) ;
    }

    if(!terms.checked){
        document.querySelector('.tNc').style.color='red' ;
    }else {
        document.querySelector('.tNc').style.color='black' ;
    }


    function dealErrorFor(element,message) {
        const row=element.parentElement;
        const small=row.querySelector('small') ;

        row.className='row error ' ;
        small.innerText=message  ;
    }

    function dealSuccessFor(input) {
        const row= input.parentElement;
        row.className='row success' ;

    }

    function checkEmail(email){
        const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        return regex.test(email ) ;
    }
}