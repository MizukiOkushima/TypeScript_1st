export default class SaySomething {
  message: string;

  // 初期化 コンストラクタ
  constructor(message: string) {
    this.message = message
  }

  public sayText(elem: HTMLElement | null) {
    // もしelemが存在するなら実行する
    if (elem) {
      elem.innerText = this.message
    }
  }
}