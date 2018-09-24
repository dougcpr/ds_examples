function showName (firstName, lastName) {
    let nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​

    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName ();
} 

console.log(showName('Michael', 'Jackson'));