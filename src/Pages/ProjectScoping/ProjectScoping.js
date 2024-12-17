

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


import React, { useState } from 'react';
import axios from 'axios';
import './ProjectScoping.css';

const ProjectScoping = () => {
  const [deliverables, setDeliverables] = useState('');
  const [timelines, setTimelines] = useState('');
  const [budget, setBudget] = useState('');
  const [riskManagement, setRiskManagement] = useState('');
  const [approvalWorkflow, setApprovalWorkflow] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <div className="content-container">
      <div className="header">
        <h1>Project Scoping and Planning</h1>
        <p>Define your project details and ensure accurate planning for successful execution.</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Deliverables:</label>
        <textarea
          value={deliverables}
          onChange={(e) => setDeliverables(e.target.value)}
          placeholder="Describe the key deliverables of the project..."
          required
        />

        <label>Timelines:</label>
        <textarea
          value={timelines}
          onChange={(e) => setTimelines(e.target.value)}
          placeholder="Outline the project timelines and milestones..."
          required
        />

        <label>Budget:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter the project budget..."
          required
        />

        <label>Risk Management & Contingency Plans:</label>
        <textarea
          value={riskManagement}
          onChange={(e) => setRiskManagement(e.target.value)}
          placeholder="Identify potential risks and outline contingency plans..."
          required
        />

        <label>Approval Workflow:</label>
        <textarea
          value={approvalWorkflow}
          onChange={(e) => setApprovalWorkflow(e.target.value)}
          placeholder="Describe the workflow for approvals at each stage..."
          required
        />

        <button type="submit" className="form-button">Submit Project Scope</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ProjectScoping;
