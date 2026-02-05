import { useState, useEffect, useMemo } from "react";
import { quizQuestions, Question } from "./data/questions";
import {
  CheckCircle2,
  XCircle,
  Timer,
  Award,
  RefreshCcw,
  ChevronRight,
  User,
  ShieldCheck,
  BookOpen,
  Brain,
  Target,
  BarChart3,
  Star,
  Map,
  FileText,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type QuizState = "START" | "QUIZ" | "RESULT" | "DASHBOARD";
type QuizMode = "EXAM" | "STUDY";

const QUESTIONS_PER_TEST = 20;
const TEST_DURATION = 600; // 10 minutes

export function App() {
  const [gameState, setGameState] = useState<QuizState>("START");
  const [quizMode, setQuizMode] = useState<QuizMode>("EXAM");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [showExplanation, setShowExplanation] = useState(false);

  // Performance Tracking
  const [history, setHistory] = useState<
    { score: number; total: number; date: string; category: string }[]
  >([]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(quizQuestions.map((q) => q.category)));
    return ["All", ...cats];
  }, []);

  useEffect(() => {
    let timer: number;
    if (gameState === "QUIZ" && quizMode === "EXAM" && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, quizMode]);

  const handleStart = (mode: QuizMode, category: string = "All") => {
    let filtered =
      category === "All"
        ? [...quizQuestions]
        : quizQuestions.filter((q) => q.category === category);

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(
      0,
      Math.min(shuffled.length, QUESTIONS_PER_TEST),
    );

    setActiveQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(TEST_DURATION);
    setQuizMode(mode);
    setGameState("QUIZ");
    setShowExplanation(false);
  };

  const handleAnswer = (optionIndex: number) => {
    if (userAnswers[currentQuestionIndex] !== null && quizMode === "STUDY")
      return;

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);

    if (quizMode === "STUDY") {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowExplanation(false);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === activeQuestions[index].correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);

    if (quizMode === "EXAM") {
      setHistory((prev) => [
        ...prev,
        {
          score: finalScore,
          total: activeQuestions.length,
          date: new Date().toLocaleDateString(),
          category: selectedCategory,
        },
      ]);
    }
    setGameState("RESULT");
  };

  const getRank = (percentage: number) => {
    if (percentage >= 95)
      return {
        title: "Comptroller-General",
        color: "text-emerald-600",
        bg: "bg-emerald-100",
        icon: Star,
      };
    if (percentage >= 80)
      return {
        title: "Superintendent",
        color: "text-blue-600",
        bg: "bg-blue-100",
        icon: ShieldCheck,
      };
    if (percentage >= 60)
      return {
        title: "Assistant Inspector",
        color: "text-orange-600",
        bg: "bg-orange-100",
        icon: Target,
      };
    return {
      title: "Recruit",
      color: "text-slate-500",
      bg: "bg-slate-100",
      icon: User,
    };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const currentRank = useMemo(() => {
    if (history.length === 0) return getRank(0);
    const avg =
      history.reduce((acc, h) => acc + h.score / h.total, 0) / history.length;
    return getRank(avg * 100);
  }, [history]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-emerald-800 text-white py-4 px-6 shadow-md flex items-center justify-between sticky top-0 z-50">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setGameState("START")}>
          <div className="bg-white p-1 rounded-full">
            <ShieldCheck className="w-8 h-8 text-emerald-800" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold uppercase tracking-tight">
              GIS Portal
            </h1>
            <p className="text-xs text-emerald-100 font-medium">
              Recruitment Prep Pro
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {gameState === "QUIZ" && quizMode === "EXAM" && (
            <div className="flex items-center gap-2 bg-emerald-700 px-4 py-2 rounded-lg font-mono text-lg">
              <Timer className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
          )}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${currentRank.bg} ${currentRank.color} text-xs font-bold uppercase border border-current/20`}>
            <currentRank.icon className="w-4 h-4" />
            <span className="hidden xs:inline">{currentRank.title}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <AnimatePresence mode="wait">
          {gameState === "START" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-black text-slate-800 leading-tight">
                      Immigration Quiz App
                    </h2>
                    <p className="text-slate-600">
                      Prepare for the Officer Cadet with our comprehensive
                      training system featuring 270+ curated questions on law,
                      operations, and ethics.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full border border-slate-200">
                        270+ Questions
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full border border-slate-200">
                        Officer Scenarios
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full border border-slate-200">
                        Real-time Analytics
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-64 space-y-3">
                    <button
                      onClick={() => handleStart("EXAM")}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 group">
                      <ShieldCheck className="w-5 h-5" />
                      Start Exam Mode
                    </button>
                    <button
                      onClick={() => handleStart("STUDY")}
                      className="w-full bg-white hover:bg-slate-50 text-emerald-700 border-2 border-emerald-600 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group">
                      <BookOpen className="w-5 h-5" />
                      Study Practice
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <div className="flex items-center gap-3 mb-4 text-emerald-600">
                    <Brain className="w-6 h-6" />
                    <h3 className="font-bold">By Category</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          handleStart("STUDY", cat);
                        }}
                        className="px-3 py-2 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100 transition-colors">
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-emerald-600">
                      <BarChart3 className="w-6 h-6" />
                      <h3 className="font-bold">Your Progress</h3>
                    </div>
                    {history.length > 0 ? (
                      <div className="space-y-2">
                        <p className="text-2xl font-black text-slate-800">
                          {history.length}{" "}
                          <span className="text-sm font-normal text-slate-500">
                            Exams taken
                          </span>
                        </p>
                        <p className="text-sm text-slate-600">
                          Average Score:{" "}
                          {Math.round(
                            (history.reduce(
                              (a, b) => a + b.score / b.total,
                              0,
                            ) /
                              history.length) *
                              100,
                          )}
                          %
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400 italic">
                        No exam history yet. Complete your first exam to see
                        analytics.
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <div className="flex items-center gap-3 mb-4 text-emerald-600">
                    <Map className="w-6 h-6" />
                    <h3 className="font-bold">Border Points</h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Aflao</span>{" "}
                      <span className="text-xs text-slate-400">Volta</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Paga</span>{" "}
                      <span className="text-xs text-slate-400">Upper East</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Elubo</span>{" "}
                      <span className="text-xs text-slate-400">Western</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === "QUIZ" && (
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-2 w-full bg-slate-100">
                <motion.div
                  className="h-full bg-emerald-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {activeQuestions[currentQuestionIndex].category}
                    </span>
                    {quizMode === "STUDY" && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded-full">
                        Study Mode
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-slate-300">
                    {currentQuestionIndex + 1} / {activeQuestions.length}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 leading-tight">
                  {activeQuestions[currentQuestionIndex].text}
                </h3>

                <div className="space-y-3">
                  {activeQuestions[currentQuestionIndex].options.map(
                    (option, idx) => {
                      const isSelected =
                        userAnswers[currentQuestionIndex] === idx;
                      const isCorrect =
                        idx ===
                        activeQuestions[currentQuestionIndex].correctAnswer;
                      const showResult =
                        quizMode === "STUDY" &&
                        userAnswers[currentQuestionIndex] !== null;

                      let buttonClass =
                        "border-slate-100 hover:border-emerald-200 hover:bg-slate-50";
                      if (isSelected)
                        buttonClass =
                          "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
                      if (showResult) {
                        if (isCorrect)
                          buttonClass =
                            "border-emerald-500 bg-emerald-100 ring-2 ring-emerald-500";
                        else if (isSelected)
                          buttonClass =
                            "border-red-500 bg-red-50 ring-2 ring-red-500";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(idx)}
                          disabled={showResult && quizMode === "STUDY"}
                          className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group relative overflow-hidden ${buttonClass}`}>
                          <span
                            className={`font-bold text-lg ${isSelected || (showResult && isCorrect) ? "text-emerald-900" : "text-slate-600"}`}>
                            {option}
                          </span>
                          <div className="flex items-center gap-2">
                            {showResult && isCorrect && (
                              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            )}
                            {showResult && isSelected && !isCorrect && (
                              <XCircle className="w-6 h-6 text-red-600" />
                            )}
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "bg-emerald-500 border-emerald-500"
                                  : "border-slate-300"
                              }`}>
                              {isSelected && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    },
                  )}
                </div>

                <AnimatePresence>
                  {showExplanation &&
                    activeQuestions[currentQuestionIndex].explanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                        <div className="flex gap-2">
                          <Info className="w-5 h-5 text-blue-500 shrink-0" />
                          <div>
                            <p className="text-sm font-bold text-blue-800">
                              Officer Insight:
                            </p>
                            <p className="text-sm text-blue-700 mt-1">
                              {
                                activeQuestions[currentQuestionIndex]
                                  .explanation
                              }
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-10 flex justify-between items-center">
                  <button
                    onClick={() => setGameState("START")}
                    className="text-slate-400 hover:text-slate-600 font-bold transition-colors">
                    Quit Session
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={userAnswers[currentQuestionIndex] === null}
                    className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 text-white font-black rounded-2xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-100">
                    {currentQuestionIndex === activeQuestions.length - 1
                      ? "Finish"
                      : "Next Question"}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === "RESULT" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

              <div
                className={`w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3 shadow-lg ${getRank((score / activeQuestions.length) * 100).bg}`}>
                <currentRank.icon
                  className={`w-14 h-14 ${currentRank.color}`}
                />
              </div>

              <h2 className="text-4xl font-black text-slate-800 mb-2">
                Result Slip
              </h2>
              <div
                className={`inline-block px-4 py-1 rounded-full text-sm font-black uppercase mb-8 ${currentRank.bg} ${currentRank.color}`}>
                Rank: {currentRank.title}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-[10px] text-slate-400 uppercase font-black">
                    Score
                  </p>
                  <p className="text-2xl font-black text-slate-800">
                    {score}/{activeQuestions.length}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-[10px] text-slate-400 uppercase font-black">
                    Accuracy
                  </p>
                  <p className="text-2xl font-black text-slate-800">
                    {Math.round((score / activeQuestions.length) * 100)}%
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-[10px] text-slate-400 uppercase font-black">
                    Mode
                  </p>
                  <p className="text-2xl font-black text-slate-800">
                    {quizMode}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-[10px] text-slate-400 uppercase font-black">
                    Time
                  </p>
                  <p className="text-2xl font-black text-slate-800">
                    {quizMode === "EXAM"
                      ? formatTime(TEST_DURATION - timeLeft)
                      : "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={() => handleStart("EXAM")}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
                  <RefreshCcw className="w-5 h-5" />
                  Try Again
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Download PDF
                </button>
              </div>

              <div className="text-left border-t border-slate-100 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-black text-slate-800">
                    Review Answers
                  </h4>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />{" "}
                      Correct
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />{" "}
                      Incorrect
                    </span>
                  </div>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {activeQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border-2 transition-all ${userAnswers[idx] === q.correctAnswer ? "border-emerald-50 bg-emerald-50/30" : "border-red-50 bg-red-50/30"}`}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-sm ${userAnswers[idx] === q.correctAnswer ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
                          {idx + 1}
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-slate-800 leading-snug">
                            {q.text}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="p-2 bg-white rounded-lg border border-slate-100">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                                Correct Answer
                              </span>
                              <span className="font-bold text-emerald-600">
                                {q.options[q.correctAnswer]}
                              </span>
                            </div>
                            {userAnswers[idx] !== q.correctAnswer && (
                              <div className="p-2 bg-white rounded-lg border border-slate-100">
                                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                                  Your Answer
                                </span>
                                <span className="font-bold text-red-500">
                                  {userAnswers[idx] !== null
                                    ? q.options[userAnswers[idx] as number]
                                    : "None"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center py-12 text-slate-400 text-sm">
        <div className="flex items-center justify-center gap-4 mb-4">
          <ShieldCheck className="w-6 h-6 opacity-20" />
          <Star className="w-6 h-6 opacity-20" />
          <Award className="w-6 h-6 opacity-20" />
        </div>
        <p className="font-bold text-slate-500 uppercase tracking-widest text-[10px]">
          Ghana Immigration Service Prep Tool
        </p>
        <p className="mt-1">
          🧑‍💻:<a href="https://www.linkedin.com/in/erickwakyeboateng/">ERIC</a>
        </p>
      </footer>
    </div>
  );
}
