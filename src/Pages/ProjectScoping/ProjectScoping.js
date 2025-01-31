

// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import './ProjectScoping.css'; // Your CSS file

// const ProjectScoping = () => {
//   const [deliverables, setDeliverables] = useState('');
//   const [timelines, setTimelines] = useState('');
//   const [budget, setBudget] = useState('');
//   const [riskManagement, setRiskManagement] = useState('');
//   const [approvalWorkflow, setApprovalWorkflow] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const projectScope = {
//       deliverables,
//       timelines,
//       budget: Number(budget), // Convert budget to a number
//       riskManagement,
//       approvalWorkflow,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/project-scope', projectScope);
//       setMessage(response.data.message);
//       setDeliverables('');
//       setTimelines('');
//       setBudget('');
//       setRiskManagement('');
//       setApprovalWorkflow('');
//     } catch (error) {
//       console.error('Error submitting project scope:', error);
//       setMessage('Error submitting project scope. Please try again.');
//     }
//   };

//   return (
//     <div className="content-container">
//       <div className="scoping-container">
//         <h1>Project Scoping and Planning</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Deliverables:</label>
//             <textarea
//               value={deliverables}
//               onChange={(e) => setDeliverables(e.target.value)}
//               placeholder="Describe the key deliverables of the project..."
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Timelines:</label>
//             <textarea
//               value={timelines}
//               onChange={(e) => setTimelines(e.target.value)}
//               placeholder="Outline the project timelines and milestones..."
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Budget:</label>
//             <input
//               type="number"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               placeholder="Enter the project budget..."
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Risk Management & Contingency Plans:</label>
//             <textarea
//               value={riskManagement}
//               onChange={(e) => setRiskManagement(e.target.value)}
//               placeholder="Identify potential risks and outline contingency plans..."
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Approval Workflow:</label>
//             <textarea
//               value={approvalWorkflow}
//               onChange={(e) => setApprovalWorkflow(e.target.value)}
//               placeholder="Describe the workflow for approvals at each stage..."
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">Submit Project Scope</button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ProjectScoping;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './ProjectScoping.css';

// const ProjectScoping = () => {
//   const [deliverables, setDeliverables] = useState('');
//   const [timelines, setTimelines] = useState('');
//   const [budget, setBudget] = useState('');
//   const [riskManagement, setRiskManagement] = useState('');
//   const [approvalWorkflow, setApprovalWorkflow] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const projectScope = {
//       deliverables,
//       timelines,
//       budget: Number(budget),
//       riskManagement,
//       approvalWorkflow,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/project-scope', projectScope);
//       setMessage(response.data.message || 'Project scope submitted successfully!');
//       setDeliverables('');
//       setTimelines('');
//       setBudget('');
//       setRiskManagement('');
//       setApprovalWorkflow('');
//     } catch (error) {
//       console.error('Error submitting project scope:', error);
//       setMessage('Error submitting project scope. Please try again.');
//     }
//   };

//   return (


// <div className="content-container">
//   <div className="header">
//     <h1>Project Scoping and Planning</h1>
//     <p>Define your project details and ensure accurate planning for successful execution.</p>
//   </div>

//   <div className="card">
//     <form className="form" onSubmit={handleSubmit}>
//       {/* Deliverables and Timelines */}
//       <div className="form-row">
//         <div className="form-group">
//           <label>Deliverables:</label>
//           <textarea
//             value={deliverables}
//             onChange={(e) => setDeliverables(e.target.value)}
//             placeholder="Describe the key deliverables of the project..."
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Timelines:</label>
//           <textarea
//             value={timelines}
//             onChange={(e) => setTimelines(e.target.value)}
//             placeholder="Outline the project timelines and milestones..."
//             required
//           />
//         </div>
//       </div>

//       {/* Budget and Risk Management */}
//       <div className="form-row">
//         <div className="form-group">
//           <label>Budget:</label>
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             placeholder="Enter the project budget..."
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Risk Management & Contingency Plans:</label>
//           <textarea
//             value={riskManagement}
//             onChange={(e) => setRiskManagement(e.target.value)}
//             placeholder="Identify potential risks and outline contingency plans..."
//             required
//           />
//         </div>
//       </div>

//       {/* Approval Workflow */}
//       <div className="form-row">
//         <div className="form-group full-width">
//           <label>Approval Workflow:</label>
//           <textarea
//             value={approvalWorkflow}
//             onChange={(e) => setApprovalWorkflow(e.target.value)}
//             placeholder="Describe the workflow for approvals at each stage..."
//             required
//           />
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="form-button">Submit Project Scope</button>
//     </form>
//   </div>

//   {message && <p className="message">{message}</p>}
// </div>


//   );
// };

// export default ProjectScoping;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './ProjectScoping.css';
// import Footer from '../Footer/Footer';

// const ProjectScoping = () => {
//   const [deliverables, setDeliverables] = useState('');
//   const [timelines, setTimelines] = useState('');
//   const [budget, setBudget] = useState('');
//   const [riskManagement, setRiskManagement] = useState('');
//   const [approvalWorkflow, setApprovalWorkflow] = useState('');
//   const [message, setMessage] = useState('');
//   const [submittedData, setSubmittedData] = useState(null);
//   const [isApproved, setIsApproved] = useState(false); // State to track approval

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const projectScope = {
//       deliverables,
//       timelines,
//       budget: Number(budget),
//       riskManagement,
//       approvalWorkflow,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/project-scope', projectScope);
//       setMessage(response.data.message || 'Project scope submitted successfully!');
//       setSubmittedData(projectScope);
//       setDeliverables('');
//       setTimelines('');
//       setBudget('');
//       setRiskManagement('');
//       setApprovalWorkflow('');
//     } catch (error) {
//       console.error('Error submitting project scope:', error);
//       setMessage('Error submitting project scope. Please try again.');
//     }
//   };

//   const handleApproval = () => {
//     setIsApproved(true);
//     setMessage('Project scope approved successfully!');
//   };

//   return (
//     <>
  
//     <div className="container">
//       {/* Left Container: Form */}
//       <div className="left-container">
//         <div className="header">
//           <h1>Project Scoping and Planning</h1>
//           <p>Define your project details and ensure accurate planning for successful execution.</p>
//         </div>

//         <div className="card">
//           <form className="form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Deliverables:</label>
//                 <textarea
//                   value={deliverables}
//                   onChange={(e) => setDeliverables(e.target.value)}
//                   placeholder="Describe the key deliverables of the project..."
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Timelines:</label>
//                 <textarea
//                   value={timelines}
//                   onChange={(e) => setTimelines(e.target.value)}
//                   placeholder="Outline the project timelines and milestones..."
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Budget:</label>
//                 <input
//                   type="number"
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)}
//                   placeholder="Enter the project budget..."
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Risk Management & Contingency Plans:</label>
//                 <textarea
//                   value={riskManagement}
//                   onChange={(e) => setRiskManagement(e.target.value)}
//                   placeholder="Identify potential risks and outline contingency plans..."
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group full-width">
//                 <label>Approval Workflow:</label>
//                 <textarea
//                   value={approvalWorkflow}
//                   onChange={(e) => setApprovalWorkflow(e.target.value)}
//                   placeholder="Describe the workflow for approvals at each stage..."
//                   required
//                 />
//               </div>
//             </div>

//             <button type="submit" className="form-button">Submit Project Scope</button>
//           </form>
//         </div>
//       </div>

//       {/* Right Container: Submitted Data */}
//       <div className="right-container">
//         {submittedData ? (
//           <div className="card">
//             <h2>Submitted Project Scope</h2>
//             <p><strong>Deliverables:</strong> {submittedData.deliverables}</p>
//             <p><strong>Timelines:</strong> {submittedData.timelines}</p>
//             <p><strong>Budget:</strong> ${submittedData.budget}</p>
//             <p><strong>Risk Management:</strong> {submittedData.riskManagement}</p>
//             <p><strong>Approval Workflow:</strong> {submittedData.approvalWorkflow}</p>
//             <button
//               onClick={handleApproval}
//               className={`form-button ${isApproved ? 'approved' : ''}`}
//               disabled={isApproved}
//             >
//               {isApproved ? 'Approved' : 'Approve'}
//             </button>
//           </div>
//         ) : (
//           <div className="placeholder">
//             <p>No project scope submitted yet. Fill out the form to submit.</p>
//           </div>
//         )}
//       </div>

//       {message && <p className="message">{message}</p>}

//     </div>
    
//     <Footer/>
//     </>
//   );
// };

// export default ProjectScoping;
import React, { useState } from 'react';
import axios from 'axios';
import './ProjectScoping.css';
import Footer from '../Footer/Footer';

const ProjectScoping = () => {
  const [deliverables, setDeliverables] = useState('');
  const [timelines, setTimelines] = useState('');
  const [budget, setBudget] = useState('');
  const [riskManagement, setRiskManagement] = useState('');
  const [approvalWorkflow, setApprovalWorkflow] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [isApproved, setIsApproved] = useState(false); // State to track approval

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectScope = {
      deliverables,
      timelines,
      budget: Number(budget),
      riskManagement,
      approvalWorkflow,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/project-scope', projectScope);
      setMessage(response.data.message || 'Project scope submitted successfully!');
      setSubmittedData(projectScope);
      setDeliverables('');
      setTimelines('');
      setBudget('');
      setRiskManagement('');
      setApprovalWorkflow('');
    } catch (error) {
      console.error('Error submitting project scope:', error);
      setMessage('Error submitting project scope. Please try again.');
    }
  };

  const handleApproval = () => {
    setIsApproved(true);
    setMessage('Project scope approved successfully!');
  };


  return (
    <>
      <div className="project-scoping-container">
        {/* Form Section */}
        <div className="scoping-form">
          <div className="form-header">
            <h1>Project Definition</h1>
            <p className="subtitle">Outline your project requirements for accurate planning and execution</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Deliverables */}
              <div className="form-card">
                <label className="input-label">
                  <span className="label-text">Key Deliverables</span>
                  <textarea
                    value={deliverables}
                    onChange={(e) => setDeliverables(e.target.value)}
                    placeholder="Describe project outcomes and deliverables..."
                    className="form-textarea"
                  />
                </label>
              </div>

              {/* Timelines */}
              <div className="form-card">
                <label className="input-label">
                  <span className="label-text">Project Timeline</span>
                  <textarea
                    value={timelines}
                    onChange={(e) => setTimelines(e.target.value)}
                    placeholder="Define milestones and deadlines..."
                    className="form-textarea"
                  />
                </label>
              </div>

              {/* Budget */}
              <div className="form-card">
                <label className="input-label">
                  <span className="label-text">Budget Estimate</span>
                  <div className="input-group">
                    <span className="currency">$</span>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Enter total project budget"
                      className="form-input budget-input"
                    />
                  </div>
                </label>
              </div>

              {/* Risk Management */}
              <div className="form-card">
                <label className="input-label">
                  <span className="label-text">Risk Analysis</span>
                  <textarea
                    value={riskManagement}
                    onChange={(e) => setRiskManagement(e.target.value)}
                    placeholder="Identify potential risks and mitigation strategies..."
                    className="form-textarea"
                  />
                </label>
              </div>

              {/* Approval Workflow */}
              <div className="form-card full-width">
                <label className="input-label">
                  <span className="label-text">Approval Process</span>
                  <textarea
                    value={approvalWorkflow}
                    onChange={(e) => setApprovalWorkflow(e.target.value)}
                    placeholder="Describe the approval workflow stages..."
                    className="form-textarea"
                  />
                </label>
              </div>
            </div>

            <button type="submit" className="submit-button">
              <span className="button-text">Submit Scope</span>
              <span className="button-icon">→</span>
            </button>
          </form>
        </div>

        {/* Submission Preview */}
        <div className="scope-preview">
          <div className="preview-header">
            <h2>Scope Overview</h2>
            <div className={`status-indicator ${isApproved ? 'approved' : 'pending'}`}>
              {isApproved ? 'Approved' : 'Pending Review'}
            </div>
          </div>

          {submittedData ? (
            <div className="preview-content">
              <div className="preview-card">
                <h3>Deliverables</h3>
                <p>{submittedData.deliverables}</p>
              </div>
              <div className="preview-card">
                <h3>Timeline</h3>
                <p>{submittedData.timelines}</p>
              </div>
              <div className="preview-card">
                <h3>Budget</h3>
                <p className="budget-amount">${submittedData.budget.toLocaleString()}</p>
              </div>
              <button 
                onClick={handleApproval}
                className="approval-button"
                disabled={isApproved}
              >
                {isApproved ? 'Approval Confirmed' : 'Approve Scope'}
              </button>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <p>Submit project details to view scope overview</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectScoping;