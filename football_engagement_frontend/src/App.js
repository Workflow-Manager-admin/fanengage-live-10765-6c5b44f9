import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import YouTubeStream from "./components/YouTubeStream";
import PopupQuestion from "./components/PopupQuestion";
import AnalyticsPanel from "./components/AnalyticsPanel";
import "./components/NavBar.css";
import "./components/PopupQuestion.css";
import "./components/AnalyticsPanel.css";

/**
 * PUBLIC_INTERFACE
 * Main app for football fan engagement.
 * Streams YouTube video, shows interactive questions, gathers user answers, displays analytics.
 */
function App() {
  // Theme management
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  // CONFIGS (could be loaded from backend or .env)
  const videoId = "21X5lGlDOfg"; // Placeholder YouTube video ID (Live Test)
  const backendBase = process.env.REACT_APP_BACKEND_API || "http://localhost:5000/api";

  // State for popup question and analytics
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [analytics, setAnalytics] = useState([]);
  const [loadingPopup, setLoadingPopup] = useState(false);

  // Next question polling (simulate WebSocket/realtime for base demo)
  useEffect(() => {
    let pollInterval = null;
    const fetchNextQuestion = async () => {
      try {
        setLoadingPopup(true);
        const res = await fetch(`${backendBase}/next_question`, { method: "GET" });
        if (res.ok) {
          const data = await res.json();
          if (data && data.question && data.question !== currentQuestion) {
            setCurrentQuestion(data.question);
            setPopupVisible(true);
          }
        }
      } catch (e) {
        // ignore for demo, production should handle error gracefully
      } finally {
        setLoadingPopup(false);
      }
    };
    pollInterval = setInterval(fetchNextQuestion, 9000);
    return () => clearInterval(pollInterval);
    // eslint-disable-next-line
  }, [backendBase, currentQuestion]);

  // Analytics polling (live updates)
  useEffect(() => {
    let interval = null;
    const fetchAnalytics = async () => {
      try {
        const res = await fetch(`${backendBase}/analytics`, { method: "GET" });
        if (res.ok) {
          const data = await res.json();
          setAnalytics(data.analytics || []);
        }
      } catch (e) {}
    };
    interval = setInterval(fetchAnalytics, 5500);
    return () => clearInterval(interval);
  }, [backendBase]);

  // Answer the popup, POST to backend, re-fetch analytics
  const handleAnswer = useCallback(
    async (answer) => {
      if (!currentQuestion) return;
      setPopupVisible(false);

      try {
        await fetch(`${backendBase}/answer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: currentQuestion, answer }),
        });
      } catch (e) {}
      setCurrentQuestion(null);
    },
    [backendBase, currentQuestion]
  );

  return (
    <div className="App" style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <NavBar />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <div style={{ maxWidth: 1120, margin: "30px auto 0 auto" }}>
        <YouTubeStream videoId={videoId} />

        {/* Popup overlays over video */}
        <PopupQuestion
          question={currentQuestion}
          visible={popupVisible}
          onAnswer={handleAnswer}
          onClose={() => { setPopupVisible(false); setCurrentQuestion(null); }}
        />

        {/* Analytics Panel below video */}
        <AnalyticsPanel analytics={analytics} />
      </div>
      {loadingPopup && <div style={{textAlign: "center", color: "#888", marginTop: 8}}>Loading question...</div>}
    </div>
  );
}

export default App;
