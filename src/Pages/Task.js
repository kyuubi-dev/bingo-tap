import './Task.css';
import React, { useState } from 'react';
import './TextStyle.css';

const Task = ({ userBalance }) => {
  const [selectedTab, setSelectedTab] = useState('special');
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleGoldButtonClick = () => {
    setSelectedTab('leagues'); // Відкриваємо вкладку "LEAGUES" при натисканні на кнопку GOLD
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'special':
        return (
          <div className="tasks">
            <TaskItem text="JOIN OUR X (TWITTER)" reward="500 000" />
            <TaskItem text="JOIN OUR TELEGRAM" reward="250 000" />
            <TaskItem text="JOIN OUR YOUTUBE" reward="250 000" />
          </div>
        );
      case 'leagues':
        return (
          <div className="tasks">
            <LeagueItem text="SILVER" reward="5 000 000" image='./ranks/blue.png' />
            <LeagueItem text="GOLD" reward="10 000 000" image="./ranks/gold.png" />
            <LeagueItem text="DIAMOND" reward="50 000 000" image="./ranks/neon.png" />
          </div>
        );
      case 'ref-tasks':
        return (
          <div className="tasks">
            <InviteFriendItem text="INVITE 3 FRIENDS" reward="50 000" image='./tasks/people1.png' />
            <InviteFriendItem text="INVITE 10 FRIENDS" reward="100 000" image='./tasks/people2.png'/>
            <InviteFriendItem text="INVITE 25 FRIENDS" reward="500 000" image='./tasks/people3.png'/>
            <InviteFriendItem text="INVITE 100 FRIENDS" reward="1 000 000" image='./tasks/people3.png' />
            <InviteFriendItem text="INVITE 1000 FRIENDS" reward="5 000 000" image='./tasks/people3.png'/>
            <InviteFriendItem text="INVITE 10 000 FRIENDS" reward="10 000 000" image='./tasks/people3.png'/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Task">
      <div className="bg-image" />
      <header className="header">
        <div className="balance-display-task">
          <img src="/coin.png" alt="Coin" className="coin-icon" />
          <span className=" blue-style">{userBalance}</span>
        </div>
        <div className="gold" click={handleGoldButtonClick}>
          <img src='./ranks/gold.png' className='rank-img' alt="Gold Rank" />
          <span className="gold-style">GOLD</span>
          <button className='open-btn'>
            <img src='./tasks/open.png' className='open-icon' alt="Open" />
          </button>
        </div>
      </header>
      
      <nav className="nav">
        <div 
          className={`tab ${selectedTab === 'special' ? 'selected' : ''}`} 
          onClick={() => handleTabClick('special')}
        >
          SPECIAL
        </div>
        <div 
          className={`tab ${selectedTab === 'leagues' ? 'selected' : ''}`} 
          onClick={() => handleTabClick('leagues')}
        >
          LEAGUES
        </div>
        <div 
          className={`tab ${selectedTab === 'ref-tasks' ? 'selected' : ''}`} 
          onClick={() => handleTabClick('ref-tasks')}
        >
          REF TASKS
        </div>
      </nav>

      {renderContent()}
    </div>
  );
};

const TaskItem = ({ text, reward }) => (
  <div className="task-item">
    <img src='./tasks/task.png' alt="icon" className="task-icon" />
    <div className="task-text blue-style">{text}</div>
    <div className="task-reward">
      <img src='./coin.png' alt="coin" className="reward-icon" />
      <span className='rew-text gold-style'>{reward}</span>
    </div>
    <button className='open-btn'>
      <img src='./tasks/open.png' className='open-icon' alt="Open" />
    </button>
  </div>
);

const LeagueItem = ({ text, reward, image }) => (
    <div className="task-item leagua">
        <img src={image} alt="icon" className="task-icon"/>
        <div className="task-text leagua blue-style">{text}</div>
        <div className="energy-container">
            <div className="energy-bar" style={{width: 1000}}></div>
        </div>
        <div className="task-reward leagua">
            <img src='./coin.png' alt="coin" className="reward-icon"/>
            <span className='gold-style'>{reward}</span>
        </div>
        <button className="claim-button blue-style">CLAIM</button>
    </div>
);
const InviteFriendItem = ({text, reward, image}) => (
    <div className="task-item">
        <img src={image} alt="icon" className="task-icon" />
      <div className="task-text blue-style">{text}</div>
      <div className="task-reward">
        <img src='./coin.png' alt="coin" className="reward-icon" />
        <span className='gold-style'>{reward}</span>
      </div>
    </div>
  );
export default Task;
