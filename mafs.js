var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
return gcd(b, a % b);
};
console.log(gcd(1263262,553443));
//11
