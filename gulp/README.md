# gulpパッケージ専用ディレクトリ
* [ディレクトリ構成](#dir)
* [ファイル説明](#file)

<a id="dir"></a>
### ■ディレクトリ構成
```
├── config.js
├── path.js
└── tasks
    ├── css.js
    ├── ejs.js
    ├── lint.js
    └── min.js
```
---

<a id="file"></a>
### ■ファイル説明

| name | description |
|:-----------|:------------|
| path.js  | 開発ディレクトリ内のパス関連の設定を行っています。 |

#### タスク別jsファイル
| name | description |
|:-----------|:------------|
| css.js       | sassやpostcssなどで記述されているスタイルなどのコンパイルを行ってくれます。 |
| ejs.js       | ejsファイルのコンパイルを行ってくれます。 |
| lint.js       | html,css,jsのお作法チェックを行ってくれます。 |
| min.js       | html,css,jsのコード圧縮を行ってくれます。 |
