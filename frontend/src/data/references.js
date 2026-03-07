// 레퍼런스 트랙 가이드 — 장르/보컬/분위기별 참고 곡
export const REFERENCES = {
  pop: {
    female: {
      bright: [
        { artist: "Ariana Grande", track: "Into You", note: "밝고 선명한 보컬, 에어 대역 강조" },
        { artist: "Dua Lipa", track: "Levitating", note: "모던 팝 프로덕션, 깔끔한 하이엔드" },
        { artist: "Taylor Swift", track: "Shake It Off", note: "명료한 보컬 프레즌스" },
      ],
      warm: [
        { artist: "Adele", track: "Easy On Me", note: "따뜻한 중저역, 풍성한 보컬" },
        { artist: "Billie Eilish", track: "Lovely", note: "부드럽고 인티밋한 보컬 톤" },
        { artist: "Laufey", track: "From The Start", note: "따뜻하고 섬세한 보컬" },
      ],
      dark: [
        { artist: "Billie Eilish", track: "Bad Guy", note: "어두운 톤, 가까운 마이킹" },
        { artist: "Lorde", track: "Royals", note: "미드-로우 강조, 다크 팝" },
        { artist: "FKA Twigs", track: "Cellophane", note: "다크하고 공간감 있는 보컬" },
      ],
    },
    male: {
      bright: [
        { artist: "Charlie Puth", track: "Attention", note: "밝고 선명한 남성 팝 보컬" },
        { artist: "Ed Sheeran", track: "Shape Of You", note: "깔끔한 프레즌스" },
        { artist: "Justin Bieber", track: "Peaches", note: "모던 팝 보컬 프로덕션" },
      ],
      warm: [
        { artist: "Sam Smith", track: "Stay With Me", note: "풍성하고 따뜻한 보컬" },
        { artist: "John Legend", track: "All of Me", note: "따뜻한 피아노 발라드 톤" },
        { artist: "Harry Styles", track: "Watermelon Sugar", note: "빈티지 웜 톤" },
      ],
      dark: [
        { artist: "The Weeknd", track: "After Hours", note: "다크하고 무디한 톤" },
        { artist: "James Blake", track: "Retrograde", note: "가공된 다크 보컬" },
        { artist: "Post Malone", track: "Circles", note: "로우파이 다크 팝" },
      ],
    },
  },
  rnb: {
    female: {
      bright: [
        { artist: "SZA", track: "Kiss Me More", note: "밝고 에어리한 R&B" },
        { artist: "Jhene Aiko", track: "Sativa", note: "클리어한 보컬 톤" },
        { artist: "H.E.R.", track: "Best Part", note: "선명한 R&B 보컬" },
      ],
      warm: [
        { artist: "Alicia Keys", track: "If I Ain't Got You", note: "따뜻한 소울풀 보컬" },
        { artist: "Summer Walker", track: "Session 32", note: "인티밋한 R&B" },
        { artist: "Erykah Badu", track: "On & On", note: "네오소울 따뜻함" },
      ],
      dark: [
        { artist: "SZA", track: "Kill Bill", note: "다크하고 무디한 R&B" },
        { artist: "FKA Twigs", track: "Two Weeks", note: "다크 일렉트로닉 R&B" },
        { artist: "Kelela", track: "LMK", note: "실험적 다크 R&B" },
      ],
    },
    male: {
      bright: [
        { artist: "Bruno Mars", track: "That's What I Like", note: "밝고 펑키한 R&B" },
        { artist: "Chris Brown", track: "No Guidance", note: "선명한 R&B 보컬" },
        { artist: "Usher", track: "Yeah!", note: "클리어한 보컬 프레즌스" },
      ],
      warm: [
        { artist: "Frank Ocean", track: "Thinkin Bout You", note: "따뜻하고 감성적인 R&B" },
        { artist: "Daniel Caesar", track: "Best Part", note: "부드러운 소울" },
        { artist: "Giveon", track: "Heartbreak Anniversary", note: "깊고 따뜻한 바리톤" },
      ],
      dark: [
        { artist: "The Weeknd", track: "Blinding Lights", note: "다크한 신스 R&B" },
        { artist: "6LACK", track: "PRBLMS", note: "어둡고 미니멀한 R&B" },
        { artist: "PartyNextDoor", track: "Recognize", note: "다크 무디 R&B" },
      ],
    },
  },
  hiphop: {
    female: {
      bright: [
        { artist: "Nicki Minaj", track: "Super Bass", note: "선명하고 에너지 넘치는 보컬" },
        { artist: "Megan Thee Stallion", track: "Savage", note: "밝고 강렬한 랩" },
        { artist: "Doja Cat", track: "Say So", note: "팝 힙합 크로스오버" },
      ],
      warm: [
        { artist: "Cardi B", track: "I Like It", note: "따뜻하고 펀치감 있는 랩" },
        { artist: "Lauryn Hill", track: "Doo Wop", note: "소울풀한 힙합" },
        { artist: "Missy Elliott", track: "Work It", note: "따뜻한 톤의 래핑" },
      ],
      dark: [
        { artist: "Rico Nasty", track: "Smack a Bitch", note: "어둡고 공격적인 랩" },
        { artist: "Tierra Whack", track: "Whack World", note: "실험적 다크 힙합" },
        { artist: "cupcakKe", track: "Squidward Nose", note: "하드코어 랩" },
      ],
    },
    male: {
      bright: [
        { artist: "Drake", track: "God's Plan", note: "깔끔한 힙합 보컬" },
        { artist: "Kendrick Lamar", track: "HUMBLE.", note: "선명하고 강렬한 랩" },
        { artist: "Jack Harlow", track: "First Class", note: "모던 클린 랩" },
      ],
      warm: [
        { artist: "J. Cole", track: "No Role Modelz", note: "따뜻하고 자연스러운 랩 톤" },
        { artist: "Mac Miller", track: "Self Care", note: "레이백 따뜻한 힙합" },
        { artist: "Anderson .Paak", track: "Come Down", note: "소울풀한 힙합" },
      ],
      dark: [
        { artist: "Travis Scott", track: "SICKO MODE", note: "다크 트랩, 오토튠 이펙트" },
        { artist: "21 Savage", track: "A Lot", note: "다크하고 미니멀한 트랩" },
        { artist: "Playboi Carti", track: "Magnolia", note: "다크 실험적 트랩" },
      ],
    },
  },
  rock: {
    female: {
      bright: [
        { artist: "Paramore", track: "Misery Business", note: "밝고 에너지 넘치는 록 보컬" },
        { artist: "Olivia Rodrigo", track: "good 4 u", note: "팝-펑크 밝은 보컬" },
        { artist: "No Doubt", track: "Just a Girl", note: "선명한 록 보컬" },
      ],
      warm: [
        { artist: "Florence + The Machine", track: "Dog Days Are Over", note: "풍성하고 따뜻한 록 보컬" },
        { artist: "Stevie Nicks", track: "Dreams", note: "빈티지 따뜻한 록" },
        { artist: "Amy Winehouse", track: "Back to Black", note: "따뜻한 레트로 보컬" },
      ],
      dark: [
        { artist: "Evanescence", track: "Bring Me to Life", note: "다크 록 보컬" },
        { artist: "PJ Harvey", track: "Down by the Water", note: "다크 올트 록" },
        { artist: "Chelsea Wolfe", track: "Carrion Flowers", note: "다크 인디 록" },
      ],
    },
    male: {
      bright: [
        { artist: "Green Day", track: "Basket Case", note: "밝고 펀치감 있는 펑크 록" },
        { artist: "Muse", track: "Uprising", note: "선명한 하이 보컬" },
        { artist: "Royal Blood", track: "Figure It Out", note: "모던 록 에너지" },
      ],
      warm: [
        { artist: "Foo Fighters", track: "Everlong", note: "따뜻한 올트 록" },
        { artist: "Arctic Monkeys", track: "Do I Wanna Know?", note: "레이백 인디 록" },
        { artist: "John Mayer", track: "Gravity", note: "따뜻한 블루스 록" },
      ],
      dark: [
        { artist: "Nine Inch Nails", track: "Closer", note: "다크 인더스트리얼" },
        { artist: "Radiohead", track: "Creep", note: "다크 올트 록" },
        { artist: "Deftones", track: "Change", note: "다크 슈게이즈 록" },
      ],
    },
  },
  ballad: {
    female: {
      bright: [
        { artist: "Celine Dion", track: "My Heart Will Go On", note: "파워풀하고 밝은 발라드" },
        { artist: "Whitney Houston", track: "I Will Always Love You", note: "클래식 파워 발라드" },
        { artist: "IU", track: "Love Poem", note: "밝고 섬세한 K-발라드" },
      ],
      warm: [
        { artist: "Adele", track: "Someone Like You", note: "따뜻한 감성 발라드의 정석" },
        { artist: "Norah Jones", track: "Don't Know Why", note: "따뜻한 재지 발라드" },
        { artist: "태연", track: "Rain", note: "따뜻한 K-발라드 보컬" },
      ],
      dark: [
        { artist: "Lana Del Rey", track: "Summertime Sadness", note: "다크 시네마틱 발라드" },
        { artist: "Birdy", track: "Skinny Love", note: "섬세하고 어두운 포크 발라드" },
        { artist: "Daughter", track: "Youth", note: "다크 인디 발라드" },
      ],
    },
    male: {
      bright: [
        { artist: "Sam Smith", track: "Too Good at Goodbyes", note: "선명한 파워 발라드" },
        { artist: "Michael Buble", track: "Home", note: "밝은 팝 발라드" },
        { artist: "성시경", track: "거리에서", note: "클래식 K-발라드" },
      ],
      warm: [
        { artist: "Ed Sheeran", track: "Perfect", note: "따뜻한 어쿠스틱 발라드" },
        { artist: "James Arthur", track: "Say You Won't Let Go", note: "감성적 팝 발라드" },
        { artist: "박효신", track: "야생화", note: "따뜻하고 깊은 K-발라드" },
      ],
      dark: [
        { artist: "Jeff Buckley", track: "Hallelujah", note: "다크하고 감성적인 발라드" },
        { artist: "Hozier", track: "Take Me to Church", note: "다크 포크 발라드" },
        { artist: "Bon Iver", track: "Skinny Love", note: "로파이 인디 포크" },
      ],
    },
  },
  edm: {
    female: {
      bright: [
        { artist: "Zedd ft. Foxes", track: "Clarity", note: "밝고 에어리한 EDM 보컬" },
        { artist: "Marshmello ft. Bastille", track: "Happier", note: "선명한 EDM 팝" },
        { artist: "Kygo ft. Selena Gomez", track: "It Ain't Me", note: "트로피컬 EDM 보컬" },
      ],
      warm: [
        { artist: "ODESZA", track: "Say My Name", note: "따뜻한 일렉트로닉" },
        { artist: "Disclosure ft. Sam Smith", track: "Latch", note: "워밍 하우스 보컬" },
        { artist: "Rüfüs Du Sol", track: "Innerbloom", note: "따뜻한 딥 하우스" },
      ],
      dark: [
        { artist: "Grimes", track: "Genesis", note: "다크 일렉트로닉 보컬" },
        { artist: "REZZ", track: "Hypnocurrency", note: "다크 베이스 뮤직" },
        { artist: "Gesaffelstein", track: "Pursuit", note: "다크 테크노" },
      ],
    },
    male: {
      bright: [
        { artist: "The Chainsmokers", track: "Closer", note: "밝은 EDM 팝 보컬" },
        { artist: "Calvin Harris", track: "Summer", note: "선명한 하우스 보컬" },
        { artist: "Illenium", track: "Good Things Fall Apart", note: "밝은 멜로딕 베이스" },
      ],
      warm: [
        { artist: "Flume", track: "Never Be Like You", note: "따뜻한 퓨처 베이스" },
        { artist: "Bonobo", track: "Kerala", note: "오가닉 일렉트로닉" },
        { artist: "Jamie xx", track: "Loud Places", note: "따뜻한 인디 일렉트로닉" },
      ],
      dark: [
        { artist: "Skrillex", track: "Scary Monsters", note: "다크 덥스텝" },
        { artist: "deadmau5", track: "Strobe", note: "다크 프로그레시브 하우스" },
        { artist: "Aphex Twin", track: "Windowlicker", note: "실험적 IDM" },
      ],
    },
  },
  jazz: {
    female: {
      bright: [
        { artist: "Diana Krall", track: "Fly Me To The Moon", note: "밝고 선명한 재즈 보컬" },
        { artist: "Norah Jones", track: "Come Away With Me", note: "클리어한 재즈 팝" },
        { artist: "Esperanza Spalding", track: "Black Gold", note: "밝은 재즈 보컬" },
      ],
      warm: [
        { artist: "Ella Fitzgerald", track: "Summertime", note: "따뜻한 재즈 보컬의 정석" },
        { artist: "Nina Simone", track: "Feeling Good", note: "깊고 따뜻한 재즈 소울" },
        { artist: "Billie Holiday", track: "Autumn Leaves", note: "빈티지 따뜻한 재즈" },
      ],
      dark: [
        { artist: "Amy Winehouse", track: "Love Is A Losing Game", note: "다크 재즈 소울" },
        { artist: "Melody Gardot", track: "Baby I'm A Fool", note: "무디한 재즈" },
        { artist: "Chet Baker", track: "My Funny Valentine", note: "쿨 재즈의 어둠" },
      ],
    },
    male: {
      bright: [
        { artist: "Michael Buble", track: "Feeling Good", note: "밝은 스윙 재즈" },
        { artist: "Harry Connick Jr.", track: "It Had to Be You", note: "클리어한 재즈 보컬" },
        { artist: "Gregory Porter", track: "Liquid Spirit", note: "선명한 재즈 바리톤" },
      ],
      warm: [
        { artist: "Nat King Cole", track: "Unforgettable", note: "따뜻한 재즈 보컬의 전설" },
        { artist: "Tony Bennett", track: "The Way You Look Tonight", note: "클래식 재즈 웜스" },
        { artist: "Frank Sinatra", track: "Fly Me To The Moon", note: "빈티지 따뜻한 스윙" },
      ],
      dark: [
        { artist: "Chet Baker", track: "Almost Blue", note: "쿨 재즈의 어둠" },
        { artist: "Tom Waits", track: "Martha", note: "거칠고 다크한 재즈" },
        { artist: "Jose James", track: "Trouble", note: "다크 모던 재즈" },
      ],
    },
  },
  acoustic: {
    female: {
      bright: [
        { artist: "Taylor Swift", track: "Love Story", note: "밝은 어쿠스틱 팝 보컬" },
        { artist: "Jewel", track: "You Were Meant For Me", note: "선명한 포크 보컬" },
        { artist: "Colbie Caillat", track: "Bubbly", note: "밝고 자연스러운 어쿠스틱" },
      ],
      warm: [
        { artist: "Norah Jones", track: "Don't Know Why", note: "따뜻한 어쿠스틱 재즈 팝" },
        { artist: "Joni Mitchell", track: "A Case of You", note: "따뜻한 포크 보컬의 정석" },
        { artist: "Tracy Chapman", track: "Fast Car", note: "깊고 따뜻한 포크" },
      ],
      dark: [
        { artist: "Phoebe Bridgers", track: "Motion Sickness", note: "다크 인디 포크" },
        { artist: "Mazzy Star", track: "Fade Into You", note: "드리미 다크 어쿠스틱" },
        { artist: "Iron & Wine", track: "Flightless Bird", note: "섬세하고 어두운 포크" },
      ],
    },
    male: {
      bright: [
        { artist: "Jason Mraz", track: "I'm Yours", note: "밝고 경쾌한 어쿠스틱" },
        { artist: "Jack Johnson", track: "Better Together", note: "선명한 어쿠스틱 팝" },
        { artist: "Ed Sheeran", track: "Thinking Out Loud", note: "밝은 어쿠스틱 발라드" },
      ],
      warm: [
        { artist: "John Mayer", track: "Gravity", note: "따뜻한 블루스 어쿠스틱" },
        { artist: "James Taylor", track: "Fire and Rain", note: "클래식 따뜻한 포크" },
        { artist: "Nick Drake", track: "Pink Moon", note: "인티밋한 포크" },
      ],
      dark: [
        { artist: "Bon Iver", track: "Skinny Love", note: "다크 인디 포크" },
        { artist: "Elliott Smith", track: "Between the Bars", note: "어둡고 섬세한 포크" },
        { artist: "Sufjan Stevens", track: "Fourth of July", note: "다크 인디 포크" },
      ],
    },
  },
  kpop: {
    female: {
      bright: [
        { artist: "aespa", track: "Supernova", note: "선명하고 밝은 K-Pop 프로덕션" },
        { artist: "IVE", track: "LOVE DIVE", note: "깔끔한 모던 K-Pop" },
        { artist: "TWICE", track: "Feel Special", note: "밝은 걸그룹 보컬" },
      ],
      warm: [
        { artist: "IU", track: "Celebrity", note: "따뜻하고 세련된 K-Pop" },
        { artist: "태연", track: "Rain", note: "감성적 K-Pop 발라드" },
        { artist: "BLACKPINK Rose", track: "On The Ground", note: "따뜻한 솔로 보컬" },
      ],
      dark: [
        { artist: "BLACKPINK", track: "How You Like That", note: "다크하고 파워풀한 K-Pop" },
        { artist: "(G)I-DLE", track: "TOMBOY", note: "다크 컨셉 K-Pop" },
        { artist: "Red Velvet", track: "Psycho", note: "다크 R&B K-Pop" },
      ],
    },
    male: {
      bright: [
        { artist: "BTS", track: "Dynamite", note: "밝고 에너지 넘치는 K-Pop" },
        { artist: "SEVENTEEN", track: "Super", note: "선명한 보이그룹 보컬" },
        { artist: "TXT", track: "Sugar Rush Ride", note: "모던 밝은 K-Pop" },
      ],
      warm: [
        { artist: "BTS V", track: "Slow Dancing", note: "따뜻한 솔로 보컬" },
        { artist: "EXO", track: "Love Shot", note: "따뜻한 R&B K-Pop" },
        { artist: "성시경", track: "거리에서", note: "따뜻한 K-발라드" },
      ],
      dark: [
        { artist: "Stray Kids", track: "God's Menu", note: "다크하고 강렬한 K-Pop" },
        { artist: "ATEEZ", track: "Guerrilla", note: "다크 퍼포먼스 K-Pop" },
        { artist: "BTS", track: "Black Swan", note: "다크 아트 K-Pop" },
      ],
    },
  },
  country: {
    female: {
      bright: [
        { artist: "Carrie Underwood", track: "Before He Cheats", note: "파워풀하고 밝은 컨트리" },
        { artist: "Kacey Musgraves", track: "Follow Your Arrow", note: "밝은 모던 컨트리" },
        { artist: "Taylor Swift", track: "Our Song", note: "밝은 컨트리 팝" },
      ],
      warm: [
        { artist: "Dolly Parton", track: "Jolene", note: "따뜻한 클래식 컨트리" },
        { artist: "Emmylou Harris", track: "Wrecking Ball", note: "따뜻한 컨트리 포크" },
        { artist: "Brandi Carlile", track: "The Story", note: "파워풀하고 따뜻한 포크" },
      ],
      dark: [
        { artist: "Kacey Musgraves", track: "Space Cowboy", note: "무디한 컨트리 발라드" },
        { artist: "Miranda Lambert", track: "The House That Built Me", note: "감성적 컨트리" },
        { artist: "Maren Morris", track: "My Church", note: "깊은 컨트리 소울" },
      ],
    },
    male: {
      bright: [
        { artist: "Luke Bryan", track: "Country Girl", note: "밝은 모던 컨트리" },
        { artist: "Keith Urban", track: "Somebody Like You", note: "밝은 컨트리 록" },
        { artist: "Blake Shelton", track: "Honey Bee", note: "선명한 컨트리" },
      ],
      warm: [
        { artist: "Johnny Cash", track: "Ring of Fire", note: "따뜻한 클래식 컨트리의 전설" },
        { artist: "Chris Stapleton", track: "Tennessee Whiskey", note: "깊고 따뜻한 컨트리 소울" },
        { artist: "Vince Gill", track: "Go Rest High", note: "따뜻한 컨트리 발라드" },
      ],
      dark: [
        { artist: "Chris Stapleton", track: "Broken Halos", note: "깊고 어두운 컨트리 소울" },
        { artist: "Sturgill Simpson", track: "Turtles All the Way Down", note: "다크 아웃로 컨트리" },
        { artist: "Tyler Childers", track: "Feathered Indians", note: "다크 블루그래스" },
      ],
    },
  },
};
