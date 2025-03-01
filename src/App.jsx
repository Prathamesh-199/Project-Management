import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [teams, setTeams] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [reports, setReports] = useState([]);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Prathamesh Sonawane',
    email: 'developer@example.com',
    role: 'Project Manager',
  });
  const [feedback, setFeedback] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New update available for the software.', date: '2025-01-01' },
    { id: 2, message: 'Project Alpha deadline is approaching.', date: '2025-01-05' },
    { id: 3, message: 'Team meeting scheduled for 2025-01-10.', date: '2025-01-07' },
  ]);

  useEffect(() => {
    fetchData();
  }, [activePage]);

  const fetchData = async () => {
    try {
      const projectsResponse = await axios.get('http://localhost:5000/api/projects');
      const tasksResponse = await axios.get('http://localhost:5000/api/tasks');
      const teamsResponse = await axios.get('http://localhost:5000/api/teams');
      const calendarResponse = await axios.get('http://localhost:5000/api/calendar');
      const reportsResponse = await axios.get('http://localhost:5000/api/reports');

      setProjects(projectsResponse.data);
      setTasks(tasksResponse.data);
      setTeams(teamsResponse.data);
      setCalendarEvents(calendarResponse.data);
      setReports(reportsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotificationsDropdown(false); // Close notifications dropdown if open
  };

  const handleNotificationsClick = () => {
    setShowNotificationsDropdown(!showNotificationsDropdown);
    setShowProfileDropdown(false); // Close profile dropdown if open
  };

  const handleFeedbackSubmit = () => {
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

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
                  {projects.filter(project => project.status === 'Completed').map(project => (
                    <li key={project.id}>
                      <strong>{project.name}</strong> - Due: {project.dueDate}, Progress: {project.progress}%
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-status">
                <h4>Ongoing Projects</h4>
                <ul>
                  {projects.filter(project => project.status === 'In Progress').map(project => (
                    <li key={project.id}>
                      <strong>{project.name}</strong> - Due: {project.dueDate}, Progress: {project.progress}%
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-status">
                <h4>Pending Projects</h4>
                <ul>
                  {projects.filter(project => project.status === 'Not Started').map(project => (
                    <li key={project.id}>
                      <strong>{project.name}</strong> - Due: {project.dueDate}, Progress: {project.progress}%
                    </li>
                  ))}
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
              {tasks.map(task => (
                <div className="task-item" key={task.id}>
                  <h4>{task.title}</h4>
                  <p>Priority: {task.priority}</p>
                  <p>Assigned to: {task.assignedTo}</p>
                  <p>Status: {task.status}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Teams':
        return (
          <div className="page-content">
            <h3>Teams</h3>
            <div className="teams-info">
              {teams.map(team => (
                <div className="team-item" key={team.id}>
                  <h4>{team.name}</h4>
                  <p>Members: {team.members.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Calendar':
        return (
          <div className="page-content">
            <h3>Calendar</h3>
            <div className="calendar-info">
              <h4>Project Deadlines</h4>
              <ul>
                {calendarEvents.filter(event => event.type === 'Project Deadline').map(event => (
                  <li key={event.id}>
                    <strong>{event.title}</strong> - Date: {event.date}
                  </li>
                ))}
              </ul>

              <h4>Team Meetings</h4>
              <ul>
                {calendarEvents.filter(event => event.type === 'Team Meeting').map(event => (
                  <li key={event.id}>
                    <strong>{event.title}</strong> - Date: {event.date}, Team: {event.team}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'Reports':
        return (
          <div className="page-content">
            <h3>Reports</h3>
            <div className="reports-info">
              {reports.map(report => (
                <div className="report-item" key={report.id}>
                  <h4>{report.title}</h4>
                  <p>{report.details}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="content">
            <div className="projects-section">
              <h3>My Projects</h3>
              <div className="project-cards">
                {projects.map(project => (
                  <div className="project-card" key={project.id}>
                    <h4>{project.name}</h4>
                    <p>Due: {project.dueDate}</p>
                    <p>Status: {project.status}</p>
                    <p>Progress: {project.progress}%</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="tasks-section">
              <h3>Tasks</h3>
              <div className="task-list">
                {tasks.map(task => (
                  <div className="task-item" key={task.id}>
                    <h4>{task.title}</h4>
                    <p>Priority: {task.priority}</p>
                    <p>Assigned to: {task.assignedTo}</p>
                    <p>Status: {task.status}</p>
                  </div>
                ))}
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
            <button onClick={handleNotificationsClick}>Notifications</button>
            {showNotificationsDropdown && (
              <div className="dropdown">
                <h4>Notifications</h4>
                <ul>
                  {notifications.map(notification => (
                    <li key={notification.id}>
                      <strong>{notification.message}</strong> - {notification.date}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={handleProfileClick}>Profile</button>
            {showProfileDropdown && (
              <div className="dropdown">
                <h4>Profile</h4>
                <ul>
                  <li>
                    <strong>View Profile</strong>
                    <p>Name: {userProfile.name}</p>
                    <p>Email: {userProfile.email}</p>
                    <p>Role: {userProfile.role}</p>
                    <button>Edit Profile</button>
                  </li>
                  <li>
                    <strong>Settings</strong>
                    <p>Theme: Dark</p>
                    <p>Language: English</p>
                  </li>
                  <li>
                    <strong>Feedback</strong>
                    <textarea
                      placeholder="Write your feedback..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                    <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
                  </li>
                  <li>
                    <strong>Contact Us</strong>
                    <p>Email: productuser123@gmail.com</p>
                    <p>Phone: 100XXXXX23</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Render Active Page */}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;