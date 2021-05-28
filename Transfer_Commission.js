 function commission(transCom){
    if (transCom === null || transCom === undefined) {
        console.log("KIndly input a valid amount")
    }
    else if ( transCom < 1 ){
        console.log("too low to transfer")
    }
    else if(isNaN(transCom)){
        console.log("kindly input a number") 
    }
    else{
        if (transCom == 1 && transCom <= 5000) {
            console.log("your Transfer Commission is "+ "₦10.00")
        } 
        else if( transCom >=5001 && transCom <= 50000){
            console.log("your Transfer Commission is " +"₦25.00")
    
        } 
        else if(transCom >50000){
            console.log("your Transfer Commission is " + "₦50.00")
        }
        else{
            console.log("input a number")
    
        } 
    }

    }



    //if (transCom < 1 && transCom == ""){
    //    console.log("NOPE")
    //    return;
    //}
    

    

commission(5004);
commission();
commission("");
commission("abc");
commission(500000);
