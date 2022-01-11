import "./styles.css";

// ページ読み込み時にDOMを読み込ませる。（これがないとaddEventlistnerのIDが存在しない
window.addEventListener("DOMContentLoaded", function () {
  // task登録のボタンの要素へアクセス
  const todobtn = document.getElementById("todosubmit");

  // task登録のボタンをクリックしたら、テキストボックスの内容をコンソールログへ送る
  todobtn.addEventListener("click", () => {
    const todotask = document.getElementById("todotext");
    const texts = todotask.value;
    // テキストボックスの内容をコンソールログとして出力
    console.log(texts);
  });
});
