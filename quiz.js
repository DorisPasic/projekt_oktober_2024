let score = 0; 
let currentQuestionIndex = 0;

let questions = [
    {
        question: "Wieviele Beine hat eine Spinne?",
        answers: ["2", "8", "4", "6"], // = Array
        correctAnswer: 1  // Integer, der richtige Index ist 1 ( 8 Beine )
        //description: `Spinnen haben immer acht Beine und zwei Körperglieder, Insekten hingegen haben immer sechs Beine und drei Körperglieder.`
    },
    {
        question: "Zu welcher Tierart gehört die Rasse 'Maine Coon'?",
        answers: ["Katze", "Hund", "Pferd", "Kaninchen"],
        correctAnswer: 0   
        // Die Maine Coon ist die größte und schwerste Katzenrasse der Welt und liebt es draußen in der Natur zu sein. Sie wird auch als „Sanfter Riese“ bezeichnet. 
    },
    {
        question: "Welcher der folgenden Vögel kann nicht fliegen?",
        answers: ["Rabe", "Strauß", "Storch", "Elster"],
        correctAnswer:  1
        // Der Strauß kann zwar nicht fliegen, aber dafür kann er eine halbe Stunde lang mit 50 Kilometern pro Stunde laufen. So schnell dürfen bei uns teilweise die Autos in den Städten fahren! Während kürzerer Zeit schafft er sogar 70 Stundenkilometer.
    },    
    {
        question: "Welches Tier ist ein Beuteltier?",
        answers: ["Orangutan", "Elefant", "Erdmännchen", "Koala"],
        correctAnswer:  3
        // Koalas sind nachtaktive Beuteltiere, die in Australien in Eukalyptusbäumen leben und nur Eukalyptus-Blätter und -Rinde frisst. Der Koala ist eng verwandt mit den Kängurus, sie sind beide die wichtigsten Symbole Australiens.
    },    
    {
        // 5.
        question: "Eine Biene ist ein ...",
        answers: ["Vogel", "Fisch", "Insekt", "Säugetier"],
        correctAnswer:  2 
        // Bienen gehören zu den Insekten und haben sechs Beine, vier Flügel und einen Panzer.
    },    
    {
        question: "Ein Tausendfüßler hat durchschnittlich etwa wieviele Füße?",
        answers: ["ca. 400", "ca. 30", "ca. 1.000", "ca. 30.000"],
        correctAnswer:  0
        // Je nach Art besitzen sie zwischen acht und maximal 340 Beinpaare, also insgesamt höchstens 680 Beine.
    },    
    {
        question: `Was ist eine "Schwarze Witwe"?`,
        answers: ["Vogel", "Spinne", "Fliege", "Eidechse"],
        correctAnswer:  1
        // Die schwarze Witwe ist eine kleine Spinne. Ihr Durchmesser (mit Beinen gemessen) beträgt etwa 4 cm, die Körperlänge nur 1 cm. 
    },    
    {
        question: "Wie schlafen Giraffen?",
        answers: ["im sitzen", "im liegen", "auf dem Rücken", "im stehen"],
        correctAnswer:  3
        // Giraffen schlafen immer nur ein paar Minuten am Stück, insgesamt nur wenige Stunden am Tag - im Stehen.
    },    
    {
        question: "Welcher Vogel baut kein eigenes Nest?",
        answers: ["Kuckuck", "Spatz", "Papagei", "Elster"],
        correctAnswer:  0
        // Das ist richtig! Der Kuckuck baut kein eigenes Nest, sondern legt seine Eier in fremde Nester. Sein Junges schlüpft früher als die der anderen Vögel und wirft dann die «Konkurrenz» aus dem Nest.
    },    
    {
        // 10.
        question: "Welche Art von Augen besitzen Insekten?",
        answers: ["Stäbchenaugen", "Facettenaugen", "Zäpfchenaugen", "Molchaugen"],
        correctAnswer:  1
        // Das ist richtig! Insekten haben Facettenaugen. Sie sind aus hunderten Einzelaugen zusammengesetzt. Aus all diesen Einzelbildern wird im Gehirn das Gesamtbild gebildet.
    },    
    {
        question: "Welches ist das größte aktuell lebende Säugetier?",
        answers: ["Blauwahl", "Elefant", "Giraffe", "Buckelwal"],
        correctAnswer:  0
        // Das ist richtig! Der Blauwal ist das grösste Säugetier. Er kann bis zu 31 Meter lang werden und ist mehr als 100 Tonnen schwer.
    },    
    {
        question: "Was ist eine Meerkatze?",
        answers: ["Eine Raubkatze, die im Meer Fische fängt", "Eine besondere Affenart", "Eine Raubkatze, die Meerwasser trinkt", "Eine besondere Raubkatzenart"],
        correctAnswer:  1
        // Das ist richtig! Eine Meerkatze ist eine Affenart, die in verschiedenen Regionen Afrikas lebt.
    },    
    {
        question: "Welches Raubtier lebt sowohl in Europa, als auch in Asien und Amerika?",
        answers: ["Jaguar", "Luchs", "Wolf", "Fuchs"],
        correctAnswer:  1
        // Der Luchs ist auf 3 Kontinenten zu Hause: in Europa, Asien und in Nordamerika. In Europa steht er unter Naturschutz. Hier ist z.B. in Skandinavien der Nordluchs beheimatet. Auch in Südosteuropa streifen vereinzelt Luchse durch die Wälder.
    },    
    {
        question: "Welches ist das langsamste Säugetier?",
        answers: ["Lama", "Koalabär", "Faultier", "Schnecke"],
        correctAnswer:  2
        // Das ist richtig! Das Faultier bewegt sich mit 0.12 km/h vorwärts, also fast in Zeitlupe, und ist damit das langsamste Säugetier.
    },    
    {
        // 15.
        question: "Wie heisst der ausgestorbene Vorfahre unserer heutigen Vögel?",
        answers: ["Compsognathus", "Archäopteryx", "Diplodocus", "Mingodoplus"],
        correctAnswer:  1
        // Das ist richtig! Vor 150 Mio. Jahren lebte der Archäopteryx. Er war ein Nachkomme der Fleisch fressenden Dinosaurier und Vorfahre unserer heutigen Vögel.
    },    
    {
        question: "Bei welcher Tierart trägt das Männchen die Jungen aus?",
        answers: ["Seepferdchen", "Känguru", "Tintenfisch", "Nacktschnecke"],
        correctAnswer: 0  
        // Das ist richtig! Bei den Seepferdchen trägt das Männchen die Jungen aus. Das Weibchen legt die Eier in einen Beutel des Männchens. Dieses trägt den Nachwuchs ungefähr 2 bis 6 Wochen bis zur Geburt aus. 
    },    
    {
        question: "Wie schlafen Fische?",
        answers: ["Sie treiben mit offenen Augen im Wasser", "Sie schliessen die Augen und lehnen sich an einen Stein", "Ein Artgenosse passt auf, während sie die Augen schliessen", "In einer Höhle"],
        correctAnswer:  0
        // Das ist richtig! Fische schlafen im Wasser mit geöffneten Augen. Sie sind so allzeit bereit, vor einem Feind zu fliehen. 
    },    
    {
        question: `Warum gibt es den "Grossen Panda" so selten?`,
        answers: ["Weil er ausschliesslich die seltene Bambuspflanze frisst", "Weil er wegen seines Fells gejagt und ausgerottet wird", "Weil die Weibchen nur alle 5 Jahre ein Junges bekommen", "Weil er zu faul zur Paarung ist"],
        correctAnswer:  0
        // Der Grosse Panda frisst ausschliesslich Bambus. Der Bambus stirbt aber nach der Blüte ab. Wenn alle Bambuspflanzen gleichzeitig blühen, müssen die Pandas anschliessend hungern. Viele überleben das nicht.
    },    
    {
        question: "Was frisst der grösste aller Fische, der Walhai, am liebsten?",
        answers: ["Menschen", "Plastikabfall", "Plankton und kleine Fische", "Robben"],
        correctAnswer:  2
        // Das ist richtig! Der Walhai, der bis zu 20 Meter lang werden kann, ist ein harmloser Fisch. Er ernährt sich von kleinen Fischen und Plankton, die er aus dem Wasser filtert.
    },    
    {
        // 20.
        question: "Was können Katzen besonders gut?",
        answers: ["hören", "sehen", "riechen", "schlafen"],
        correctAnswer:  1
        // Das ist richtig! Die Augen von Katzen vermitteln ein besonders gutes räumliches Bild. Katzen können Entfernungen genau abschätzen und auch kleinste Bewegungen wahrnehmen.
    },
];

function displayQuestion(){

    if(currentQuestionIndex >= questions.length){

        document.getElementById(`quiz-container`).hidden = true; // fragen werden versteckt
        document.getElementById(`result`).hidden = false; // result ist nicht mehr versteckt
        document.getElementById(`score`).textContent = score;

        return; // beendet die Funktion an diesem Punkt
    }

    let question = questions[currentQuestionIndex]; // = beginnt mit der 1. Frage

    document.getElementById(`question`).textContent = question.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement(`button`);
        answerButton.classList.add("btn", "btn-light", "me-2"); // me = margin (Abstand) zum Ende
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}
displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;  // = Fragenliste[aktuelleFrage].richtigeAntwort

    if(userAnswer == correctAnswer){ // == ist zum Vergleichen
        score += 1
        //console.log(${this.description});
        ;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}