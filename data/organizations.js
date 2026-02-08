// Organization Database
const organizations = [
  {
    id: "org01",
    name: "ネクサス特殊部隊",
    nameEn: "Nexus Special Forces",
    description: "国際的な脅威に対抗するため、複数国の精鋭兵士で構成された特殊部隊。最新のサイバネティック技術と戦術知識を兼ね備えた、世界最高峰の軍事組織。秘密裏に行動し、表向きは存在しない。",
    logo: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-1_1770551696000_na1fn_b3JnLWxvZ28tbmV4dXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTFfMTc3MDU1MTY5NjAwMF9uYTFmbl9iM0puTFd4dloyOHRibVY0ZFhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tQZZoLdEI9~pQa3WZp6FVbsV~OzJQgKYGsd7RckbOIycZKOjzIC8ZNebq9YEK7s6W3mjdFj-jRY3k3vk2LhPbWgSqHF~A6A63AaVkEXCCkIvzv-v9j9josoQ85n-BRceoFRqbw19oT9Fu9ar2EVZq0vIxM550zqCYK4Yj5BiGUWzP7vSWoH1CrDZg3CABB-9qFaYnmAcdGpg4Vvzu3fvMQJfI-VzMgK5mkev6emCnaXtrhP0UsI25gDXgYdP6tpM6FtVrUgNARkz~ccDVbe4eTtAzz23vAl6Vz-pUV56eedXN3bWNSPIfByM6~e~ySYrSPKtrdNF6cvVLK-YEsfHHQ__",
    members: [
      { characterId: "char01", name: "アレックス・ハンター", title: "部隊指揮官" },
      { characterId: "char05", name: "ダミアン・ゴースト", title: "スナイパー" }
    ]
  },
  {
    id: "org02",
    name: "シャドウシンジケート",
    nameEn: "Shadow Syndicate",
    description: "地下組織として活動する謎の集団。暗殺、工作、情報操作を専門とする。表の顔は存在せず、その目的や構成員の大半は謎に包まれている。",
    logo: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-2_1770551696000_na1fn_b3JnLWxvZ28tc2hhZG93.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTJfMTc3MDU1MTY5NjAwMF9uYTFmbl9iM0puTFd4dloyOHRjMnRsYkc5eS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K7p1cjlRfXhCQQYvlL8Eo~Tz5VPBqMFhCJqM6xZDJPKJe6nGYGm8YEKqwjQvPXIECOcvCRhJLbULmLXVqLvhVzrILZmVMhxJPVHDvXQvKIvzv-v9j9josoQ85n-BRceoFRqbw19oT9Fu9ar2EVZq0vIxM550zqCYK4Yj5BiGUWzP7vSWoH1CrDZg3CABB-9qFaYnmAcdGpg4Vvzu3fvMQJfI-VzMgK5mkev6emCnaXtrhP0UsI25gDXgYdP6tpM6FtVrUgNARkz~ccDVbe4eTtAzz23vAl6Vz-pUV56eedXN3bWNSPIfByM6~e~ySYrSPKtrdNF6cvVLK-YEsfHHQ__",
    members: [
      { characterId: "char02", name: "シャドウ・ナイト", title: "エージェント" }
    ]
  },
  {
    id: "org03",
    name: "アイアンフォース傭兵団",
    nameEn: "Iron Force Mercenaries",
    description: "高い報酬と引き換えに、あらゆる任務を遂行する傭兵集団。倫理観に縛られず、純粋に利益を追求する。最新の武装と強化兵士で構成されている。",
    logo: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-3_1770551696000_na1fn_b3JnLWxvZ28taXJvbmZvcmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTNfMTc3MDU1MTY5NjAwMF9uYTFmbl9iM0puTFd4dloyOHRjMjFsYkc5eS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nWTa6HqN0FkB65OCG6hgZia3pN-WnKTEjclJJc4s9argv9dcIZVm8zm6fwv3Zkb-zvAvTERmMy5sjZRkmPSlvnsuKI2OxidxQRXbEc3Rw4oaYJ4tOgb2K~Rw4w3g2CUCq6SSccZBLDbJQuLgSE9kYE9hk3C~u8x9wmXNFuUj2Wogdc1rBx7X-apleclFv7WQKofMEVrDii2rs79N~AwnN-40S0cI90GQoHYz~ef~OLaoh4vwZEDMpA~EtDxIJ0WXyoS~1wvoN0NQMwvQODCj8jr1-hE9-knPWSXsnaMU3VNNOJ1Y7mHwbfl4kihKKQo2TQYxA5Mq2E9PKVmWriGKXQ__",
    members: [
      { characterId: "char03", name: "ブルート・アイアン", title: "隊長" }
    ]
  },
  {
    id: "org04",
    name: "サイバーレジスタンス",
    nameEn: "Cyber Resistance",
    description: "独裁的な権力と支配に対抗するため、情報戦を展開する組織。ハッカーと活動家で構成され、デジタル空間での自由を求めて戦う。",
    logo: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-4_1770551696000_na1fn_b3JnLWxvZ28tY3liZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTRfMTc3MDU1MTY5NjAwMF9uYTFmbl9iM0puTFd4dloyOHRjMjkxY21ObGNpMXlZVzl2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WKeQvcgeRgf67m-yZQl1e6bdFc1c5O~ghz9XZBieKl9B03iZHePSzflQDVFT-zNWX7uq-igRKwSvS0UxdKR0H42tGJNg-WFvsGHY2gTR8ReSngXezTz~iB6bRF9W9y3Kl68A5vTsrBzC9747Qe~e2Fr1wsPIL4ekxENJmjoMS-CloIEx-aLzv3ymcSGk8CijkQbus8o7dPcjaHCV7D4lVAHD~e1qypnIYaJ31zRaQP6QprvJROw9XCpO2Annn5c83jNB3gg6IY0vxDzsq7KuOqHX5EBkZ9AzwmUyFuE1VtWcuH99oh~eoP~Zq7~qfF5K0xho3Ner93EYxsnZtonLJQ__",
    members: [
      { characterId: "char04", name: "リナ・コード", title: "ハッカー" }
    ]
  },
  {
    id: "org05",
    name: "ゴーストリコン部隊",
    nameEn: "Ghost Recon Unit",
    description: "精鋭スナイパーと偵察兵で構成された特殊部隊。長距離からの支援と情報収集を専門とする。ネクサス特殊部隊と協力関係にある。",
    logo: "https://private-us-east-1.manuscdn.com/sessionFile/AmnJqdjGVR4AFJobO94KW2/sandbox/1eAdtz59jbj6wCpMJ00Lgt-img-5_1770551696000_na1fn_b3JnLWxvZ28tZ2hvc3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQW1uSnFkakdWUjRBRkpvYk85NEtXMi9zYW5kYm94LzFlQWR0ejU5amJqNndDcE1KMDBMZ3QtaW1nLTVfMTc3MDU1MTY5NjAwMF9uYTFmbl9iM0puTFd4dloyOHRaR0ZzYkc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G8FgrQd6B1qYUDpaPkl~5pyUYUzWJgdS9jXUH-Pegn-1ncZ9lvuAnotxrcRKecX3~gfgVyxsm8ONs3hV2P3lz-ttGfhBBKdRyTiAtrEVWF2y22ko9F~LQ9FX4L4dj10LBvG0MFATtt6e99x1o4E-T99Fna4hu7oTaMOEh90gnTu~SgsgGvKKU8vdb~JN95Cw8HjvHLA-diGCAMcrHF3KhWo9O2ZoV5DsecEZBtoRfbAfYY3rTqsQol4uujqVgZyks2sfDS2X1~rKMgvq8Roj6y2vaiwrIa3~1lz2ajqZxRhrJU-mZakzx0sSFkNlbawr9ETarjPvPaaQumCzXHiojw__",
    members: [
      { characterId: "char05", name: "ダミアン・ゴースト", title: "スナイパー" }
    ]
  }
];
