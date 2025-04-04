// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //name IIFE
    console.log(`DB CONNECTED`);
    
})();


( (name) => {
    //simple IIFe
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('hitsh')