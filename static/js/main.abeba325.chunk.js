(this["webpackJsonpjena-virus"]=this["webpackJsonpjena-virus"]||[]).push([[0],{109:function(e,n,i){e.exports=i(128)},11:function(e){e.exports=JSON.parse('{"primary":{"main":"#006481","light":"#6EB6C5","lighter":"#F1FFFF"},"warning":{"main":"#FF454C"},"success":{"main":"#00BA48"},"gray":{"main":"#C3C3C3","bg":"#F5F5F5","dark":"#43464A","light":"#B1B1B1"}}')},114:function(e,n,i){},119:function(e,n,i){},120:function(e,n,i){},124:function(e,n,i){},126:function(e,n,i){},128:function(e,n,i){"use strict";i.r(n);var t=i(0),a=i.n(t),r=i(10),l=i.n(r),s=(i(114),i(57)),c=i(27),u=i(84),o=i(92),d=i(185),g=i(186),h=i(184),f=i(38),m=i(96),k=i(11),_=Object(m.a)({palette:{primary:{main:k.primary.main},warning:{main:k.warning.main},success:{main:k.success.main}},overrides:{MuiCard:{root:{padding:"1.5em 2em",width:"90%",margin:"20px auto"}},MuiTable:{root:{}},MuiTableHead:{root:{borderBottom:"3px solid "+k.primary.light}},MuiTableRow:{root:{"&$selected":{backgroundColor:k.primary.lighter}}},MuiTableCell:{alignRight:{span:{color:k.primary.main,padding:"5px 10px",border:"1px solid "+k.primary.main,backgroundColor:k.primary.light,borderRadius:3}}},MuiTableSortLabel:{root:{color:k.gray.dark}},MuiButton:{root:{borderRadius:3,padding:"1em 2em",boxShadow:"0px 3px 6px "+k.gray.light,backgroundColor:k.primary.light,"&$disabled":{opacity:1,backgroundColor:k.gray.bg}},contained:{color:"#ffffff",borderRadius:3,padding:"1em 2em",boxShadow:"0px 3px 6px "+k.gray.light,backgroundColor:k.primary.light}},MuiLink:{root:{color:k.primary.light,textDecoration:"none"}},MuiCheckbox:{root:{}},MuiSvgIcon:{root:{fill:k.primary.light}},MuiAppBar:{root:{boxShadow:"none"},colorPrimary:{backgroundColor:k.primary.main}},MuiBadge:{colorPrimary:{color:"#ffffff"}},MuiPaper:{root:{borderRadius:0}},MuiOutlinedInput:{root:{borderRadius:35}}},typography:{fontFamily:"Roboto, Helvetica, sans-serif",button:{fontSize:"0.65em",fontWeight:900},h2:{color:k.primary.light,fontSize:"28px",textAlign:"center",fontWeight:400,margin:"50px 20px 20px"},h3:{textAlign:"left",color:k.primary.light,margin:"20px 0px",fontSize:"24px"},h6:{textAlign:"center"},h4:{color:k.primary.main,fontSize:"0.85rem",textTransform:"uppercase"},body1:{lineHeight:1},subtitle1:{textAlign:"center",fontSize:"14px"}}}),p=function(){return a.a.createElement(d.a,{theme:_},a.a.createElement(s.a,null,a.a.createElement("div",{className:"app"},a.a.createElement(g.a,{position:"static"},a.a.createElement(h.a,null,a.a.createElement(f.a,{variant:"h6"},"ZusammenAlleinImVerein"))),a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/view/:id"},a.a.createElement(u.a,null)),a.a.createElement(c.a,{path:"/",exact:!0},a.a.createElement(o.a,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,n,i){"use strict";i.d(n,"c",(function(){return r})),i.d(n,"h",(function(){return s})),i.d(n,"g",(function(){return u})),i.d(n,"f",(function(){return d})),i.d(n,"d",(function(){return h})),i.d(n,"b",(function(){return m})),i.d(n,"e",(function(){return _})),i.d(n,"a",(function(){return b}));var t=i(70),a=i(67),r=function(e){return{field:"Level",value:e,label:"Level ".concat(e)}},l=function(e){return[r(e.Level)]},s=function(e){return{field:"Ziel",value:e,label:e}},c=function(e){return e.Ziel.map(s)},u=function(e){return{field:"Training",value:e,label:e}},o=function(e){return e.Training.map(u)},d=function(e){return{field:"Teilnehmer",value:e,label:e}},g=function(e){return e.Teilnehmer.map(d)},h=function(e){return{field:"Ort",value:e,label:e}},f=function(e){return e.Ort.map(h)},m=function(e){return{field:"Altersgruppe",value:e,label:"ab ".concat(e," Jahren")}},k=function(e){return[m(e.Altersgruppe)]},_=function(e){return{field:"Tags",value:e,label:e}},p=function(e){return e.Tags.map(_)},b={createAutocompleteOptions:function(){var e,n=a.a.getAll(),i=[l,c,o,g,f,k,p],r={},s=Object(t.a)(n);try{for(s.s();!(e=s.n()).done;){var u,d=e.value,h=Object(t.a)(i);try{for(h.s();!(u=h.n()).done;){var m,_=(0,u.value)(d),b=Object(t.a)(_);try{for(b.s();!(m=b.n()).done;){var S=m.value;r[S.label]=S}}catch(w){b.e(w)}finally{b.f()}}}catch(w){h.e(w)}finally{h.f()}}}catch(w){s.e(w)}finally{s.f()}return Object.values(r)}}},34:function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));var t=i(0),a=i.n(t),r=(i(126),function(e){return a.a.createElement("span",{className:"tag",onClick:e.onClick},e.children)})},50:function(e){e.exports=JSON.parse('[{"Challenge":"Klopapier jonglieren","Beschreibung":"Jongliere mit Klopapierrollen; Stoppe die Zeit und halte per Video fest wieviele sec. du es schaffst","Schwierigkeitsgrad_L1":"mit 2 Klopapierrollen","Schwierigkeitsgrad_L2":"mit 3 Klopapierrollen","Schwierigkeitsgrad_L3":"mit 4 Klopapierrollen","Ziel_Spass":"x","Ziel_Socialising":"","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"x","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":6,"Anleitungslink":"https://www.youtube.com/watch?v=Wg29XTD5zVE","Tags":"lustig, koordinierung"},{"Challenge":"Jonglieren mit Fussball","Beschreibung":"Jongliere mit einem Fu\xdfball - mach ein Video","Schwierigkeitsgrad_L1":"20 Ballber\xfchrungen","Schwierigkeitsgrad_L2":"50 Ballber\xfchrungen","Schwierigkeitsgrad_L3":"100 Ballber\xfchrungen","Ziel_Spass":"x","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"x","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"x","Mindestalter":6,"Anleitungslink":"https://www.youtube.com/watch?v=dj6ufhqU61w","Tags":"koordinierung, Fu\xdfball,"},{"Challenge":"Joggen 1 km","Beschreibung":"Jogge 1 km. Nutze eine dein Smartphone um die Zeit zu stoppen. Apps wie Strava geben coole Auswertungen.","Schwierigkeitsgrad_L1":"unter 7 Minuten","Schwierigkeitsgrad_L2":"unter 6 Minuten","Schwierigkeitsgrad_L3":"unter 5 Minuten","Ziel_Spass":"","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"x","Anzahl_team":"","inddoor":"","outdoor":"x","Mindestalter":8,"Anleitungslink":"","Tags":"ausdauer, fu\xdfball, kanu,"},{"Challenge":"Joggen 3 km","Beschreibung":"Jogge 3 km. Nutze eine dein Smartphone um die Zeit zu stoppen. Apps wie Strava geben coole Auswertungen.","Schwierigkeitsgrad_L1":"unter 25 Minuten","Schwierigkeitsgrad_L2":"unter 20 Minuten","Schwierigkeitsgrad_L3":"unter 17 Minuten","Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"x","Anzahl_team":"","inddoor":"","outdoor":"x","Mindestalter":8,"Anleitungslink":"","Tags":"ausdauer, fu\xdfball, kanu,"},{"Challenge":"Joggen 5 km","Beschreibung":"Jogge 5 km. Nutze eine dein Smartphone um die Zeit zu stoppen. Apps wie Strava geben coole Auswertungen.","Schwierigkeitsgrad_L1":"unter 45 Minuten","Schwierigkeitsgrad_L2":"unter 37 Minuten","Schwierigkeitsgrad_L3":"unter 30 Minuten","Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"x","Anzahl_team":"","inddoor":"","outdoor":"x","Mindestalter":10,"Anleitungslink":"","Tags":"ausdauer, fu\xdfball, kanu,"},{"Challenge":"Papier- krob","Beschreibung":"Zerkn\xfclle ein gebrauchtes Blatt Papier und werfe damit 3x in einen Papierkorb. Aus wieviel Metern Entfernung schaffst du es 3x hintereinander den Korb zu treffen?","Schwierigkeitsgrad_L1":"2 Meter","Schwierigkeitsgrad_L2":"4 Meter","Schwierigkeitsgrad_L3":"8 Meter","Ziel_Spass":"x","Ziel_Socialising":"","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"x","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":8,"Anleitungslink":"","Tags":"lustig, koordinierung, ballsport"},{"Challenge":"Plantschbecken","Beschreibung":"Hole dein Plantschbecken raus oder schnapp dir einen Eimer und lass ihn voll Wasser laufen. Wie lange schaffst du unter Wasser die Luft anzuhalten?","Schwierigkeitsgrad_L1":"30sec","Schwierigkeitsgrad_L2":"1min","Schwierigkeitsgrad_L3":"1,5min","Ziel_Spass":"x","Ziel_Socialising":"","Ziel_Training":"","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"x","Mindestalter":6,"Anleitungslink":"","Tags":"lustig"},{"Challenge":"Verstecken","Beschreibung":"Verstecke dich in deinem Elternhaus oder drau\xdfen vor einem deiner Geschwister oder jemand anderem aus deinem Verein. Wie gut hast du dich versteckt? Wielange schaffst du es nicht gefunden zu werden?","Schwierigkeitsgrad_L1":"1min","Schwierigkeitsgrad_L2":"3min","Schwierigkeitsgrad_L3":"#ERROR!","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"x","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"x","Anzahl_team":"","inddoor":"x","outdoor":"x","Mindestalter":5,"Anleitungslink":"","Tags":""},{"Challenge":"Radfahren","Beschreibung":"Fahre mit deinem Fahrrad zu deinem Sportverein und wieder zur\xfcck zu dir nach Hause. In wieviel min pro km schaffst du die Strecke? Nutze eine App oder Stoppe die Zeit mit deinem Handy und teile die gebrauchte Zeit durch die Anzahl der km. Achtung sei wie immer Vorsichtig im Stra\xdfenverkehr.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"","outdoor":"x","Mindestalter":8,"Anleitungslink":"","Tags":"ausdauer"},{"Challenge":"Auf einem Bein","Beschreibung":"Wielange schaffst du es mit auf einem Bein zu stehen?","Schwierigkeitsgrad_L1":"1min","Schwierigkeitsgrad_L2":"2min","Schwierigkeitsgrad_L3":"+4min","Ziel_Spass":"x","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"x","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":7,"Anleitungslink":"","Tags":""},{"Challenge":"Auf einem Bein mit geschlossenen Augen","Beschreibung":"Wielange schaffst du es mit geschlossenen Augen auf einem Bein zu stehen?","Schwierigkeitsgrad_L1":"10sec.","Schwierigkeitsgrad_L2":"30sec.","Schwierigkeitsgrad_L3":"+45sec","Ziel_Spass":"x","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"x","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":7,"Anleitungslink":"","Tags":""},{"Challenge":"Liege- st\xfctz","Beschreibung":"Wie viele Liegest\xfctze schaffst du ohne Pause?","Schwierigkeitsgrad_L1":10,"Schwierigkeitsgrad_L2":30,"Schwierigkeitsgrad_L3":60,"Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"","Effekt_Kraft":"x","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":13,"Anleitungslink":"https://www.youtube.com/watch?v=H6Pq6i7xAv4","Tags":"fitness"},{"Challenge":"Moutain-climber","Beschreibung":"Wieviele Moutainclimber in kontrollierter Ausf\xfchrung schaffst du innerhalb von 1min?","Schwierigkeitsgrad_L1":20,"Schwierigkeitsgrad_L2":35,"Schwierigkeitsgrad_L3":50,"Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"x","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":13,"Anleitungslink":"https://www.youtube.com/watch?v=eqALq6LyZQQ","Tags":"fitness"},{"Challenge":"Burpees","Beschreibung":"Wieviele Burpees ohne Pause schaffst du hintereinander?","Schwierigkeitsgrad_L1":10,"Schwierigkeitsgrad_L2":30,"Schwierigkeitsgrad_L3":50,"Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"x","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":13,"Anleitungslink":"https://www.youtube.com/watch?v=INOesxF1CZk","Tags":"fitness"},{"Challenge":"Plank","Beschreibung":"Wielange schaffst du einen Plank/ Unterarmst\xfctz zu halten ohne abzusetzen?","Schwierigkeitsgrad_L1":"30sec","Schwierigkeitsgrad_L2":"1min","Schwierigkeitsgrad_L3":"+2min","Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"","Effekt_Kraft":"x","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":13,"Anleitungslink":"https://www.youtube.com/watch?v=HUzDFJTnZL8","Tags":"fitness"},{"Challenge":"Teamchallenge","Beschreibung":"Wieviele km schaffen dein Sportteam und du zusammen in einer Woche zur\xfcck zulegen? Ihr k\xf6nnt aussuchen ob ihr die km mit dem Fahrrad, auf Inlinern, dem Roller oder joggend zur\xfccklegen wollt. (Z\xe4hlt die km die ihr in einer Woche zur\xfcckgelegt habt zusammen mit den km Eurer Teamkollegen)","Schwierigkeitsgrad_L1":"60km","Schwierigkeitsgrad_L2":"140km","Schwierigkeitsgrad_L3":"+200km","Ziel_Spass":"","Ziel_Socialising":"x","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"","outdoor":"x","Mindestalter":13,"Anleitungslink":"","Tags":"ausdauer"},{"Challenge":"100m Lauf","Beschreibung":"Trainiere in den n\xe4chsten zwei Wochen deine Schnelligkeit. Laufe 100m und stoppe beim ersten Lauf die Zeit. Stoppe nach 14 Tagen noch einmal die Zeit \xfcber die gleiche Distanz. Um wieviel sec. hast du dich verbessert?","Schwierigkeitsgrad_L1":"0,3 sec","Schwierigkeitsgrad_L2":"0,5 sec","Schwierigkeitsgrad_L3":"1sec","Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"x","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"","outdoor":"x","Mindestalter":10,"Anleitungslink":"","Tags":""},{"Challenge":"Hampelm\xe4nner","Beschreibung":"Wieviele Hampelm\xe4nner schaffst du hintereinander ohne Pause","Schwierigkeitsgrad_L1":25,"Schwierigkeitsgrad_L2":60,"Schwierigkeitsgrad_L3":100,"Ziel_Spass":"","Ziel_Socialising":"","Ziel_Training":"x","Effekt_Ausdauer":"x","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"x","Anzahl_zwei":"","Anzahl_team":"","inddoor":"x","outdoor":"","Mindestalter":6,"Anleitungslink":"https://www.youtube.com/watch?v=VEIlZoUkIy0","Tags":""},{"Challenge":"Renovierungscrack","Beschreibung":"Wer hat in Eurem Sportteam in den letzten Wochen die sch\xf6nste, einfallsreichste\u2026 Renovierungsaktion gestartet? (Sendet Euch Fotos von Euren Renovierungen in Eurer Teamwhatsappgruppe und k\xfchrt eine/n Gewinner/in)","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":18,"Anleitungslink":"","Tags":""},{"Challenge":"Stadt/Land/Fluss","Beschreibung":"Trefft Euch gemeinsam virtuell mit Eurem Sportteam z.B. viva skype oder zoom und startet eine Stadt / Land / Fluss Challenge. (Die Kategorien k\xf6nnt Ihr beliebig erweitern).","Schwierigkeitsgrad_L1":"Stadt/ Land / Fluss","Schwierigkeitsgrad_L2":"Stadt/ Land/Fluss/Name","Schwierigkeitsgrad_L3":"Stadt/ Land/Fluss/Name/Beruf/Hobby","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":12,"Anleitungslink":"https://www.youtube.com/watch?v=FU6SPkaGXik","Tags":""},{"Challenge":"Wahrheit/ L\xfcge","Beschreibung":"Trefft Euch gemeinsam virtuell mit Eurem Sportteam z.B. viva skype oder zoom. Jede/r denkt sich 2 Geschichten \xfcber sich selbst aus, eine die wahr ist und eine die gelogen ist. Dann erz\xe4hlt jede/r seine Geschichten und die anderen m\xfcssen raten, welche davon erstunken und erlogen und welche wahr ist.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":12,"Anleitungslink":"","Tags":""},{"Challenge":"Gemeinsames Abendbrot","Beschreibung":"Trefft Euch gemeinsam virtuell mit Eurem Sportteam z.B. viva skype oder zoom und esst zusammen Abendbrot.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":12,"Anleitungslink":"","Tags":""},{"Challenge":"Spaziergang","Beschreibung":"Mache ein Foto bei einem Spaziergang, teile es viva whatsapp mit deinem Sportteam und lass die anderen raten wo genau du das Foto in Jena aufgenommen hast.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"","outdoor":"x","Mindestalter":12,"Anleitungslink":"","Tags":""},{"Challenge":"Schnitzeljagd","Beschreibung":"Die Sportmannschaft tut sich in zweier Teams zusammen. Team 1 organisiert eine kleine Schnitzeljagd durch Jena mit versteckten Hinweisen + Aufgaben f\xfcr Team 2, Team 2 f\xfcr Team 3 usw. (Hinweise k\xf6nnen auch virtuell freigegeben werden. So kann z.B. Team 1 ein Laufplan mit Stationen durch die Stadt erstellen, den Team 2 ablaufen muss, wenn Team 2 an einer Station angekommen ist schickt es ein Foto von der Station an Team 1, diese geben virtuell eine kleine Aufgabe frei usw.)","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"","outdoor":"x","Mindestalter":12,"Anleitungslink":"","Tags":""},{"Challenge":"Bewegungsraten","Beschreibung":"Trefft Euch gemeinsam virtuell mit Eurem Sportteam z.B. viva skype oder zoom. Eine Person macht ohne zu sprechen eine Bewegung vor, die einen Beruf oder eine bestimmte T\xe4tigkeit darstellen soll. Die anderen m\xfcssen raten welche/r T\xe4tigkeit/ Beruf es ist.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":9,"Anleitungslink":"","Tags":""},{"Challenge":"Musikraten","Beschreibung":"Trefft Euch gemeinsam virtuell mit Eurem Sportteam z.B. viva skype oder zoom. Jeder spielt nacheinander ein Musikst\xfcck an solange bis eine/r aus der Gruppe den Songtitel/ S\xe4ner/in/ Band erraten hat. Wer die meisten Mustikst\xfccke zuerst err\xe4t hat gewonnen.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":13,"Anleitungslink":"","Tags":""},{"Challenge":"Geschichtenspinnen durch die Stadt","Beschreibung":"Schreibe 3 S\xe4tze f\xfcr den Beginn einer Geschichte auf einen Zettel und verstecke den Zettel in einem Briefumschlag an einem beliebigen Ort in Jena. Dann schicke den Standort des verstecks an eine Person aus deinem Sportteam. Diese soll den Standort aufsuchen, drei weitere S\xe4tze zu deiner Geschichte schreiben und den Briefumschlag anschlie\xdfend an einem anderen Ort verstecken. Den Standort des verstecks teilt sie einer n\xe4chsten Person mit usw. bis alle Teammitglieder ein Versteck aufgesucht haben und ihre 3 S\xe4tze zu der Geschichte beigetragen haben. Am Ende wird die vollst\xe4ndige Geschichte in dem whatsapp chat von der letzten Person ver\xf6ffentlicht oder im video call vorgelesen.","Schwierigkeitsgrad_L1":"","Schwierigkeitsgrad_L2":"","Schwierigkeitsgrad_L3":"","Ziel_Spass":"x","Ziel_Socialising":"x","Ziel_Training":"","Effekt_Ausdauer":"","Effekt_Kraft":"","Effekt_Geschick":"","Effekt_Schnelligkeit":"","Anzahl_alleine":"","Anzahl_zwei":"","Anzahl_team":"x","inddoor":"x","outdoor":"","Mindestalter":12,"Anleitungslink":"","Tags":""}]')},58:function(e,n,i){"use strict";i.d(n,"a",(function(){return o}));var t=i(53),a=i.n(t),r=i(74),l=i(85),s=i.n(l),c=i(86),u=function(){var e=Object(r.a)(a.a.mark((function e(){var n,i,t,r,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=document.querySelector("#play-card"),t=null===(n=document.querySelector("body"))||void 0===n?void 0:n.getBoundingClientRect(),r=i.getBoundingClientRect(),e.next=5,s()(i,{y:Math.abs(t.top-r.top),scale:1});case 5:return l=e.sent,e.abrupt("return",new Promise((function(e,n){l.toBlob((function(i){i||n("Blob creation failed"),e(i)}))})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o={downloadPicture:function(){var e=Object(r.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=e.sent,Object(c.saveAs)(n,"playcard.png");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},59:function(e,n,i){"use strict";i.d(n,"a",(function(){return l}));var t=i(42),a=i(0),r=i.n(a),l=(i(119),function(e){var n=e.items,i=void 0===n?[]:n,a=Object(t.a)(i);return a.length<16&&function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,i=e.length;i<n;i++)e.push("")}(a),r.a.createElement("div",{className:"play-card",id:"play-card"},a.map((function(e,n){return r.a.createElement("div",{key:n,className:"play-card__item"},r.a.createElement("span",{className:"play-card__item-text"},e))})))})},67:function(e,n,i){"use strict";i.d(n,"a",(function(){return h}));var t,a,r,l,s=i(50);!function(e){e.Spass="Spass",e.Socialising="Socialising",e.Training="Training"}(t||(t={})),function(e){e.Kraft="Kraft",e.Ausdauer="Ausdauer",e.Geschick="Geschick",e.Schnelligkeit="Schnelligkeit"}(a||(a={})),function(e){e.alleine="alleine",e.zwei="zwei",e.Team="Team"}(r||(r={})),function(e){e.indoor="indoor",e.outdoor="outdoor"}(l||(l={}));var c=function(e){return"x"===e},u=function(e){var n=e.inddoor,i=e.outdoor,t=[];return c(n)&&t.push(l.indoor),c(i)&&t.push(l.outdoor),t},o=function(e){var n=e.Anzahl_alleine,i=e.Anzahl_zwei,t=e.Anzahl_team,a=[];return c(n)&&a.push(r.alleine),c(i)&&a.push(r.zwei),c(t)&&a.push(r.Team),a},d=function(e){var n=e.Challenge,i=e.Beschreibung,t=e.Mindestalter,a=e.Anleitungslink,r=e.Tags,l=u(e),s=o(e),d=function(e){return Object.entries(e).filter((function(e){return e[0].startsWith("Ziel_")})).filter((function(e){return c(e[1])})).map((function(e){return e[0].split("_")[1]}))}(e),g=function(e){return Object.entries(e).filter((function(e){return e[0].startsWith("Effekt_")})).filter((function(e){return c(e[1])})).map((function(e){return e[0].split("_")[1]}))}(e);return{Challange:n,Beschreibung:{text:i,link:a},Altersgruppe:t,Level:1,Tags:r.split(",").map((function(e){return e.trim()})).filter((function(e){return!!e})),Ort:l,Teilnehmer:s,Ziel:d,Training:g}},g=function(e){var n=s[e],i=null;return n||(i=d(n)),i},h={getAll:function(){return s.map(d)},getByIndex:g,getByIndeces:function(e){return e.map(g).filter((function(e){return!!e}))}}},84:function(e,n,i){"use strict";(function(e){i.d(n,"a",(function(){return d}));var t=i(38),a=i(54),r=i(0),l=i.n(r),s=i(27),c=i(50),u=(i(58),i(59)),o=i(87);i(124);function d(){var n=function(n){return new e(n,"base64").toString("ascii").split(",",25).map((function(e){return c[e]}))}(Object(s.g)().id);return l.a.createElement("div",{className:"root"},l.a.createElement(t.a,{variant:"h2"},"Willkommen bei deiner",l.a.createElement("br",null),"ZusammenAlleinImVerein-Challenge"),l.a.createElement(a.a,{className:"half"},l.a.createElement(t.a,{variant:"h3"},"Challenge-Card"),l.a.createElement(u.a,{items:n.map((function(e){return e.Challenge}))})),l.a.createElement(a.a,{className:"half"},l.a.createElement("div",{className:"rules"},l.a.createElement(t.a,{variant:"h3"},"Allgemeine Regeln"),l.a.createElement("ol",{className:"rules"},l.a.createElement("li",null,"In welcher Reihenfolge du die Challenges erledigst ist dir \xfcberlassen"),l.a.createElement("li",null,"Jede Challenge wird genau einmal gewertet, du warst sie aber nat\xfcrlich so oft du willst absolvieren"),l.a.createElement("li",null,"Pro Tag darfst du eine Challenge einreichen"),l.a.createElement("li",null,"Als Challengebeweis postest du ein Foto, Video oder Screenshot (z.b. absolvierte Strecke in Running App). Wenn du beschei\xdft, dann nur dich selbst."),l.a.createElement("li",null,"Hast du eine Challenge absolviert, kannst du sie wegstreichen, du selbst beh\xe4ltst den \xdcberblick."),l.a.createElement("li",null,"Wenn du alle Challenges geschafft hast, beweis es mit einer Fotocollage und freu dich - Du hast dich Fit gehalten!")))),l.a.createElement(a.a,null,l.a.createElement(t.a,{variant:"h3"},"Challenges"),l.a.createElement(o.a,{items:n})))}}).call(this,i(83).Buffer)},87:function(e,n,i){"use strict";i.d(n,"a",(function(){return s}));var t=i(42),a=i(0),r=i.n(a),l=(i(120),i(77)),s=function(e){var n=e.items,i=void 0===n?[]:n,a=Object(t.a)(i);return r.a.createElement("div",{className:"card",id:"table-card"},r.a.createElement("div",{className:"simple-table"},a.map((function(e,n){return r.a.createElement(l.a,{variant:"outlined"},r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("strong",null,e.Challenge)),r.a.createElement("div",null,e.Beschreibung),r.a.createElement("div",{style:{marginTop:"20px"}},e.Anleitungslink&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.Anleitungslink},"Anleitung")))}))))}},92:function(e,n,i){"use strict";(function(e){i.d(n,"a",(function(){return O}));var t=i(42),a=i(24),r=i(38),l=i(54),s=i(71),c=i(138),u=i(134),o=i(139),d=i(130),g=i(132),h=i(133),f=i(23),m=i(131),k=i(137),_=i(98),p=i(136),b=i(0),S=i.n(b),w=i(93),E=i(59),A=i(58),z=i(27),v=i(67),x=i(34),T=i(22),L=i(94),Z=i.n(L),C=v.a.getAll(),y=T.a.createAutocompleteOptions();function B(e,n,i){return n[i]<e[i]?-1:n[i]>e[i]?1:0}var M=Object(d.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",padding:"0",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function O(){var n=M(),i=S.a.useState([]),d=Object(a.a)(i,2),v=d[0],L=d[1],O=S.a.useState("asc"),j=Object(a.a)(O,2),G=j[0],P=j[1],K=S.a.useState("calories"),F=Object(a.a)(K,2),W=F[0],N=F[1],R=S.a.useState([]),I=Object(a.a)(R,2),J=I[0],H=I[1],D=S.a.useState(0),V=Object(a.a)(D,2),q=V[0],U=V[1],$=S.a.useState(!1),Q=Object(a.a)($,2),X=Q[0],Y=(Q[1],S.a.useState(25)),ee=Object(a.a)(Y,2),ne=ee[0],ie=ee[1],te=S.a.useState(""),ae=Object(a.a)(te,2),re=ae[0],le=ae[1],se=S.a.useState(""),ce=Object(a.a)(se,2),ue=ce[0],oe=ce[1],de=S.a.useState(""),ge=Object(a.a)(de,2),he=ge[0],fe=ge[1],me=Object(z.f)(),ke=function(){return"/view/"+new e(J.map((function(e,n){return C.findIndex((function(n){return n.Challange===e}))})).join(",")).toString("base64")};Object(b.useEffect)((function(){le(ke())}),[J]),Object(b.useEffect)((function(){oe(function(){var e=window.location.href,n=e.slice(0,e.length-1);return console.log(n,re),n+re}())}),[re]),Object(b.useEffect)((function(){fe(function(){var e="whatsapp://send?text="+encodeURIComponent("Hier ist deine neue Bingokarte: "+ue);return console.log("whatsapp link",e),e}())}),[ue]);var _e=function(e,n){n.stopPropagation(),L([].concat(Object(t.a)(v),[e.label]))},pe=y.filter((function(e){return v.includes(e.label)}));return S.a.createElement("div",{className:n.root},S.a.createElement(r.a,{variant:"h2"},"Challenge-Card"),S.a.createElement(l.a,null,S.a.createElement(E.a,{items:J}),S.a.createElement(s.a,{variant:"contained",onClick:function(e){Z()(ue)},className:"map-btn"},"Kopiere Link"),S.a.createElement(s.a,{variant:"contained",onClick:function(){me.push(ke())},className:"map-btn"},"Gehe zu Seite"),S.a.createElement(s.a,{variant:"contained",className:"button-whatsapp map-btn"},S.a.createElement("a",{href:he},"In Whatsapp teilen")),S.a.createElement(s.a,{variant:"contained",onClick:function(){A.a.downloadPicture()},className:"map-btn"},"Karte als Bild runterladen")),S.a.createElement(r.a,{variant:"h2"},"Challenges"),S.a.createElement("form",{style:{display:"inline-block",marginLeft:"40px"},noValidate:!0,autoComplete:"off",onSubmit:console.log},S.a.createElement(p.a,{multiple:!0,value:v,onChange:function(e,n){return L(n)},autoSelect:!0,options:y.map((function(e){return e.label})),renderInput:function(e){return S.a.createElement(c.a,Object.assign({style:{width:"500px"},variant:"outlined",label:"Suche"},e))}})),S.a.createElement(l.a,null,S.a.createElement(m.a,null,S.a.createElement(g.a,{className:n.table,"aria-labelledby":"tableTitle",size:X?"small":"medium","aria-label":"enhanced table"},S.a.createElement(w.a,{classes:n,numSelected:J.length,order:G,orderBy:W,onSelectAllClick:function(e){if(e.target.checked){var n=C.map((function(e){return e.Challange}));H(n)}else H([])},onRequestSort:function(e,n){P(W===n&&"asc"===G?"desc":"asc"),N(n)},rowCount:C.length}),S.a.createElement(h.a,null,function(e,n){var i=e.map((function(e,n){return[e,n]}));return i.sort((function(e,i){var t=n(e[0],i[0]);return 0!==t?t:e[1]-i[1]})),i.map((function(e){return e[0]}))}(C,function(e,n){return"desc"===e?function(e,i){return B(e,i,n)}:function(e,i){return-B(e,i,n)}}(G,W)).slice(q*ne,q*ne+ne).filter((function(e,n){return 0===pe.length||pe.every((function(n){var i=e[n.field];return Array.isArray(i)?i.some((function(e){return e===n.value})):e[n.field]===n.value}))})).map((function(e,n){var i,t=(i=e.Challange,-1!==J.indexOf(i)),a="enhanced-table-checkbox-".concat(n);return S.a.createElement(_.a,{hover:!0,onClick:function(n){return function(e,n){var i=J.indexOf(n),t=[];-1===i?t=t.concat(J,n):0===i?t=t.concat(J.slice(1)):i===J.length-1?t=t.concat(J.slice(0,-1)):i>0&&(t=t.concat(J.slice(0,i),J.slice(i+1))),t.length>16||H(t)}(0,e.Challange)},role:"checkbox","aria-checked":t,tabIndex:-1,key:e.Challange,selected:t},S.a.createElement(f.a,{padding:"checkbox"},S.a.createElement(o.a,{disabled:16===J.length&&!t,checked:t,inputProps:{"aria-labelledby":a}})),S.a.createElement(f.a,{component:"th",id:a,scope:"row",padding:"none",style:{width:"100% !important"}},e.Challange),S.a.createElement(f.a,{align:"left"},S.a.createElement("span",null,e.Beschreibung.text),S.a.createElement("br",null),e.Beschreibung.link?S.a.createElement("span",null,S.a.createElement("strong",null,"Link: "),S.a.createElement(u.a,{href:e.Beschreibung.link},e.Beschreibung.link)):null),S.a.createElement(f.a,{align:"left"},S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.c)(e.Level),n)}},Object(T.c)(e.Level).label)),S.a.createElement(f.a,{align:"left"},e.Ziel.map((function(e,n){return S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.h)(e),n)},key:n},Object(T.h)(e).label)}))),S.a.createElement(f.a,{align:"left"},e.Training.map((function(e,n){return S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.g)(e),n)},key:n},e)}))),S.a.createElement(f.a,{align:"left"},e.Teilnehmer.map((function(e,n){return S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.f)(e),n)},key:n},e)}))),S.a.createElement(f.a,{align:"left"},e.Ort.map((function(e,n){return S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.d)(e),n)},key:n},e)}))),S.a.createElement(f.a,{align:"left"},S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.b)(e.Altersgruppe),n)}},Object(T.b)(e.Altersgruppe).label)),S.a.createElement(f.a,{align:"left"},e.Tags.map((function(e,n){return S.a.createElement(x.a,{onClick:function(n){return _e(Object(T.e)(e),n)},key:n},e)}))))}))))),S.a.createElement(k.a,{rowsPerPageOptions:[25,50],component:"div",count:C.length,rowsPerPage:ne,page:q,onChangePage:function(e,n){U(n)},onChangeRowsPerPage:function(e){ie(parseInt(e.target.value,10)),U(0)}})))}}).call(this,i(83).Buffer)},93:function(e,n,i){"use strict";i.d(n,"a",(function(){return o}));var t=i(0),a=i.n(t),r=i(129),l=i(98),s=i(23),c=i(140),u=[{id:"Challenge",numeric:!1,disablePadding:!0,label:"Challenge"},{id:"Beschreibung",numeric:!0,disablePadding:!1,label:"Beschreibung"},{id:"Level",numeric:!0,disablePadding:!1,label:"Level"},{id:"Ziel",numeric:!0,disablePadding:!1,label:"Ziel"},{id:"Training",numeric:!0,disablePadding:!1,label:"Training"},{id:"Teilnehmer",numeric:!0,disablePadding:!1,label:"Teilnehmer"},{id:"Ort",numeric:!0,disablePadding:!1,label:"Ort"},{id:"Altersgruppe",numeric:!0,disablePadding:!1,label:"Alterstufe"},{id:"Tags",numeric:!0,disablePadding:!1,label:"Tags"}];function o(e){var n=e.classes,i=(e.onSelectAllClick,e.order),t=e.orderBy,o=(e.numSelected,e.rowCount,e.onRequestSort);return a.a.createElement(r.a,null,a.a.createElement(l.a,null,a.a.createElement(s.a,null),u.map((function(e){return a.a.createElement(s.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:t===e.id&&i},a.a.createElement(c.a,{active:t===e.id,direction:t===e.id?i:"asc",onClick:(r=e.id,function(e){o(e,r)})},e.label,t===e.id?a.a.createElement("span",{className:n.visuallyHidden},"desc"===i?"sorted descending":"sorted ascending"):null));var r}))))}}},[[109,1,2]]]);
//# sourceMappingURL=main.abeba325.chunk.js.map