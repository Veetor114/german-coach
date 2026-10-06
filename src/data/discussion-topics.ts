export interface DiscussionPoint {
  de: string;
  sentence: string;
  en: string;
  keywords: readonly string[];
}

export interface DiscussionTopic {
  slug: string;
  title: string;
  keywords: readonly string[];
  pros: readonly [DiscussionPoint, DiscussionPoint, DiscussionPoint];
  cons: readonly [DiscussionPoint, DiscussionPoint, DiscussionPoint];
}

export const DISCUSSION_TOPICS: readonly DiscussionTopic[] = [
  {
    slug: "eigenheim-oder-mieten", title: "Eigenheim kaufen oder Wohnung mieten?", keywords: ["Kaufen", "Mieten", "Kosten", "Flexibilität"],
    pros: [
      { de: "Das eigene Zuhause gehört mir.", sentence: "Ein Vorteil ist: Das Haus gehört mir später.", en: "One advantage is that the home will belong to me later.", keywords: ["Eigentum", "Zukunft"] },
      { de: "Ich kann die Wohnung selbst gestalten.", sentence: "Ich kann mein Zuhause nach meinem Wunsch gestalten.", en: "I can arrange my home the way I like.", keywords: ["Gestalten", "Freiheit"] },
      { de: "Die Miete kann nicht jedes Jahr steigen.", sentence: "Beim eigenen Haus zahle ich keine monatliche Miete.", en: "With my own home, I do not pay monthly rent.", keywords: ["Miete", "Kosten"] },
    ],
    cons: [
      { de: "Ein Haus kostet sehr viel Geld.", sentence: "Ein Nachteil ist: Ein Haus ist sehr teuer.", en: "One disadvantage is that a home is very expensive.", keywords: ["Preis", "Kredit"] },
      { de: "Reparaturen muss ich selbst bezahlen.", sentence: "Wenn etwas kaputt ist, muss ich es selbst bezahlen.", en: "If something breaks, I have to pay for it myself.", keywords: ["Reparatur", "Kosten"] },
      { de: "Ein Umzug ist schwieriger.", sentence: "Mit einem eigenen Haus kann ich nicht so leicht umziehen.", en: "With my own home, I cannot move as easily.", keywords: ["Umzug", "Flexibilität"] },
    ],
  },
  {
    slug: "arbeitswoche-verkuerzen", title: "Soll die Arbeitswoche verkürzt werden?", keywords: ["Freizeit", "Arbeit", "Erholung", "Gehalt"],
    pros: [
      { de: "Man hat mehr Zeit für Familie und Freunde.", sentence: "Ein Vorteil ist: Ich habe mehr Zeit für meine Familie.", en: "One advantage is that I have more time for my family.", keywords: ["Familie", "Zeit"] },
      { de: "Man kann sich besser erholen.", sentence: "Ein freier Tag gibt mir mehr Zeit zum Ausruhen.", en: "An extra day off gives me more time to rest.", keywords: ["Erholung", "Gesundheit"] },
      { de: "Man kann bei der Arbeit motivierter sein.", sentence: "Mit mehr Freizeit kann ich bei der Arbeit motiviert sein.", en: "With more free time, I can feel motivated at work.", keywords: ["Motivation", "Arbeit"] },
    ],
    cons: [
      { de: "An den Arbeitstagen gibt es mehr Stress.", sentence: "An den anderen Tagen muss ich vielleicht länger arbeiten.", en: "I may have to work longer on the other days.", keywords: ["Arbeitszeit", "Stress"] },
      { de: "Manche Aufgaben bleiben liegen.", sentence: "In vier Tagen schaffe ich vielleicht nicht alle Aufgaben.", en: "I may not finish all my tasks in four days.", keywords: ["Aufgaben", "Zeit"] },
      { de: "Manche Firmen können nicht kürzer arbeiten.", sentence: "In manchen Berufen muss jeden Tag jemand arbeiten.", en: "In some jobs, someone has to work every day.", keywords: ["Beruf", "Planung"] },
    ],
  },
  {
    slug: "markenkleidung", title: "Ist Markenkleidung wichtig?", keywords: ["Kleidung", "Marke", "Preis", "Qualität"],
    pros: [
      { de: "Gute Kleidung kann lange halten.", sentence: "Ein Vorteil ist: Gute Kleidung kann lange halten.", en: "One advantage is that good clothes can last a long time.", keywords: ["Qualität", "Haltbarkeit"] },
      { de: "Man findet oft viele Größen und Modelle.", sentence: "Bei bekannten Marken gibt es oft viele Modelle.", en: "Well-known brands often offer many styles.", keywords: ["Auswahl", "Modelle"] },
      { de: "Manche Menschen fühlen sich damit sicher.", sentence: "Manche Menschen fühlen sich in Markenkleidung wohl.", en: "Some people feel comfortable in branded clothes.", keywords: ["Wohlfühlen", "Stil"] },
    ],
    cons: [
      { de: "Markenkleidung kostet oft viel Geld.", sentence: "Ein Nachteil ist: Markenkleidung ist oft teuer.", en: "One disadvantage is that branded clothing is often expensive.", keywords: ["Preis", "Geld"] },
      { de: "Der Name macht die Kleidung nicht immer besser.", sentence: "Eine bekannte Marke bedeutet nicht immer gute Qualität.", en: "A famous brand does not always mean good quality.", keywords: ["Marke", "Qualität"] },
      { de: "Man kann sich unter Druck fühlen.", sentence: "Manche Menschen kaufen Marken, weil andere es erwarten.", en: "Some people buy brands because others expect them to.", keywords: ["Druck", "Erwartung"] },
    ],
  },
  {
    slug: "arbeitserfahrung-im-ausland", title: "Soll man Arbeitserfahrung im Ausland sammeln?", keywords: ["Ausland", "Arbeit", "Sprache", "Erfahrung"],
    pros: [
      { de: "Man lernt eine neue Sprache.", sentence: "Ein Vorteil ist: Bei der Arbeit lerne ich die Sprache.", en: "One advantage is that I learn the language at work.", keywords: ["Sprache", "Lernen"] },
      { de: "Man sammelt neue Erfahrungen.", sentence: "Ich lerne neue Arbeitsweisen kennen.", en: "I learn about new ways of working.", keywords: ["Erfahrung", "Arbeit"] },
      { de: "Man wird selbstständiger.", sentence: "Im Ausland muss ich viele Dinge selbst organisieren.", en: "Abroad, I have to organize many things myself.", keywords: ["Selbstständigkeit", "Alltag"] },
    ],
    cons: [
      { de: "Familie und Freunde sind weit weg.", sentence: "Ein Nachteil ist: Ich sehe meine Familie seltener.", en: "One disadvantage is that I see my family less often.", keywords: ["Familie", "Entfernung"] },
      { de: "Der Anfang kann schwer sein.", sentence: "Eine neue Sprache und ein neuer Alltag sind nicht immer leicht.", en: "A new language and a new routine are not always easy.", keywords: ["Anfang", "Sprache"] },
      { de: "Man muss viele Dinge planen.", sentence: "Vor dem Umzug muss ich viele Papiere vorbereiten.", en: "Before moving, I have to prepare many documents.", keywords: ["Planung", "Dokumente"] },
    ],
  },
  {
    slug: "soziale-medien", title: "Soll man in sozialen Medien aktiv sein?", keywords: ["Kontakte", "Information", "Zeit", "Privatsphäre"],
    pros: [
      { de: "Man bleibt mit anderen in Kontakt.", sentence: "Ein Vorteil ist: Ich kann leicht mit Freunden sprechen.", en: "One advantage is that I can easily talk with friends.", keywords: ["Freunde", "Kontakt"] },
      { de: "Man bekommt schnell neue Informationen.", sentence: "Ich kann im Internet schnell Neuigkeiten lesen.", en: "I can quickly read news online.", keywords: ["Information", "Nachrichten"] },
      { de: "Man kann eigene Ideen teilen.", sentence: "Ich kann Fotos und Ideen mit anderen teilen.", en: "I can share photos and ideas with others.", keywords: ["Teilen", "Ideen"] },
    ],
    cons: [
      { de: "Man verbringt leicht zu viel Zeit online.", sentence: "Ein Nachteil ist: Soziale Medien kosten oft viel Zeit.", en: "One disadvantage is that social media often takes a lot of time.", keywords: ["Zeit", "Handy"] },
      { de: "Nicht alle Informationen sind richtig.", sentence: "Man muss prüfen, ob eine Nachricht stimmt.", en: "You have to check whether a news item is true.", keywords: ["Nachrichten", "Prüfen"] },
      { de: "Persönliche Daten sind nicht immer sicher.", sentence: "Andere Menschen können private Bilder sehen.", en: "Other people may see private pictures.", keywords: ["Daten", "Privat"] },
    ],
  },
  {
    slug: "online-einkaufen", title: "Soll man online einkaufen?", keywords: ["Internet", "Zeit", "Auswahl", "Rückgabe"],
    pros: [
      { de: "Man kann bequem von zu Hause bestellen.", sentence: "Ein Vorteil ist: Ich kann zu Hause einkaufen.", en: "One advantage is that I can shop from home.", keywords: ["Bequem", "Zuhause"] },
      { de: "Es gibt viele Produkte zur Auswahl.", sentence: "Im Internet finde ich viele verschiedene Produkte.", en: "I can find many different products online.", keywords: ["Auswahl", "Produkte"] },
      { de: "Man kann Preise leicht vergleichen.", sentence: "Ich kann Preise schnell im Internet vergleichen.", en: "I can compare prices quickly online.", keywords: ["Preis", "Vergleich"] },
    ],
    cons: [
      { de: "Man kann die Produkte nicht vorher testen.", sentence: "Ein Nachteil ist: Ich kann die Ware nicht anfassen.", en: "One disadvantage is that I cannot touch the item.", keywords: ["Testen", "Ware"] },
      { de: "Die Lieferung braucht manchmal lange.", sentence: "Manchmal muss ich mehrere Tage auf das Paket warten.", en: "Sometimes I have to wait several days for the parcel.", keywords: ["Lieferung", "Warten"] },
      { de: "Eine Rückgabe kann schwierig sein.", sentence: "Wenn mir etwas nicht passt, muss ich es zurückschicken.", en: "If something does not fit, I have to send it back.", keywords: ["Rückgabe", "Paket"] },
    ],
  },
  {
    slug: "filme-originalsprache", title: "Soll man Filme in der Originalsprache schauen?", keywords: ["Sprache", "Filme", "Verstehen", "Untertitel"],
    pros: [
      { de: "Man hört die echte Stimme der Schauspieler.", sentence: "Ein Vorteil ist: Ich höre die Stimmen der Schauspieler.", en: "One advantage is that I hear the actors' real voices.", keywords: ["Stimmen", "Film"] },
      { de: "Man kann eine Sprache besser lernen.", sentence: "Beim Film lerne ich neue Wörter.", en: "I learn new words while watching a film.", keywords: ["Sprache", "Wörter"] },
      { de: "Der Film klingt oft natürlicher.", sentence: "Die Gespräche klingen in der Originalsprache echt.", en: "The conversations sound real in the original language.", keywords: ["Natürlich", "Gespräch"] },
    ],
    cons: [
      { de: "Man versteht nicht immer alles.", sentence: "Ein Nachteil ist: Manche Wörter sind schwer.", en: "One disadvantage is that some words are difficult.", keywords: ["Verstehen", "Wörter"] },
      { de: "Untertitel können vom Bild ablenken.", sentence: "Ich muss oft lesen und kann den Film nicht gut sehen.", en: "I often have to read and cannot watch the film well.", keywords: ["Untertitel", "Lesen"] },
      { de: "Nicht jeder Film hat Untertitel.", sentence: "Ohne Untertitel ist es manchmal schwer zu verstehen.", en: "Without subtitles, it is sometimes hard to understand.", keywords: ["Untertitel", "Verstehen"] },
    ],
  },
  {
    slug: "stadt-oder-land", title: "Stadt oder Land – wo soll man wohnen?", keywords: ["Stadt", "Land", "Ruhe", "Arbeit"],
    pros: [
      { de: "In der Stadt gibt es viele Arbeitsplätze.", sentence: "Ein Vorteil der Stadt ist: Es gibt viele Jobs.", en: "One advantage of the city is that there are many jobs.", keywords: ["Stadt", "Arbeit"] },
      { de: "Auf dem Land ist es oft ruhig.", sentence: "Auf dem Land gibt es oft weniger Lärm.", en: "There is often less noise in the countryside.", keywords: ["Land", "Ruhe"] },
      { de: "In der Stadt sind Busse und Bahnen oft nah.", sentence: "In der Stadt kann ich oft Bus und Bahn nehmen.", en: "In the city, I can often take a bus or train.", keywords: ["Verkehr", "Stadt"] },
    ],
    cons: [
      { de: "In der Stadt sind Wohnungen oft teuer.", sentence: "Ein Nachteil der Stadt ist: Die Miete ist oft hoch.", en: "One disadvantage of the city is that rent is often high.", keywords: ["Stadt", "Miete"] },
      { de: "Auf dem Land gibt es weniger Busse und Bahnen.", sentence: "Auf dem Land brauche ich oft ein Auto.", en: "In the countryside, I often need a car.", keywords: ["Land", "Auto"] },
      { de: "In der Stadt gibt es oft viel Lärm.", sentence: "Der Verkehr kann in der Stadt laut sein.", en: "Traffic can be loud in the city.", keywords: ["Lärm", "Verkehr"] },
    ],
  },
  {
    slug: "duales-studium", title: "Ist ein duales Studium sinnvoll?", keywords: ["Studium", "Arbeit", "Praxis", "Zeit"],
    pros: [
      { de: "Man lernt Theorie und Praxis zusammen.", sentence: "Ein Vorteil ist: Ich lerne in der Uni und im Betrieb.", en: "One advantage is that I learn at university and at work.", keywords: ["Theorie", "Praxis"] },
      { de: "Man bekommt früh Berufserfahrung.", sentence: "Ich sammle schon während des Studiums Erfahrung.", en: "I gain experience while I am still studying.", keywords: ["Erfahrung", "Beruf"] },
      { de: "Man bekommt oft ein Gehalt.", sentence: "Viele Studierende bekommen jeden Monat Geld.", en: "Many students receive money every month.", keywords: ["Gehalt", "Geld"] },
    ],
    cons: [
      { de: "Man hat wenig freie Zeit.", sentence: "Ein Nachteil ist: Ich muss viel lernen und arbeiten.", en: "One disadvantage is that I have to study and work a lot.", keywords: ["Zeit", "Arbeit"] },
      { de: "Der Stundenplan ist oft fest.", sentence: "Ich kann meine Zeit nicht immer selbst planen.", en: "I cannot always plan my own time.", keywords: ["Plan", "Zeit"] },
      { de: "Man hat oft viel Stress.", sentence: "Prüfungen und Arbeit können gleichzeitig kommen.", en: "Exams and work can happen at the same time.", keywords: ["Stress", "Prüfung"] },
    ],
  },
  {
    slug: "geschaefte-jeden-tag-offen", title: "Sollen Geschäfte jeden Tag geöffnet sein?", keywords: ["Geschäfte", "Öffnungszeiten", "Arbeit", "Einkaufen"],
    pros: [
      { de: "Kunden können flexibler einkaufen.", sentence: "Ein Vorteil ist: Ich kann auch am Sonntag einkaufen.", en: "One advantage is that I can shop on Sunday too.", keywords: ["Kunden", "Zeit"] },
      { de: "Menschen mit Schichtarbeit haben mehr Zeit.", sentence: "Auch nach der Arbeit kann man einkaufen.", en: "People can shop after work too.", keywords: ["Arbeit", "Zeit"] },
      { de: "Besucher können die Stadt besser erleben.", sentence: "Offene Geschäfte sind für Besucher praktisch.", en: "Open shops are useful for visitors.", keywords: ["Besucher", "Stadt"] },
    ],
    cons: [
      { de: "Mitarbeiter haben weniger freie Tage.", sentence: "Ein Nachteil ist: Angestellte müssen öfter arbeiten.", en: "One disadvantage is that employees have to work more often.", keywords: ["Mitarbeiter", "Freizeit"] },
      { de: "Die Geschäfte haben höhere Kosten.", sentence: "Längere Öffnungszeiten kosten mehr Geld.", en: "Longer opening hours cost more money.", keywords: ["Kosten", "Geschäft"] },
      { de: "Kleine Geschäfte haben mehr Arbeit.", sentence: "Kleine Läden können nicht immer jeden Tag öffnen.", en: "Small shops cannot always open every day.", keywords: ["Kleine Läden", "Arbeit"] },
    ],
  },
  {
    slug: "grossraumbuero", title: "Ist ein Großraumbüro sinnvoll für Angestellte?", keywords: ["Büro", "Team", "Lärm", "Ruhe"],
    pros: [
      { de: "Kollegen können schnell miteinander sprechen.", sentence: "Ein Vorteil ist: Ich kann Kollegen schnell etwas fragen.", en: "One advantage is that I can quickly ask colleagues questions.", keywords: ["Kollegen", "Gespräch"] },
      { de: "Das Team kann gut zusammenarbeiten.", sentence: "Wir können Ideen direkt miteinander teilen.", en: "We can share ideas with each other directly.", keywords: ["Team", "Ideen"] },
      { de: "Die Firma braucht weniger Platz.", sentence: "Ein gemeinsames Büro braucht oft weniger Raum.", en: "A shared office often needs less space.", keywords: ["Platz", "Kosten"] },
    ],
    cons: [
      { de: "Es kann im Büro laut sein.", sentence: "Ein Nachteil ist: Lärm stört manchmal die Arbeit.", en: "One disadvantage is that noise sometimes disturbs work.", keywords: ["Lärm", "Arbeit"] },
      { de: "Man hat wenig Privatsphäre.", sentence: "Andere können Gespräche oft hören.", en: "Other people can often hear conversations.", keywords: ["Privatsphäre", "Gespräch"] },
      { de: "Man kann sich schwer konzentrieren.", sentence: "Viele Menschen im Raum können ablenken.", en: "Many people in one room can be distracting.", keywords: ["Ruhe", "Konzentration"] },
    ],
  },
  {
    slug: "mit-kindern-ins-ausland-reisen", title: "Soll man mit Kindern ins Ausland reisen?", keywords: ["Kinder", "Reisen", "Familie", "Planung"],
    pros: [
      { de: "Kinder lernen neue Orte kennen.", sentence: "Ein Vorteil ist: Kinder sehen eine neue Kultur.", en: "One advantage is that children see a new culture.", keywords: ["Kultur", "Lernen"] },
      { de: "Die Familie erlebt etwas zusammen.", sentence: "Eine Reise gibt der Familie gemeinsame Erinnerungen.", en: "A trip gives the family shared memories.", keywords: ["Familie", "Erinnerung"] },
      { de: "Kinder können eine neue Sprache hören.", sentence: "Im Urlaub hören Kinder andere Sprachen.", en: "On holiday, children hear other languages.", keywords: ["Sprache", "Kinder"] },
    ],
    cons: [
      { de: "Reisen mit Kindern kann anstrengend sein.", sentence: "Ein Nachteil ist: Kinder werden auf langen Reisen müde.", en: "One disadvantage is that children get tired on long trips.", keywords: ["Reise", "Müdigkeit"] },
      { de: "Eine Reise kostet viel Geld.", sentence: "Für eine Familie sind Tickets und Hotel oft teuer.", en: "Tickets and hotels are often expensive for a family.", keywords: ["Kosten", "Familie"] },
      { de: "Man muss viele Dinge planen.", sentence: "Eltern müssen Essen und Pausen gut planen.", en: "Parents have to plan food and breaks carefully.", keywords: ["Planung", "Eltern"] },
    ],
  },
  {
    slug: "kleine-kinder-fremdsprachen", title: "Sollten kleine Kinder Fremdsprachen lernen?", keywords: ["Kinder", "Sprache", "Lernen", "Spiel"],
    pros: [
      { de: "Kinder hören früh neue Wörter.", sentence: "Ein Vorteil ist: Kinder können früh eine Sprache hören.", en: "One advantage is that children can hear a language early.", keywords: ["Sprache", "Wörter"] },
      { de: "Lernen kann Spaß machen.", sentence: "Lieder und Spiele machen das Lernen interessant.", en: "Songs and games make learning interesting.", keywords: ["Lieder", "Spiele"] },
      { de: "Eine neue Sprache hilft später.", sentence: "Sprachen können in der Schule und bei der Arbeit helfen.", en: "Languages can help at school and at work.", keywords: ["Zukunft", "Sprache"] },
    ],
    cons: [
      { de: "Zu viel Lernen kann Kinder stressen.", sentence: "Ein Nachteil ist: Kinder brauchen auch Zeit zum Spielen.", en: "One disadvantage is that children also need time to play.", keywords: ["Stress", "Spielen"] },
      { de: "Nicht jedes Kind lernt gleich schnell.", sentence: "Manche Kinder brauchen mehr Zeit als andere.", en: "Some children need more time than others.", keywords: ["Zeit", "Lernen"] },
      { de: "Guter Unterricht kann teuer sein.", sentence: "Sprachkurse kosten manchmal viel Geld.", en: "Language classes sometimes cost a lot of money.", keywords: ["Kurs", "Kosten"] },
    ],
  },
  {
    slug: "wg-oder-alleine-wohnen", title: "WG oder alleine wohnen?", keywords: ["Wohnen", "WG", "Kosten", "Privatsphäre"],
    pros: [
      { de: "In einer WG teilt man die Kosten.", sentence: "Ein Vorteil ist: Die Miete wird oft günstiger.", en: "One advantage is that rent is often cheaper.", keywords: ["Miete", "Kosten"] },
      { de: "Man hat andere Menschen zu Hause.", sentence: "In einer WG kann man zusammen essen und sprechen.", en: "In a shared flat, people can eat and talk together.", keywords: ["Gemeinschaft", "Freunde"] },
      { de: "Man kann Aufgaben teilen.", sentence: "Die Bewohner können zusammen putzen und einkaufen.", en: "Housemates can clean and shop together.", keywords: ["Aufgaben", "Teilen"] },
    ],
    cons: [
      { de: "Man hat weniger Ruhe und Privatsphäre.", sentence: "Ein Nachteil ist: Andere Menschen sind immer in der Nähe.", en: "One disadvantage is that other people are always nearby.", keywords: ["Ruhe", "Privatsphäre"] },
      { de: "Es kann Streit geben.", sentence: "Die Bewohner sind nicht immer einer Meinung.", en: "Housemates do not always agree.", keywords: ["Streit", "Regeln"] },
      { de: "Man kann nicht alles selbst entscheiden.", sentence: "In einer WG muss man oft gemeinsam Regeln machen.", en: "In a shared flat, people often need to agree on rules together.", keywords: ["Regeln", "Entscheidung"] },
    ],
  },
  {
    slug: "kostenpflichtige-online-nachrichten", title: "Sollen Nachrichten im Internet kostenpflichtig sein?", keywords: ["Nachrichten", "Internet", "Kosten", "Journalismus"],
    pros: [
      { de: "Journalisten können für ihre Arbeit bezahlt werden.", sentence: "Ein Vorteil ist: Gute Nachrichten brauchen gute Arbeit.", en: "One advantage is that good news takes good work.", keywords: ["Journalismus", "Arbeit"] },
      { de: "Es gibt vielleicht weniger Werbung.", sentence: "Mit Bezahlung sehen Leser oft weniger Werbung.", en: "With paid access, readers often see fewer advertisements.", keywords: ["Werbung", "Lesen"] },
      { de: "Leser können gute Informationen bekommen.", sentence: "Gute Berichte helfen Menschen, Dinge zu verstehen.", en: "Good reports help people understand things.", keywords: ["Information", "Verstehen"] },
    ],
    cons: [
      { de: "Nicht jeder kann dafür bezahlen.", sentence: "Ein Nachteil ist: Manche Menschen haben wenig Geld.", en: "One disadvantage is that some people have little money.", keywords: ["Geld", "Zugang"] },
      { de: "Viele Menschen wollen keine Nachrichten kaufen.", sentence: "Manche Leser suchen lieber kostenlose Nachrichten.", en: "Some readers prefer to look for free news.", keywords: ["Kostenlos", "Leser"] },
      { de: "Man muss gute Nachrichten erkennen.", sentence: "Nicht jede bezahlte Nachricht ist automatisch gut.", en: "Not every paid news story is automatically good.", keywords: ["Qualität", "Prüfen"] },
    ],
  },
  {
    slug: "bargeldlos-bezahlen", title: "Soll man bargeldlos bezahlen?", keywords: ["Bezahlen", "Karte", "Handy", "Bargeld"],
    pros: [
      { de: "Das Bezahlen geht oft schneller.", sentence: "Ein Vorteil ist: Ich muss kein Geld zählen.", en: "One advantage is that I do not have to count money.", keywords: ["Schnell", "Karte"] },
      { de: "Man muss weniger Bargeld mitnehmen.", sentence: "Eine Karte ist klein und passt in die Tasche.", en: "A card is small and fits in a pocket.", keywords: ["Bargeld", "Karte"] },
      { de: "Man kann seine Ausgaben sehen.", sentence: "Die App zeigt, wofür ich Geld ausgebe.", en: "The app shows what I spend money on.", keywords: ["Ausgaben", "Übersicht"] },
    ],
    cons: [
      { de: "Man braucht eine Karte oder ein Handy.", sentence: "Ein Nachteil ist: Ohne Gerät kann ich nicht bezahlen.", en: "One disadvantage is that I cannot pay without a device.", keywords: ["Handy", "Karte"] },
      { de: "Nicht alle Geschäfte nehmen Karten.", sentence: "Manche kleine Läden möchten Bargeld.", en: "Some small shops prefer cash.", keywords: ["Geschäft", "Bargeld"] },
      { de: "Technische Probleme können passieren.", sentence: "Wenn das System nicht funktioniert, kann ich nicht bezahlen.", en: "If the system does not work, I cannot pay.", keywords: ["Technik", "Problem"] },
    ],
  },
  {
    slug: "urlaub-ausland-oder-inland", title: "Urlaub im Ausland oder im eigenen Land?", keywords: ["Urlaub", "Ausland", "Reisen", "Kosten"],
    pros: [
      { de: "Im Ausland kann man eine neue Kultur sehen.", sentence: "Ein Vorteil ist: Ich lerne ein anderes Land kennen.", en: "One advantage is that I discover another country.", keywords: ["Kultur", "Land"] },
      { de: "Im eigenen Land kennt man die Sprache.", sentence: "Zu Hause kann ich leichter mit Menschen sprechen.", en: "At home, I can speak with people more easily.", keywords: ["Sprache", "Verstehen"] },
      { de: "Es gibt viele neue Orte zu entdecken.", sentence: "Auch im eigenen Land kann ich neue Orte finden.", en: "I can discover new places in my own country too.", keywords: ["Orte", "Entdecken"] },
    ],
    cons: [
      { de: "Eine Reise ins Ausland kostet oft mehr.", sentence: "Flüge und Hotels können teuer sein.", en: "Flights and hotels can be expensive.", keywords: ["Kosten", "Hotel"] },
      { de: "Lange Reisen können anstrengend sein.", sentence: "Ein langer Flug macht viele Menschen müde.", en: "A long flight makes many people tired.", keywords: ["Reise", "Müdigkeit"] },
      { de: "Im eigenen Land sieht man weniger Neues.", sentence: "Manchmal möchte man andere Länder erleben.", en: "Sometimes people want to experience other countries.", keywords: ["Abwechslung", "Ausland"] },
    ],
  },
  {
    slug: "von-zu-hause-arbeiten", title: "Soll man von zu Hause arbeiten?", keywords: ["Homeoffice", "Arbeit", "Zeit", "Kollegen"],
    pros: [
      { de: "Man spart den Weg zur Arbeit.", sentence: "Ein Vorteil ist: Ich brauche nicht zur Arbeit zu fahren.", en: "One advantage is that I do not need to travel to work.", keywords: ["Arbeitsweg", "Zeit"] },
      { de: "Man kann den Tag flexibler planen.", sentence: "Zu Hause kann ich meine Arbeit oft besser einteilen.", en: "At home, I can often organize my work more flexibly.", keywords: ["Flexibel", "Plan"] },
      { de: "Man kann in Ruhe arbeiten.", sentence: "Zu Hause kann es leichter sein, sich zu konzentrieren.", en: "It can be easier to focus at home.", keywords: ["Ruhe", "Fokus"] },
    ],
    cons: [
      { de: "Man sieht die Kollegen seltener.", sentence: "Ein Nachteil ist: Ich treffe mein Team nicht jeden Tag.", en: "One disadvantage is that I do not see my team every day.", keywords: ["Team", "Kontakt"] },
      { de: "Arbeit und Freizeit sind schwer zu trennen.", sentence: "Zu Hause arbeite ich manchmal länger.", en: "At home, I sometimes work longer.", keywords: ["Grenzen", "Freizeit"] },
      { de: "Zu Hause kann es laut sein.", sentence: "Familie oder Nachbarn können mich stören.", en: "Family or neighbors may disturb me.", keywords: ["Lärm", "Störung"] },
    ],
  },
  {
    slug: "e-books-oder-papierbuecher", title: "E-Books statt Papierbücher?", keywords: ["E-Book", "Bücher", "Lesen", "Papier"],
    pros: [
      { de: "Man kann viele Bücher mitnehmen.", sentence: "Ein Vorteil ist: Ein kleines Gerät hat viele Bücher.", en: "One advantage is that one small device holds many books.", keywords: ["Platz", "Auswahl"] },
      { de: "Man kann die Schrift größer machen.", sentence: "Das Lesen ist mit großer Schrift oft einfacher.", en: "Reading is often easier with larger text.", keywords: ["Schrift", "Lesen"] },
      { de: "Man braucht kein Papier für jedes Buch.", sentence: "E-Books brauchen keinen gedruckten Text.", en: "E-books do not need printed pages.", keywords: ["Papier", "Umwelt"] },
    ],
    cons: [
      { de: "Ein Bildschirm kann die Augen müde machen.", sentence: "Ein Nachteil ist: Langes Lesen am Bildschirm strengt an.", en: "One disadvantage is that long screen reading can be tiring.", keywords: ["Bildschirm", "Augen"] },
      { de: "Man braucht ein Gerät und Strom.", sentence: "Ohne Akku kann ich mein E-Book nicht lesen.", en: "Without a battery, I cannot read my e-book.", keywords: ["Akku", "Gerät"] },
      { de: "Ein E-Book fühlt sich anders an.", sentence: "Manche Menschen mögen ein echtes Buch lieber.", en: "Some people prefer a real book.", keywords: ["Papierbuch", "Gefühl"] },
    ],
  },
  {
    slug: "fernstudium", title: "Ist ein Fernstudium sinnvoll?", keywords: ["Fernstudium", "Lernen", "Zeit", "Kontakt"],
    pros: [
      { de: "Man kann von zu Hause lernen.", sentence: "Ein Vorteil ist: Ich muss nicht jeden Tag zur Uni fahren.", en: "One advantage is that I do not have to travel to university every day.", keywords: ["Zuhause", "Weg"] },
      { de: "Man kann seine Lernzeit selbst planen.", sentence: "Ich kann oft lernen, wenn ich Zeit habe.", en: "I can often study when I have time.", keywords: ["Zeit", "Flexibilität"] },
      { de: "Man kann neben dem Studium arbeiten.", sentence: "Ein Fernstudium passt oft gut zu einem Beruf.", en: "Distance study often fits well with a job.", keywords: ["Beruf", "Studium"] },
    ],
    cons: [
      { de: "Man sieht andere Studierende seltener.", sentence: "Ein Nachteil ist: Ich lerne oft allein.", en: "One disadvantage is that I often study alone.", keywords: ["Allein", "Kontakt"] },
      { de: "Man muss sich selbst gut organisieren.", sentence: "Ohne festen Stundenplan muss ich meine Zeit planen.", en: "Without a fixed timetable, I have to plan my time.", keywords: ["Plan", "Disziplin"] },
      { de: "Praktische Übungen sind manchmal schwierig.", sentence: "Manche Aufgaben kann ich nicht zu Hause üben.", en: "I cannot practice some tasks at home.", keywords: ["Praxis", "Übung"] },
    ],
  },
  {
    slug: "kinder-und-haustiere", title: "Sollen Kinder Haustiere haben?", keywords: ["Kinder", "Haustiere", "Verantwortung", "Kosten"],
    pros: [
      { de: "Ein Tier kann ein guter Freund sein.", sentence: "Ein Vorteil ist: Ein Haustier ist oft ein guter Freund.", en: "One advantage is that a pet is often a good friend.", keywords: ["Freund", "Tier"] },
      { de: "Kinder lernen Verantwortung.", sentence: "Kinder helfen, ein Tier zu füttern und zu pflegen.", en: "Children help feed and care for an animal.", keywords: ["Verantwortung", "Pflege"] },
      { de: "Kinder bewegen sich mehr.", sentence: "Mit einem Hund gehen Kinder oft nach draußen.", en: "Children often go outside with a dog.", keywords: ["Bewegung", "Hund"] },
    ],
    cons: [
      { de: "Ein Tier kostet Geld.", sentence: "Futter und Tierarzt können teuer sein.", en: "Food and veterinary care can be expensive.", keywords: ["Kosten", "Tierarzt"] },
      { de: "Ein Tier braucht jeden Tag Pflege.", sentence: "Auch im Urlaub muss jemand auf das Tier achten.", en: "Someone must care for the animal during holidays too.", keywords: ["Pflege", "Zeit"] },
      { de: "Manche Kinder haben eine Allergie.", sentence: "Ein Tier kann bei manchen Kindern Probleme machen.", en: "An animal can cause problems for some children.", keywords: ["Allergie", "Gesundheit"] },
    ],
  },
  {
    slug: "noten-in-der-schule", title: "Sollen Noten in der Schule abgeschafft werden?", keywords: ["Schule", "Noten", "Lernen", "Stress"],
    pros: [
      { de: "Kinder haben vielleicht weniger Stress.", sentence: "Ein Vorteil ist: Ohne Noten haben Kinder weniger Druck.", en: "One advantage is that children have less pressure without grades.", keywords: ["Stress", "Druck"] },
      { de: "Lehrer können genauere Rückmeldungen geben.", sentence: "Ein Lehrer kann sagen, was ein Kind schon gut macht.", en: "A teacher can say what a child already does well.", keywords: ["Feedback", "Lernen"] },
      { de: "Kinder können mehr aus Interesse lernen.", sentence: "Kinder lernen vielleicht mehr, weil sie neugierig sind.", en: "Children may learn more because they are curious.", keywords: ["Interesse", "Neugier"] },
    ],
    cons: [
      { de: "Es ist schwerer, Leistungen zu vergleichen.", sentence: "Ein Nachteil ist: Eltern sehen nicht sofort die Leistung.", en: "One disadvantage is that parents cannot see results quickly.", keywords: ["Vergleich", "Leistung"] },
      { de: "Manche Schulen brauchen klare Ergebnisse.", sentence: "Für einen Schulwechsel sind Noten manchmal wichtig.", en: "Grades are sometimes important when changing schools.", keywords: ["Schule", "Ergebnis"] },
      { de: "Rückmeldungen brauchen mehr Zeit.", sentence: "Lehrer müssen für jeden Schüler mehr schreiben.", en: "Teachers have to write more for every student.", keywords: ["Zeit", "Lehrer"] },
    ],
  },
];