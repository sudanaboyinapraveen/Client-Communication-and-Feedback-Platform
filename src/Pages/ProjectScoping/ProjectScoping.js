import React, { useState } from 'react';
import './ProjectScoping.css';  // Create a CSS file for styling

const ProjectScoping = () => {
  const [deliverables, setDeliverables] = useState('');
  const [timelines, setTimelines] = useState('');
  const [budget, setBudget] = useState('');
  const [riskManagement, setRiskManagement] = useState('');
  const [approvalWorkflow, setApprovalWorkflow] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectScope = {
      deliverables,
      timelines,
      budget,
      riskManagement,
      approvalWorkflow
    };
    console.log('Project Scope Submitted:', projectScope);
    // Add logic to send projectScope data to backend or for developer approval
  };

  return (
    <div className="content-container">
    <div className="scoping-container">
      <h1>Project Scoping and Planning</h1>
      <form onSubmit={handleSubmit}>
        {/* Deliverables Section */}
        <div className="form-group">
          <label>Deliverables:</label>
          <textarea
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
            placeholder="Describe the key deliverables of the project..."
            required
          />
        </div>

        {/* Timelines Section */}
        <div className="form-group">
          <label>Timelines:</label>
          <textarea
            value={timelines}
            onChange={(e) => setTimelines(e.target.value)}
            placeholder="Outline the project timelines and milestones..."
            required
          />
        </div>

        {/* Budget Section */}
        <div className="form-group">
          <label>Budget:</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter the project budget..."
            required
          />
        </div>

        {/* Risk Management Section */}
        <div className="form-group">
          <label>Risk Management & Contingency Plans:</label>
          <textarea
            value={riskManagement}
            onChange={(e) => setRiskManagement(e.target.value)}
            placeholder="Ident  ify potential risks and outline contingency plans..."
            required
          />
        </div>

        {/* Approval Workflow Section */}
        <div className="form-group">
          <label>Approval Workflow:</label>
          <textarea
            value={approvalWorkflow}
            onChange={(e) => setApprovalWorkflow(e.target.value)}
            placeholder="Describe the workflow for approvals at each stage..."
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Project Scope</button>
      </form>
    </div>

    </div>
  );
};

export default ProjectScoping;

