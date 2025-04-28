function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}





// By this way we can export the function
// module.exports= add;  /// do bar export kiya isliye "add" function override ho gya "sub" se
// module.exports= sub;

// to overcome from this issue we have to put it inside the object

// module.exports = {
//     addFn :add,
//     subFn :sub,
// }


/// Another method to export the function

exports.add=(a, b) => a+b;
exports.sub=(a,b) => a-b;

// module.exports use ek hi bar karna hta hai...dubara use krnge to override kar dega export kro.
///  exports.functionName use krne pe koi dikkt nhi jita marzi utna use export kro

