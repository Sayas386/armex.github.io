import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm filter brightness-[0.4]' : ''}`}>
        
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div 
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#112211] @[480px]:rounded-lg min-h-80 relative"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDR4wkc-YXfIJvavvn5lLWoccyr3SnbGU0Q4-1MVLCugt3nsIjXtpDlyqijnK4_gDzRulGISyBOjg3jOwOXcLrl74iaVxHVe9yjP8X6Rato6wY_JrgK4_LiHZn1UwobyyL2q5x-uOJGa97lWYrlh70ck04O7_Xw-b198-lYJDPIV3S_hYUnsUwFohh50mO_0h1XBDpK6oqA0Xmd24H46EK-AcM3MBCuSisAO5_X5ZDB7fqZ0fIMib8t7wjLHgzFiL8vnwvOXg0TCCM")'
              }}
            >
              <div className="absolute top-0 right-0 p-4 @[480px]:p-6 z-10">
                <button 
                  onClick={toggleMenu}
                  className="text-white hover:bg-white/10 rounded-full p-2 transition-colors"
                >
                  <span className="material-symbols-outlined text-[32px]">menu</span>
                </button>
              </div>
              <div className="flex p-4">
                <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                  Financiera ARMEX
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
          Tu futuro crece aquí. Invierte seguro y con confianza.
        </h1>

        <div className="flex px-4 py-3">
          <button 
            onClick={() => navigate('/simulator')}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-green-400 text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-colors active:scale-95 transform"
          >
            <span className="truncate">Simula tu Inversión Ahora</span>
          </button>
        </div>

        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          ¿Cómo Funciona?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-primary/30 bg-white dark:bg-surface-dark p-4 flex-col">
            <span className="material-symbols-outlined text-gray-700 dark:text-white text-[24px]">calculate</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">1. Simula</h2>
              <p className="text-gray-600 dark:text-[#92c992] text-sm font-normal leading-normal">Proyecta tus ganancias fácilmente</p>
            </div>
          </div>
          
          <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-primary/30 bg-white dark:bg-surface-dark p-4 flex-col">
            <span className="material-symbols-outlined text-gray-700 dark:text-white text-[24px]">person_add</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">2. Regístrate</h2>
              <p className="text-gray-600 dark:text-[#92c992] text-sm font-normal leading-normal">Crea tu cuenta segura</p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-primary/30 bg-white dark:bg-surface-dark p-4 flex-col">
            <span className="material-symbols-outlined text-gray-700 dark:text-white text-[24px]">trending_up</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">3. Invierte</h2>
              <p className="text-gray-600 dark:text-[#92c992] text-sm font-normal leading-normal">Comienza a crecer tu dinero</p>
            </div>
          </div>
        </div>

        <footer className="mt-auto px-4 py-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs">© 2024 Financiera ARMEX. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="text-primary text-xs font-semibold hover:underline">Contacto</button>
            <button className="text-primary text-xs font-semibold hover:underline">Términos y Condiciones</button>
          </div>
        </footer>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-start p-4 pt-24 animate-in fade-in duration-200">
          <button 
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full p-2"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
          <nav className="flex w-full flex-col items-center gap-12 text-center mt-12">
            <Link 
              to="/details" 
              className="flex items-center gap-4 text-2xl font-bold text-white transition-colors hover:text-primary active:scale-95"
            >
              <span className="material-symbols-outlined text-[32px]">info</span>
              <span>Detalles de la inversión</span>
            </Link>
            <Link 
              to="/simulator" 
              className="flex items-center gap-4 text-2xl font-bold text-white transition-colors hover:text-primary active:scale-95"
            >
              <span className="material-symbols-outlined text-[32px]">calculate</span>
              <span>Simulador de inversiones</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-4 text-2xl font-bold text-white transition-colors hover:text-primary active:scale-95"
            >
              <span className="material-symbols-outlined text-[32px]">support_agent</span>
              <span>Contacto y Soporte</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Home;