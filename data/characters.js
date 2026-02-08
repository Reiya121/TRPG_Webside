// Character Database
const characters = [
  {
    id: "char01",
    name: "アレックス・ハンター",
    nameEn: "Alex Hunter",
    birthDate: "1994年3月15日",
    age: 32,
    height: "185cm",
    weight: "82kg",
    bloodType: "O型",
    role: "タクティカルリーダー",
    organization: "ネクサス特殊部隊",
    publicFace: "民間セキュリティ企業CEO",
    belief: "秩序と正義の維持",
    artist: "AI Character Studio",
    description: "ネクサス特殊部隊のエリート隊長。数々の困難なミッションを成功に導いてきた経験豊富な戦術家。冷静な判断力と卓越したリーダーシップで部隊を統率する。サイバネティック強化を施した戦術ヘッドセットにより、戦場の全体像をリアルタイムで把握できる。",
    abilities: [
      { name: "戦術指揮", description: "チーム全体の行動を統制し、最適な戦術を立案・実行する能力。複数の部隊を同時に指揮可能。" },
      { name: "リアルタイム戦況分析", description: "AI搭載ヘッドセットにより、戦場の情報をリアルタイムで処理・分析し、最適な判断を下す。" },
      { name: "チームコーディネーション", description: "部隊メンバー間の連携を最大化し、シナジー効果を生み出す。通信システムを駆使した指示伝達。" },
      { name: "危機管理判断", description: "予測不可能な状況下でも冷静さを保ち、最善の判断を下す能力。数々の修羅場を経験した直感。" }
    ],
    weapons: [
      { name: "カスタムアサルトライフル（HK416改造型）", description: "精密射撃と連射性を両立させたカスタム改造型。光学サイトと戦術ライトを装備。" },
      { name: "戦術ナイフ", description: "緊急時の接近戦用武器。多機能デザインで、様々な状況に対応。" },
      { name: "ハンドグレネード", description: "非致命的な閃光弾と音響弾を装備。敵の制圧と味方の撤退をサポート。" }
    ],
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-1_1770551696000_na1fn_Y2hhcjAxLXRhY3RpY2FsLWxlYWRlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTFfMTc3MDU1MTY5NjAwMF9uYTFmbl9ZMmhoY2pBMExYUmxZMmd0YW1GamEyVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tQZZoLdEI9~pQa3WZp6FVbsV~OzJQgKYGsd7RckbOIycZKOjzIC8ZNebq9YEK7s6W3mjdFj-jRY3k3vk2LhPbWgSqHF~A6A63AaVkEXCCkIvzv-v9j9josoQ85n-BRceoFRqbw19oT9Fu9ar2EVZq0vIxM550zqCYK4Yj5BiGUWzP7vSWoH1CrDZg3CABB-9qFaYnmAcdGpg4Vvzu3fvMQJfI-VzMgK5mkev6emCnaXtrhP0UsI25gDXgYdP6tpM6FtVrUgNARkz~ccDVbe4eTtAzz23vAl6Vz-pUV56eedXN3bWNSPIfByM6~e~ySYrSPKtrdNF6cvVLK-YEsfHHQ__"
  },
  {
    id: "char02",
    name: "シャドウ・ナイト",
    nameEn: "Shadow Knight",
    birthDate: "1998年7月22日",
    age: 28,
    height: "172cm",
    weight: "61kg",
    bloodType: "B型",
    role: "ステルスオペレーター",
    organization: "シャドウシンジケート",
    publicFace: "フリーランス暗殺者",
    belief: "完全な沈黙と影の中での行動",
    artist: "AI Character Studio",
    description: "完全ステルス装備を身にまとった謎の暗殺者。光学迷彩スーツにより、姿を消して敵陣に潜入する。赤外線対策も施された装備で、あらゆる検出システムを回避できる。その正体は謎に包まれており、何者も彼女の素顔を知らない。",
    abilities: [
      { name: "完全ステルス移動", description: "光学迷彩スーツを駆使し、完全に姿を消して移動する。赤外線検出も回避可能。" },
      { name: "暗殺技術", description: "標的を確実に排除する暗殺技術。痕跡を残さない完璧な工作が得意。" },
      { name: "侵入・脱出", description: "あらゆるセキュリティを回避して侵入し、確実に脱出する能力。" },
      { name: "毒物操作", description: "様々な毒性物質を使いこなし、痕跡を残さない工作を実行。" }
    ],
    weapons: [
      { name: "光学迷彩スーツ", description: "最新のサイバネティック技術を用いた完全ステルス装備。赤外線対策も施されている。" },
      { name: "毒性物質キット", description: "様々な毒性物質を含むキット。痕跡を残さない工作に使用。" },
      { name: "サイレンサー付きピストル", description: "音を出さない精密射撃用ピストル。近距離での確実な排除に使用。" }
    ],
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-2_1770551696000_na1fn_Y2hhcjAyLXN0ZWFsdGgtb3BlcmF0aXZl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTJfMTc3MDU1MTY5NjAwMF9uYTFmbl9ZMmhoY2pBMlN5MXlZVzl2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K7p1cjlRfXhCQQYvlL8Eo~Tz5VPBqMFhCJqM6xZDJPKJe6nGYGm8YEKqwjQvPXIECOcvCRhJLbULmLXVqLvhVzrILZmVMhxJPVHDvXQvKIvzv-v9j9josoQ85n-BRceoFRqbw19oT9Fu9ar2EVZq0vIxM550zqCYK4Yj5BiGUWzP7vSWoH1CrDZg3CABB-9qFaYnmAcdGpg4Vvzu3fvMQJfI-VzMgK5mkev6emCnaXtrhP0UsI25gDXgYdP6tpM6FtVrUgNARkz~ccDVbe4eTtAzz23vAl6Vz-pUV56eedXN3bWNSPIfByM6~e~ySYrSPKtrdNF6cvVLK-YEsfHHQ__"
  },
  {
    id: "char03",
    name: "ブルート・アイアン",
    nameEn: "Brute Iron",
    birthDate: "1989年11月5日",
    age: 37,
    height: "195cm",
    weight: "105kg",
    bloodType: "O型",
    role: "ヘビーガンナー",
    organization: "アイアンフォース傭兵団",
    publicFace: "建設機械オペレーター",
    belief: "力こそが全て",
    artist: "AI Character Studio",
    description: "圧倒的な火力と防御力を備えた重装甲兵。超重量のミニガンを片手で操り、敵陣を蹂躙する。サイバネティック強化により、通常の人間では扱えない重火器を自在に操ることができる。その怪力と防御力は、戦場で敵に恐怖を与える。",
    abilities: [
      { name: "超重火器操作", description: "通常では扱えない超重量のミニガンを片手で操る。連続射撃で敵陣を制圧。" },
      { name: "防御強化", description: "サイバネティック強化により、通常の銃火では傷つかない強化装甲を装備。" },
      { name: "怪力", description: "サイバネティック強化により、通常の人間の数倍の力を発揮。重い物体も軽々と扱える。" },
      { name: "前線制圧", description: "敵陣の最前線に突進し、力ずくで敵を制圧する。味方の進撃をサポート。" }
    ],
    weapons: [
      { name: "ミニガン（カスタム超重量型）", description: "通常のミニガンを大幅に改造した超重量型。1秒間に数百発の弾丸を発射可能。" },
      { name: "強化装甲スーツ", description: "サイバネティック技術により強化された装甲。通常の銃火では傷つかない。" },
      { name: "ハンマー", description: "近距離での制圧用ハンマー。敵の装甲を破壊する威力を持つ。" }
    ],
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-3_1770551696000_na1fn_Y2hhcjAzLWhlYXZ5LWd1bm5lcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTNfMTc3MDU1MTY5NjAwMF9uYTFmbl9ZMmhoY2pBM1l5MXlZVzl2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nWTa6HqN0FkB65OCG6hgZia3pN-WnKTEjclJJc4s9argv9dcIZVm8zm6fwv3Zkb-zvAvTERmMy5sjZRkmPSlvnsuKI2OxidxQRXbEc3Rw4oaYJ4tOgb2K~Rw4w3g2CUCq6SSccZBLDbJQuLgSE9kYE9hk3C~u8x9wmXNFuUj2Wogdc1rBx7X-apleclFv7WQKofMEVrDii2rs79N~AwnN-40S0cI90GQoHYz~ef~OLaoh4vwZEDMpA~EtDxIJ0WXyoS~1wvoN0NQMwvQODCj8jr1-hE9-knPWSXsnaMU3VNNOJ1Y7mHwbfl4kihKKQo2TQYxA5Mq2E9PKVmWriGKXQ__"
  },
  {
    id: "char04",
    name: "リナ・コード",
    nameEn: "Lina Code",
    birthDate: "2001年5月10日",
    age: 25,
    height: "162cm",
    weight: "48kg",
    bloodType: "A型",
    role: "テックハッカー",
    organization: "サイバーレジスタンス",
    publicFace: "IT企業プログラマー",
    belief: "情報の自由と民主化",
    artist: "AI Character Studio",
    description: "天才的なハッキング能力を持つサイバー戦のスペシャリスト。あらゆるセキュリティシステムを突破し、敵のネットワークを掌握する。ホログラフィックインターフェースを駆使し、デジタル空間を自在に操る。反骨精神に満ちた彼女の行動は、常に権力への挑戦である。",
    abilities: [
      { name: "システムハッキング", description: "あらゆるセキュリティシステムを突破し、システムへのアクセス権を獲得する。" },
      { name: "ネットワーク侵入", description: "敵のネットワークに侵入し、情報を盗み出したり、システムを制御する。" },
      { name: "ホログラム操作", description: "ホログラフィックインターフェースを駆使し、デジタル空間を自在に操る。" },
      { name: "AI制御", description: "高度なAIシステムを制御し、自分の味方につける。" }
    ],
    weapons: [
      { name: "ホログラフィックインターフェース", description: "空中に立体映像を投影し、複雑な操作を直感的に行える。" },
      { name: "ポータブルハッキングデバイス", description: "携帯可能な高度なハッキング機器。どこからでもシステムへのアクセスが可能。" },
      { name: "EMP発生装置", description: "電磁パルスを発生させ、電子機器を一時的に無力化する。" }
    ],
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/M8tJEfcChPARqQYTH3H9U1-img-4_1770537200000_na1fn_Y2hhcjA0LXRlY2gtaGFja2Vy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94L004dEpFZmNDaFBBUnFRWVRIM0g5VTEtaW1nLTRfMTc3MDUzNzIwMDAwMF9uYTFmbl9ZMmhoY2pBMExYUmxZMmd0YUdGamEyVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WKeQvcgeRgf67m-yZQl1e6bdFc1c5O~ghz9XZBieKl9B03iZHePSzflQDVFT-zNWX7uq-igRKwSvS0UxdKR0H42tGJNg-WFvsGHY2gTR8ReSngXezTz~iB6bRF9W9y3Kl68A5vTsrBzC9747Qe~e2Fr1wsPIL4ekxENJmjoMS-CloIEx-aLzv3ymcSGk8CijkQbus8o7dPcjaHCV7D4lVAHD~e1qypnIYaJ31zRaQP6QprvJROw9XCpO2Annn5c83jNB3gg6IY0vxDzsq7KuOqHX5EBkZ9AzwmUyFuE1VtWcuH99oh~eoP~Zq7~qfF5K0xho3Ner93EYxsnZtonLJQ__"
  },
  {
    id: "char05",
    name: "ダミアン・ゴースト",
    nameEn: "Damian Ghost",
    birthDate: "1991年1月30日",
    age: 35,
    height: "180cm",
    weight: "76kg",
    bloodType: "O型",
    role: "スナイパー偵察兵",
    organization: "ゴーストリコン部隊",
    publicFace: "野生動物写真家",
    belief: "完璧な任務遂行",
    artist: "AI Character Studio",
    description: "超長距離からの精密射撃を得意とする孤高のスナイパー。高度なターゲティングシステムを搭載したスコープバイザーにより、数キロ先の標的も正確に捉える。忍耐強く冷静な性格で、完璧なタイミングを待ち続けることができる。",
    abilities: [
      { name: "超長距離狙撃", description: "数キロ先の標的を正確に狙撃する。風速や気温の変化も計算に入れる。" },
      { name: "偵察・監視", description: "長時間の潜伏と監視を行い、敵の動きを把握する。忍耐力が極めて高い。" },
      { name: "ターゲット追跡", description: "複雑な地形でも標的を見失わず、追跡し続ける能力。" },
      { name: "環境適応", description: "あらゆる環境に適応し、その中で最大限の力を発揮する。" }
    ],
    weapons: [
      { name: "カスタムスナイパーライフル（エネルギーコア搭載）", description: "超長距離狙撃用のカスタムライフル。エネルギーコアにより、無限の弾薬供給が可能。" },
      { name: "ターゲティングスコープバイザー", description: "高度なAI搭載スコープ。風速、気温、距離を自動計算し、最適な狙撃角度を提示。" },
      { name: "戦術ナイフ", description: "近距離での防衛用ナイフ。緊急時の武器として常時携帯。" }
    ],
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/M8tJEfcChPARqQYTH3H9U1-img-5_1770537198000_na1fn_Y2hhcjA1LXNuaXBlci1yZWNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94L004dEpFZmNDaFBBUnFRWVRIM0g5VTEtaW1nLTVfMTc3MDUzNzE5ODAwMF9uYTFmbl9ZMmhoY2pBMUxYTnVhWEJsY2kxeVpXTnZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G8FgrQd6B1qYUDpaPkl~5pyUYUzWJgdS9jXUH-Pegn-1ncZ9lvuAnotxrcRKecX3~gfgVyxsm8ONs3hV2P3lz-ttGfhBBKdRyTiAtrEVWF2y22ko9F~LQ9FX4L4dj10LBvG0MFATtt6e99x1o4E-T99Fna4hu7oTaMOEh90gnTu~SgsgGvKKU8vdb~JN95Cw8HjvHLA-diGCAMcrHF3KhWo9O2ZoV5DsecEZBtoRfbAfYY3rTqsQol4uujqVgZyks2sfDS2X1~rKMgvq8Roj6y2vaiwrIa3~1lz2ajqZxRhrJU-mZakzx0sSFkNlbawr9ETarjPvPaaQumCzXHiojw__"
  }
];
