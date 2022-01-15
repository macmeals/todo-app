import "./styles.css";

// Todo登録のボタン要素へアクセス
const todobtn = document.getElementById("todosubmit");
// Todo登録のテキストボックスの内容にアクセス
const todotask = document.getElementById("todotext");

// Todoリスト用要素へのアクセス
const todoList = document.getElementById("todolist");
// Todoリスト用の「　liタグ　」を追加
const listItem = document.createElement("li");

todobtn.addEventListener("click", () => {
  //  Todoリストの子要素のLi要素を追加
  const showItem = todoList.appendChild(listItem);
  //  テキストボックスの内容を変数に格納
  const texts = todotask.value;
  //  テキストボックスの内容をli要素を格納
  showItem.innerHTML = texts;

  //  作成したli要素（Todoリスト）を複製
  const clonelist = showItem.cloneNode(true);
  //  複製したli要素（Todoリスト）を親要素の一番下に追加
  document.body.appendChild(clonelist);
  //  親要素todolistの一番最初の子要素のli要素（Todoリスト）を削除
  todoList.removeChild(listItem);

  // 「登録」ボタンを押すとテキストボックスの中身を空にする
  todotask.value = "";
});
