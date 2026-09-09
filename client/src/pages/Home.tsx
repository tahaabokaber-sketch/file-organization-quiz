import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Code2,
  Database,
  FileCheck2,
  Flag,
  Keyboard,
  Layers3,
  Lightbulb,
  Menu,
  RotateCcw,
  Server,
  Sparkles,
  Target,
  Trophy,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { quizQuestions } from "@/lib/quizData";

type Answers = Record<number, string>;

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [seconds, setSeconds] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = quizQuestions[currentIndex];
  const currentAnswer = answers[current.id];
  const isSubmitted = Boolean(submitted[current.id]);
  const answeredCount = Object.keys(answers).length;
  const submittedCount = Object.keys(submitted).length;
  const progress = Math.round((answeredCount / quizQuestions.length) * 100);
  const score = useMemo(
    () => quizQuestions.reduce((total, question) => {
      const selected = answers[question.id];
      const correct = question.choices.find((choice) => choice.correct)?.label;
      return total + (selected && selected === correct ? 1 : 0);
    }, 0),
    [answers],
  );

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (finished) return;
      const keyIndex = ["1", "2", "3", "4"].indexOf(event.key);
      if (keyIndex > -1 && !isSubmitted) {
        setAnswers((value) => ({ ...value, [current.id]: current.choices[keyIndex].label }));
      }
      if (event.key === "Enter" && currentAnswer && !isSubmitted) {
        setSubmitted((value) => ({ ...value, [current.id]: true }));
      }
      if (event.key === "ArrowRight" && currentIndex < quizQuestions.length - 1) setCurrentIndex((value) => value + 1);
      if (event.key === "ArrowLeft" && currentIndex > 0) setCurrentIndex((value) => value - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current.id, current.choices, currentAnswer, currentIndex, finished, isSubmitted]);

  const selectAnswer = (label: string) => {
    if (isSubmitted) return;
    setAnswers((value) => ({ ...value, [current.id]: label }));
  };

  const submitAnswer = () => {
    if (!currentAnswer) return;
    setSubmitted((value) => ({ ...value, [current.id]: true }));
  };

  const goNext = () => {
    if (currentIndex === quizQuestions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentIndex((value) => value + 1);
  };

  const goPrevious = () => setCurrentIndex((value) => Math.max(0, value - 1));

  const restart = () => {
    setAnswers({});
    setSubmitted({});
    setCurrentIndex(0);
    setSeconds(0);
    setFinished(false);
  };

  const correctChoice = current.choices.find((choice) => choice.correct);
  const isCurrentCorrect = currentAnswer === correctChoice?.label;

  return (
    <div className="quiz-app" dir="rtl">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-lockup">
            <div className="brand-mark"><Database size={21} strokeWidth={2.4} /></div>
            <div>
              <div className="brand-name">DATA<span>FLOW</span></div>
              <div className="brand-subtitle">FILE SYSTEMS LAB / 01</div>
            </div>
          </div>
          <div className="header-status"><span className="live-dot" /> اختبار تفاعلي مباشر</div>
          <button className="mobile-map-btn" onClick={() => setShowMap((value) => !value)} aria-label="فتح خريطة الأسئلة"><Menu size={20} /></button>
        </div>
      </header>

      <main className="main-shell">
        <section className="intro-block">
          <div className="eyebrow"><Sparkles size={14} /> KNOWLEDGE CHECK / 100 ITEMS</div>
          <h1>اختبر فهمك في <em>تنظيم الملفات</em><br /><span>ومعالجة الملفات بلغة C++</span></h1>
          <p className="intro-copy">رحلة قصيرة من 100 سؤالًا لتثبيت مفاهيم file organization، أنظمة التخزين، و C++ file streams.</p>
          <div className="topic-pills"><span><Code2 size={14} /> C++ FILE HANDLING</span><span><Layers3 size={14} /> STORAGE SYSTEMS</span><span><Zap size={14} /> QUICK FEEDBACK</span></div>
        </section>

        <section className="stats-row" aria-label="إحصائيات الاختبار">
          <div className="stat-card"><div className="stat-icon teal"><Target size={17} /></div><div><span className="stat-label">التقدم</span><strong>{progress}%</strong></div><div className="mini-progress"><span style={{ width: `${progress}%` }} /></div></div>
          <div className="stat-card"><div className="stat-icon gold"><CheckCircle2 size={17} /></div><div><span className="stat-label">تمت الإجابة</span><strong>{answeredCount}<small> / 100</small></strong></div><div className="stat-detail">{submittedCount} مصححة</div></div>
          <div className="stat-card"><div className="stat-icon violet"><Clock3 size={17} /></div><div><span className="stat-label">الوقت المنقضي</span><strong className="mono">{formatTime(seconds)}</strong></div><div className="stat-detail">بدون حد زمني</div></div>
        </section>

        <div className="quiz-layout">
          <aside className={`question-map ${showMap ? "open" : ""}`}>
            <div className="map-head"><div><span className="section-kicker">NAVIGATOR</span><h2>خريطة الأسئلة</h2></div><button className="close-map" onClick={() => setShowMap(false)}><X size={17} /></button></div>
            <div className="map-legend"><span><i className="legend-dot answered" /> تمت الإجابة</span><span><i className="legend-dot current" /> الحالي</span></div>
            <div className="question-grid">
              {quizQuestions.map((question, index) => {
                const state = index === currentIndex ? "current" : submitted[question.id] ? "answered" : answers[question.id] ? "selected" : "";
                return <button key={question.id} className={`q-number ${state}`} onClick={() => { setCurrentIndex(index); setShowMap(false); }} aria-label={`السؤال ${question.id}`}>{question.id}</button>;
              })}
            </div>
            <div className="map-foot"><Flag size={15} /> <span>راجع الأسئلة المعلّمة قبل إنهاء الاختبار</span></div>
          </aside>

          <section className="question-area">
            {finished ? (
              <Results score={score} seconds={seconds} answeredCount={answeredCount} onRestart={restart} />
            ) : (
              <>
                <div className="question-toolbar"><div className="question-index"><span>QUESTION</span><strong>{String(current.id).padStart(2, "0")}</strong><i>/</i><span>100</span></div><div className="toolbar-tip"><Keyboard size={15} /> استخدم 1—4 للاختيار <span className="divider">·</span> Enter للتأكيد</div></div>
                <article className="question-card">
                  <div className="card-glow" />
                  <div className="question-meta"><span className="question-tag">MULTIPLE CHOICE</span><span className="question-code">FS.{String(current.id).padStart(3, "0")}</span></div>
                  <h2 className="question-text">{current.question}</h2>
                  <div className="choices" role="radiogroup" aria-label="اختيارات السؤال">
                    {current.choices.map((choice, index) => {
                      const selected = currentAnswer === choice.label;
                      const correct = isSubmitted && choice.correct;
                      const wrong = isSubmitted && selected && !choice.correct;
                      return <button key={choice.label} onClick={() => selectAnswer(choice.label)} className={`choice ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} role="radio" aria-checked={selected} disabled={isSubmitted}>
                        <span className="choice-letter">{choice.label}</span><span className="choice-text">{choice.text}</span><span className="choice-state">{correct && <Check size={18} />}{wrong && <X size={18} />}{!isSubmitted && <span className="choice-key">{index + 1}</span>}</span>
                      </button>;
                    })}
                  </div>
                  {isSubmitted && <div className={`feedback ${isCurrentCorrect ? "feedback-correct" : "feedback-wrong"}`}><div className="feedback-icon">{isCurrentCorrect ? <CheckCircle2 size={19} /> : <CircleHelp size={19} />}</div><div><strong>{isCurrentCorrect ? "إجابة صحيحة — ممتاز!" : "ليست الإجابة الصحيحة"}</strong><span>الإجابة الصحيحة: <b>{correctChoice?.label}) {correctChoice?.text}</b></span></div></div>}
                  <div className="card-actions"><button className="text-action" onClick={() => setAnswers((value) => { const copy = { ...value }; delete copy[current.id]; return copy; })} disabled={!currentAnswer || isSubmitted}><RotateCcw size={16} /> إعادة الاختيار</button><div className="primary-actions"><button className="nav-btn prev" onClick={goPrevious} disabled={currentIndex === 0}><ArrowRight size={17} /> السابق</button>{!isSubmitted ? <button className="confirm-btn" onClick={submitAnswer} disabled={!currentAnswer}>تأكيد الإجابة <Check size={17} /></button> : <button className="confirm-btn next" onClick={goNext}>{currentIndex === quizQuestions.length - 1 ? "عرض النتيجة" : "السؤال التالي"} <ArrowLeft size={17} /></button>}</div></div>
                </article>
                <div className="below-card"><div className="progress-line"><span style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }} /></div><span>السؤال {currentIndex + 1} من 100</span></div>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="site-footer"><span>BUILT FOR BETTER RETENTION</span><span className="footer-center"><Server size={13} /> LOCAL SESSION / AUTO-SAVED</span><span>FILE SYSTEMS LAB © 2026</span></footer>
    </div>
  );
}

function Results({ score, seconds, answeredCount, onRestart }: { score: number; seconds: number; answeredCount: number; onRestart: () => void }) {
  const percentage = Math.round((score / 100) * 100);
  const message = percentage >= 85 ? "مستوى رائع. أنت جاهز للخطوة التالية." : percentage >= 60 ? "بداية قوية. راجع النقاط التي فاتتك." : "المفاهيم الأساسية تحتاج جولة مراجعة أخرى.";
  return <article className="results-card"><div className="results-orbit orbit-one" /><div className="results-orbit orbit-two" /><div className="results-icon"><Trophy size={30} /></div><span className="section-kicker">SESSION COMPLETE</span><h2>أحسنت، أنهيت الاختبار</h2><p>{message}</p><div className="score-ring" style={{ "--score": `${percentage * 3.6}deg` } as CSSProperties}><div><strong>{score}</strong><span>/ 100</span></div></div><div className="result-stats"><div><span>النسبة</span><strong>{percentage}%</strong></div><div><span>تمت الإجابة</span><strong>{answeredCount}</strong></div><div><span>الوقت</span><strong className="mono">{formatTime(seconds)}</strong></div></div><button className="confirm-btn result-button" onClick={onRestart}><RotateCcw size={17} /> ابدأ محاولة جديدة</button></article>;
}
