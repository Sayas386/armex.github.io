import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-background-light dark:bg-background-dark p-4 pb-2 sticky top-0 z-20">
      <button 
        onClick={() => navigate(-1)}
        className="flex h-12 w-12 shrink-0 items-center justify-start text-black dark:text-white hover:opacity-70 transition-opacity"
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>
      <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">
        {title}
      </h1>
      <div className="h-12 w-12 shrink-0"></div> 
    </header>
  );
};

export default Header;