import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'Projects':
        return (
          <div className="page-content">
            <h3>Projects</h3>
            <div className="projects-info">
              <div className="project-status">
                <h4>Completed Projects</h4>
                <ul>
                  <li>Project Alpha</li>
                  <li>Project Beta</li>
                </ul>
              </div>
              <div className="project-status">
                <h4>Ongoing Projects</h4>
                <ul>
                  <li>Project Gamma</li>
                  <li>Project Delta</li>
                </ul>
              </div>
              <div className="project-status">
                <h4>Pending Projects</h4>
                <ul>
                  <li>Project Epsilon</li>
                  <li>Project Zeta</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'Tasks':
        return (
          <div className="page-content">
            <h3>Tasks</h3>
            <div className="tasks-info">
              <div className="task-item">
                <h4>Design Homepage</h4>
                <p>Assigned to: UI/UX Team</p>
                <p>Status: In Progress</p>
              </div>
              <div className="task-item">
                <h4>Develop API</h4>
                <p>Assigned to: Backend Team</p>
                <p>Status: Completed</p>
              </div>
              <div className="task-item">
                <h4>Test Application</h4>
                <p>Assigned to: QA Team</p>
                <p>Status: Pending</p>
              </div>
            </div>
          </div>
        );
      case 'Teams':
        return (
          <div className="page-content">
            <h3>Teams</h3>
            <div className="teams-info">
              <div className="team-item">
                <h4>UI/UX Team</h4>
                <p>Members: Prathamesh, Eva, Shashank</p>
              </div>
              <div className="team-item">
                <h4>Backend Team</h4>
                <p>Members: Mike, Darshan, Krushna</p>
              </div>
              <div className="team-item">
                <h4>QA Team</h4>
                <p>Members: Pruthaviraj, Rajesh, Jonny</p>
              </div>
            </div>
          </div>
        );
      case 'Calendar':
        return (
          <div className="page-content">
            <h3>Calendar</h3>
            <div className="calendar-info">
              <p>Upcoming Events:</p>
              <ul>
                <li>Project Alpha Deadline - 2023-12-01</li>
                <li>Team Meeting - 2023-11-10</li>
                <li>Project Beta Review - 2023-11-15</li>
              </ul>
            </div>
          </div>
        );
      case 'Reports':
        return (
          <div className="page-content">
            <h3>Reports</h3>
            <div className="reports-info">
              <div className="report-item">
                <h4>Project Progress Report</h4>
                <p>Completion: 75%</p>
              </div>
              <div className="report-item">
                <h4>Team Performance Report</h4>
                <p>Overall Rating: 8.5/10</p>
              </div>
              <div className="report-item">
                <h4>Task Completion Report</h4>
                <p>Tasks Completed: 120/150</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="content">
            <div className="projects-section">
              <h3>My Projects</h3>
              <div className="project-cards">
                <div className="project-card">
                  <h4>Project Alpha</h4>
                  <p>Due: 2025-05-01</p>
                  <p>Status: In Progress</p>
                </div>
                <div className="project-card">
                  <h4>Project Beta</h4>
                  <p>Due: 2025-03-15</p>
                  <p>Status: Completed</p>
                </div>
                <div className="project-card">
                  <h4>Project Gamma</h4>
                  <p>Due: 2025-12-20</p>
                  <p>Status: Not Started</p>
                </div>
              </div>
            </div>

            <div className="tasks-section">
              <h3>Tasks</h3>
              <div className="task-list">
                <div className="task-item">
                  <h4>Design Homepage</h4>
                  <p>Priority: High</p>
                  <p>Assigned to: Prathamesh</p>
                </div>
                <div className="task-item">
                  <h4>Develop API</h4>
                  <p>Priority: Medium</p>
                  <p>Assigned to: Krushna</p>
                </div>
                <div className="task-item">
                  <h4>Test Application</h4>
                  <p>Priority: Low</p>
                  <p>Assigned to: Jonny</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Project Management</h2>
        </div>
        <ul className="sidebar-menu">
          <li
            className={activePage === 'Dashboard' ? 'active' : ''}
            onClick={() => setActivePage('Dashboard')}
          >
            Dashboard
          </li>
          <li
            className={activePage === 'Projects' ? 'active' : ''}
            onClick={() => setActivePage('Projects')}
          >
            Projects
          </li>
          <li
            className={activePage === 'Tasks' ? 'active' : ''}
            onClick={() => setActivePage('Tasks')}
          >
            Tasks
          </li>
          <li
            className={activePage === 'Teams' ? 'active' : ''}
            onClick={() => setActivePage('Teams')}
          >
            Teams
          </li>
          <li
            className={activePage === 'Calendar' ? 'active' : ''}
            onClick={() => setActivePage('Calendar')}
          >
            Calendar
          </li>
          <li
            className={activePage === 'Reports' ? 'active' : ''}
            onClick={() => setActivePage('Reports')}
          >
            Reports
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <h1>{activePage}</h1>
          </div>
          <div className="header-right">
            <input type="text" placeholder="Search..." />
            <button>Notifications</button>
            <button>Profile</button>
          </div>
        </div>

        {/* Render Active Page */}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;