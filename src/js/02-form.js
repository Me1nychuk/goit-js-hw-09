const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input');
const inputText = form.querySelector('textarea');

const currentObj = {
    email:'',
    message:'',
} 
let obj = '';
const localStorageKey = "feedback-form-state";
obj = localStorage.getItem(localStorageKey) ?? "";
if (obj !== "") {
    currentObj.email = JSON.parse(obj).email;
     currentObj.message = JSON.parse(obj).message;
    inputEmail.value = currentObj.email;
    inputText.value = currentObj.message;
}

const upLoadNewDate = (event) => {
    const target = event.target;
    if (target === inputEmail) {
        currentObj.email = target.value;
    } else if(target === inputText) {
         currentObj.message = target.value;
    }
    obj = JSON.stringify(currentObj);
    localStorage.setItem(localStorageKey,obj)
};
form.addEventListener('input',upLoadNewDate)


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
   form.reset();
})
