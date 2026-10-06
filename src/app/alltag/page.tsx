 "use client";
 
 import { useState } from "react";
 import { ArrowRight, Headphones, MapPin } from "lucide-react";
 import { PracticeControls } from "@/components/practice/practice-controls";
 import { Badge } from "@/components/ui/badge";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { speakGerman } from "@/components/practice/practice-controls";
 
 const SCENARIOS = [
   { category: "Shopping", title: "Ask for a product", level: "A2", prompt: "Du suchst Hafermilch im Supermarkt. Frage eine Mitarbeiterin, wo du sie findest.", promptEn: "You are looking for oat milk in the supermarket. Ask an employee where to find it.", reply: "Entschuldigung, können Sie mir bitte sagen, wo ich die Hafermilch finde?", easy: "Entschuldigung, wo ist die Hafermilch?", keywords: ["Entschuldigung", "wo finde ich ...?", "Vielen Dank"], vocabulary: [["das Regal", "shelf"], ["die Hafermilch", "oat milk"], ["weiterhelfen", "to help"]] },
   { category: "Shopping", title: "Return an item", level: "B1", prompt: "Du möchtest ein Hemd zurückgeben. Erkläre freundlich, dass die Größe nicht passt.", promptEn: "You want to return a shirt. Politely explain that the size does not fit.", reply: "Guten Tag. Ich möchte dieses Hemd zurückgeben, weil es mir leider nicht passt. Ich habe den Kassenbon dabei.", easy: "Das Hemd passt mir nicht. Kann ich es zurückgeben? Hier ist der Bon.", keywords: ["zurückgeben", "passt nicht", "Kassenbon", "freundlich fragen"], vocabulary: [["der Kassenbon", "receipt"], ["zurückgeben", "to return"], ["passen", "to fit"]] },
   { category: "Public transport", title: "Ask about a delay", level: "B1", prompt: "Dein Zug fällt aus. Frage am Informationsschalter nach einer Alternative.", promptEn: "Your train is cancelled. Ask at the information desk for an alternative.", reply: "Entschuldigung, mein Zug nach Köln fällt aus. Welche Verbindung kann ich stattdessen nehmen? Muss ich ein neues Ticket kaufen?", easy: "Mein Zug fällt aus. Wie komme ich jetzt nach Köln?", keywords: ["fällt aus", "stattdessen", "die Verbindung", "das Gleis"], vocabulary: [["ausfallen", "to be cancelled"], ["die Verbindung", "connection"], ["stattdessen", "instead"]] },
   { category: "Public transport", title: "Find the platform", level: "A2", prompt: "Du hast wenig Zeit am Bahnhof. Frage, von welchem Gleis dein Zug abfährt.", promptEn: "You are short on time at the station. Ask which platform your train leaves from.", reply: "Entschuldigung, von welchem Gleis fährt der Zug nach München ab?", easy: "Welches Gleis nach München, bitte?", keywords: ["von welchem Gleis", "abfahren", "nach München"], vocabulary: [["das Gleis", "platform"], ["abfahren", "to depart"], ["die Durchsage", "announcement"]] },
   { category: "Work", title: "Ask a colleague for help", level: "B1", prompt: "Du verstehst eine Aufgabe noch nicht. Bitte einen Kollegen um eine kurze Erklärung.", promptEn: "You do not understand a task yet. Ask a colleague for a brief explanation.", reply: "Hast du kurz Zeit? Ich bin mir bei diesem Schritt noch nicht ganz sicher. Könntest du mir erklären, wie ich vorgehen soll?", easy: "Kannst du mir bitte kurz helfen? Ich verstehe diesen Schritt noch nicht.", keywords: ["Hast du kurz Zeit?", "nicht sicher sein", "erklären", "vorgehen"], vocabulary: [["der Schritt", "step"], ["vorgehen", "to proceed"], ["sich sicher sein", "to be sure"]] },
   { category: "Work", title: "Report a problem", level: "B2", prompt: "Ein Programm funktioniert nicht und du kannst eine Aufgabe nicht fertigstellen. Informiere deine Vorgesetzte und schlage den nächsten Schritt vor.", promptEn: "A program is not working and you cannot finish a task. Inform your supervisor and suggest the next step.", reply: "Ich wollte Sie kurz informieren, dass das Programm seit heute Morgen nicht richtig funktioniert. Deshalb kann ich die Aufgabe im Moment nicht abschließen. Ich habe den Rechner bereits neu gestartet. Sollen wir die IT-Abteilung kontaktieren?", easy: "Das Programm funktioniert nicht. Ich kann die Aufgabe noch nicht beenden. Ich habe den Rechner neu gestartet. Was soll ich als Nächstes tun?", keywords: ["kurz informieren", "funktioniert nicht", "nicht abschließen", "nächster Schritt"], vocabulary: [["abschließen", "to complete"], ["die Vorgesetzte", "supervisor"], ["kontaktieren", "to contact"]] },
   { category: "Ausbildung", title: "Ask for clarification", level: "B1", prompt: "Deine Ausbilderin erklärt eine neue Aufgabe. Du möchtest sicher sein, dass du alles richtig verstanden hast.", promptEn: "Your trainer explains a new task. You want to make sure you understood everything correctly.", reply: "Wenn ich Sie richtig verstanden habe, soll ich zuerst die Kundendaten prüfen und danach den Bericht schreiben. Ist das richtig?", easy: "Soll ich zuerst die Daten prüfen und dann den Bericht schreiben?", keywords: ["Wenn ich Sie richtig verstanden habe", "zuerst", "danach", "Ist das richtig?"], vocabulary: [["die Ausbilderin", "trainer"], ["der Bericht", "report"], ["überprüfen", "to check"]] },
   { category: "Behörden", title: "Register at the Bürgeramt", level: "B1", prompt: "Du bist neu in der Stadt und möchtest dich anmelden. Frage, welche Unterlagen du brauchst.", promptEn: "You are new in town and want to register. Ask which documents you need.", reply: "Guten Tag. Ich bin vor Kurzem nach Leipzig gezogen und möchte meinen Wohnsitz anmelden. Welche Unterlagen muss ich dafür mitbringen?", easy: "Ich bin neu in Leipzig. Ich möchte mich anmelden. Welche Dokumente brauche ich?", keywords: ["Wohnsitz anmelden", "Unterlagen", "mitbringen", "Termin"], vocabulary: [["der Wohnsitz", "residence"], ["die Unterlage", "document"], ["mitbringen", "to bring along"]] },
   { category: "Healthcare", title: "Make an appointment", level: "B1", prompt: "Rufe in einer Arztpraxis an. Du brauchst einen Termin und möchtest kurz sagen, warum.", promptEn: "Call a doctor's office. You need an appointment and want to briefly say why.", reply: "Guten Tag, mein Name ist ___. Ich würde gern einen Termin vereinbaren, weil ich seit einigen Tagen Halsschmerzen habe. Wann wäre ein Termin möglich?", easy: "Guten Tag. Ich brauche einen Termin. Ich habe Halsschmerzen. Wann kann ich kommen?", keywords: ["einen Termin vereinbaren", "seit einigen Tagen", "Halsschmerzen", "Wann wäre es möglich?"], vocabulary: [["vereinbaren", "to arrange"], ["die Halsschmerzen", "sore throat"], ["die Praxis", "doctor's office"]] },
   { category: "Restaurants", title: "Order and ask about food", level: "A2", prompt: "Du möchtest wissen, ob ein Gericht vegetarisch ist, und danach bestellen.", promptEn: "You want to know if a dish is vegetarian and then order it.", reply: "Entschuldigung, ist dieses Gericht vegetarisch? Dann nehme ich bitte einmal die Gemüsepfanne.", easy: "Ist das vegetarisch? Ich nehme bitte die Gemüsepfanne.", keywords: ["Ist das vegetarisch?", "Ich nehme bitte ...", "die Speisekarte"], vocabulary: [["das Gericht", "dish"], ["vegetarisch", "vegetarian"], ["nehmen", "to have/order"]] },
   { category: "Social life", title: "Make small talk", level: "A2", prompt: "Du triffst eine neue Kollegin in der Mittagspause. Stell dich vor und frage nach ihren Interessen.", promptEn: "You meet a new colleague during lunch. Introduce yourself and ask about her interests.", reply: "Hallo, ich bin ___. Ich arbeite seit dieser Woche im Team. Was machst du gern in deiner Freizeit?", easy: "Hallo, ich bin ___. Was machst du gern am Wochenende?", keywords: ["Ich bin ...", "seit dieser Woche", "in der Freizeit", "am Wochenende"], vocabulary: [["die Freizeit", "free time"], ["das Team", "team"], ["sich vorstellen", "to introduce oneself"]] },
 ];
 
 const CATEGORIES = [...new Set(SCENARIOS.map((scenario) => scenario.category))];
 
 export default function AlltagPage() {
   const [category, setCategory] = useState(CATEGORIES[0]);
   const [scenarioIndex, setScenarioIndex] = useState(0);
   const [english, setEnglish] = useState(true);
   const [showAnswer, setShowAnswer] = useState(false);
   const [help, setHelp] = useState(false);
   const [myReply, setMyReply] = useState("");
   const scenarios = SCENARIOS.filter((scenario) => scenario.category === category);
   const scenario = scenarios[scenarioIndex % scenarios.length];
 
   const changeCategory = (next: string) => {
     setCategory(next);
     setScenarioIndex(0);
     setShowAnswer(false);
     setHelp(false);
     setMyReply("");
   };
 
   return (
     <div className="space-y-6">
       <header className="space-y-1">
         <p className="text-sm font-medium text-muted-foreground">REAL-LIFE GERMANY</p>
         <h1 className="text-2xl font-semibold tracking-tight">Alltag in Deutschland</h1>
         <p className="text-muted-foreground">Practice a useful response for places and conversations you will actually encounter.</p>
       </header>
 
       <div className="flex flex-wrap gap-2" role="tablist" aria-label="Situation category">
         {CATEGORIES.map((item) => (
           <Button key={item} role="tab" aria-selected={category === item} variant={category === item ? "default" : "outline"} size="sm" onClick={() => changeCategory(item)}>{item}</Button>
         ))}
       </div>
 
       <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem]">
         <div className="space-y-4">
           <Card className="bg-brand-mint text-foreground">
             <CardHeader>
               <div className="flex flex-wrap items-center justify-between gap-2">
                 <CardTitle>{scenario.title}</CardTitle>
                 <Badge variant="outline"><MapPin className="size-3" aria-hidden /> {scenario.level}</Badge>
               </div>
             </CardHeader>
             <CardContent className="space-y-3">
               <p className="leading-relaxed">{scenario.prompt}</p>
               {english && <p className="text-sm text-foreground/70">{scenario.promptEn}</p>}
               <Button variant="outline" size="sm" onClick={() => speakGerman(scenario.prompt)}><Headphones aria-hidden /> Listen</Button>
             </CardContent>
           </Card>
 
           <Card>
             <CardHeader><CardTitle>Your response</CardTitle></CardHeader>
             <CardContent className="space-y-3">
               <textarea value={myReply} onChange={(event) => setMyReply(event.target.value)} rows={3} placeholder="Write a few words to plan your answer, or speak without notes…" className="w-full resize-y rounded-lg border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
               <div className="flex flex-wrap gap-2">
                 <Button variant="secondary" onClick={() => setHelp((value) => !value)}>{help ? "Hide hint" : "Help me"}</Button>
                 <Button variant="outline" onClick={() => setShowAnswer((value) => !value)}>{showAnswer ? "Hide answer" : "Show example"}</Button>
                 <Button variant="outline" onClick={() => setEnglish((value) => !value)}>{english ? "🇩🇪 German mode" : "🇬🇧 English support"}</Button>
               </div>
               {help && <p className="rounded-md bg-muted p-3 text-sm"><span className="font-semibold">Try these ideas:</span> {scenario.keywords.join(" · ")}</p>}
               {showAnswer && (
                 <div className="space-y-3 rounded-md border-l-4 border-brand-teal bg-muted/70 p-4">
                   <div><p className="text-xs font-semibold uppercase text-muted-foreground">Natural response</p><p className="mt-1 leading-relaxed">{scenario.reply}</p></div>
                   <div><p className="text-xs font-semibold uppercase text-muted-foreground">Easier version</p><p className="mt-1">{scenario.easy}</p></div>
                   <p className="text-sm text-muted-foreground">Keywords: {scenario.keywords.join(" · ")}</p>
                   <Button size="sm" variant="outline" onClick={() => speakGerman(scenario.reply)}><Headphones aria-hidden /> Listen to example</Button>
                 </div>
               )}
             </CardContent>
           </Card>
 
           <PracticeControls title={scenario.title} category="alltag" prompt={scenario.prompt} phrases={[scenario.reply]} initialMinutes={1} />
         </div>
 
         <aside className="space-y-4">
           <Card>
             <CardHeader><CardTitle>Useful words</CardTitle></CardHeader>
             <CardContent className="space-y-3">
               {scenario.vocabulary.map(([de, en]) => (
                 <div key={de} className="flex items-center justify-between gap-2 border-b pb-2 last:border-0 last:pb-0">
                   <button className="text-left font-medium hover:underline" onClick={() => speakGerman(de)}>{de}</button>
                   {english && <span className="text-right text-sm text-muted-foreground">{en}</span>}
                 </div>
               ))}
             </CardContent>
           </Card>
           <Card>
             <CardContent className="flex items-center justify-between gap-2 p-4">
               <span className="text-sm font-medium">More in {category}</span>
               <Button size="icon" variant="outline" aria-label="Next situation" onClick={() => { setScenarioIndex((index) => index + 1); setShowAnswer(false); setHelp(false); setMyReply(""); }}><ArrowRight aria-hidden /></Button>
             </CardContent>
           </Card>
         </aside>
       </div>
     </div>
   );
 }
