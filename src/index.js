import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// ページ読み込み時にDOMを読み込ませる。（これがないとaddEventlistnerのIDが存在しない
window.onload = function () {
  // task登録のボタンの要素へアクセス
  const todobtn = document.getElementById("todosubmit");

  // task登録のボタンをクリックしたら、テキストボックスの内容をコンソールログへ送る
  todobtn.addEventListener("click", () => {
    const todotask = document.getElementById("todotext");
    const texts = todotask.value;
    // テキストボックスの内容をコンソールログとして出力
    console.log(texts);
  });
};
