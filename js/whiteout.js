document.addEventListener('DOMContentLoaded', () => {
    const nextPageButton = document.getElementById('nextPageButton');
    const whiteoutOverlay = document.getElementById('whiteout-overlay');

    nextPageButton.addEventListener('click', (event) => {
        // デフォルトのリンク遷移を一旦止める（もしボタンが<a>タグの場合）
        // event.preventDefault(); // もしボタンが<a>タグで、遷移を自分で制御したい場合に使う

        // ホワイトアウトの幕に 'active' クラスを追加して、アニメーションを開始
        whiteoutOverlay.classList.add('active');

        // ① ホワイトアウトのアニメーション（opacityが1になるまで）が終わるのを待つ
        // CSSの .active の transition が 'opacity 2s ease-in' なので、2秒待つ
        const fadeInDuration = 500; // ミリ秒単位 (2秒)

        setTimeout(() => {
            // ② 完全にホワイトアウトした後、少しだけ「間」を置く
            const holdDuration = 100; // ミリ秒単位 (0.5秒) - この時間を調整してね

            setTimeout(() => {
                // ③ その後、次のページへ移動する
                window.location.href = 'next-page.html'; // ここに移動先のURLを指定！
            }, holdDuration);

        }, fadeInDuration); // フェードインが完了するまで待つ
    });
});