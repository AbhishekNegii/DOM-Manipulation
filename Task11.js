let obj={
    name : "Abhishek",
    email : "abhi@xyz"
   }

   console.log(typeof(obj))  // obj type : object
  
   let obj_str=JSON.stringify(obj) // stringify obj
    
   console.log(typeof( obj_str)) // obj type : string
   
   let obj_norm=JSON.parse(obj_str); // parse obj_str
   
   console.log(typeof(obj_norm)) // obj type : object
   
