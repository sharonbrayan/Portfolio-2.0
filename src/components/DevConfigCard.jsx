import React from "react";
import "./devconfigcard.css";

export default function DevConfigCard() {
  return (
    <div className="dev-card bg-dark text-light rounded p-3 shadow-lg mx-auto mb-5">
      {/* Header bar */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="dot bg-danger"></span>
        <span className="dot bg-warning"></span>
        <span className="dot bg-success"></span>
        <span className="ms-auto text-secondary small">sharon_env.config.js</span>
      </div>
      {/* Code with syntax highlighting */}
      <pre className="m-0 code-block">
        <br />
        <code>
          <span className="keyword">const</span> <span className="variable">developerConfig</span> <span className="operator">=</span> {'{'}
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Sharon Dsouza"</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"FullStack MERN Developer"</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">stack</span>: <span className="string">"MERN Stack"</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">isAlwaysLearning</span>: <span className="boolean">true</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">principle</span>: <span className="string">"Elegance, Security, and Scale."</span>,
          </div>
          {'};'}
          <br /><br />
        </code>
      </pre>
    </div>
  );
}