function sorted(a) {
    for (let i = 1; i < arr.length; i++) {
        if (a[i] < a[i - 1]) return 0;
        return 1;
    }
}
let arr = [6, 3, 5, 8, 9, 11]
console.log(sorted(arr))