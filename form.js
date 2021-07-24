//each poster will have an add item button. click on button and will show you
//the shoping list - you can click on check out or update list or return
//if choose check out will prompt you to the log in screen/ shows option button create account

//if choose create account will shows you the create acdcount form
//once form is complete will shows you my account screen . will have 3 optionjs
//1- log out  2- view address button 3- manage suscriptions
//if choose view adddress  select button  add new adress 
//FIRST NAME AST NAME COMPANY ADDRESS1 ADDRESS2 CITY COUNTRY POSTAL/ZIP CODE PHONE
//once complete press set as a default address check box
//click on add address button or cancel



//make 2 components
 // a- create account - once account is complete, customer cwill prompt to shopping cart.



const inputNombre = document.querySelector ("#nombre") ;
const inputApellido = document.querySelector ("#apellido") ;
const inputEmail = document.querySelector ("#email") ;
const inputContraseña = document.querySelector ("#contraseña") ;
const inputConfirmarContraseña = document.querySelector ("confirme-contraseña") ;
const inputButton = document.querySelector ("#create") ;

const createAccountButton = () =>{

    if ( inputNombre.value === "" ||
        inputApellido.value ==="" ||
        inputEmail.value === "" ||
        inputContraseña.value === "" ||
        inputConfirmarContraseña.value ===""){
            alert('Porfavor complete todos los campos') ; 
          return  ;
    }
        if (inputContraseña.value !== inputConfirmarContraseña.value) {
              alert ('las contraseñas no coinciden') 
              return  ;
        }

             alert('te damos la bienvenida') ;
    }

             inputButton.addEventListener("click", createAccountButton);

        
    


//b- shopping cart