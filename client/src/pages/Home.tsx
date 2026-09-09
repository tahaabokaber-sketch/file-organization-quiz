import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  ArrowLeft, ArrowRight, BarChart3, BookOpen, Check, CheckCircle2, ChevronDown,
  Clock3, Code2, Database, FileCheck2, History, Keyboard, Layers3, Menu, RotateCcw,
  Sparkles, Target, Trophy, UserRound, X, XCircle, Zap
} from "lucide-react";
import { quizQuestions, type QuizQuestion } from "@/lib/quizData";

type Answers = Record<number, string>;
type SavedResult = { id: string; name: string; score: number; total: number; percent: number; seconds: number; date: string };

const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);
const formatTime = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

function getExplanation(question: QuizQuestion) {
  const answer = question.choices.find((choice) => choice.correct)?.text ?? "";
  const q = question.question.toLowerCase();
  if (q.includes("ifstream") || q.includes("input from files")) return `لأن ifstream اختصار لـ input file stream، وهو الكلاس المخصص لقراءة البيانات من الملفات.`;
  if (q.includes("ofstream") || q.includes("output to files")) return `لأن ofstream اختصار لـ output file stream، وهو الكلاس المخصص لكتابة البيانات إلى الملفات.`;
  if (q.includes("fstream") || q.includes("both input and output") || q.includes("reading and writing")) return `لأن fstream يجمع بين عمليتي الإدخال والإخراج، لذلك يناسب الملفات التي تحتاج قراءة وكتابة.`;
  if (q.includes("fopen") || q.includes("ios::")) return `لأن هذا الخيار هو وضع التشغيل القياسي الذي يطابق وظيفة فتح الملف المطلوبة: ${answer}.`;
  if (q.includes("sector")) return `لأن القطاع هو أصغر وحدة قابلة للعنونة على القرص، وتُخزّن الملفات عبر مجموعة من القطاعات.`;
  if (q.includes("cylinder") || q.includes("tracks at the same radius")) return `لأن الأسطوانة تمثل مجموعة مسارات تقع على نصف القطر نفسه عبر أسطح القرص.`;
  if (q.includes("indexed") || q.includes("index")) return `لأن الفهرس يحتفظ بمفاتيح تساعد على الوصول السريع إلى السجل المطلوب بدل فحص الملف كاملًا.`;
  if (q.includes("sequential") || q.includes("log files") || q.includes("backup")) return `لأن التنظيم التسلسلي يناسب البيانات التي تُقرأ أو تُعالج بالترتيب، مثل السجلات ونسخ الأرشيف.`;
  if (q.includes("fixed-length") || q.includes("fixed length") || q.includes("padding")) return `لأن الحقول ذات الطول الثابت تجعل موقع السجل متوقعًا والوصول إليه سريعًا، لكنها قد تهدر مساحة غير مستخدمة.`;
  if (q.includes("delimiter") || q.includes("csv")) return `لأن الفاصل هو محرف خاص يفصل بين الحقول، كما يحدث غالبًا في ملفات CSV، مع ضرورة معالجة ظهوره داخل البيانات.`;
  if (q.includes("keyword=value") || q.includes("keyword-value")) return `لأن هذا الأسلوب يكتب اسم الحقل مع قيمته، فيجعل البيانات أكثر وضوحًا ووصفًا لذاتها.`;
  if (q.includes("length-indicator")) return `لأن تخزين طول الحقل قبل قيمته يسمح بدعم أحجام متغيرة دون الاعتماد على محرف فاصل.`;
  if (q.includes("bit") || q.includes("byte") || q.includes("binary")) return `لأن البيانات الرقمية تُقاس بوحدات ثنائية؛ البِت أصغر وحدة، والبايت يتكون من 8 بِتات.`;
  if (q.includes("ram") || q.includes("switched off")) return `لأن RAM ذاكرة مؤقتة تفقد محتواها عند انقطاع الطاقة، بخلاف التخزين الدائم.`;
  if (q.includes("hard drive") || q.includes("platter") || q.includes("disk head")) return `لأن القرص الصلب وسيط تخزين مغناطيسي دائم؛ الرأس يقرأ ويكتب، والأطباق تحمل الطبقة المغناطيسية.`;
  if (q.includes("track") || q.includes("capacity")) return `لأن سعة القرص تُبنى هرميًا من قطاعات ومسارات وأسطوانات، لذلك تعتمد المعادلة على مكونات البنية نفسها.`;
  if (q.includes("physical file") || q.includes("logical file")) return `لأن الملف الفيزيائي هو وجود البيانات فعليًا على وسيط التخزين، بينما الملف المنطقي هو الصورة التي يتعامل معها البرنامج.`;
  if (q.includes("text file") || q.includes("binary file")) return `لأن الملف النصي يُفسّر كتتابع محارف، بينما الملف الثنائي يُتعامل معه كتتابع من البايتات.`;
  if (q.includes("close") || q.includes("closed") || q.includes("abnormally")) return `لأن إغلاق الملف يحرر الموارد ويضمن دفع البيانات المعلقة إلى التخزين، وإلا قد تُفقد عند الإنهاء غير الطبيعي.`;
  if (q.includes("field") || q.includes("record")) return `لأن الحقل قيمة مفردة، والسجل مجموعة حقول مترابطة تصف كيانًا واحدًا.`;
  if (q.includes("stream")) return `لأن ملف التدفق يتعامل مع البيانات كتتابع من البايتات، لذلك يحتاج إلى طريقة واضحة لفصل الحقول.`;
  return `لأن الخيار «${answer}» يطابق التعريف أو القاعدة الأساسية المرتبطة بتنظيم الملفات ومعالجة البيانات.`;
}

function makeSession() { return shuffle(quizQuestions).map((question) => ({ ...question, choices: shuffle(question.choices) })); }

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [seconds, setSeconds] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<SavedResult[]>(() => { try { return JSON.parse(localStorage.getItem("fileQuizResults") || "[]"); } catch { return []; } });

  const started = sessionQuestions.length > 0 && !finished;
  const current = sessionQuestions[currentIndex];
  const currentAnswer = current ? answers[current.id] : undefined;
  const isSubmitted = current ? Boolean(submitted[current.id]) : false;
  const answeredCount = Object.keys(answers).length;
  const submittedCount = Object.keys(submitted).length;
  const total = sessionQuestions.length || quizQuestions.length;
  const progress = Math.round((answeredCount / total) * 100);
  const score = useMemo(() => sessionQuestions.reduce((totalScore, question) => totalScore + (answers[question.id] === question.choices.find((choice) => choice.correct)?.label ? 1 : 0), 0), [answers, sessionQuestions]);

  useEffect(() => {
    if (!started) return;
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [started]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (!started || !current) return;
      const choiceIndex = ["1", "2", "3", "4"].indexOf(event.key);
      if (choiceIndex > -1 && !isSubmitted) setAnswers((value) => ({ ...value, [current.id]: current.choices[choiceIndex].label }));
      if (event.key === "Enter" && currentAnswer && !isSubmitted) setSubmitted((value) => ({ ...value, [current.id]: true }));
      if (event.key === "ArrowRight" && currentIndex < total - 1) setCurrentIndex((value) => value + 1);
      if (event.key === "ArrowLeft" && currentIndex > 0) setCurrentIndex((value) => value - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [started, current, currentAnswer, currentIndex, isSubmitted, total]);

  const startQuiz = (event: React.FormEvent) => { event.preventDefault(); if (!studentName.trim()) return; setSessionQuestions(makeSession()); setAnswers({}); setSubmitted({}); setCurrentIndex(0); setSeconds(0); setFinished(false); setShowHistory(false); };
  const restart = () => { setSessionQuestions(makeSession()); setAnswers({}); setSubmitted({}); setCurrentIndex(0); setSeconds(0); setFinished(false); setShowHistory(false); };
  const selectAnswer = (label: string) => { if (!isSubmitted && current) setAnswers((value) => ({ ...value, [current.id]: label })); };
  const submitAnswer = () => { if (currentAnswer && current) setSubmitted((value) => ({ ...value, [current.id]: true })); };
  const goPrevious = () => setCurrentIndex((value) => Math.max(0, value - 1));
  const goNext = () => { if (currentIndex < total - 1) setCurrentIndex((value) => value + 1); else { const result: SavedResult = { id: `${Date.now()}`, name: studentName.trim(), score, total, percent: Math.round((score / total) * 100), seconds, date: new Date().toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" }) }; const nextHistory = [result, ...history].slice(0, 20); localStorage.setItem("fileQuizResults", JSON.stringify(nextHistory)); setHistory(nextHistory); setFinished(true); } };
  const clearHistory = () => { localStorage.removeItem("fileQuizResults"); setHistory([]); };

  if (!started && !finished) return <Welcome name={studentName} setName={setStudentName} onStart={startQuiz} history={history} showHistory={showHistory} setShowHistory={setShowHistory} clearHistory={clearHistory} />;
  if (finished) return <div className="quiz-app" dir="rtl"><div className="grid-overlay" /><header className="topbar"><Topbar studentName={studentName} onHistory={() => setShowHistory(true)} /></header><main className="main-shell result-shell"><Results score={score} seconds={seconds} answeredCount={answeredCount} studentName={studentName} onRestart={restart} /><HistoryPanel history={history} open={showHistory} onClose={() => setShowHistory(false)} onClear={clearHistory} /></main></div>;

  const correctChoice = current.choices.find((choice) => choice.correct);
  const isCorrect = currentAnswer === correctChoice?.label;
  return <div className="quiz-app" dir="rtl"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" /><header className="topbar"><Topbar studentName={studentName} onHistory={() => setShowHistory(true)} mobileMap={() => setShowMap((value) => !value)} /></header><main className="main-shell quiz-main"><section className="quiz-heading"><div><span className="eyebrow"><Sparkles size={14} /> KNOWLEDGE CHECK / 100 ITEMS</span><h1>مرحبًا <em>{studentName}</em>،<br /><span>لنثبت معرفتك بتنظيم الملفات</span></h1></div><div className="heading-chip"><UserRound size={14} /> جلسة الطالب</div></section><section className="stats-row"><Stat icon={<Target size={17} />} tone="teal" label="التقدم" value={`${progress}%`} extra={<div className="mini-progress"><span style={{ width: `${progress}%` }} /></div>} /><Stat icon={<CheckCircle2 size={17} />} tone="gold" label="تمت الإجابة" value={<>{answeredCount}<small> / {total}</small></>} extra={`${submittedCount} مصححة`} /><Stat icon={<Clock3 size={17} />} tone="violet" label="الوقت المنقضي" value={formatTime(seconds)} extra="بدون حد زمني" /></section><div className="quiz-layout"><aside className={`question-map ${showMap ? "open" : ""}`}><div className="map-head"><div><span className="section-kicker">NAVIGATOR</span><h2>خريطة الأسئلة</h2></div><button className="close-map" onClick={() => setShowMap(false)}><X size={17} /></button></div><div className="map-legend"><span><i className="legend-dot answered" /> تمت الإجابة</span><span><i className="legend-dot current" /> الحالي</span></div><div className="question-grid">{sessionQuestions.map((question, index) => <button key={question.id} className={`q-number ${index === currentIndex ? "current" : submitted[question.id] ? "answered" : answers[question.id] ? "selected" : ""}`} onClick={() => { setCurrentIndex(index); setShowMap(false); }}>{index + 1}</button>)}</div><div className="map-foot"><FileCheck2 size={15} /> <span>كل إجابة تُحفظ داخل هذه الجلسة</span></div></aside><section className="question-area"><div className="question-toolbar"><div className="question-index"><span>QUESTION</span><strong>{String(currentIndex + 1).padStart(2, "0")}</strong><i>/</i><span>{total}</span></div><div className="toolbar-tip"><Keyboard size={15} /> 1—4 للاختيار <span>·</span> Enter للتأكيد</div></div><article className="question-card"><div className="card-glow" /><div className="question-meta"><span className="question-tag">MULTIPLE CHOICE</span><span className="question-code">FS.{String(current.id).padStart(3, "0")}</span></div><h2 className="question-text">{current.question}</h2><div className="choices" role="radiogroup">{current.choices.map((choice, index) => { const selected = currentAnswer === choice.label; const correct = isSubmitted && choice.correct; const wrong = isSubmitted && selected && !choice.correct; return <button key={choice.label} onClick={() => selectAnswer(choice.label)} className={`choice ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} disabled={isSubmitted}><span className="choice-letter">{choice.label}</span><span className="choice-text">{choice.text}</span><span className="choice-state">{correct && <Check size={18} />}{wrong && <XCircle size={18} />}{!isSubmitted && <span className="choice-key">{index + 1}</span>}</span></button>; })}</div>{isSubmitted && <div className={`feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"}`}><div className="feedback-icon">{isCorrect ? <CheckCircle2 size={20} /> : <BookOpen size={20} />}</div><div><strong>{isCorrect ? "إجابة صحيحة — ممتاز!" : "الإجابة تحتاج مراجعة"}</strong><span>الإجابة الصحيحة: <b>{correctChoice?.label}) {correctChoice?.text}</b></span><small><ChevronDown size={13} /> لماذا؟ {getExplanation(current)}</small></div></div>}<div className="card-actions"><button className="text-action" onClick={() => setAnswers((value) => { const copy = { ...value }; delete copy[current.id]; return copy; })} disabled={!currentAnswer || isSubmitted}><RotateCcw size={16} /> إعادة الاختيار</button><div className="primary-actions"><button className="nav-btn prev" onClick={goPrevious} disabled={currentIndex === 0}><ArrowRight size={17} /> السابق</button>{!isSubmitted ? <button className="confirm-btn" onClick={submitAnswer} disabled={!currentAnswer}>تأكيد الإجابة <Check size={17} /></button> : <button className="confirm-btn next" onClick={goNext}>{currentIndex === total - 1 ? "عرض النتيجة" : "السؤال التالي"} <ArrowLeft size={17} /></button>}</div></div></article><div className="below-card"><div className="progress-line"><span style={{ width: `${((currentIndex + 1) / total) * 100}%` }} /></div><span>السؤال {currentIndex + 1} من {total}</span></div></section></div></main><HistoryPanel history={history} open={showHistory} onClose={() => setShowHistory(false)} onClear={clearHistory} /></div>;
}

function Topbar({ studentName, onHistory, mobileMap }: { studentName: string; onHistory: () => void; mobileMap?: () => void }) { return <div className="topbar-inner"><div className="brand-lockup"><div className="brand-mark"><Database size={21} /></div><div><div className="brand-name">STUDY<span>STACK</span></div><div className="brand-subtitle">FILE SYSTEMS / INTERACTIVE LAB</div></div></div><div className="topbar-actions"><button className="history-btn" onClick={onHistory}><History size={15} /> النتائج السابقة</button>{studentName && <span className="student-pill"><UserRound size={14} /> {studentName}</span>}{mobileMap && <button className="mobile-map-btn" onClick={mobileMap}><Menu size={20} /></button>}</div></div>; }
function Stat({ icon, tone, label, value, extra }: { icon: React.ReactNode; tone: string; label: string; value: React.ReactNode; extra: React.ReactNode }) { return <div className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><div><span className="stat-label">{label}</span><strong>{value}</strong></div><div className="stat-detail">{extra}</div></div>; }
function Welcome({ name, setName, onStart, history, showHistory, setShowHistory, clearHistory }: { name: string; setName: (value: string) => void; onStart: (event: React.FormEvent) => void; history: SavedResult[]; showHistory: boolean; setShowHistory: (value: boolean) => void; clearHistory: () => void }) { return <div className="quiz-app welcome-app" dir="rtl"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" /><header className="topbar"><Topbar studentName="" onHistory={() => setShowHistory(true)} /></header><main className="welcome-shell"><section className="welcome-copy"><span className="eyebrow"><Sparkles size={14} /> YOUR NEXT STUDY SESSION</span><h1>اختبار ذكي،<br /><em>تعلّم أوضح.</em></h1><p>اختبر فهمك في تنظيم الملفات ومعالجة الملفات بلغة C++ من خلال 100 سؤال تفاعلي مع شرح فوري لكل إجابة.</p><div className="welcome-features"><span><Zap size={15} /> ترتيب عشوائي جديد كل مرة</span><span><BookOpen size={15} /> شرح بعد كل إجابة</span><span><BarChart3 size={15} /> سجل نتائجك محليًا</span></div></section><section className="start-card"><div className="start-card-top"><span className="section-kicker">START A NEW SESSION</span><span className="question-count">100 <small>QUESTIONS</small></span></div><h2>قبل أن نبدأ، ما اسمك؟</h2><p>سيظهر اسمك في نتيجة الاختبار وسيُحفظ مع النتائج السابقة على هذا الجهاز فقط.</p><form onSubmit={onStart}><label htmlFor="student-name"><UserRound size={16} /> اسم الطالب</label><input id="student-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="اكتب اسمك هنا" autoComplete="name" autoFocus /><button className="start-btn" disabled={!name.trim()}>ابدأ الاختبار <ArrowLeft size={18} /></button></form><button className="history-link" onClick={() => setShowHistory(true)}><History size={15} /> عرض النتائج السابقة ({history.length})</button></section></main><HistoryPanel history={history} open={showHistory} onClose={() => setShowHistory(false)} onClear={clearHistory} /></div>; }
function Results({ score, seconds, answeredCount, studentName, onRestart }: { score: number; seconds: number; answeredCount: number; studentName: string; onRestart: () => void }) { const percent = Math.round(score); const message = percent >= 85 ? "مستوى رائع. استمر بهذا الإيقاع." : percent >= 60 ? "بداية قوية. راجع الإجابات التي فاتتك." : "جولة مراجعة أخرى وستتقدم بسرعة."; return <article className="results-card"><div className="results-icon"><Trophy size={30} /></div><span className="section-kicker">SESSION COMPLETE</span><h2>أحسنت يا {studentName}</h2><p>{message}</p><div className="score-ring" style={{ "--score": `${percent * 3.6}deg` } as CSSProperties}><div><strong>{score}</strong><span>/ 100</span></div></div><div className="result-stats"><div><span>النسبة</span><strong>{percent}%</strong></div><div><span>تمت الإجابة</span><strong>{answeredCount}</strong></div><div><span>الوقت</span><strong className="mono">{formatTime(seconds)}</strong></div></div><button className="confirm-btn result-button" onClick={onRestart}><RotateCcw size={17} /> إعادة الاختبار بترتيب جديد</button></article>; }
function HistoryPanel({ history, open, onClose, onClear }: { history: SavedResult[]; open: boolean; onClose: () => void; onClear: () => void }) { if (!open) return null; return <div className="history-overlay" onClick={onClose}><aside className="history-panel" onClick={(event) => event.stopPropagation()}><div className="history-head"><div><span className="section-kicker">LOCAL ARCHIVE</span><h2>النتائج السابقة</h2></div><button onClick={onClose}><X size={19} /></button></div>{history.length === 0 ? <div className="empty-history"><History size={30} /><p>لا توجد نتائج محفوظة بعد.</p><span>بعد إنهاء أول اختبار ستظهر نتيجتك هنا.</span></div> : <><div className="history-list">{history.map((result) => <div className="history-item" key={result.id}><div className="history-avatar">{result.name.charAt(0)}</div><div className="history-info"><strong>{result.name}</strong><span>{result.date} · {formatTime(result.seconds)}</span></div><div className="history-score"><strong>{result.percent}%</strong><span>{result.score}/{result.total}</span></div></div>)}</div><button className="clear-history" onClick={onClear}>مسح السجل المحلي</button></>}</aside></div>; }
