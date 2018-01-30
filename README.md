
## 現在の開発環境
### ■ディレクトリ構成
```
├── dist
│   ├── css
│   └── service
└── resource
    ├── css
    │   ├── foundation
    │   ├── layout
    │   └── object
    │       └── utility
    ├── images
    ├── js
    └── pug
        ├── _include
        │   ├── _component
        │   │   ├── _btn
        │   │   ├── _headding
        │   │   └── _textlink
        │   └── _project
        │       ├── _footer
        │       │   └── _model
        │       └── _header
        │           └── _model
        └── service
```

---

### ■開発タスクツール

`gulp`
`webpack`
`pug`
`postcss`

##### node ver
`v6.0.0`

##### gulp ver
* CLI version 3.9.1
* Local version 3.9.1

---

### ■gulpの使い方
``ターミナル``をまずは**起動**してください。
#### 起動方法
``gulp``
と入力しEnter

#### 納品データ作成方法
``gulp deploy``
と入力しEnter

---

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
