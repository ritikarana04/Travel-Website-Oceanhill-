function validateform(){  
var fname=document.signup.fname.value;  
var email=document.signup.email.value;  
var contact=document.signup.contact.value;  
var address=document.signup.address.value;  
var zcode=document.signup.code.value;

if (fname==null || fname==""){  
  alert("Name can't be blank");  
  return false;  
}
else if(email==null || email==""){  
  alert("Email can't be blank");  
  return false;  
  } 
 else if(contact.length=10){  
  alert("Cotact must be at least 10 digit long.");  
  return false;  
  }
else if(address==null || address==""){  
  alert("Address can't be blank");  
  return false;  
  }
else if(zcode==null || zcode==""){  
  alert("Zip Code can't be blank");  
  return false;  
  }
 
  alert("Form Submitted Successfully"); 
}   