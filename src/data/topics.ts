import type { Topic } from "@/types/topic";

const CORE_TOPICS: readonly Topic[] = [
  {
    slug: "gesunde-ernaehrung",
    title: "Gesunde Ernährung",
    titleEn: "Healthy eating",
    level: "B1",
    tags: ["Gesundheit", "Essen", "Kochen", "health", "food"],
    thema: {
      de: "Gesunde Ernährung bedeutet, dass man ausgewogen isst und auf seine Gesundheit achtet.",
      en: "Healthy eating means eating a balanced diet and looking after your health.",
    },
    options: [
      {
        title: "Selbst kochen",
        explanation:
          "Wenn ich selbst koche, weiß ich genau, was im Essen ist. Ich kann frisches Gemüse benutzen und wenig Zucker und Fett.",
        en: "When I cook myself, I know exactly what is in the food. I can use fresh vegetables and little sugar and fat.",
        vocab: [
          { de: "selbst kochen", en: "to cook for yourself" },
          { de: "frisches Gemüse", en: "fresh vegetables" },
          { de: "die Zutaten", en: "the ingredients" },
        ],
        sentence: "Ich finde, dass man gesünder isst, wenn man selbst kocht.",
      },
      {
        title: "Weniger Fast Food",
        explanation:
          "Fast Food ist schnell und günstig, aber oft sehr fettig und süß. Wer weniger davon isst, fühlt sich fitter.",
        en: "Fast food is quick and cheap, but often very greasy and sweet. People who eat less of it feel fitter.",
        vocab: [
          { de: "das Fast Food", en: "fast food" },
          { de: "fettig", en: "greasy" },
          { de: "sich fit fühlen", en: "to feel fit" },
        ],
        sentence: "Man sollte nicht jeden Tag Fast Food essen.",
      },
      {
        title: "Mahlzeiten planen",
        explanation:
          "Wer seine Mahlzeiten für die Woche plant, kauft gezielter ein. So spart man Zeit und Geld.",
        en: "If you plan your meals for the week, you shop more deliberately. That saves time and money.",
        vocab: [
          { de: "die Mahlzeit", en: "the meal" },
          { de: "einkaufen", en: "to shop" },
          { de: "sparen", en: "to save" },
        ],
        sentence: "Ich plane meine Mahlzeiten am Wochenende, damit ich unter der Woche Zeit spare.",
      },
    ],
    pros: [
      "Man bleibt gesünder und hat mehr Energie.",
      "Auf Dauer kann man Geld sparen.",
      "Man fühlt sich insgesamt besser.",
    ],
    cons: [
      "Selbst kochen kostet Zeit.",
      "Frische Lebensmittel sind manchmal teurer.",
      "Am Anfang ist es schwer, Gewohnheiten zu ändern.",
    ],
    opinion: {
      frame: "Meiner Meinung nach … , weil … . Zum Beispiel … . Deshalb …",
      de: "Meiner Meinung nach ist es am besten, meistens selbst zu kochen, weil man dann weiß, was man isst. Ab und zu darf man aber auch auswärts essen.",
      en: "In my opinion it is best to cook for yourself most of the time, because then you know what you are eating. Now and then it is fine to eat out too.",
    },
    conclusion: {
      de: "Zusammenfassend kann man sagen: Wer selbst kocht und wenig Fast Food isst, lebt gesünder.",
      en: "In summary: anyone who cooks for themselves and eats little fast food lives more healthily.",
    },
    answer: {
      full: "Gesunde Ernährung ist für mich sehr wichtig. Ich sehe drei Möglichkeiten: Erstens kann man selbst kochen, denn dann weiß man, was im Essen ist. Zweitens sollte man weniger Fast Food essen, weil es oft fettig und süß ist. Drittens kann man die Mahlzeiten planen, um Zeit und Geld zu sparen. Der Vorteil ist, dass man gesünder lebt. Ein Nachteil ist, dass Kochen Zeit kostet. Meiner Meinung nach ist es am besten, meistens selbst zu kochen. Zusammenfassend lebt man gesünder, wenn man bewusst isst.",
      easy: "Gesunde Ernährung ist wichtig. Man kann selbst kochen. Man kann weniger Fast Food essen. Man kann das Essen planen. Das ist gesund und spart Geld. Aber Kochen braucht Zeit. Ich koche meistens selbst. Das ist gut für mich.",
      keywords: [
        "selbst kochen",
        "weniger Fast Food",
        "frisches Gemüse",
        "Mahlzeiten planen",
        "Kosten",
        "Zeit sparen",
        "Gesundheit",
      ],
    },
  },
  {
    slug: "oeffentliche-verkehrsmittel",
    title: "Öffentliche Verkehrsmittel",
    titleEn: "Public transport",
    level: "B1",
    tags: ["Verkehr", "Zug", "Bus", "Umwelt", "transport", "train"],
    thema: {
      de: "Öffentliche Verkehrsmittel sind Busse, Straßenbahnen und Züge, die jeder gegen Bezahlung nutzen kann.",
      en: "Public transport means buses, trams and trains that anyone can use for a fare.",
    },
    options: [
      {
        title: "Mit Bus und Bahn zur Arbeit",
        explanation:
          "Wer mit Bus und Bahn fährt, braucht keinen Parkplatz und steht nicht im Stau. Im Zug kann man außerdem lesen oder lernen.",
        en: "If you take the bus and train, you don't need a parking space and don't sit in traffic. On the train you can also read or study.",
        vocab: [
          { de: "der Stau", en: "traffic jam" },
          { de: "die Fahrkarte", en: "ticket" },
          { de: "pünktlich", en: "on time" },
        ],
        sentence: "Ich fahre lieber mit dem Zug, weil ich dann nicht im Stau stehe.",
      },
      {
        title: "Ein Deutschlandticket kaufen",
        explanation:
          "Mit dem Deutschlandticket kann man in ganz Deutschland Busse und Regionalzüge nutzen. Das ist praktisch und oft günstiger als ein Auto.",
        en: "With the Deutschlandticket you can use buses and regional trains all over Germany. It is practical and often cheaper than a car.",
        vocab: [
          { de: "das Deutschlandticket", en: "the nationwide monthly pass" },
          { de: "günstig", en: "affordable, cheap" },
          { de: "der Regionalzug", en: "regional train" },
        ],
        sentence: "Ein Deutschlandticket lohnt sich, wenn man oft fährt.",
      },
      {
        title: "Bahn und Fahrrad kombinieren",
        explanation:
          "Man fährt mit dem Rad zum Bahnhof und dann mit dem Zug weiter. So ist man flexibel und tut etwas für die Umwelt.",
        en: "You cycle to the station and continue by train. That way you are flexible and do something for the environment.",
        vocab: [
          { de: "der Bahnhof", en: "train station" },
          { de: "flexibel", en: "flexible" },
          { de: "die Umwelt", en: "the environment" },
        ],
        sentence: "Ich kombiniere gern Fahrrad und Bahn, weil das flexibel und umweltfreundlich ist.",
      },
    ],
    pros: [
      "Man schont die Umwelt.",
      "Es ist oft billiger als ein eigenes Auto.",
      "Man ist entspannt und hat Zeit zum Lesen.",
    ],
    cons: [
      "Es gibt Verspätungen und Zugausfälle.",
      "Zur Hauptverkehrszeit sind die Züge voll.",
      "Auf dem Land gibt es oft nur wenige Verbindungen.",
    ],
    opinion: {
      frame: "Meiner Meinung nach … , weil … . Zum Beispiel … . Deshalb …",
      de: "Meiner Meinung nach sind öffentliche Verkehrsmittel in der Stadt die beste Lösung, weil man schnell und günstig ankommt.",
      en: "In my opinion public transport is the best solution in the city, because you arrive quickly and cheaply.",
    },
    conclusion: {
      de: "Alles in allem sind Bus und Bahn eine gute Wahl, besonders in der Stadt.",
      en: "All in all, bus and train are a good choice, especially in the city.",
    },
    answer: {
      full: "Öffentliche Verkehrsmittel spielen in Deutschland eine große Rolle. Ich sehe drei Möglichkeiten: Man kann mit Bus und Bahn zur Arbeit fahren und so den Stau vermeiden. Man kann ein Deutschlandticket kaufen, was oft günstiger ist als ein Auto. Und man kann Bahn und Fahrrad kombinieren, das ist flexibel und gut für die Umwelt. Ein Vorteil ist, dass man die Umwelt schont. Ein Nachteil sind Verspätungen. Meiner Meinung nach sind öffentliche Verkehrsmittel in der Stadt am besten. Alles in allem sind Bus und Bahn eine gute Wahl.",
      easy: "Viele Leute fahren mit Bus und Bahn. Das ist billig und gut für die Umwelt. Man steht nicht im Stau. Aber manchmal hat der Zug Verspätung. Ich fahre gern mit dem Zug.",
      keywords: [
        "Bus und Bahn",
        "Deutschlandticket",
        "Fahrrad kombinieren",
        "Stau",
        "Umwelt",
        "Verspätung",
        "Kosten",
      ],
    },
  },
  {
    slug: "handy-im-alltag",
    title: "Das Handy im Alltag",
    titleEn: "The mobile phone in everyday life",
    level: "B1",
    tags: ["Handy", "Smartphone", "Technologie", "Medien", "phone", "technology"],
    thema: {
      de: "Das Handy ist heute ein wichtiger Teil des Alltags. Die Frage ist, wie man es sinnvoll benutzt.",
      en: "The mobile phone is an important part of everyday life today. The question is how to use it sensibly.",
    },
    options: [
      {
        title: "Bildschirmzeit begrenzen",
        explanation:
          "Mit einer App kann man kontrollieren, wie lange man am Handy ist. So verbringt man weniger Zeit mit sozialen Medien.",
        en: "With an app you can check how long you spend on your phone. That way you spend less time on social media.",
        vocab: [
          { de: "die Bildschirmzeit", en: "screen time" },
          { de: "soziale Medien", en: "social media" },
          { de: "kontrollieren", en: "to check, to control" },
        ],
        sentence: "Ich begrenze meine Bildschirmzeit auf zwei Stunden pro Tag.",
      },
      {
        title: "Das Handy zum Lernen nutzen",
        explanation:
          "Mit Apps, Videos und Podcasts kann man überall lernen, zum Beispiel unterwegs im Bus.",
        en: "With apps, videos and podcasts you can learn anywhere, for example on the go on the bus.",
        vocab: [
          { de: "die App", en: "app" },
          { de: "unterwegs", en: "on the go" },
          { de: "der Podcast", en: "podcast" },
        ],
        sentence: "Ich nutze mein Handy, um jeden Tag Deutsch zu üben.",
      },
      {
        title: "Handyfreie Zeiten",
        explanation:
          "Beim Essen oder vor dem Schlafen bleibt das Handy weg. So hat man mehr Zeit für Familie und Freunde.",
        en: "During meals or before sleep the phone stays away. That way you have more time for family and friends.",
        vocab: [
          { de: "handyfrei", en: "phone-free" },
          { de: "vor dem Schlafen", en: "before sleeping" },
          { de: "die Freunde", en: "friends" },
        ],
        sentence: "Beim Abendessen legen wir alle das Handy weg.",
      },
    ],
    pros: [
      "Man kann schnell Informationen finden.",
      "Man hält Kontakt zu Familie und Freunden im Ausland.",
      "Navigation, Tickets und Banking sind einfach.",
    ],
    cons: [
      "Das Handy lenkt von der Arbeit ab.",
      "Zu viel Bildschirmzeit kann den Schlaf stören.",
      "Man wird leicht abhängig.",
    ],
    opinion: {
      frame: "Meiner Meinung nach … , solange … . Zum Beispiel … . Deshalb …",
      de: "Meiner Meinung nach ist das Handy sehr nützlich, solange man es bewusst benutzt und regelmäßig Pausen macht.",
      en: "In my opinion the phone is very useful as long as you use it consciously and take regular breaks.",
    },
    conclusion: {
      de: "Zusammenfassend ist das Handy ein gutes Werkzeug, wenn man die Nutzung kontrolliert.",
      en: "In summary, the phone is a good tool if you control how you use it.",
    },
    answer: {
      full: "Das Handy ist aus dem Alltag nicht mehr wegzudenken. Ich sehe drei Möglichkeiten: Man kann die Bildschirmzeit begrenzen, das Handy zum Lernen nutzen oder handyfreie Zeiten einführen, zum Beispiel beim Essen. Ein Vorteil ist, dass man überall Informationen findet und Kontakt halten kann. Ein Nachteil ist, dass das Handy ablenkt und den Schlaf stören kann. Meiner Meinung nach ist das Handy sehr nützlich, solange man es bewusst benutzt. Zusammenfassend ist es ein gutes Werkzeug, wenn man die Nutzung kontrolliert.",
      easy: "Fast jeder hat ein Handy. Das ist praktisch. Man kann telefonieren, lernen und Tickets kaufen. Aber man verbringt oft zu viel Zeit damit. Ich benutze mein Handy nicht beim Essen.",
      keywords: [
        "Bildschirmzeit",
        "zum Lernen nutzen",
        "handyfreie Zeit",
        "Ablenkung",
        "Kontakt halten",
        "Schlaf",
        "bewusst benutzen",
      ],
    },
  },
  {
    slug: "homeoffice-oder-buero",
    title: "Homeoffice oder Büro",
    titleEn: "Working from home or the office",
    level: "B2",
    tags: ["Arbeit", "Beruf", "Homeoffice", "work", "job", "Technologie"],
    thema: {
      de: "Immer mehr Firmen bieten Homeoffice an. Viele fragen sich, ob man lieber zu Hause oder im Büro arbeiten sollte.",
      en: "More and more companies offer working from home. Many ask whether it is better to work at home or in the office.",
    },
    options: [
      {
        title: "Im Homeoffice arbeiten",
        explanation:
          "Im Homeoffice spart man den Arbeitsweg und kann oft ruhiger und konzentrierter arbeiten.",
        en: "Working from home saves the commute, and you can often work more quietly and with better focus.",
        vocab: [
          { de: "der Arbeitsweg", en: "commute" },
          { de: "konzentriert", en: "focused" },
          { de: "ruhig", en: "quiet, calm" },
        ],
        sentence: "Im Homeoffice kann ich mich besser konzentrieren.",
      },
      {
        title: "Im Büro arbeiten",
        explanation:
          "Im Büro kann man Kollegen schnell etwas fragen und gemeinsam an Aufgaben arbeiten. Das stärkt den Teamgeist.",
        en: "In the office you can quickly ask colleagues something and work on tasks together. That strengthens team spirit.",
        vocab: [
          { de: "die Kollegen", en: "colleagues" },
          { de: "die Zusammenarbeit", en: "collaboration" },
          { de: "der Teamgeist", en: "team spirit" },
        ],
        sentence: "Im Büro ist die Zusammenarbeit einfacher.",
      },
      {
        title: "Hybridmodell",
        explanation:
          "Beim Hybridmodell arbeitet man zum Beispiel zwei Tage zu Hause und drei Tage im Büro. So nutzt man die Vorteile von beidem.",
        en: "With a hybrid model you work, for example, two days at home and three days in the office. That way you get the benefits of both.",
        vocab: [
          { de: "das Hybridmodell", en: "hybrid model" },
          { de: "die Flexibilität", en: "flexibility" },
          { de: "die Vorteile nutzen", en: "to make use of the benefits" },
        ],
        sentence: "Ich finde ein Hybridmodell ideal, weil man beides hat.",
      },
    ],
    pros: [
      "Man ist flexibler und spart Zeit und Geld.",
      "Die Work-Life-Balance wird oft besser.",
      "Im Büro entstehen schneller neue Ideen im Team.",
    ],
    cons: [
      "Zu Hause fällt es schwer, Arbeit und Freizeit zu trennen.",
      "Im Homeoffice hat man weniger Kontakt zu den Kollegen.",
      "Technische Probleme sind zu Hause schwerer zu lösen.",
    ],
    opinion: {
      frame: "Meiner Meinung nach … , denn … . Ein Beispiel dafür ist … . Deshalb …",
      de: "Meiner Meinung nach ist ein Hybridmodell die beste Lösung, denn man bleibt im Kontakt mit dem Team und hat trotzdem Ruhe für konzentrierte Arbeit.",
      en: "In my opinion a hybrid model is the best solution, because you stay in touch with the team and still have quiet time for focused work.",
    },
    conclusion: {
      de: "Alles in allem hängt es von der Aufgabe ab, aber eine Mischung aus Homeoffice und Büro passt für viele am besten.",
      en: "All in all it depends on the task, but a mix of home and office suits most people best.",
    },
    answer: {
      full: "Viele Firmen bieten heute Homeoffice an, deshalb ist das Thema sehr aktuell. Ich sehe drei Möglichkeiten: Man kann komplett im Homeoffice arbeiten, nur im Büro oder ein Hybridmodell wählen. Im Homeoffice spart man den Arbeitsweg, im Büro ist die Zusammenarbeit einfacher. Ein Nachteil von Homeoffice ist der fehlende Kontakt zu den Kollegen. Meiner Meinung nach ist ein Hybridmodell die beste Lösung, denn man hat die Vorteile von beidem. Alles in allem passt für viele eine Mischung am besten.",
      easy: "Man kann zu Hause oder im Büro arbeiten. Zu Hause spart man Zeit, weil man nicht fahren muss. Im Büro sieht man die Kollegen. Ich finde beides zusammen am besten: zwei Tage zu Hause und drei Tage im Büro.",
      keywords: [
        "Homeoffice",
        "Büro",
        "Hybridmodell",
        "Arbeitsweg sparen",
        "Zusammenarbeit",
        "Kontakt zu Kollegen",
        "Work-Life-Balance",
      ],
    },
  },
];

type TopicSeed = {
  slug: string;
  title: string;
  titleEn: string;
  level: "B1" | "B2";
  tags: readonly string[];
  thema: { de: string; en: string };
  options: readonly [
    { title: string; explanation: string; en: string; sentence: string },
    { title: string; explanation: string; en: string; sentence: string },
    { title: string; explanation: string; en: string; sentence: string },
  ];
  pros: readonly [string, string, string];
  cons: readonly [string, string, string];
  opinion: { de: string; en: string };
  conclusion: { de: string; en: string };
  keywords: readonly string[];
};

const ADDED_TOPIC_SEEDS: readonly TopicSeed[] = [
  {
    slug: "werbung-und-konsum", title: "Werbung und Konsum", titleEn: "Advertising and consumerism", level: "B2",
    tags: ["Werbung", "Konsum", "Einkaufen", "Medien", "advertising", "shopping"],
    thema: { de: "Werbung begegnet uns jeden Tag und beeinflusst oft, was wir kaufen. Wie kann man bewusst mit Werbung und Konsum umgehen?", en: "Advertising reaches us every day and often influences what we buy. How can we deal with advertising and consumption consciously?" },
    options: [
      { title: "Werbung kritisch prüfen", explanation: "Vor einem Kauf kann man überlegen, ob man das Produkt wirklich braucht. So entscheidet man weniger spontan.", en: "Before buying something, you can consider whether you really need it. This helps you make fewer impulse purchases.", sentence: "Ich prüfe zuerst, ob ich das Produkt wirklich brauche." },
      { title: "Werbefreie Medien nutzen", explanation: "Wer weniger Werbung sieht, wird seltener zu unnötigen Käufen angeregt. Manche werbefreien Angebote kosten allerdings Geld.", en: "Seeing fewer ads can reduce unnecessary purchases, although some ad-free services cost money.", sentence: "Werbefreie Medien helfen mir, mich besser zu konzentrieren." },
      { title: "Ein Einkaufsbudget festlegen", explanation: "Mit einem festen Budget behält man die Ausgaben im Blick und kann besser sparen.", en: "A fixed budget helps you keep track of spending and save more effectively.", sentence: "Ein monatliches Budget schützt mich vor spontanen Ausgaben." },
    ],
    pros: ["Man kauft überlegter und spart Geld.", "Weniger unnötiger Konsum schont Ressourcen.", "Ein Budget macht die eigenen Ausgaben sichtbar."],
    cons: ["Werbung ist im Alltag kaum vollständig zu vermeiden.", "Ein Budget zu planen und einzuhalten erfordert Disziplin.", "Werbefreie Angebote können zusätzliche Kosten verursachen."],
    opinion: { de: "Meiner Meinung nach sollte man Werbung kritisch betrachten und vor allem größere Käufe gut planen.", en: "In my opinion, people should view advertising critically and plan larger purchases carefully." },
    conclusion: { de: "Zusammenfassend hilft ein bewusster Umgang mit Werbung dabei, unnötigen Konsum zu vermeiden.", en: "In summary, a thoughtful approach to advertising helps avoid unnecessary consumption." },
    keywords: ["Werbung", "Bedarf prüfen", "spontane Käufe", "Budget", "Ressourcen", "bewusst konsumieren"],
  },
  {
    slug: "umweltbewusst-einkaufen", title: "Umweltbewusst einkaufen", titleEn: "Shopping sustainably", level: "B1",
    tags: ["Umwelt", "Einkaufen", "Nachhaltigkeit", "Lebensmittel", "environment", "shopping"],
    thema: { de: "Beim Einkaufen kann man Entscheidungen treffen, die besser für die Umwelt sind. Welche Möglichkeiten gibt es?", en: "When shopping, people can make choices that are better for the environment. What options are there?" },
    options: [
      { title: "Regionale Produkte kaufen", explanation: "Regionale Lebensmittel haben oft kürzere Transportwege und unterstützen Betriebe aus der Umgebung.", en: "Local food often travels shorter distances and supports nearby businesses.", sentence: "Ich kaufe gern regionale Produkte, wenn sie verfügbar sind." },
      { title: "Mehrweg und eigene Taschen nutzen", explanation: "Mit einer Stofftasche und Mehrwegverpackungen vermeidet man viele Einwegverpackungen.", en: "Using a reusable bag and returnable packaging avoids many single-use items.", sentence: "Ich nehme meine eigene Tasche zum Einkaufen mit." },
      { title: "Saisonal einkaufen", explanation: "Saisonales Obst und Gemüse wächst zur passenden Jahreszeit und muss häufig weniger weit transportiert werden.", en: "Seasonal fruit and vegetables grow at the right time of year and often need less transport.", sentence: "Ich orientiere mich beim Einkauf am Saisonkalender." },
    ],
    pros: ["Man kann Verpackungsmüll reduzieren.", "Regionale Betriebe werden unterstützt.", "Saisonale Waren sind oft frisch und preiswert."],
    cons: ["Nachhaltige Produkte sind manchmal teurer.", "Nicht alle Produkte sind überall erhältlich.", "Umweltzeichen sind für Verbraucher nicht immer leicht zu verstehen."],
    opinion: { de: "Ich finde saisonale und regionale Produkte sinnvoll, solange sie bezahlbar und gut erreichbar sind.", en: "I think seasonal and local products make sense as long as they are affordable and easy to find." },
    conclusion: { de: "Schon kleine Entscheidungen beim Einkauf können Verpackung und Transport verringern.", en: "Even small shopping choices can reduce packaging and transport." },
    keywords: ["regional", "saisonal", "Mehrweg", "Stofftasche", "Verpackung", "Preis"],
  },
  {
    slug: "neue-freunde-finden", title: "Neue Freunde finden", titleEn: "Making new friends", level: "B1",
    tags: ["Freundschaft", "Kontakte", "Freizeit", "Freunde", "friendship", "social life"],
    thema: { de: "In einer neuen Stadt oder Lebensphase ist es nicht immer leicht, neue Freundschaften aufzubauen. Was kann dabei helfen?", en: "In a new city or stage of life, building friendships is not always easy. What can help?" },
    options: [
      { title: "Einem Verein beitreten", explanation: "In einem Verein trifft man regelmäßig Menschen mit ähnlichen Interessen und kommt leicht ins Gespräch.", en: "A club brings you together regularly with people who share your interests.", sentence: "In einem Verein kann man gemeinsame Interessen entdecken." },
      { title: "An Kursen teilnehmen", explanation: "Ein Sprach-, Koch- oder Sportkurs bietet gemeinsame Aktivitäten und wiederkehrende Begegnungen.", en: "A language, cooking or sports class offers shared activities and repeated opportunities to meet.", sentence: "Ein Kurs gibt mir einen guten Anlass, neue Leute kennenzulernen." },
      { title: "Zu Treffen eingeladen werden und selbst einladen", explanation: "Wer offen auf andere zugeht und kleine Treffen vorschlägt, kann Kontakte vertiefen.", en: "Being open and suggesting small meetups can help deepen new connections.", sentence: "Ich schlage gern einen Kaffee vor, wenn ich jemanden sympathisch finde." },
    ],
    pros: ["Gemeinsame Interessen erleichtern den Gesprächseinstieg.", "Regelmäßige Treffen schaffen Vertrauen.", "Freundschaften können das Wohlbefinden stärken."],
    cons: ["Es braucht Zeit, bis Vertrauen entsteht.", "Nicht jedes erste Treffen führt zu einer Freundschaft.", "Schüchterne Menschen müssen manchmal ihre Komfortzone verlassen."],
    opinion: { de: "Meiner Erfahrung nach entstehen Freundschaften am ehesten, wenn man regelmäßig gemeinsam etwas unternimmt.", en: "In my experience, friendships are most likely to grow when people regularly do things together." },
    conclusion: { de: "Offenheit und Geduld sind wichtig, wenn man neue Freundschaften aufbauen möchte.", en: "Openness and patience matter when building new friendships." },
    keywords: ["Verein", "Kurs", "gemeinsame Interessen", "Treffen", "Geduld", "offen sein"],
  },
  {
    slug: "neue-sportart-lernen", title: "Eine neue Sportart lernen", titleEn: "Learning a new sport", level: "B1",
    tags: ["Sport", "Gesundheit", "Freizeit", "Bewegung", "sports", "health"],
    thema: { de: "Eine neue Sportart kann Spaß machen und die Gesundheit fördern. Wie kann man damit anfangen?", en: "Learning a new sport can be enjoyable and support good health. How can you get started?" },
    options: [
      { title: "Einen Anfängerkurs besuchen", explanation: "In einem Kurs werden die Grundlagen Schritt für Schritt erklärt und Fehler können korrigiert werden.", en: "A class teaches the basics step by step and allows mistakes to be corrected.", sentence: "Als Anfängerin möchte ich zuerst die Grundlagen lernen." },
      { title: "Mit Freunden trainieren", explanation: "Gemeinsames Training macht oft mehr Spaß und hilft dabei, regelmäßig dranzubleiben.", en: "Training with friends can be more enjoyable and help you stay consistent.", sentence: "Mit einer Freundin fällt es mir leichter, regelmäßig zu trainieren." },
      { title: "Zu Hause mit einfachen Übungen starten", explanation: "Mit kurzen Übungen kann man kostengünstig beginnen und den eigenen Rhythmus finden.", en: "Simple short exercises are an affordable way to start and find your own pace.", sentence: "Ich beginne mit einfachen Übungen und steigere mich langsam." },
    ],
    pros: ["Bewegung stärkt die Gesundheit.", "Man kann neue Menschen kennenlernen.", "Ein neues Ziel kann motivieren."],
    cons: ["Kurse oder Ausrüstung können teuer sein.", "Am Anfang besteht bei falscher Technik ein Verletzungsrisiko.", "Fortschritte brauchen Zeit und regelmäßiges Üben."],
    opinion: { de: "Ich würde mit einem Anfängerkurs starten, weil man dort sicher und in einer Gruppe lernen kann.", en: "I would start with a beginner class because you can learn safely in a group." },
    conclusion: { de: "Mit einem passenden Einstieg und realistischen Zielen kann eine neue Sportart langfristig Freude machen.", en: "With a suitable start and realistic goals, a new sport can be enjoyable in the long term." },
    keywords: ["Anfängerkurs", "Grundlagen", "Freunde", "regelmäßig", "Ausrüstung", "Verletzungsrisiko"],
  },
  {
    slug: "gebrauchte-geraete-kaufen", title: "Gebrauchte Geräte kaufen", titleEn: "Buying second-hand devices", level: "B2",
    tags: ["Technologie", "Nachhaltigkeit", "Elektronik", "Gebrauchtkauf", "technology", "second-hand"],
    thema: { de: "Gebrauchte Smartphones und Computer sind oft günstiger als neue Geräte. Worauf sollte man beim Kauf achten?", en: "Used smartphones and computers are often cheaper than new devices. What should buyers consider?" },
    options: [
      { title: "Ein geprüftes Gerät mit Garantie wählen", explanation: "Bei professionell geprüften Geräten gibt es oft eine kurze Garantie und klare Angaben zum Zustand.", en: "Professionally refurbished devices often include a short warranty and clear condition details.", sentence: "Ich würde ein geprüftes Gerät mit Garantie bevorzugen." },
      { title: "Privat vor Ort testen", explanation: "Beim persönlichen Treffen kann man Funktionen prüfen und Fragen direkt stellen.", en: "Meeting in person lets you test functions and ask questions directly.", sentence: "Vor dem Kauf teste ich Akku, Display und Anschlüsse." },
      { title: "Reparatur und Ersatzteile prüfen", explanation: "Ein günstiges Gerät lohnt sich eher, wenn Ersatzteile verfügbar und Reparaturen möglich sind.", en: "A low-cost device is more worthwhile when parts are available and repairs are possible.", sentence: "Ich informiere mich zuerst über Ersatzteile und Reparaturen." },
    ],
    pros: ["Man spart häufig Geld.", "Die Nutzungsdauer von Elektronik wird verlängert.", "Weniger Neuproduktion kann Ressourcen schonen."],
    cons: ["Der Zustand ist nicht immer leicht einzuschätzen.", "Akku und Software können bereits veraltet sein.", "Bei einem Privatkauf gibt es oft keine Garantie."],
    opinion: { de: "Ich halte gebrauchte Geräte für eine gute Wahl, wenn Zustand, Preis und Rückgabemöglichkeit transparent sind.", en: "I consider used devices a good choice when condition, price and return options are transparent." },
    conclusion: { de: "Wer sorgfältig prüft und ein passendes Gerät auswählt, kann Geld sparen und Elektronik länger nutzen.", en: "Careful checking can save money and keep electronics in use longer." },
    keywords: ["geprüft", "Garantie", "Akku", "vor Ort testen", "Ersatzteile", "Ressourcen"],
  },
  {
    slug: "unterkunft-bei-einer-reise", title: "Unterkunft bei einer Reise", titleEn: "Choosing accommodation when travelling", level: "B1",
    tags: ["Reisen", "Hotel", "Unterkunft", "Urlaub", "travel", "accommodation"],
    thema: { de: "Bei einer Reise kann man zwischen verschiedenen Unterkünften wählen. Welche Unterkunft passt zu welchen Bedürfnissen?", en: "Travellers can choose between different types of accommodation. Which option suits which needs?" },
    options: [
      { title: "In einem Hotel übernachten", explanation: "Ein Hotel bietet oft Service, Rezeption und Frühstück, kostet aber häufig mehr.", en: "Hotels often provide service, a reception desk and breakfast, but can cost more.", sentence: "Ein Hotel ist praktisch, wenn ich wenig organisieren möchte." },
      { title: "Eine Ferienwohnung buchen", explanation: "Eine Wohnung bietet mehr Platz und eine Küche, besonders für längere Aufenthalte.", en: "An apartment offers more space and a kitchen, especially for longer stays.", sentence: "Mit einer Küche kann ich auf Reisen Geld sparen." },
      { title: "Bei Freunden oder in einer Jugendherberge wohnen", explanation: "Diese Möglichkeiten können günstiger sein und mehr Kontakt zu anderen Menschen bieten.", en: "These choices may be cheaper and provide more contact with other people.", sentence: "Eine Jugendherberge ist eine gute Möglichkeit, andere Reisende kennenzulernen." },
    ],
    pros: ["Hotels sind bequem und bieten Service.", "Ferienwohnungen eignen sich für längere Aufenthalte.", "Gemeinschaftsunterkünfte können günstig und gesellig sein."],
    cons: ["Hotels sind in beliebten Regionen oft teuer.", "Bei Wohnungen muss man manchmal selbst kochen und aufräumen.", "Gemeinschaftsräume bieten weniger Privatsphäre."],
    opinion: { de: "Ich wähle die Unterkunft nach Reisedauer und Budget; für längere Reisen finde ich eine Ferienwohnung praktisch.", en: "I choose accommodation according to trip length and budget; for longer trips, I find an apartment practical." },
    conclusion: { de: "Die beste Unterkunft hängt davon ab, ob Komfort, Preis, Platz oder Kontakte am wichtigsten sind.", en: "The best accommodation depends on whether comfort, price, space or social contact matters most." },
    keywords: ["Hotel", "Ferienwohnung", "Jugendherberge", "Service", "Küche", "Privatsphäre"],
  },
  {
    slug: "neue-kultur-kennenlernen", title: "Neue Kultur kennenlernen", titleEn: "Discovering a new culture", level: "B2",
    tags: ["Kultur", "Reisen", "Sprache", "Austausch", "culture", "travel"],
    thema: { de: "Wer eine neue Kultur kennenlernt, kann andere Lebensweisen und Perspektiven entdecken. Welche Wege eignen sich dafür?", en: "Learning about a new culture can reveal different ways of life and perspectives. What are good ways to do this?" },
    options: [
      { title: "Mit Menschen vor Ort sprechen", explanation: "Gespräche im Alltag helfen dabei, persönliche Erfahrungen und Sichtweisen kennenzulernen.", en: "Everyday conversations help you learn about personal experiences and viewpoints.", sentence: "Ich frage respektvoll nach, wenn mich eine Tradition interessiert." },
      { title: "Kulturelle Veranstaltungen besuchen", explanation: "Feste, Ausstellungen und Konzerte machen Geschichte und Gegenwart einer Kultur erlebbar.", en: "Festivals, exhibitions and concerts make a culture's history and present tangible.", sentence: "Bei kulturellen Veranstaltungen kann ich viel über die Region erfahren." },
      { title: "Sprache und Medien nutzen", explanation: "Filme, Bücher und Sprachkurse vermitteln Einblicke und helfen, Zusammenhänge besser zu verstehen.", en: "Films, books and language courses provide insight and help explain context.", sentence: "Wenn ich die Sprache lerne, verstehe ich auch kulturelle Feinheiten besser." },
    ],
    pros: ["Man entwickelt Verständnis für andere Perspektiven.", "Sprachkenntnisse und Offenheit können wachsen.", "Gemeinsame Interessen verbinden Menschen."],
    cons: ["Klischees können den Blick auf eine Kultur verzerren.", "Sprachbarrieren erschweren manchmal Gespräche.", "Ein kurzer Besuch vermittelt nur einen begrenzten Eindruck."],
    opinion: { de: "Am besten lernt man eine Kultur durch persönliche Begegnungen und gleichzeitig durch verlässliche Informationen kennen.", en: "The best way to learn about a culture is through personal encounters alongside reliable information." },
    conclusion: { de: "Neugier und Respekt helfen, eine Kultur differenziert statt oberflächlich kennenzulernen.", en: "Curiosity and respect help people understand a culture in a nuanced rather than superficial way." },
    keywords: ["Begegnungen", "Veranstaltungen", "Sprache", "Perspektiven", "Klischees", "Respekt"],
  },
  {
    slug: "stress-vermeiden", title: "Stress vermeiden", titleEn: "Preventing stress", level: "B1",
    tags: ["Gesundheit", "Stress", "Alltag", "Entspannung", "health", "wellbeing"],
    thema: { de: "Viele Menschen fühlen sich im Alltag gestresst. Welche Gewohnheiten können dabei helfen, Stress vorzubeugen?", en: "Many people feel stressed in everyday life. What habits can help prevent stress?" },
    options: [
      { title: "Aufgaben planen", explanation: "Eine realistische Tagesplanung macht wichtige Aufgaben sichtbar und verhindert, dass alles gleichzeitig erledigt werden muss.", en: "A realistic daily plan makes priorities clear and prevents everything from feeling urgent at once.", sentence: "Ich plane zuerst die wichtigsten Aufgaben des Tages." },
      { title: "Regelmäßige Pausen machen", explanation: "Kurze Pausen geben dem Körper und dem Kopf Zeit, sich zu erholen.", en: "Short breaks give the body and mind time to recover.", sentence: "Nach einer konzentrierten Arbeitsphase mache ich eine kurze Pause." },
      { title: "Bewegung und Schlaf beachten", explanation: "Spaziergänge und ausreichend Schlaf können helfen, Anspannung abzubauen.", en: "Walks and enough sleep can help reduce tension.", sentence: "Ein Spaziergang hilft mir, nach der Arbeit abzuschalten." },
    ],
    pros: ["Planung schafft mehr Übersicht.", "Pausen können Konzentration und Wohlbefinden unterstützen.", "Bewegung ist oft einfach in den Alltag einzubauen."],
    cons: ["Nicht alle Belastungen lassen sich selbst beeinflussen.", "Pausen und Freizeit brauchen Platz im Tagesplan.", "Neue Gewohnheiten müssen regelmäßig geübt werden."],
    opinion: { de: "Für mich sind realistische Planung und kleine Pausen besonders wichtig, weil sie im Alltag gut umsetzbar sind.", en: "Realistic planning and short breaks matter most to me because they are easy to use in daily life." },
    conclusion: { de: "Stress lässt sich nicht immer vermeiden, aber gute Gewohnheiten können den Umgang damit erleichtern.", en: "Stress cannot always be avoided, but good habits can make it easier to manage." },
    keywords: ["Prioritäten", "Planung", "Pausen", "Bewegung", "Schlaf", "abschalten"],
  },
  {
    slug: "energie-sparen-am-arbeitsplatz", title: "Energie sparen am Arbeitsplatz", titleEn: "Saving energy at work", level: "B2",
    tags: ["Arbeit", "Energie", "Umwelt", "Büro", "work", "energy"],
    thema: { de: "Auch am Arbeitsplatz kann man Energie sparen. Welche Maßnahmen sind im Büro oder Betrieb sinnvoll?", en: "Energy can also be saved at work. Which measures make sense in an office or workplace?" },
    options: [
      { title: "Licht und Geräte ausschalten", explanation: "Licht und Geräte sollten ausgeschaltet werden, wenn sie nicht gebraucht werden.", en: "Lights and devices should be switched off when they are not needed.", sentence: "Nach der Arbeit schalte ich meinen Bildschirm vollständig aus." },
      { title: "Energiesparende Technik einsetzen", explanation: "Effiziente Beleuchtung und moderne Geräte verbrauchen oft weniger Strom.", en: "Efficient lighting and modern equipment often use less electricity.", sentence: "Energiesparende Geräte senken den Verbrauch langfristig." },
      { title: "Arbeitsabläufe gemeinsam verbessern", explanation: "Ein Team kann prüfen, wo unnötiger Verbrauch entsteht, und gemeinsame Regeln vereinbaren.", en: "A team can identify waste and agree on shared practices.", sentence: "Im Team können wir einfache Energiesparregeln festlegen." },
    ],
    pros: ["Der Stromverbrauch und die Betriebskosten sinken.", "Gemeinsame Maßnahmen stärken das Umweltbewusstsein.", "Effiziente Geräte können langfristig Kosten sparen."],
    cons: ["Neue Technik kann zunächst teuer sein.", "Regeln funktionieren nur, wenn alle mitmachen.", "Nicht jede Arbeitsumgebung lässt sich kurzfristig modernisieren."],
    opinion: { de: "Ich würde mit einfachen Regeln beginnen und bei Neuanschaffungen auf effiziente Technik achten.", en: "I would start with simple practices and choose efficient equipment when replacing devices." },
    conclusion: { de: "Wenn Beschäftigte und Leitung gemeinsam handeln, lässt sich am Arbeitsplatz spürbar Energie sparen.", en: "When staff and management act together, workplaces can save a meaningful amount of energy." },
    keywords: ["Licht ausschalten", "Stand-by", "effiziente Geräte", "Teamregeln", "Stromverbrauch", "Kosten"],
  },
  {
    slug: "neue-stadt-kennenlernen", title: "Eine neue Stadt kennenlernen", titleEn: "Getting to know a new city", level: "B1",
    tags: ["Stadt", "Wohnen", "Freizeit", "Orientierung", "city", "moving"],
    thema: { de: "Nach einem Umzug braucht man Zeit, um sich in einer neuen Stadt zurechtzufinden. Wie kann man sie entdecken?", en: "After moving, it takes time to find your way around a new city. How can you explore it?" },
    options: [
      { title: "Zu Fuß oder mit dem Fahrrad unterwegs sein", explanation: "Beim langsamen Erkunden entdeckt man Straßen, Geschäfte und Parks leichter.", en: "Exploring slowly helps you notice streets, shops and parks.", sentence: "Ich erkunde neue Viertel gern zu Fuß." },
      { title: "Öffentliche Verkehrsmittel ausprobieren", explanation: "Bus und Bahn helfen, verschiedene Stadtteile zu erreichen und wichtige Verbindungen kennenzulernen.", en: "Buses and trains help you reach different districts and learn key routes.", sentence: "Mit Bus und Bahn lerne ich die Wege in der Stadt kennen." },
      { title: "An lokalen Aktivitäten teilnehmen", explanation: "Märkte, Veranstaltungen oder Gruppen bieten Kontakte und zeigen das Leben vor Ort.", en: "Markets, events and groups provide social contact and show local life.", sentence: "Bei einem Stadtteilfest kann ich die Nachbarschaft kennenlernen." },
    ],
    pros: ["Man findet wichtige Orte im Alltag schneller.", "Aktivitäten vor Ort können neue Kontakte schaffen.", "Zu Fuß entdeckt man auch weniger bekannte Ecken."],
    cons: ["Eine große Stadt lässt sich nicht sofort überblicken.", "Öffentliche Verkehrsmittel können kompliziert wirken.", "Veranstaltungen passen nicht immer zum eigenen Zeitplan."],
    opinion: { de: "Ich würde zuerst die Umgebung zu Fuß erkunden und danach nach Aktivitäten in der Nähe suchen.", en: "I would first explore the area on foot and then look for nearby activities." },
    conclusion: { de: "Mit kleinen regelmäßigen Ausflügen wird eine fremde Stadt Schritt für Schritt vertrauter.", en: "Small regular outings gradually make an unfamiliar city feel more familiar." },
    keywords: ["zu Fuß", "Fahrrad", "Bus und Bahn", "Stadtteile", "Veranstaltungen", "Orientierung"],
  },
  {
    slug: "energie-sparen", title: "Energie sparen", titleEn: "Saving energy at home", level: "B1",
    tags: ["Energie", "Haushalt", "Umwelt", "Strom", "energy", "home"],
    thema: { de: "Energie zu sparen ist gut für die Umwelt und kann die Kosten senken. Was kann man zu Hause tun?", en: "Saving energy is good for the environment and can reduce costs. What can people do at home?" },
    options: [
      { title: "Heizung bewusst einstellen", explanation: "Eine passende Raumtemperatur und kurzes Stoßlüften können beim Heizen Energie sparen.", en: "A suitable room temperature and brief airing can save heating energy.", sentence: "Ich lüfte kurz und drehe die Heizung danach wieder herunter." },
      { title: "Stand-by vermeiden", explanation: "Geräte ganz auszuschalten verhindert, dass sie unnötig Strom verbrauchen.", en: "Turning devices off completely prevents unnecessary electricity use.", sentence: "Mit einer schaltbaren Steckdosenleiste vermeide ich Stand-by." },
      { title: "Effiziente Geräte nutzen", explanation: "Beim Neukauf kann man auf den Verbrauch achten und ein sparsames Gerät wählen.", en: "When replacing an appliance, you can compare consumption and choose an efficient model.", sentence: "Vor dem Kauf vergleiche ich den Energieverbrauch." },
    ],
    pros: ["Man kann die monatlichen Kosten senken.", "Weniger Verbrauch entlastet Umwelt und Versorgung.", "Viele Maßnahmen sind leicht umzusetzen."],
    cons: ["Effiziente Geräte kosten beim Kauf manchmal mehr.", "Zu starkes Sparen beim Heizen kann ungesund sein.", "Man muss den eigenen Verbrauch im Blick behalten."],
    opinion: { de: "Ich finde einfache Maßnahmen wie richtiges Lüften und ausgeschaltete Geräte besonders sinnvoll.", en: "I find simple steps such as airing rooms properly and switching devices off especially useful." },
    conclusion: { de: "Schon kleine Veränderungen im Haushalt können den Energieverbrauch dauerhaft verringern.", en: "Even small changes at home can reduce energy use over time." },
    keywords: ["Heizung", "Stoßlüften", "Stand-by", "Geräte", "Verbrauch", "Kosten"],
  },
  {
    slug: "online-neues-lernen", title: "Online Neues lernen", titleEn: "Learning new things online", level: "B1",
    tags: ["Lernen", "Internet", "Weiterbildung", "Kurs", "learning", "online"],
    thema: { de: "Im Internet gibt es viele Möglichkeiten, neue Kenntnisse zu erwerben. Wie kann man online gut lernen?", en: "The internet offers many ways to gain new knowledge. How can people learn effectively online?" },
    options: [
      { title: "Einen strukturierten Onlinekurs machen", explanation: "Ein Kurs mit Lernplan und Aufgaben hilft dabei, Schritt für Schritt vorzugehen.", en: "A course with a learning plan and exercises helps you progress step by step.", sentence: "Ein fester Kursplan hilft mir, regelmäßig zu lernen." },
      { title: "Lernvideos und Podcasts nutzen", explanation: "Kurze Videos oder Podcasts lassen sich flexibel in den Alltag integrieren.", en: "Short videos and podcasts can be fitted flexibly into everyday life.", sentence: "Ich höre einen Lernpodcast auf dem Weg zur Arbeit." },
      { title: "Mit einer Lerngruppe üben", explanation: "Online kann man sich mit anderen austauschen und Fragen gemeinsam klären.", en: "Online groups let learners exchange ideas and solve questions together.", sentence: "In einer Lerngruppe bleibe ich motivierter." },
    ],
    pros: ["Man kann zeitlich und örtlich flexibel lernen.", "Es gibt viele kostenlose Materialien.", "Das Lerntempo lässt sich oft selbst bestimmen."],
    cons: ["Ablenkungen im Internet sind häufig.", "Nicht alle Informationen sind zuverlässig.", "Beim alleinigen Lernen fehlt manchmal persönlicher Austausch."],
    opinion: { de: "Online-Lernen funktioniert für mich am besten mit einem klaren Plan und regelmäßigen praktischen Übungen.", en: "Online learning works best for me with a clear plan and regular practical exercises." },
    conclusion: { de: "Mit passenden Materialien und festen Lernzeiten kann man online sehr selbstständig lernen.", en: "With suitable materials and regular study times, people can learn independently online." },
    keywords: ["Onlinekurs", "Lernplan", "Videos", "Podcast", "Lerngruppe", "Ablenkung"],
  },
  {
    slug: "vier-tage-arbeitswoche", title: "4-Tage-Arbeitswoche", titleEn: "The four-day workweek", level: "B2",
    tags: ["Arbeit", "Arbeitszeit", "Vereinbarkeit", "Produktivität", "work", "working hours"],
    thema: { de: "Eine 4-Tage-Arbeitswoche könnte mehr Freizeit ermöglichen. Welche Modelle und Folgen sind denkbar?", en: "A four-day workweek could provide more free time. What models and consequences are possible?" },
    options: [
      { title: "Die gleiche Stundenzahl auf vier Tage verteilen", explanation: "Längere Arbeitstage lassen einen zusätzlichen freien Tag entstehen, können aber anstrengend sein.", en: "Longer workdays create an extra day off but can be tiring.", sentence: "Bei diesem Modell bleibt die Wochenarbeitszeit gleich." },
      { title: "Die Wochenarbeitszeit reduzieren", explanation: "Weniger Stunden bei vollem Lohn können die Erholung verbessern, erfordern aber eine gute Organisation.", en: "Fewer hours at full pay may improve recovery but require careful organization.", sentence: "Eine kürzere Arbeitswoche kann die Erholung verbessern." },
      { title: "Flexible Modelle je nach Team einführen", explanation: "Teams können Arbeitszeiten an Aufgaben und Kundenkontakt anpassen.", en: "Teams can adapt schedules to tasks and customer needs.", sentence: "Ein flexibles Modell passt sich besser an verschiedene Berufe an." },
    ],
    pros: ["Beschäftigte gewinnen mehr zusammenhängende Freizeit.", "Eine bessere Erholung kann die Zufriedenheit erhöhen.", "Weniger Pendeltage sparen Zeit und Wege."],
    cons: ["Längere Tage können die Konzentration beeinträchtigen.", "In manchen Berufen ist eine tägliche Besetzung nötig.", "Die Umstellung verlangt klare Absprachen und Planung."],
    opinion: { de: "Ich unterstütze eine 4-Tage-Woche, wenn die Arbeitslast realistisch bleibt und Teams das Modell passend organisieren können.", en: "I support a four-day week if workloads remain realistic and teams can organize it appropriately." },
    conclusion: { de: "Ob eine 4-Tage-Woche funktioniert, hängt vom Beruf, der Arbeitsmenge und einer guten Planung ab.", en: "Whether a four-day week works depends on the occupation, workload and good planning." },
    keywords: ["Arbeitszeit", "freier Tag", "Erholung", "Produktivität", "Kundenkontakt", "Planung"],
  },
  {
    slug: "praktikum-waehrend-des-studiums", title: "Praktikum während des Studiums", titleEn: "Internships during university", level: "B2",
    tags: ["Studium", "Berufserfahrung", "Praktikum", "Karriere", "university", "internship"],
    thema: { de: "Ein Praktikum während des Studiums kann den Berufseinstieg erleichtern. Welche Möglichkeiten und Herausforderungen gibt es?", en: "An internship during university may ease the transition to work. What options and challenges are there?" },
    options: [
      { title: "Ein Pflichtpraktikum absolvieren", explanation: "Ein Pflichtpraktikum verbindet das Studium mit praktischen Einblicken in ein Berufsfeld.", en: "A required internship connects studies with practical experience in a field.", sentence: "Im Pflichtpraktikum kann ich mein Wissen praktisch anwenden." },
      { title: "In den Semesterferien arbeiten", explanation: "Ein Ferienpraktikum lässt sich oft besser mit Vorlesungen und Prüfungen vereinbaren.", en: "A vacation internship may be easier to combine with classes and exams.", sentence: "Die Semesterferien eignen sich gut für ein längeres Praktikum." },
      { title: "Teilzeit oder remote mitarbeiten", explanation: "Eine flexible Tätigkeit während des Semesters bietet Erfahrung, muss aber zeitlich begrenzt werden.", en: "Flexible or remote work during term provides experience but needs clear time limits.", sentence: "Ein Teilzeitpraktikum lässt sich besser neben dem Studium planen." },
    ],
    pros: ["Studierende sammeln relevante Berufserfahrung.", "Kontakte können den späteren Berufseinstieg erleichtern.", "Man kann prüfen, ob ein Beruf wirklich passt."],
    cons: ["Ein Praktikum kann Zeit für Prüfungen und Erholung nehmen.", "Nicht jedes Praktikum ist gut bezahlt.", "Zu viele Arbeitsstunden können den Studienerfolg erschweren."],
    opinion: { de: "Ein Praktikum ist wertvoll, wenn die Aufgaben lehrreich sind und genügend Zeit für das Studium bleibt.", en: "An internship is valuable when the tasks are educational and enough time remains for studies." },
    conclusion: { de: "Mit guter Planung kann ein Praktikum Studium und Berufserfahrung sinnvoll verbinden.", en: "With good planning, an internship can connect academic study and work experience effectively." },
    keywords: ["Pflichtpraktikum", "Semesterferien", "Berufserfahrung", "Kontakte", "Prüfungen", "Zeit planen"],
  },
  {
    slug: "fit-bleiben", title: "Fit bleiben", titleEn: "Staying fit", level: "B1",
    tags: ["Gesundheit", "Fitness", "Bewegung", "Sport", "health", "fitness"],
    thema: { de: "Viele Menschen möchten im Alltag fit bleiben. Welche Gewohnheiten helfen dabei?", en: "Many people want to stay fit in everyday life. Which habits can help?" },
    options: [
      { title: "Regelmäßig Sport treiben", explanation: "Feste Trainingszeiten machen es leichter, Bewegung zur Gewohnheit zu machen.", en: "Set training times make it easier to turn exercise into a habit.", sentence: "Ich trage meine Trainingstermine in den Kalender ein." },
      { title: "Mehr Alltagsbewegung einbauen", explanation: "Treppen, Spaziergänge und kurze Wege mit dem Rad bringen zusätzliche Bewegung.", en: "Stairs, walks and short bike trips add movement to the day.", sentence: "Für kurze Wege nehme ich lieber das Fahrrad." },
      { title: "Auf Erholung und Ernährung achten", explanation: "Ausreichender Schlaf und eine ausgewogene Ernährung unterstützen das allgemeine Wohlbefinden.", en: "Enough sleep and a balanced diet support overall wellbeing.", sentence: "Für meine Fitness sind Schlaf und Ernährung genauso wichtig wie Sport." },
    ],
    pros: ["Regelmäßige Bewegung stärkt Körper und Wohlbefinden.", "Kleine Gewohnheiten lassen sich gut in den Alltag einbauen.", "Sport kann beim Stressabbau helfen."],
    cons: ["Ein voller Alltag erschwert regelmäßiges Training.", "Zu hohe Ziele können schnell entmutigen.", "Manche Sportangebote kosten Geld."],
    opinion: { de: "Am wichtigsten ist für mich eine Bewegung, die Spaß macht und dauerhaft in den Alltag passt.", en: "The most important thing to me is choosing exercise that is enjoyable and sustainable." },
    conclusion: { de: "Fit zu bleiben gelingt am besten mit realistischen, regelmäßigen Gewohnheiten.", en: "Staying fit works best with realistic, regular habits." },
    keywords: ["Sport", "Alltagsbewegung", "Fahrrad", "Schlaf", "Ernährung", "realistische Ziele"],
  },
  {
    slug: "teamarbeit", title: "Teamarbeit", titleEn: "Teamwork", level: "B2",
    tags: ["Arbeit", "Zusammenarbeit", "Kommunikation", "Team", "work", "collaboration"],
    thema: { de: "In vielen Berufen arbeiten Menschen im Team. Was macht gute Teamarbeit aus und wie kann sie gelingen?", en: "Many people work in teams. What makes teamwork effective and how can it succeed?" },
    options: [
      { title: "Aufgaben klar verteilen", explanation: "Wenn Zuständigkeiten klar sind, wissen alle, woran sie arbeiten und wer bei Fragen helfen kann.", en: "Clear responsibilities help everyone know what they are working on and whom to ask for help.", sentence: "Am Anfang eines Projekts klären wir die Zuständigkeiten." },
      { title: "Regelmäßig miteinander sprechen", explanation: "Kurze Besprechungen helfen, Informationen zu teilen und Probleme früh zu erkennen.", en: "Brief check-ins help share information and identify problems early.", sentence: "Ein kurzes Teamgespräch verhindert viele Missverständnisse." },
      { title: "Unterschiedliche Stärken nutzen", explanation: "Ein Team profitiert davon, wenn Aufgaben passend zu den Fähigkeiten der Mitglieder verteilt werden.", en: "A team benefits when tasks are matched to members' strengths.", sentence: "Wir teilen die Aufgaben nach unseren jeweiligen Stärken auf." },
    ],
    pros: ["Verschiedene Perspektiven können bessere Lösungen ermöglichen.", "Aufgaben lassen sich gemeinsam bewältigen.", "Teammitglieder können voneinander lernen."],
    cons: ["Unklare Kommunikation führt zu Missverständnissen.", "Entscheidungen können länger dauern.", "Konflikte müssen offen und respektvoll gelöst werden."],
    opinion: { de: "Gute Teamarbeit braucht klare Absprachen, gegenseitigen Respekt und zuverlässige Kommunikation.", en: "Good teamwork requires clear agreements, mutual respect and reliable communication." },
    conclusion: { de: "Wenn alle Verantwortung übernehmen und Informationen teilen, kann ein Team seine Ziele besser erreichen.", en: "When everyone takes responsibility and shares information, a team can reach its goals more effectively." },
    keywords: ["Aufgaben verteilen", "Kommunikation", "Stärken", "Respekt", "Konflikte", "gemeinsames Ziel"],
  },
  {
    slug: "sich-um-eine-neue-stelle-bewerben", title: "Sich um eine neue Stelle bewerben", titleEn: "Applying for a new job", level: "B2",
    tags: ["Arbeit", "Bewerbung", "Karriere", "Stelle", "work", "job application"],
    thema: { de: "Bei einer Bewerbung muss man passende Stellen finden und seine Fähigkeiten überzeugend darstellen. Wie kann man vorgehen?", en: "A job application requires finding suitable roles and presenting your skills convincingly. How can you approach it?" },
    options: [
      { title: "Stellenanzeigen gezielt suchen", explanation: "Wer Anforderungen und Aufgaben genau vergleicht, kann passende Stellen auswählen.", en: "Comparing requirements and responsibilities helps identify suitable jobs.", sentence: "Ich prüfe zuerst, ob die Aufgaben zu meinen Fähigkeiten passen." },
      { title: "Bewerbungsunterlagen vorbereiten", explanation: "Ein übersichtlicher Lebenslauf und ein persönliches Anschreiben zeigen relevante Erfahrungen.", en: "A clear CV and tailored cover letter present relevant experience.", sentence: "Ich passe mein Anschreiben an jede Stelle an." },
      { title: "Kontakte und Beratung nutzen", explanation: "Beratungsstellen und berufliche Kontakte können Hinweise auf offene Stellen und Bewerbungswege geben.", en: "Career services and professional contacts can point to openings and application routes.", sentence: "Ich lasse meine Unterlagen vor dem Abschicken prüfen." },
    ],
    pros: ["Eine gezielte Suche spart Zeit.", "Gute Unterlagen machen die eigenen Fähigkeiten sichtbar.", "Kontakte können zusätzliche Möglichkeiten eröffnen."],
    cons: ["Die Suche und Vorbereitung kosten Zeit.", "Absagen können entmutigend sein.", "Anforderungen in Anzeigen sind manchmal schwer einzuschätzen."],
    opinion: { de: "Ich würde strukturiert suchen, meine Unterlagen auf jede Stelle anpassen und bei Bedarf Beratung nutzen.", en: "I would search systematically, tailor my documents to each role and seek advice when needed." },
    conclusion: { de: "Mit Vorbereitung und einer realistischen Auswahl steigen die Chancen auf eine passende Stelle.", en: "Preparation and realistic choices improve the chances of finding a suitable role." },
    keywords: ["Stellenanzeige", "Anforderungen", "Lebenslauf", "Anschreiben", "Beratung", "Absage"],
  },
  {
    slug: "stress-am-arbeitsplatz", title: "Umgang mit Stress am Arbeitsplatz", titleEn: "Managing stress at work", level: "B2",
    tags: ["Arbeit", "Stress", "Gesundheit", "Arbeitsorganisation", "work", "stress"],
    thema: { de: "Zeitdruck und viele Aufgaben können bei der Arbeit Stress verursachen. Wie kann man damit umgehen?", en: "Deadlines and many tasks can cause stress at work. How can people manage it?" },
    options: [
      { title: "Aufgaben priorisieren", explanation: "Eine Prioritätenliste hilft, dringende und wichtige Aufgaben voneinander zu unterscheiden.", en: "A priority list helps distinguish urgent tasks from important ones.", sentence: "Ich bespreche mit meinem Team, welche Aufgabe zuerst erledigt werden muss." },
      { title: "Frühzeitig Unterstützung ansprechen", explanation: "Wer Überlastung rechtzeitig anspricht, kann gemeinsam mit dem Team eine Lösung suchen.", en: "Raising overload early makes it possible to find a solution with the team.", sentence: "Wenn ich zu viele Aufgaben habe, spreche ich es früh an." },
      { title: "Pausen und Grenzen einhalten", explanation: "Kurze Erholung und klare Arbeitszeiten helfen, langfristig leistungsfähig zu bleiben.", en: "Short breaks and clear working hours help maintain performance over time.", sentence: "Nach Feierabend versuche ich, nicht ständig meine Nachrichten zu prüfen." },
    ],
    pros: ["Prioritäten geben mehr Übersicht.", "Frühe Gespräche können Probleme verhindern.", "Pausen unterstützen Konzentration und Gesundheit."],
    cons: ["Arbeitsdruck lässt sich nicht immer selbst steuern.", "Überlastung anzusprechen kann Überwindung kosten.", "In manchen Betrieben fehlen klare Vertretungsregeln."],
    opinion: { de: "Stress sollte nicht als persönliches Versagen gelten; wichtig sind realistische Aufgaben und offene Gespräche.", en: "Stress should not be treated as a personal failure; realistic workloads and open conversations matter." },
    conclusion: { de: "Ein guter Umgang mit Arbeitsstress braucht individuelle Strategien und Unterstützung im Betrieb.", en: "Managing work stress well requires personal strategies and workplace support." },
    keywords: ["Prioritäten", "Zeitdruck", "Unterstützung", "Pausen", "Grenzen", "offenes Gespräch"],
  },
  {
    slug: "ein-land-kennenlernen", title: "Ein Land kennenlernen", titleEn: "Getting to know a country", level: "B1",
    tags: ["Reisen", "Land", "Kultur", "Sprache", "travel", "country"],
    thema: { de: "Ein Land kann man auf unterschiedliche Weise kennenlernen. Welche Erfahrungen helfen, mehr als nur Sehenswürdigkeiten zu sehen?", en: "There are different ways to get to know a country. What helps you experience more than just tourist attractions?" },
    options: [
      { title: "Mehrere Regionen besuchen", explanation: "Verschiedene Regionen zeigen, wie vielfältig Landschaft, Alltag und Traditionen sein können.", en: "Different regions reveal variety in landscapes, daily life and traditions.", sentence: "Ich möchte nicht nur die Hauptstadt, sondern auch kleinere Orte besuchen." },
      { title: "Mit Menschen vor Ort sprechen", explanation: "Gespräche und gemeinsame Aktivitäten vermitteln persönliche Eindrücke vom Leben im Land.", en: "Conversations and shared activities provide personal impressions of life in the country.", sentence: "Durch Gespräche lerne ich den Alltag besser kennen." },
      { title: "Sprache und Geschichte entdecken", explanation: "Grundkenntnisse der Sprache und Informationen zur Geschichte helfen, Orte besser zu verstehen.", en: "Basic language skills and historical context help you understand places better.", sentence: "Ein wenig Sprache macht eine Reise persönlicher." },
    ],
    pros: ["Man entwickelt ein vielfältigeres Bild des Landes.", "Persönliche Kontakte können bereichernd sein.", "Sprache und Geschichte geben zusätzlichen Kontext."],
    cons: ["Reisen in viele Regionen kosten Zeit und Geld.", "Kurze Begegnungen zeigen nicht alle Seiten eines Landes.", "Sprachliche und kulturelle Unterschiede können verunsichern."],
    opinion: { de: "Ich lerne ein Land am besten kennen, wenn ich verschiedene Orte besuche und auch mit Menschen vor Ort spreche.", en: "I get to know a country best by visiting different places and speaking with local people." },
    conclusion: { de: "Eine Mischung aus Entdecken, Gesprächen und Hintergrundwissen macht eine Reise besonders interessant.", en: "A mix of exploration, conversation and background knowledge makes a trip especially interesting." },
    keywords: ["Regionen", "Alltag", "Gespräche", "Sprache", "Geschichte", "Perspektiven"],
  },
  {
    slug: "muell-vermeiden", title: "Müll vermeiden", titleEn: "Reducing waste", level: "B1",
    tags: ["Umwelt", "Müll", "Verpackung", "Haushalt", "environment", "waste"],
    thema: { de: "Im Alltag entsteht viel Müll, besonders durch Verpackungen und Einwegprodukte. Wie kann man Abfall vermeiden?", en: "Everyday life creates a lot of waste, especially from packaging and single-use products. How can waste be reduced?" },
    options: [
      { title: "Mehrwegprodukte verwenden", explanation: "Trinkflaschen, Brotdosen und Mehrwegbecher ersetzen viele Einwegartikel.", en: "Reusable bottles, lunch boxes and cups replace many disposable items.", sentence: "Ich nehme meine Trinkflasche und einen Mehrwegbecher mit." },
      { title: "Verpackungsarm einkaufen", explanation: "Lose Waren und größere Packungen können die Menge an Verpackungsmüll verringern.", en: "Loose goods and larger packs can reduce packaging waste.", sentence: "Beim Einkauf achte ich auf möglichst wenig Verpackung." },
      { title: "Reparieren und weitergeben", explanation: "Gegenstände können repariert, verkauft oder verschenkt werden, statt sofort im Müll zu landen.", en: "Items can be repaired, sold or given away instead of being thrown out.", sentence: "Bevor ich etwas wegwerfe, prüfe ich, ob man es reparieren kann." },
    ],
    pros: ["Weniger Abfall muss entsorgt werden.", "Wiederverwendung spart oft Ressourcen und Geld.", "Reparieren verlängert die Lebensdauer von Produkten."],
    cons: ["Verpackungsarme Angebote sind nicht überall verfügbar.", "Mehrweg erfordert Planung und Reinigung.", "Reparaturen können zeitaufwendig oder teuer sein."],
    opinion: { de: "Ich beginne mit Mehrweg und Reparaturen, weil beide Maßnahmen im Alltag gut umsetzbar sind.", en: "I would start with reusables and repairs because both are practical in everyday life." },
    conclusion: { de: "Am wirksamsten ist es, Müll gar nicht erst entstehen zu lassen und Dinge länger zu nutzen.", en: "The most effective approach is to prevent waste and use things for longer." },
    keywords: ["Mehrweg", "Verpackung", "reparieren", "weitergeben", "Einweg", "Ressourcen"],
  },
  {
    slug: "zeitmanagement", title: "Zeitmanagement", titleEn: "Time management", level: "B1",
    tags: ["Zeit", "Planung", "Arbeit", "Studium", "time", "organization"],
    thema: { de: "Viele Menschen müssen Arbeit, Lernen und Freizeit miteinander vereinbaren. Welche Methoden helfen beim Zeitmanagement?", en: "Many people have to balance work, study and free time. Which methods help with time management?" },
    options: [
      { title: "Eine Tagesliste schreiben", explanation: "Eine kurze Liste macht Aufgaben sichtbar und hilft, den Tag realistisch zu planen.", en: "A short list makes tasks visible and helps plan the day realistically.", sentence: "Ich notiere am Morgen die drei wichtigsten Aufgaben." },
      { title: "Feste Zeitblöcke einplanen", explanation: "Wenn man ähnliche Aufgaben bündelt, kann man konzentrierter arbeiten und Unterbrechungen reduzieren.", en: "Grouping similar tasks can improve focus and reduce interruptions.", sentence: "Für konzentrierte Arbeit blockiere ich eine feste Zeit im Kalender." },
      { title: "Puffer und Pausen berücksichtigen", explanation: "Freie Zeit zwischen Terminen hilft, Verspätungen und unerwartete Aufgaben aufzufangen.", en: "Time between appointments helps absorb delays and unexpected tasks.", sentence: "Ich plane bewusst etwas Puffer zwischen zwei Terminen ein." },
    ],
    pros: ["Prioritäten werden klarer.", "Man kann Ablenkungen besser begrenzen.", "Puffer machen den Tagesplan realistischer."],
    cons: ["Zu genaue Planung kann unflexibel machen.", "Unerwartete Aufgaben verändern oft den Tagesablauf.", "Pausen werden leicht vergessen, wenn der Plan zu voll ist."],
    opinion: { de: "Ein einfacher Plan mit wenigen Prioritäten und genügend Pausen ist für mich hilfreicher als ein voller Terminkalender.", en: "A simple plan with a few priorities and enough breaks helps me more than a packed calendar." },
    conclusion: { de: "Gutes Zeitmanagement bedeutet nicht, jede Minute zu verplanen, sondern Wichtiges realistisch zu organisieren.", en: "Good time management does not mean scheduling every minute, but organizing important tasks realistically." },
    keywords: ["Prioritäten", "Tagesliste", "Zeitblöcke", "Puffer", "Pausen", "realistisch planen"],
  },
  {
    slug: "kinderbetreuung", title: "Kinderbetreuung", titleEn: "Childcare", level: "B2",
    tags: ["Familie", "Kinder", "Betreuung", "Arbeit", "family", "childcare"],
    thema: { de: "Familien brauchen verlässliche Kinderbetreuung, um Alltag und Beruf zu organisieren. Welche Betreuungsformen gibt es?", en: "Families need reliable childcare to organize everyday life and work. What forms of childcare are available?" },
    options: [
      { title: "Eine Kita besuchen", explanation: "In einer Kita werden Kinder von pädagogischen Fachkräften betreut und erleben eine Gruppe.", en: "At a daycare center, trained staff care for children in a group setting.", sentence: "Eine Kita bietet Betreuung und Kontakt zu anderen Kindern." },
      { title: "Eine Tagespflege nutzen", explanation: "Eine Tagespflegegruppe ist oft kleiner und kann eine persönlichere Betreuung ermöglichen.", en: "Childminding usually involves a smaller group and may offer more personal care.", sentence: "Eine kleinere Gruppe kann für manche Kinder gut passen." },
      { title: "Betreuung in der Familie organisieren", explanation: "Familienmitglieder können unterstützen, wenn Zeiten und Erwartungen klar abgesprochen sind.", en: "Relatives can help when schedules and expectations are clearly agreed.", sentence: "In der Familie teilen wir die Betreuungszeiten verbindlich auf." },
    ],
    pros: ["Professionelle Betreuung unterstützt die Entwicklung und den Alltag.", "Kleinere Gruppen können individuelle Aufmerksamkeit ermöglichen.", "Familienunterstützung kann flexibel und vertraut sein."],
    cons: ["Kita-Plätze sind nicht überall ausreichend verfügbar.", "Betreuungszeiten passen nicht immer zu den Arbeitszeiten.", "Familienhilfe kann Angehörige stark belasten."],
    opinion: { de: "Wichtig ist eine verlässliche und bezahlbare Betreuung, die zum Bedarf des Kindes und der Familie passt.", en: "Reliable and affordable childcare should fit the needs of both the child and the family." },
    conclusion: { de: "Gute Kinderbetreuung braucht passende Angebote, qualifiziertes Personal und Unterstützung für Familien.", en: "Good childcare requires suitable services, qualified staff and support for families." },
    keywords: ["Kita", "Tagespflege", "Familie", "Zeiten", "Fachkräfte", "Verlässlichkeit"],
  },
  {
    slug: "bewegung-im-alltag", title: "Bewegung im Alltag", titleEn: "Everyday movement", level: "B1",
    tags: ["Gesundheit", "Bewegung", "Alltag", "Sport", "health", "exercise"],
    thema: { de: "Wer viel sitzt, bewegt sich im Alltag oft zu wenig. Wie kann man mehr Bewegung in den Tag einbauen?", en: "People who sit a lot may not move enough. How can more activity be added to the day?" },
    options: [
      { title: "Treppen statt Aufzug nehmen", explanation: "Treppensteigen ist eine einfache Möglichkeit, kurze Bewegungseinheiten einzubauen.", en: "Taking the stairs is a simple way to add short bursts of activity.", sentence: "Wenn es möglich ist, nehme ich die Treppe." },
      { title: "Wege zu Fuß oder mit dem Rad machen", explanation: "Kurze Wege bieten sich an, um das Auto oder den Bus öfter stehen zu lassen.", en: "Short journeys are a good chance to walk or cycle instead of driving or taking the bus.", sentence: "Zum Bäcker gehe ich zu Fuß." },
      { title: "Bewegungspausen bei der Arbeit einplanen", explanation: "Kurzes Aufstehen und Dehnen unterbricht langes Sitzen und kann den Rücken entlasten.", en: "Standing and stretching briefly breaks up long periods of sitting and may ease the back.", sentence: "Einmal pro Stunde stehe ich kurz auf und bewege mich." },
    ],
    pros: ["Man braucht dafür oft keine besondere Ausrüstung.", "Kurze Einheiten lassen sich leicht verteilen.", "Regelmäßige Bewegung kann das Wohlbefinden verbessern."],
    cons: ["Bei schlechtem Wetter sind Wege zu Fuß weniger attraktiv.", "Arbeitsabläufe lassen nicht immer Bewegungspausen zu.", "Neue Gewohnheiten geraten im Stress leicht in Vergessenheit."],
    opinion: { de: "Ich finde kleine regelmäßige Bewegungspausen realistischer als den Vorsatz, jeden Tag lange Sport zu machen.", en: "I find short regular movement breaks more realistic than trying to do long workouts every day." },
    conclusion: { de: "Mit kleinen Änderungen kann man auch an einem vollen Tag aktiver sein.", en: "Small changes can make even a busy day more active." },
    keywords: ["Treppen", "zu Fuß", "Fahrrad", "Bewegungspause", "Sitzen", "Gewohnheit"],
  },
  {
    slug: "soziales-engagement", title: "Soziales Engagement", titleEn: "Community involvement", level: "B2",
    tags: ["Ehrenamt", "Gesellschaft", "Hilfe", "Gemeinschaft", "volunteering", "community"],
    thema: { de: "Viele Menschen engagieren sich freiwillig für andere oder für ihre Gemeinde. Welche Formen des Engagements sind möglich?", en: "Many people volunteer to support others or their community. What forms of involvement are possible?" },
    options: [
      { title: "In einem Verein helfen", explanation: "Vereine brauchen Unterstützung bei Veranstaltungen, Training oder organisatorischen Aufgaben.", en: "Clubs need help with events, coaching and organization.", sentence: "Im Verein kann ich meine Zeit und Fähigkeiten einbringen." },
      { title: "Menschen im Alltag unterstützen", explanation: "Man kann Nachbarn helfen, ältere Menschen begleiten oder bei Sprachcafés mitmachen.", en: "You can help neighbors, accompany older people or volunteer at language cafés.", sentence: "Schon regelmäßige kleine Hilfe kann für jemanden viel bedeuten." },
      { title: "Bei einem sozialen Projekt mitarbeiten", explanation: "Projekte in der Gemeinde setzen sich zum Beispiel für Umwelt, Bildung oder Teilhabe ein.", en: "Local projects may support the environment, education or inclusion.", sentence: "Ich würde gern ein Projekt unterstützen, das zu meinen Interessen passt." },
    ],
    pros: ["Engagement stärkt den Zusammenhalt.", "Freiwillige können praktische Erfahrungen sammeln.", "Man lernt Menschen mit ähnlichen Werten kennen."],
    cons: ["Ehrenamt kostet Zeit und Energie.", "Aufgaben und Verantwortung müssen klar sein.", "Nicht alle Menschen können sich unbezahlte Arbeit leisten."],
    opinion: { de: "Soziales Engagement sollte freiwillig bleiben und zu den zeitlichen Möglichkeiten der Person passen.", en: "Community involvement should remain voluntary and fit each person's available time." },
    conclusion: { de: "Auch ein kleiner regelmäßiger Beitrag kann die Gemeinschaft stärken.", en: "Even a small regular contribution can strengthen a community." },
    keywords: ["Verein", "Nachbarschaft", "Projekt", "Zeit", "Zusammenhalt", "freiwillig"],
  },
  {
    slug: "geld-sparen", title: "Geld sparen", titleEn: "Saving money", level: "B1",
    tags: ["Finanzen", "Geld", "Haushalt", "Budget", "money", "budget"],
    thema: { de: "Viele Menschen möchten Geld zurücklegen, ohne auf alles zu verzichten. Welche Strategien helfen dabei?", en: "Many people want to save money without giving everything up. Which strategies can help?" },
    options: [
      { title: "Ein monatliches Budget planen", explanation: "Ein Budget zeigt, welche Ausgaben regelmäßig anfallen und wo Spielraum bleibt.", en: "A budget shows regular expenses and where there is room to save.", sentence: "Ich lege am Monatsanfang einen festen Sparbetrag zurück." },
      { title: "Ausgaben vergleichen", explanation: "Beim Vergleich von Tarifen und Preisen kann man unnötig hohe Kosten finden.", en: "Comparing plans and prices can reveal avoidably high costs.", sentence: "Vor einem größeren Kauf vergleiche ich mehrere Angebote." },
      { title: "Automatisch einen Betrag sparen", explanation: "Ein Dauerauftrag direkt nach dem Gehalt macht das Sparen regelmäßiger.", en: "An automatic transfer after payday makes saving more consistent.", sentence: "Mit einem Dauerauftrag spare ich, bevor ich das Geld ausgebe." },
    ],
    pros: ["Ein Budget schafft Überblick.", "Regelmäßiges Sparen hilft bei größeren Zielen.", "Preisvergleiche können laufende Kosten senken."],
    cons: ["Ein zu strenges Budget kann den Alltag belasten.", "Unvorhergesehene Ausgaben lassen sich nicht immer planen.", "Bei geringem Einkommen bleibt oft wenig Sparspielraum."],
    opinion: { de: "Ich finde automatisches Sparen hilfreich, solange der Betrag realistisch ist und genug Geld für den Alltag bleibt.", en: "I find automatic saving useful as long as the amount is realistic and enough remains for everyday needs." },
    conclusion: { de: "Mit einem realistischen Plan kann man Schritt für Schritt Geld zurücklegen.", en: "A realistic plan can help people save money step by step." },
    keywords: ["Budget", "Sparbetrag", "Preisvergleich", "Dauerauftrag", "Notfälle", "realistisch"],
  },
  {
    slug: "online-job-suchen", title: "Online einen Job suchen", titleEn: "Searching for a job online", level: "B1",
    tags: ["Arbeit", "Jobsuche", "Internet", "Bewerbung", "work", "job search"],
    thema: { de: "Viele Stellen werden heute online angeboten. Wie kann man das Internet bei der Jobsuche sinnvoll nutzen?", en: "Many jobs are advertised online today. How can the internet be used effectively in a job search?" },
    options: [
      { title: "Jobportale durchsuchen", explanation: "Filter nach Ort, Beruf und Arbeitszeit helfen, passende Anzeigen schneller zu finden.", en: "Filters for location, occupation and hours help find relevant listings faster.", sentence: "Ich richte Suchfilter für meinen Beruf und meinen Wohnort ein." },
      { title: "Ein berufliches Profil erstellen", explanation: "Ein aktuelles Profil macht Qualifikationen für Arbeitgeber sichtbar.", en: "An up-to-date profile makes qualifications visible to employers.", sentence: "In meinem Profil beschreibe ich meine Erfahrungen klar und ehrlich." },
      { title: "Direkt auf Unternehmensseiten suchen", explanation: "Manche Stellen erscheinen zuerst auf der Website des Unternehmens.", en: "Some openings appear first on a company's own website.", sentence: "Ich prüfe auch die Karriereseiten interessanter Unternehmen." },
    ],
    pros: ["Viele Angebote lassen sich schnell vergleichen.", "Suchfilter sparen Zeit.", "Bewerbungen können oft direkt online eingereicht werden."],
    cons: ["Nicht jede Anzeige ist aktuell oder seriös.", "Die Konkurrenz um beliebte Stellen kann groß sein.", "Persönliche Kontakte fehlen bei einer rein digitalen Suche."],
    opinion: { de: "Online-Portale sind ein guter Start, aber ich würde interessante Unternehmen zusätzlich direkt prüfen.", en: "Online portals are a good starting point, but I would also check interesting companies directly." },
    conclusion: { de: "Eine Kombination aus Jobportalen, Firmenwebsites und persönlichen Kontakten ist oft am wirksamsten.", en: "Combining job portals, company websites and personal contacts is often most effective." },
    keywords: ["Jobportal", "Filter", "Profil", "Karriereseite", "seriös", "Kontakte"],
  },
  {
    slug: "kulturangebot", title: "Kulturangebot", titleEn: "Cultural activities", level: "B1",
    tags: ["Kultur", "Freizeit", "Theater", "Museum", "culture", "leisure"],
    thema: { de: "Kulturelle Angebote wie Theater, Museen und Konzerte bereichern das Leben in einer Stadt. Wie kann man sie nutzen?", en: "Cultural activities such as theatre, museums and concerts enrich city life. How can people make use of them?" },
    options: [
      { title: "Museen und Ausstellungen besuchen", explanation: "Ausstellungen vermitteln Wissen und bieten oft einen guten Einstieg in lokale Themen.", en: "Exhibitions share knowledge and often introduce local topics.", sentence: "Am Wochenende besuche ich gern eine neue Ausstellung." },
      { title: "Theater oder Konzerte erleben", explanation: "Live-Aufführungen schaffen ein gemeinsames Erlebnis und machen Kunst direkt erfahrbar.", en: "Live performances create a shared experience and bring art to life.", sentence: "Ein Konzert ist für mich eine besondere Möglichkeit, Kultur zu erleben." },
      { title: "Kostenlose Veranstaltungen nutzen", explanation: "Stadtfeste und offene Kulturveranstaltungen ermöglichen Teilhabe ohne hohe Eintrittskosten.", en: "City festivals and open events make culture accessible without high ticket costs.", sentence: "Kostenlose Veranstaltungen machen Kultur für mehr Menschen zugänglich." },
    ],
    pros: ["Kultur kann neue Perspektiven eröffnen.", "Gemeinsame Veranstaltungen schaffen Begegnungen.", "Kostenlose Angebote ermöglichen mehr Teilhabe."],
    cons: ["Eintrittskarten können teuer sein.", "Angebote sind nicht in jeder Region gleich verfügbar.", "Beliebte Veranstaltungen sind oft schnell ausverkauft."],
    opinion: { de: "Ein gutes Kulturangebot sollte vielfältig und auch für Menschen mit wenig Geld zugänglich sein.", en: "A good cultural program should be varied and accessible even to people with limited budgets." },
    conclusion: { de: "Vielfältige und erreichbare Kulturangebote machen eine Stadt lebendiger.", en: "Varied and accessible cultural activities make a city more vibrant." },
    keywords: ["Museum", "Ausstellung", "Theater", "Konzert", "kostenlos", "Teilhabe"],
  },
  {
    slug: "harmonie-in-der-nachbarschaft", title: "Harmonie in der Nachbarschaft", titleEn: "Good relationships with neighbors", level: "B2",
    tags: ["Nachbarschaft", "Wohnen", "Kommunikation", "Konflikt", "neighborhood", "housing"],
    thema: { de: "Ein gutes Verhältnis zu den Nachbarn macht das Wohnen angenehmer. Wie lässt sich ein harmonisches Zusammenleben fördern?", en: "Good relationships with neighbors make living more pleasant. How can harmonious community life be encouraged?" },
    options: [
      { title: "Sich vorstellen und Kontakt aufnehmen", explanation: "Ein freundlicher erster Kontakt erleichtert spätere Gespräche und gegenseitige Hilfe.", en: "A friendly first introduction makes later conversations and mutual help easier.", sentence: "Beim Einzug stelle ich mich meinen direkten Nachbarn vor." },
      { title: "Rücksicht auf gemeinsame Regeln nehmen", explanation: "Ruhezeiten und gemeinsam genutzte Räume sollten respektvoll behandelt werden.", en: "Quiet hours and shared spaces should be treated respectfully.", sentence: "Wenn ich eine Feier plane, informiere ich meine Nachbarn vorher." },
      { title: "Konflikte direkt und ruhig besprechen", explanation: "Ein sachliches Gespräch kann Missverständnisse klären, bevor ein Problem größer wird.", en: "A calm, factual conversation can resolve misunderstandings before they grow.", sentence: "Bei einem Problem spreche ich die Person freundlich und direkt an." },
    ],
    pros: ["Freundliche Nachbarschaft kann Sicherheit und Wohlbefinden stärken.", "Gegenseitige Hilfe erleichtert den Alltag.", "Direkte Gespräche verhindern häufig Missverständnisse."],
    cons: ["Menschen haben unterschiedliche Gewohnheiten.", "Konflikte können trotz guter Kommunikation bestehen bleiben.", "Zu viel Nähe ist nicht für alle angenehm."],
    opinion: { de: "Für ein gutes Zusammenleben sind Respekt und klare, freundliche Kommunikation wichtiger als enge Freundschaft.", en: "Respect and clear, friendly communication matter more than close friendship for living well together." },
    conclusion: { de: "Rücksicht und offene Gespräche schaffen eine gute Grundlage für ein harmonisches Miteinander.", en: "Consideration and open conversations provide a good basis for harmonious community life." },
    keywords: ["vorstellen", "Ruhezeiten", "Rücksicht", "Gespräch", "Missverständnis", "Respekt"],
  },
  {
    slug: "in-ein-neues-land-umziehen", title: "In ein neues Land umziehen", titleEn: "Moving to a new country", level: "B2",
    tags: ["Umzug", "Ausland", "Integration", "Sprache", "moving", "immigration"],
    thema: { de: "Ein Umzug in ein neues Land bringt Chancen und Herausforderungen mit sich. Wie kann man sich auf den Neuanfang vorbereiten?", en: "Moving to a new country brings opportunities and challenges. How can someone prepare for a new start?" },
    options: [
      { title: "Sprache vor und nach dem Umzug lernen", explanation: "Sprachkenntnisse erleichtern Behördengänge, Arbeit und Kontakte im Alltag.", en: "Language skills make official tasks, work and everyday interactions easier.", sentence: "Ich lerne schon vor dem Umzug wichtige Sätze für den Alltag." },
      { title: "Wichtige Dokumente und Finanzen planen", explanation: "Eine Dokumentenliste und ein finanzieller Überblick helfen, die ersten Schritte zu organisieren.", en: "A document checklist and financial overview help organize the first steps.", sentence: "Ich informiere mich früh über Anmeldung, Versicherung und Kosten." },
      { title: "Kontakte und Unterstützung suchen", explanation: "Beratungsstellen, Vereine und lokale Gruppen können Orientierung und neue Kontakte bieten.", en: "Advisory services, clubs and local groups can provide guidance and connections.", sentence: "Eine lokale Gruppe kann mir helfen, mich schneller zurechtzufinden." },
    ],
    pros: ["Ein Neuanfang kann berufliche und persönliche Chancen eröffnen.", "Man lernt eine neue Sprache und Lebensweise kennen.", "Neue Kontakte können ein unterstützendes Umfeld schaffen."],
    cons: ["Behördliche und organisatorische Aufgaben können kompliziert sein.", "Familie und vertraute Kontakte sind weiter entfernt.", "Sprachbarrieren können den Einstieg erschweren."],
    opinion: { de: "Eine gute Vorbereitung ist wichtig, aber man sollte auch offen bleiben, weil nicht alles planbar ist.", en: "Preparation matters, but it is also important to stay flexible because not everything can be planned." },
    conclusion: { de: "Mit Sprache, guter Organisation und Unterstützung kann der Start in einem neuen Land leichter werden.", en: "Language learning, organization and support can make settling in a new country easier." },
    keywords: ["Sprache", "Dokumente", "Finanzen", "Behörden", "Kontakte", "Neuanfang"],
  },
];

function buildAddedTopic(seed: TopicSeed): Topic {
  const options = seed.options.map((option, index) => ({
    ...option,
    vocab: [
      { de: option.title, en: option.title },
      { de: seed.keywords[index], en: seed.keywords[index] },
      { de: seed.keywords[index + 3], en: seed.keywords[index + 3] },
    ],
  })) as unknown as Topic["options"];
  const [first, second, third] = options;
  return {
    ...seed,
    level: seed.level,
    options,
    opinion: {
      ...seed.opinion,
      frame: "Meiner Meinung nach … , weil … . Ein Beispiel dafür ist … . Deshalb …",
    },
    answer: {
      full: `${seed.thema.de} Es gibt drei Möglichkeiten. Erstens: ${first.title.toLocaleLowerCase()}. ${first.explanation} Zweitens: ${second.title.toLocaleLowerCase()}. ${second.explanation} Drittens: ${third.title.toLocaleLowerCase()}. ${third.explanation} Ein Vorteil ist: ${seed.pros[0]} Ein Nachteil ist: ${seed.cons[0]} ${seed.opinion.de} ${seed.conclusion.de}`,
      easy: `${seed.title} ist ein wichtiges Thema. Man kann ${first.title.toLocaleLowerCase()}, ${second.title.toLocaleLowerCase()} oder ${third.title.toLocaleLowerCase()}. Das hat Vorteile: ${seed.pros[0]} Es gibt aber auch Nachteile: ${seed.cons[0]} Ich finde: ${seed.opinion.de}`,
      keywords: seed.keywords,
    },
  };
}

export const TOPICS: readonly Topic[] = [...CORE_TOPICS, ...ADDED_TOPIC_SEEDS.map(buildAddedTopic)];
