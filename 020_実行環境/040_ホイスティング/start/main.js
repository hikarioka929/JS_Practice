a();

function a() {
    console.log(c);
    let c = 1;

    d();
    function d() {
        console.log('a is called');
    }
    console.log('d is called');
}


console.log(b);
let b = 0;