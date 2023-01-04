# TypeScript_1st

### TypeCsriptとは

JavaScriptに型を付けたもの = 静的型付き言語（厳格なルール）<br>
JacaScript = 動的型付き言語（緩いルール）<br>

TypeScriptはJavaScriptへコンパイルする必要がある。<br>

### 書き方

var list: String[] = [];<br>
let suuzi: Number = 1;<br>
const name: String = "プログラミング";<br>
ley array1 : Array<number> = [1, 2, 3, 4];<br>
// 上と同じで型宣言が違う書き方<br>
ley array1 : number[] = [1, 2, 3, 4];<br>

### TypeScriptを書くメリット

・コンパイル時に型エラーチェックできる。<br>
　この変数はString型しか入らないなど<br>
・型がついているから可読性UP<br>
・プログラムの処理速度が早い<br>

### 環境構築

1. プロジェクトディレクトリ内にpackage.jsonの作成<br>
` npm init -y `<br>

2. nodeのバージョンを確認し、TypeScriptのインストール<br>
` node -v `<br>
` npm i -D typescript ` もしくは ` npm i --save-dev typescript `<br>
インストールが完了すると<br>
・package.jsonにtypescriptのバージョンが記載される<br>
・node_modules/.binフォルダにtscファイルが作成される。<br>
  ` npx tsc -v `でtscのバージョンが確認できる<br>
・TypeScriptのファイル名.tsは下記のコマンドでコンパイルする。<br>
` npx tsc TypeScriptのファイル名.ts `<br>

3. Webpackとwebpack-cli（コマンドラインツール）とwebpack-dev-server（ローカルサーバーが立てられる）とts-loader（コンパイル時に読み込む）をインストールする<br>
` npm i -D webpack webpack-cli webpack-dev-server ts-loader `

4. webpack.config.jsを作成し環境を設定する。<br>
` touch webpack.config.js `<br>
webpack.config.jsを編集する編集（ソースを参照）<br>

5. TypeScriptの設定を決める環境設定をする。
` npx tsc --init `<br>
tsconfig.jsonファイルが作成されその中に設定を入力する。<br>
