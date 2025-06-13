console.log("script.jsが読み込まれました！");
const omikujibtn = document.getElementById("nextPageButton");
const omikujidata = [
    { name: "大吉", htmlFile: "/TEST/omikuji/daikiti1.html" },
    { name: "大凶", htmlFile: "/TEST/omikuji/daikyo1.html" },
    { name: "大吉", htmlFile: "/TEST/omikuji/daikiti2.html" },
    { name: "大凶", htmlFile: "/TEST/omikuji/daikyo2.html" },
    { name: "大吉", htmlFile: "/TEST/omikuji/daikiti3.html" },
    { name: "大凶", htmlFile: "/TEST/omikuji/daikyo3.html" },
    { name: "大吉", htmlFile: "/TEST/omikuji/daikiti4.html" },
    { name: "大吉", htmlFile: "/TEST/omikuji/daikiti5.html" },
    { name: "大凶", htmlFile: "/TEST/omikuji/daikyo4.html" },
    { name: "大凶", htmlFile: "/TEST/omikuji/daikyo5.html" },
    { name: "大吉", htmlFile: "/TEST/omikuji/daikiti6.html" }
];

function drawomikuji(){
    const random = Math.floor(Math.random() * omikujidata.length); // omikujiresultではなくomikujidataの長さを参照
    const resultData = omikujidata[random];
    console.log("おみくじは" + resultData.name + "でした");
    const whiteoutOverlay = document.getElementById('whiteout-overlay'); // HTMLにこの要素があることを前提
    const fadeInDuration = 2000; // フェードイン時間（CSSと合わせる）
    const holdDuration = 500;   // ホワイトアウト後の保持時間
    whiteoutOverlay.classList.add('active'); // ホワイトアウト開始
    setTimeout(() => {
        setTimeout(() => {
            window.location.href = resultData.htmlFile; // ページ遷移！
        }, holdDuration);
    }, fadeInDuration);
}
omikujibtn.addEventListener("click", drawomikuji);
