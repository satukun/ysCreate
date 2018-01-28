  var footer = [{
    'menu': [{
        'url': '/service/',
        'text': 'できること',
        'child': [{
            'url': '/service/ourstyle/',
            'text': '初めての方へ'
          },
          {
            'url': '/service/consultant/',
            'text': '成果が上がるWebコンサルティングを知りたい'
          },
          {
            'url': '/service/outsourcing/',
            'text': 'いますぐ適切な人材が欲しい'
          },
          {
            'url': '/service/development/',
            'text': '開発後の保守も気になる'
          },
          {
            'url': '/lp/haguruma/',
            'text': 'Webサイトで利益を上げたい'
          },
          {
            'url': '/lp/efo/',
            'text': 'エントリーフォーム最適化？'
          },
          {
            'url': '/lp/wss/',
            'text': 'Web運用を変えたい'
          },
          {
            'url': '/lp/intara_saru/',
            'text': 'インタラ部 始動！！'
          }
        ]
      },
      {
        'url': '/work/',
        'text': 'やったこと',
        'child': [{
            'url': '/work/#anc-app',
            'text': '自社サービス'
          },
          {
            'url': '/work/#anc-web',
            'text': '受託制作'
          },
          {
            'url': '/work/#anc-ojt',
            'text': 'OJT'
          }
        ]
      },
      {
        'url': '/ourinfo/',
        'text': 'わたしたちについて',
        'child': [{
            'url': '/ourinfo/#anc-summary',
            'text': '元気な会社の概要'
          },
          {
            'url': '/ourinfo/#anc-trading',
            'text': '主要取引先'
          },
          {
            'url': '/ourinfo/#anc-history',
            'text': '元気な会社のなりたち'
          },
          {
            'url': '/ourinfo/#anc-message',
            'text': '経営者からのメッセージ'
          },
          {
            'url': '/ourinfo/#anc-whatil',
            'text': 'インターリンクとは？'
          }
        ]
      },
      {
        'url': '/contact/',
        'text': 'お問い合わせ'
      }
    ],
    'notice': [{
        'url': '/privacy.html',
        'text': '情報セキュリティ基本方針'
      },
      {
        'url': '/application_policy.html',
        'text': '利用規約'
      },
      {
        'url': '/specified.html',
        'text': '特定商取引に基づく表示'
      },
      {
        'url': '/sitemap.html',
        'text': 'サイトマップ'
      }
    ]
  }]
footer.forEach(function(value){
  for (key in value) {
    console.log(key);
    value[key].forEach(function(s,i){
      console.log(s,i);
    });
  };
});