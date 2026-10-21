const WHATSAPP_NUMBER = "2347066450490";

const subjects = [
  ["Mathematics","JSS","➗"],["English Language","JSS","🔤"],["Basic Science","JSS","🔬"],["Basic Technology","JSS","🛠️"],
  ["Business Studies","JSS","📊"],["Civic Education","JSS","🤝"],["Social Studies","JSS","🌍"],["Agricultural Science","JSS","🌱"],
  ["Computer Studies","JSS","💻"],["Yoruba","JSS","🗣️"],["Physical & Health Education","JSS","⚽"],["Home Economics","JSS","🍲"],
  ["Mathematics","SS","➗"],["English Language","SS","🔤"],["Biology","SS","🧬"],["Chemistry","SS","⚗️"],
  ["Physics","SS","⚡"],["Economics","SS","📈"],["Government","SS","🏛️"],["Literature in English","SS","📚"],
  ["Commerce","SS","🛍️"],["Accounting","SS","🧾"],["Agricultural Science","SS","🌾"],["Computer Studies","SS","💻"],
  ["Geography","SS","🗺️"],["Christian Religious Studies","SS","📖"],["Islamic Studies","SS","☪️"],["Further Mathematics","SS","📐"]
];

const questionBank = {
  "English": [
    {q:"Choose the correctly spelt word.",o:["Accomodation","Accommodation","Acommodation","Acomodation"],a:1,e:"Accommodation is spelt with double c and double m."},
    {q:"Choose the word nearest in meaning to 'rapid'.",o:["Slow","Weak","Swift","Quiet"],a:2,e:"Rapid means fast or swift."},
    {q:"Neither the teacher nor the students ___ present.",o:["was","is","were","has"],a:2,e:"With neither…nor, the verb often agrees with the nearer subject: students."},
    {q:"What is the plural of 'criterion'?",o:["Criterions","Criteria","Criterias","Criterion"],a:1,e:"The plural of criterion is criteria."},
    {q:"Choose the opposite of 'generous'.",o:["Kind","Selfish","Helpful","Gentle"],a:1,e:"Selfish is an antonym of generous."},
    {q:"Identify the adjective: 'The bright student answered.'",o:["student","answered","bright","the"],a:2,e:"Bright describes the noun student."},
    {q:"Choose the correct sentence.",o:["She don't know.","She doesn't knows.","She doesn't know.","She not know."],a:2,e:"Use does not + base verb with she/he/it."},
    {q:"A person who writes poems is a ___.",o:["Novelist","Poet","Playwright","Journalist"],a:1,e:"A poet writes poems."},
    {q:"Choose the correct tag: 'You are ready, ___?'",o:["are you","aren't you","isn't it","don't you"],a:1,e:"A positive statement usually takes a negative question tag."},
    {q:"The expression 'once in a blue moon' means ___.",o:["Every day","Very rarely","At night","Very quickly"],a:1,e:"The idiom means something happens very rarely."}
  ],
  "Mathematics": [
    {q:"What is 15% of 200?",o:["15","20","30","45"],a:2,e:"15% × 200 = 30."},
    {q:"Solve: 3x = 21.",o:["6","7","8","9"],a:1,e:"Divide both sides by 3: x = 7."},
    {q:"What is the perimeter of a square with side 5 cm?",o:["10 cm","15 cm","20 cm","25 cm"],a:2,e:"Perimeter = 4 × side = 20 cm."},
    {q:"Simplify 2/6.",o:["1/2","1/3","2/3","3/2"],a:1,e:"Divide numerator and denominator by 2."},
    {q:"What is the next prime number after 7?",o:["8","9","10","11"],a:3,e:"11 is the next prime number after 7."},
    {q:"Calculate 12².",o:["24","124","144","122"],a:2,e:"12 × 12 = 144."},
    {q:"An angle of 90° is called a ___.",o:["Acute angle","Right angle","Obtuse angle","Reflex angle"],a:1,e:"A right angle measures exactly 90 degrees."},
    {q:"Express 0.75 as a fraction in its simplest form.",o:["1/4","2/3","3/4","4/5"],a:2,e:"0.75 = 75/100 = 3/4."},
    {q:"Find the mean of 2, 4 and 9.",o:["4","5","6","15"],a:1,e:"Mean = (2 + 4 + 9) ÷ 3 = 5."},
    {q:"If y = 2x + 1, find y when x = 3.",o:["5","6","7","8"],a:2,e:"y = 2(3) + 1 = 7."}
  ],
  "Biology": [
    {q:"Which organelle is known as the powerhouse of the cell?",o:["Nucleus","Mitochondrion","Ribosome","Vacuole"],a:1,e:"Mitochondria release usable energy during cellular respiration."},
    {q:"The basic unit of life is the ___.",o:["Tissue","Organ","Cell","System"],a:2,e:"The cell is the basic structural and functional unit of life."},
    {q:"Which gas do green plants absorb during photosynthesis?",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:2,e:"Plants use carbon dioxide and water to make glucose during photosynthesis."},
    {q:"Which blood cells help defend the body against infection?",o:["Red blood cells","White blood cells","Platelets","Plasma"],a:1,e:"White blood cells are involved in immune defence."},
    {q:"The movement of water through a selectively permeable membrane is ___.",o:["Diffusion","Osmosis","Transpiration","Respiration"],a:1,e:"Osmosis is the movement of water across a selectively permeable membrane."},
    {q:"Which part of a plant absorbs most water from soil?",o:["Flower","Leaf","Root hairs","Stem bark"],a:2,e:"Root hairs increase surface area for water absorption."},
    {q:"Which organism makes its own food by photosynthesis?",o:["Goat","Mushroom","Green plant","Earthworm"],a:2,e:"Green plants are producers that photosynthesise."},
    {q:"The human heart has how many chambers?",o:["Two","Three","Four","Five"],a:2,e:"The human heart has two atria and two ventricles."},
    {q:"Which nutrient is mainly needed for growth and tissue repair?",o:["Protein","Water","Fibre","Salt"],a:0,e:"Protein supplies amino acids for growth and tissue repair."},
    {q:"The loss of water vapour from plant leaves is called ___.",o:["Respiration","Transpiration","Germination","Pollination"],a:1,e:"Transpiration is the loss of water vapour from plant surfaces."}
  ],
  "Basic Science": [
    {q:"Which of these is a source of light?",o:["Moon","Mirror","Sun","Book"],a:2,e:"The Sun produces its own light."},
    {q:"Water boils at sea level at approximately ___.",o:["0°C","50°C","100°C","150°C"],a:2,e:"Pure water boils at about 100°C at standard atmospheric pressure."},
    {q:"Which force pulls objects towards the Earth?",o:["Friction","Gravity","Magnetism","Tension"],a:1,e:"Gravity attracts objects towards the Earth."},
    {q:"Which material is a good electrical conductor?",o:["Rubber","Plastic","Copper","Dry wood"],a:2,e:"Copper is a good conductor of electricity."},
    {q:"The process by which liquid changes to gas at the surface is ___.",o:["Freezing","Condensation","Evaporation","Melting"],a:2,e:"Evaporation changes liquid into vapour at its surface."},
    {q:"Which planet is known as the Red Planet?",o:["Venus","Mars","Jupiter","Mercury"],a:1,e:"Mars appears reddish because of iron-rich dust on its surface."},
    {q:"Which device measures temperature?",o:["Barometer","Thermometer","Ammeter","Speedometer"],a:1,e:"A thermometer measures temperature."},
    {q:"A push or pull is called a ___.",o:["Force","Energy","Power","Pressure"],a:0,e:"A force is a push or pull that can change motion or shape."},
    {q:"Which of these is a renewable energy source?",o:["Coal","Petrol","Solar energy","Diesel"],a:2,e:"Solar energy is naturally replenished by sunlight."},
    {q:"Which state of matter has a fixed volume but no fixed shape?",o:["Solid","Liquid","Gas","Plasma only"],a:1,e:"A liquid takes the shape of its container but retains a definite volume."}
  ]
};

const $ = (selector) => document.querySelector(selector);
const subjectGrid = $("#subjectGrid");
let selectedLevel = "all";
function renderSubjects(){
  const term = ($("#subjectSearch").value || "").trim().toLowerCase();
  const filtered = subjects.filter(([name,level]) => (selectedLevel==="all" || level===selectedLevel) && name.toLowerCase().includes(term));
  subjectGrid.innerHTML = filtered.length ? filtered.map(([name,level,icon])=>`<article class="subject-card"><div class="subject-symbol">${icon}</div><div><h3>${name}</h3><p>${level==="JSS"?"Junior Secondary":"Senior Secondary"} · ${level==="JSS"?"JSS 1–3":"SS 1–3"}</p></div></article>`).join("") : '<p>No subjects match your search. Try another keyword.</p>';
}
renderSubjects();
document.querySelectorAll(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); selectedLevel=btn.dataset.level; renderSubjects();
}));
$("#subjectSearch").addEventListener("input",renderSubjects);

$("#menuToggle").addEventListener("click",()=>{
  const nav=$("#mainNav"), open=nav.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded",String(open));
  $("#menuToggle").textContent=open?"✕":"☰";
});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>{
  $("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");$("#menuToggle").textContent="☰";
}));
$("#themeToggle").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const dark=document.body.classList.contains("dark");
  localStorage.setItem("higherImmaculateTheme",dark?"dark":"light");
  $("#themeToggle").textContent=dark?"☾":"☼";
});
if(localStorage.getItem("higherImmaculateTheme")==="dark"){document.body.classList.add("dark");$("#themeToggle").textContent="☾";}
$("#year").textContent=new Date().getFullYear();

let activeQuestions=[],currentIndex=0,answers=[],secondsLeft=300,timerInterval=null,testStarted=false;
const questionArea=$("#questionArea"),welcome=$("#testWelcome"),resultArea=$("#resultArea");
function shuffle(array){return [...array].sort(()=>Math.random()-.5);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimer(){const m=String(Math.floor(secondsLeft/60)).padStart(2,"0"),s=String(secondsLeft%60).padStart(2,"0");$("#timer").textContent=`${m}:${s}`;if(secondsLeft<=30)$("#timer").style.background="#ffe0e0";else $("#timer").style.background="";if(secondsLeft<=0){stopTimer();finishTest(true);}}
$("#cbtForm").addEventListener("submit",e=>{
  e.preventDefault();stopTimer();testStarted=true;currentIndex=0;answers=[];
  const subject=$("#cbtSubject").value,count=Number($("#questionCount").value);
  const bank=questionBank[subject]||questionBank.English;
  activeQuestions=shuffle(bank).slice(0,Math.min(count,bank.length));
  secondsLeft=300;updateTimer();welcome.classList.add("hidden");resultArea.classList.add("hidden");questionArea.classList.remove("hidden");
  timerInterval=setInterval(()=>{secondsLeft--;updateTimer();},1000);
  renderQuestion();
});
function renderQuestion(){
  const q=activeQuestions[currentIndex];
  $("#questionProgress").textContent=`QUESTION ${currentIndex+1} OF ${activeQuestions.length}`;
  $("#progressFill").style.width=`${(currentIndex/activeQuestions.length)*100}%`;
  $("#questionText").textContent=q.q;
  $("#answerOptions").innerHTML=q.o.map((option,i)=>`<button type="button" class="answer-option ${answers[currentIndex]===i?"selected":""}" data-answer="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${option}</span></button>`).join("");
  $("#nextQuestion").disabled=answers[currentIndex]===undefined;
  $("#nextQuestion").textContent=currentIndex===activeQuestions.length-1?"Finish test ✓":"Next question →";
  document.querySelectorAll(".answer-option").forEach(button=>button.addEventListener("click",()=>{
    answers[currentIndex]=Number(button.dataset.answer);
    document.querySelectorAll(".answer-option").forEach(b=>b.classList.toggle("selected",b===button));
    $("#nextQuestion").disabled=false;
  }));
}
$("#nextQuestion").addEventListener("click",()=>{
  if(answers[currentIndex]===undefined)return;
  if(currentIndex<activeQuestions.length-1){currentIndex++;renderQuestion();}
  else finishTest(false);
});
$("#quitTest").addEventListener("click",()=>{
  if(confirm("Quit this practice test? Your current attempt will not be scored.")){stopTimer();testStarted=false;questionArea.classList.add("hidden");welcome.classList.remove("hidden");}
});
function finishTest(timeUp){
  stopTimer();testStarted=false;
  const score=activeQuestions.reduce((sum,q,i)=>sum+(answers[i]===q.a?1:0),0);
  const subject=$("#cbtSubject").value,level=$("#cbtLevel").value;
  const history=JSON.parse(localStorage.getItem("higherImmaculateCBTHistory")||"[]");
  history.unshift({subject,level,score,total:activeQuestions.length,date:new Date().toLocaleString()});
  localStorage.setItem("higherImmaculateCBTHistory",JSON.stringify(history.slice(0,10)));
  questionArea.classList.add("hidden");resultArea.classList.remove("hidden");
  resultArea.innerHTML=`<div class="welcome-icon">🏆</div><span class="eyebrow">${timeUp?"TIME IS UP":"PRACTICE COMPLETE"}</span><div class="result-score">${Math.round(score/activeQuestions.length*100)}%</div><h3>${score} out of ${activeQuestions.length} correct</h3><p>${score/activeQuestions.length>=.8?"Excellent work! Keep challenging yourself.":score/activeQuestions.length>=.5?"Good effort. Review your answers and try again.":"Keep practising. Every attempt is a chance to improve."}</p><div class="answer-review">${activeQuestions.map((q,i)=>`<div style="text-align:left;border-top:1px solid var(--line);padding:12px 0"><strong style="font-size:12px">${i+1}. ${q.q}</strong><p style="margin:5px 0;font-size:11px">Correct answer: <b>${q.o[q.a]}</b>${answers[i]===q.a?" · ✓ Correct":` · Your answer: ${answers[i]===undefined?"Not answered":q.o[answers[i]]}`}</p><p style="margin:0;font-size:11px">${q.e}</p></div>`).join("")}</div><button class="btn btn-primary" id="tryAgain" type="button" style="margin-top:18px">Try another test ↻</button>`;
  $("#progressFill").style.width="100%";
  $("#tryAgain").addEventListener("click",()=>{resultArea.classList.add("hidden");welcome.classList.remove("hidden");});
}
$("#historyToggle").addEventListener("click",()=>{
  const box=$("#historyBox"),open=box.classList.toggle("hidden");
  if(!open){const history=JSON.parse(localStorage.getItem("higherImmaculateCBTHistory")||"[]");box.innerHTML=history.length?history.map(item=>`<div class="history-row"><span>${item.subject}<br><small>${item.date}</small></span><b>${item.score}/${item.total}</b></div>`).join(""):"No attempts saved on this device yet.";}
  $("#historyToggle").textContent=open?"View my CBT history →":"Hide CBT history ↑";
});

function openWhatsApp(form,kind){
  const data=new FormData(form),entries=Object.fromEntries(data.entries());
  const lines=kind==="admission"?["Hello HIGHERIMMACULATE EDUCATION CONSULT, I would like to make an admission/education enquiry.","",`Name: ${entries.name||""}`,`Phone: ${entries.phone||"Not provided"}`,`Email: ${entries.email||"Not provided"}`,`Service needed: ${entries.service||""}`,`Message: ${entries.message||"Not provided"}`]:
  ["Hello HIGHERIMMACULATE EDUCATION CONSULT, I would like to make an enquiry.","",`Name: ${entries.name||""}`,`Phone: ${entries.phone||"Not provided"}`,`Email: ${entries.email||"Not provided"}`,`Subject: ${entries.subject||""}`,`Message: ${entries.message||""}`];
  const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url,"_blank","noopener,noreferrer");
  showToast("WhatsApp is opening. Review your message and press Send there.");
}
$("#admissionForm").addEventListener("submit",e=>{e.preventDefault();openWhatsApp(e.currentTarget,"admission");});
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();openWhatsApp(e.currentTarget,"contact");});
let toastTimeout;
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove("show"),3500);}
const backTop=$("#backTop");window.addEventListener("scroll",()=>backTop.classList.toggle("visible",window.scrollY>500));backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
