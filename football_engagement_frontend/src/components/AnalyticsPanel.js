import React from "react";

/**
 * PUBLIC_INTERFACE
 * Displays analytics/results based on user responses.
 * @param {Array} analytics - Array of analytics data objects from backend.
 *   Each item: { question: string, yes: number, no: number }
 */
function AnalyticsPanel({ analytics }) {
  if (!analytics || analytics.length === 0)
    return (
      <aside className="analytics-panel">
        <div className="panel-title">Live Poll Analytics</div>
        <div style={{ color: "#888", marginTop: 12 }}>No analytics yet.</div>
      </aside>
    );

  return (
    <aside className="analytics-panel">
      <div className="panel-title">Live Poll Analytics</div>
      {analytics.map(({ question, yes, no }, idx) => (
        <div className="panel-analytic" key={idx}>
          <div className="panel-question">{question}</div>
          <div className="panel-bar">
            <div className="yes-bar" style={{ width: `${(yes + no) > 0 ? (yes/(yes+no))*100 : 0}%` }}>
              Yes {yes}
            </div>
            <div className="no-bar" style={{ width: `${(yes + no) > 0 ? (no/(yes+no))*100 : 0}%` }}>
              No {no}
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default AnalyticsPanel;
