# 目次
* [***現在の開発環境***](#head_dev)
  * [開発ディレクトリ](#dirctory)
  * [開発タスクツール](#tasktool)
  * [gulpの使い方](#gulp)
  * [各種ファイル紹介](#file)

<a id="head_dev"></a>
## 現在の開発環境

<a id="dirctory"></a>
### ■ディレクトリ構成
```
├── app // 開発専用ディレクトリ
│ │
│ ├── basetemplate //ページテンプレートディレクトリ
│ │   ├── dest //出力ディレクトリ
│ │   └── resource //開発ディレクトリ
│ │
│ └── case_one //プロジェクト専用ディレクトリ
│     ├── dest //出力ディレクトリ
│     └── resource //開発ディレクトリ
│
├── gulp // gulpパッケージ専用ディレクトリ
│
├── .editorconfig
├── .csslintrc
├── .eslintrc
├── .htmlhintrc
├── .gitignore
├── gulpfile.js
├── csscomb.json
└── tsconfig.json
```

---


<a id="tasktool"></a>
### ■開発タスクツール

`gulp`
`ejs`
`scss`

##### node ver
`v6.0.0`

##### gulp ver
* CLI version 3.9.1
* Local version 3.9.1

---

<a id="gulp"></a>
### ■gulpの使い方
``ターミナル``をまずは**起動**してください。
#### 起動方法
``gulp``
と入力しEnter

#### 納品データ作成方法
``gulp deploy``
と入力しEnter

---

<a id="file"></a>

#### 各種ファイル紹介

| name | description |
|:-----------|:------------|
| gulpfile.js       | postcssでコンパイルを行い、postcss専用のstylintを行ってくれます。 |
| .csslintrc       | postcssでコンパイルを行い、postcss専用のstylintを行ってくれます。 |
| .editorconfig       | ejsファイルのコンパイルを行ってくれます。 |
| .eslintrc       | html,jsのお作法チェックを行ってくれます。 |
| .htmlhintrc       | html,jsのお作法チェックを行ってくれます。 |
| .stylelintrc       | ejsファイルのコンパイルを行ってくれます。 |
| .sass-lint.yml       | html,jsのお作法チェックを行ってくれます。 |
| csscomb.json       | html,jsのお作法チェックを行ってくれます。 |
| project.json       | html,jsのお作法チェックを行ってくれます。 |
| tsconfig.json       | html,jsのお作法チェックを行ってくれます。 |
