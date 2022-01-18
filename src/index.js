import "./styles.css";

// Todo登録のボタン要素へアクセス
const todobtn = document.getElementById("todosubmit");
// Todo登録のテキストボックスの内容にアクセス
const todotask = document.getElementById("todotext");

// Todoリスト用要素へのアクセス
const todoList = document.getElementById("todolist");

todobtn.addEventListener("click", () => {
  // ・・・・・・・・・・・・・・Todoリスト　作成・・・・・・・・・・・・・・・・・・・・・・
  // Todoリスト用の「　liタグ　」を追加
  const listItem = document.createElement("li");
  //  Todoリストの子要素のLi要素を追加
  const showItem = todoList.appendChild(listItem);
  //  テキストボックスの内容を変数に格納
  const texts = todotask.value;
  //  テキストボックスの内容をli要素を格納
  showItem.innerHTML = texts;
  // 「登録」ボタンを押すとテキストボックスの中身を空にする
  todotask.value = "";

  // ・・・・・・・・・・・・・・Todoリストの完了ボタン作成・・・・・・・・・・・・・・・・・・・・・・
  // 完了ボタン用の「　buttonタグ　」を追加
  const compbtn = document.createElement("button");
  // TodoリストのLiタグの子要素としてbuttonタグを追加
  const showcompbtn = listItem.appendChild(compbtn);
  //  button要素のラベルを追加
  showcompbtn.innerText = "完了";

  // ・・・・・・・・・・・・・・Todoリストの完了ボタンを押すと取り消し線・・・・・・・・・・・・・・・・・・・・・・
  compbtn.addEventListener("click", () => {
    // Button要素の親要素（liタグ）を取得
    const complist = compbtn.closest("li");
    // Button要素の親要素（liタグ）に横線のCSSを付与
    complist.classList.add("yokosen");
  });

  // ・・・・・・・・・・・・・・Todoリストの削除ボタン作成・・・・・・・・・・・・・・・・・・・・・・
  // 削除ボタン用の「　buttonタグ　」を追加
  const deletebtn = document.createElement("button"); // TodoリストのLiタグの子要素としてbuttonタグを追加
  // Liタグの子要素に追加
  const showdeletebtn = listItem.appendChild(deletebtn);
  //  button要素のラベルを追加
  showdeletebtn.innerHTML = "削除";

  // ・・・・・・・・・・・・・・Todoリストの削除ボタンを押すとタスクを削除・・・・・・・・・・・・・・・・・・・・・・
  deletebtn.addEventListener("click", () => {
    // Button要素の親要素（liタグ）を取得
    const deletelist = deletebtn.closest("li");
    // Button要素の親要素（liタグ）を削除
    deletelist.remove();
  });
});

// （参照）　リストを追加する場合、croneNodeを使う場合でも対応可能。
// //  作成したli要素（Todoリスト）を複製
// const clonelist = showItem.cloneNode(true);
// //  複製したli要素（Todoリスト）を親要素の一番下に追加
// document.body.appendChild(clonelist);
// //  親要素todolistの一番最初の子要素のli要素（Todoリスト）を削除
// todoList.removeChild(listItem);
