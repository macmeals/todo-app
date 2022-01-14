import "./styles.css";

// Todo登録のボタン要素へアクセス
const todobtn = document.getElementById("todosubmit");
// Todo登録のテキストボックスの内容にアクセス
const todotask = document.getElementById("todotext");

// Todoリスト用要素へのアクセス
const todoList = document.getElementById("todolist");
// Todoリスト用の「　liタグ　」を追加
const listItem = document.createElement("li");

todobtn.addEventListener("click", (evt) => {
  //  テキストボックスの内容を変数に格納
  const texts = todotask.value;

  const showItem = todoList.appendChild(listItem);
  showItem.innerHTML = texts;

  // // テキストボックスの内容をコンソールログとして出力
  // console.log(texts);

  // 「登録」ボタンを押すとテキストボックスの中身を空にする
  todotask.value = "";
});
