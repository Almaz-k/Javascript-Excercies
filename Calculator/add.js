export function add(a, b){
    if (isNaN(a) || isNaN(b)){//validating the number
        return;
    }
    return a + b;
}