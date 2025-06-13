document.addEventListener('DOMContentLoaded', () => {
    const whiteoutOverlay = document.getElementById('whiteout-overlay');

    // ページが読み込まれたら、ホワイトアウトの幕から 'active' クラスを外す
    // これでCSSのアニメーション（フェードアウト）が始まるんだ
    whiteoutOverlay.classList.remove('active');

    // フェードアウトのアニメーションが終わるのを待ってから、完全に要素を隠す
    // CSSの transition: opacity 1.5s ease-out, visibility 0s 1.5s; に合わせる
    const fadeOutDuration = 500; // ミリ秒単位 (1.5秒)
    setTimeout(() => {
        // アニメーションが終わったら、要素を完全にDOMから削除するか、
        // display: none; にして、もう存在しないかのようにする
        // 今回はシンプルに display: none; にして、クリックなども防ぐ
        whiteoutOverlay.style.display = 'none';
        // あるいは
        // whiteoutOverlay.remove(); // 要素を完全に削除する場合
    }, fadeOutDuration);
});