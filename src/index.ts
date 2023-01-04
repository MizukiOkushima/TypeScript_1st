import SaySomething from "./saySomething";

// index.html内のdivタグ（#root）を使う
const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new SaySomething("Hello Typescript");

// sayTextメソッドを使う
saySomething.sayText(root);