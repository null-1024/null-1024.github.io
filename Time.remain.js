// https://zhuanlan.zhihu.com/p/59461859
const END = new Date("2022/12/24/,00:00:00");

window.onload = function () {
    countDown();

    function addZero(i) {
        return i < 10 ? "0" + i : i + "";
    }
    
    function countDown() {
        let now = new Date();
        let lefttime = parseInt((END.getTime() - now.getTime()) / 1000);
        let d = parseInt(lefttime / (24 * 60 * 60))
        let h = parseInt(lefttime / (60 * 60) % 24);
        let m = parseInt(lefttime / 60 % 60);
        let s = parseInt(lefttime % 60);
        d = addZero(d)
        h = addZero(h);
        m = addZero(m);
        s = addZero(s);
        document.querySelector(".remain").textContent = ` ${d}d ${h}h ${m}m ${s}s`;
        if (lefttime <= 0) {
            return;
        }
        setTimeout(countDown, 1000);
    }
}