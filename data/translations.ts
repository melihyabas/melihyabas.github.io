import type { Locale } from "@/lib/i18n";

const tr: Record<string, string> = {
  // Navigation
  "nav.home": "Ana Sayfa",
  "nav.blog": "Blog",
  "nav.youtube": "YouTube",
  "nav.about": "Hakkımda",
  "nav.experiences": "Deneyimler",

  // Hero
  "hero.subtitle": "Yazılım Mühendisi · Bursa",
  "hero.intro":
    "Allianz bünyesinde yazılım mühendisi olarak çalışıyorum. İş dışındaki vaktimi genel olarak ağırlık antrenmanı, müzik ve felsefeye ayırıyorum. Finansal piyasaları takip etmekten keyif alıyorum. Tüm bu farklı uğraşları ise aynı temel motivasyonla sürdürüyorum: disiplinle, merakla, hayatın incelenmeye değer olduğuna dair inatçı bir inançla.",

  // Pillar cards
  "pillar.code.title": "Kod",
  "pillar.code.description":
    "Hassasiyet ve amaçla dayanıklı sistemler inşa etmek. Her satır kod bir karardır.",
  "pillar.think.title": "Düşün",
  "pillar.think.description":
    "Bilinç, felsefe ve kolay cevap kabul etmeyen sorular üzerine keşifler.",
  "pillar.live.title": "Yaşa",
  "pillar.live.description":
    "Gitar telleri, ağırlıklar ve piyasa grafikleri — yaşayarak ifade edilen disiplin.",

  // Taglines
  "tagline.0": "Kodda hassasiyet, düşüncede mevcudiyet.",
  "tagline.1": "Sistemler inşa ediyorum. Her şeyi sorguluyorum.",
  "tagline.2": "28 yıllık merak, derlenmiş.",
  "tagline.3": "Mühendisliğin bilinçle buluştuğu yer.",

  // Blog page
  "blog.title": "Blog",
  "blog.subtitle": '"Bir Miktar Fikir" — birmiktarfikir',
  "blog.empty": "Yazılar geçici olarak kullanılamıyor.",
  "blog.visitDirect": "birmiktarfikir.blogspot.com adresini doğrudan ziyaret edin",
  "blog.readOn": "Blogspot'ta Oku",

  // YouTube page
  "youtube.title": "YouTube",
  "youtube.subtitle": '"Hareket Halindeki Kareler"',

  // About page
  "about.title": "Hakkımda",
  "about.subtitle": '"Kısaltılmamış Versiyon"',

  // About sections
  "about.engineer.title": "Mühendis",
  "about.engineer.subtitle": "Niyetle inşa etmek",
  "about.engineer.content.0":
    "Yazılım mühendisliği, ben onu seçmeden önce beni seçti. Sistemlerin nasıl çalıştığına duyduğum merakla başlayan şey, önemli şeyler inşa etmeye adanmış bir kariyere dönüştü. Kod yazıyorum — sadece sorunları çözmek için değil, fikirleri ifade etmek için. İyi tasarlanmış her sistem, somutlaşmış bir düşünce biçimidir.",
  "about.engineer.content.1":
    "Günlük işim Angular, Java, Spring Boot ve SQL etrafında dönüyor — hassasiyet gerektiren ve disiplini ödüllendiren araçlar. Ama teknoloji yığınının ötesinde, beni harekete geçiren şey zarif soyutlamalar peşinde koşmak: nesir gibi okunan kod ve berraklıkla nefes alan sistemler.",

  "about.musician.title": "Müzisyen",
  "about.musician.subtitle": "8 yıllık teller ve sessizlik",
  "about.musician.content.0":
    "Sekiz yıl önce gitarı elime aldım ve o benim ikinci dilim oldu. Rock ve Pop benim ana lehçelerim — elektro riflerin ham enerjisinden akustik parmak çalımının sessiz kırılganlığına.",
  "about.musician.content.1":
    "Müzik, kodun hislerimi ifade edemediği yere gittiğim yer. Çalmanın bir felsefesi var: pratiğin disiplini, doğaçlamanın cesareti, bir şarkının asla aynı şekilde iki kez çalınamayacağını bilmenin tevazusu.",

  "about.athlete.title": "Sporcu",
  "about.athlete.subtitle": "Günlük bir pratik olarak disiplin",
  "about.athlete.content.0":
    "Fitness bir hobi değil — dirençle günlük bir müzakeredir. Estetik için değil, rahatsızlığı aşmanın getirdiği zihinsel berraklık için antrenman yapıyorum. Özellikle ağırlık antrenmanları, hareket halindeki meditasyonumdur.",
  "about.athlete.content.1":
    "Uzun süren bir disiplin gerektirir.",

  "about.analyst.title": "Analist",
  "about.analyst.subtitle": "Kaostan örüntüler okumak",
  "about.analyst.content.0":
    "Finansal piyasalar beni büyülüyor — zenginliğe giden bir yol olarak değil, dünyanın en büyük gerçek zamanlı insan psikolojisi deneyi olarak. Her mum grafik, korku, açgözlülük, umut ve teslimiyetin bir hikayesini anlatır.",
  "about.analyst.content.1":
    "Teknik analizi ve makro trendleri, kod hata ayıklamaya getirdiğim aynı titizlikle inceliyorum. Örüntü tanıma aktarılabilir bir beceridir: bir grafik okurken, bir sistemi yeniden yapılandırırken veya bir insanı anlamaya çalışırken, her zaman gürültünün altındaki sinyali ararsınız.",

  "about.thinker.title": "Düşünür",
  "about.thinker.subtitle": "Bilinç ve merak",
  "about.thinker.content.0":
    "Kodun, müziğin ve piyasa grafiklerinin altında, peşimi bırakmayan daha derin bir soru var: bilinçli olmak ne anlama geliyor? Bunu blogumda yazıyorum — bir uzman olarak değil, soruyla gerçekten boğuşan biri olarak.",
  "about.thinker.content.1":
    "Felsefe pratik dünyadan bir kaçış değildir. Diğer her şeyi tutarlı kılan merçektir. Neden inşa ediyoruz? Neden yaratıyoruz? Bir melodi bizi neden etkiler ve iyi tasarlanmış bir sistem neden güzel hisseder? Bunlar hayatı incelemeye değer kılan sorulardır.",

  // Experiences page
  "experiences.title": "Deneyimler",
  "experiences.subtitle": '"Koordinatlar ve Bölümler"',
  "exp.upcoming": "YAKLAŞAN",
  "exp.category.travel": "seyahat",
  "exp.category.career": "kariyer",
  "exp.category.personal": "kişisel",
  "exp.category.milestone": "dönüm noktası",

  // Experience items
  "exp.prague.title": "Prag Gezisi",
  "exp.prague.date": "Mayıs 2026",
  "exp.prague.description":
    "Prag sokaklarını keşfetmek — tarihin ve mimarinin kelimelerden daha yüksek sesle konuştuğu bir şehir. Orta Avrupa'nın kalbine bir yolculuk.",
  "exp.prague.location": "Prag, Çek Cumhuriyeti",

  "exp.website.title": "Dijital Günlük Yayında",
  "exp.website.date": "Mart 2026",
  "exp.website.description":
    "Bu kişisel web sitesini tasarladım ve yayına aldım — düşünceleri, deneyimleri ve kim olduğumun gelişen hikayesini barındıran dijital bir günlük.",


  "exp.guitar7.title": "Gitar — 7 Yıl",
  "exp.guitar7.date": "2023",
  "exp.guitar7.description":
    "Yedi yıllık gitar çalma. Cover öğrenmekten enstrümandaki kendi sesimi geliştirmeye geçiş yaptım. Rock ve pop temel olmaya devam ediyor.",

  "exp.angular.title": "Angular & Spring'e Derin Dalış",
  "exp.angular.date": "2022",
  "exp.angular.description":
    "Angular ve Spring Boot ile kurumsal ölçekte geliştirmeye daldım. Bu yıl, dayanıklı ve sürdürülebilir sistemler inşa etme anlayışımı şekillendirdi.",

  "exp.blog.title": "birmiktarfikir — Blog Doğdu",
  "exp.blog.date": "2021",
  "exp.blog.description":
    "'Bir Miktar Fikir'i başlattım — bilinç, felsefe ve insan deneyimini keşfeden Türkçe bir blog.",

  "exp.career.title": "Yazılım Mühendisliği Kariyeri Başladı",
  "exp.career.date": "2020",
  "exp.career.description":
    "Profesyonel yazılım geliştirmeye adım attım. Öğrencilikten mühendisliğe geçiş — teorinin gerçek dünya sistemlerinin karmaşık güzelliğiyle buluştuğu yer.",

  "exp.guitarstart.title": "Gitarı Elime Aldım",
  "exp.guitarstart.date": "2018",
  "exp.guitarstart.description":
    "Altı telle sekiz yıllık (ve devam eden) bir aşk hikayesinin başlangıcı. İlk akorlar, ilk nasırlar, müzikal ifadenin ilk tadı.",

  // About draft
  "about.draft": "Bu bölüm yapım aşamasında...",

  // 404
  "notfound.text":
    "Bu sayfa mevcut değil — ama sen varsın ve bu çok daha ilginç.",
  "notfound.return": "Ana sayfaya dön",
};

const en: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.blog": "Blog",
  "nav.youtube": "YouTube",
  "nav.about": "About",
  "nav.experiences": "Experiences",

  // Hero
  "hero.subtitle": "Software Engineer · Bursa",
  "hero.intro":
  "I am a software engineer at Allianz. Outside of code, I focus on weight training, music, and philosophy, while staying active in the financial markets. I approach all these pursuits with the same core mindset: discipline, curiosity, and a stubborn belief that life is worth examining.",
  
  // Pillar cards
  "pillar.code.title": "Code",
  "pillar.code.description":
    "Crafting resilient systems with precision and purpose. Every line of code is a decision.",
  "pillar.think.title": "Think",
  "pillar.think.description":
    "Exploring consciousness, philosophy, and the questions that refuse easy answers.",
  "pillar.live.title": "Live",
  "pillar.live.description":
    "Guitar strings, running trails, and market charts — discipline expressed through living.",

  // Taglines
  "tagline.0": "Precision in code, presence in thought.",
  "tagline.1": "Building systems. Questioning everything.",
  "tagline.2": "28 years of curiosity, compiled.",
  "tagline.3": "Where engineering meets consciousness.",

  // Blog page
  "blog.title": "Blog",
  "blog.subtitle": '"A Fistful of Thoughts" — birmiktarfikir',
  "blog.empty": "Posts are temporarily unavailable.",
  "blog.visitDirect": "Visit birmiktarfikir.blogspot.com directly",
  "blog.readOn": "Read on Blogspot",

  // YouTube page
  "youtube.title": "YouTube",
  "youtube.subtitle": '"Frames in Motion"',

  // About page
  "about.title": "About",
  "about.subtitle": '"The Unabridged Version"',

  // About sections
  "about.engineer.title": "The Engineer",
  "about.engineer.subtitle": "Building with intent",
  "about.engineer.content.0":
    "Software engineering chose me before I chose it. What started as curiosity about how systems work evolved into a career devoted to building things that matter. I write code not just to solve problems, but to express ideas — every well-architected system is a form of thinking made tangible.",
  "about.engineer.content.1":
    "My daily craft revolves around Angular, Java, Spring Boot, and SQL — tools that demand precision and reward discipline. But beyond the stack, what drives me is the pursuit of elegant abstractions: code that reads like prose and systems that breathe with clarity.",

  "about.musician.title": "The Musician",
  "about.musician.subtitle": "8 years of strings and silence",
  "about.musician.content.0":
    "I picked up the guitar eight years ago, and it became a second language. Rock and Pop are my native dialects — from the raw energy of electric riffs to the quiet vulnerability of acoustic fingerpicking.",
  "about.musician.content.1":
    "Music is where I go when code can't express what I feel. There's a philosophy in playing: the discipline of practice, the courage of improvisation, the humility of knowing a song will never be played the same way twice.",

  "about.athlete.title": "The Athlete",
  "about.athlete.subtitle": "Discipline as a daily practice",
  "about.athlete.content.0":
    "Fitness isn't a hobby — it's a daily negotiation with resistance. I train not for aesthetics, but for the mental clarity that comes from pushing through discomfort. Running, in particular, is my meditation in motion.",
  "about.athlete.content.1":
    "There's a direct line between the discipline of a morning run and the discipline of writing clean code. Both demand consistency over intensity, process over outcome, and an honest relationship with your own limitations.",

  "about.analyst.title": "The Analyst",
  "about.analyst.subtitle": "Reading patterns in chaos",
  "about.analyst.content.0":
    "Financial markets fascinate me — not as a path to wealth, but as the world's largest real-time experiment in human psychology. Every candlestick chart tells a story of fear, greed, hope, and capitulation.",
  "about.analyst.content.1":
    "I study technical analysis and macro trends with the same rigor I bring to debugging code. Pattern recognition is a transferable skill: whether you're reading a chart, refactoring a system, or understanding a person, you're always looking for the signal beneath the noise.",

  "about.thinker.title": "The Thinker",
  "about.thinker.subtitle": "Consciousness and curiosity",
  "about.thinker.content.0":
    "Underneath the code and the music and the market charts, there's a deeper question that won't let me go: what does it mean to be conscious? I write about this on my blog — not as an expert, but as someone genuinely wrestling with the question.",
  "about.thinker.content.1":
    "Philosophy isn't an escape from the practical world. It's the lens that makes everything else coherent. Why do we build? Why do we create? Why does a melody move us and a well-designed system feel beautiful? These are the questions that make life worth examining.",

  // Experiences page
  "experiences.title": "Experiences",
  "experiences.subtitle": '"Coordinates & Chapters"',
  "exp.upcoming": "UPCOMING",
  "exp.category.travel": "travel",
  "exp.category.career": "career",
  "exp.category.personal": "personal",
  "exp.category.milestone": "milestone",

  // Experience items
  "exp.prague.title": "Prague Trip",
  "exp.prague.date": "May 2026",
  "exp.prague.description":
    "Exploring the streets of Prague — a city where history and architecture speak louder than words. A journey into the heart of Central Europe.",
  "exp.prague.location": "Prague, Czech Republic",

  "exp.website.title": "Digital Journal Launched",
  "exp.website.date": "March 2026",
  "exp.website.description":
    "Built and launched this personal website — a digital journal to house thoughts, experiences, and the evolving story of who I am.",

  "exp.senior.title": "Engineering Milestone",
  "exp.senior.date": "2025",
  "exp.senior.description":
    "Reached a new level of depth in software architecture. Led critical system design decisions and mentored junior developers.",

  "exp.fitness.title": "First 10K Run",
  "exp.fitness.date": "Autumn 2024",
  "exp.fitness.description":
    "Completed my first 10-kilometer run. What started as a daily discipline became a personal milestone in endurance and mental strength.",

  "exp.guitar7.title": "Guitar — 7 Years",
  "exp.guitar7.date": "2023",
  "exp.guitar7.description":
    "Seven years of playing guitar. Transitioned from learning covers to developing my own voice on the instrument. Rock and pop remain the foundation.",

  "exp.angular.title": "Deep Dive into Angular & Spring",
  "exp.angular.date": "2022",
  "exp.angular.description":
    "Immersed in enterprise-scale development with Angular and Spring Boot. This year shaped my understanding of building resilient, maintainable systems.",

  "exp.blog.title": "birmiktarfikir — Blog Born",
  "exp.blog.date": "2021",
  "exp.blog.description":
    "Started 'A Fistful of Thoughts' — a Turkish-language blog exploring consciousness, philosophy, and the human experience.",

  "exp.career.title": "Software Engineering Career Begins",
  "exp.career.date": "2020",
  "exp.career.description":
    "Stepped into professional software development. The transition from student to engineer — where theory meets the messy beauty of real-world systems.",

  "exp.guitarstart.title": "Picked Up the Guitar",
  "exp.guitarstart.date": "2018",
  "exp.guitarstart.description":
    "The beginning of an eight-year (and counting) love affair with six strings. First chords, first calluses, first taste of musical expression.",

  // About draft
  "about.draft": "This section is under construction...",

  // 404
  "notfound.text":
    "This page doesn't exist — but you do, and that's more interesting.",
  "notfound.return": "Return home",
};

export const translations: Record<Locale, Record<string, string>> = { tr, en };
