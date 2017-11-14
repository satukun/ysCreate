# gulpパッケージ専用ディレクトリ
* [ディレクトリ構成](#dir)
* [ファイル説明](#file)

<a id="dir"></a>
### ■ディレクトリ構成
```
├── config.js
├── path.js
└── tasks
    ├── postcss.js
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

#### タスク別js一覧
| name | description |
|:-----------|:------------|
| postcss.js       | postcssでコンパイルを行い、postcss専用のstylintを行ってくれます。 |
| ejs.js       | ejsファイルのコンパイルを行ってくれます。 |
| lint.js       | html,jsのお作法チェックを行ってくれます。 |

#### 共通ブラグイン一覧
| name | description |
|:-----------|:------------|
| gulp       | postcssでコンパイルを行い、postcss専用のstylintを行ってくれます。 |
| fs       | ejsファイルのコンパイルを行ってくれます。 |
| path       | html,jsのお作法チェックを行ってくれます。 |
| del       | html,jsのお作法チェックを行ってくれます。 |
| gulp-plumber       | ejsファイルのコンパイルを行ってくれます。 |
| gulp-notify       | html,jsのお作法チェックを行ってくれます。 |
