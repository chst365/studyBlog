var checkValidString = function (s) {
    const n = s.length;
    let l = 0, r = 0;
    for (let i = 0; i < n; i++) {
        l += s[i] === ')' ? -1 : 1;
        r += s[n - i - 1] === '(' ? -1 : 1;
        if (l < 0 || r < 0) return false;
    }
    return true;
};
console.time();
console.log(mergeTwoLists(30));
console.timeEnd();