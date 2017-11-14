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
├── gulpfile.js
├── .editorconfig
├── .csslintrc
├── .eslintrc
├── .htmlhintrc
├── .stylelintrc
├── .sass-lint.yml
├── .gitignore
├── csscomb.json
└── project.json
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

### ■各種ファイル紹介

| name | description |
|:-----------|:------------|
| gulpfile.js       | gulpの起動ファイル |
| .csslintrc       | cssお作法ルールの外部ファイル |
| .eslintrc       | jsお作法ルールの外部ファイル |
| .htmlhintrc       | htmlお作法ルールの外部ファイル |
| .stylelintrc       | postcssお作法ルールの外部ファイル |
| .sass-lint.yml       | scssお作法ルールの外部ファイル |
| csscomb.json       | cssプロパティの並び替えルールの外部ファイル |
| project.json       | gulpの対象ディレクトリ管理専用ファイル |
| .editorconfig       | コードの統一ルールのフォーマット |
