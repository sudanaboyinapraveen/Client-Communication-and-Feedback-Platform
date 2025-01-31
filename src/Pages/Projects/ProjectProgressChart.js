import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const ProjectProgressChart = ({ projects }) => {
  const statusCounts = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Planned', value: statusCounts['planned'] || 0, color: '#3B82F6' },
    { name: 'In Progress', value: statusCounts['in progress'] || 0, color: '#F59E0B' },
    { name: 'Completed', value: statusCounts['completed'] || 0, color: '#10B981' },
  ];

  return (
    <div className="progress-chart">
      <h3>Project Distribution</h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ borderRadius: '8px' }}
              formatter={(value) => [`${value} Projects`, 'Count']}
            />
            <Bar 
              dataKey="value" 
              fill="#8884d8" 
              radius={[4, 4, 0, 0]}
              label={{ position: 'top' }}
            >
              {chartData.map((entry, index) => (
                <rect key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

ProjectProgressChart.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectProgressChart;