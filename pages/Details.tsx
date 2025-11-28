import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Details: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <Header title="Detalles de Inversión" />
      
      <main className="flex-grow pb-32">
        <h2 className="text-black dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
          Tu dinero crece con nosotros
        </h2>
        
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-white dark:bg-surface-dark border border-gray-100 dark:border-primary/10 shadow-sm">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover" 
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkVxK5WMyKaGpEPtSN-3DS7mjuNJJXNxtiqtnrD2TwHTjLI7W4y6lJO9dqgrSP3jHs2waWpXXPkpaPB6BT57AnfXfFoXbJL7tqofSuRK84oXAZLbafNd2ps0BuPt_z7pg9nDgrwlW3KopxfW7WJrhtfHAGOmBmsUSODngEjSYy28GDGn8Y6Q2JND76JEfiYIPwlUXEIt2I8s1DL_u1-Rqo56RWBGYtX-X8LP3o9dxlOavcbFECgE0JOhTo7FliZshaqzzGYXoThY8")'
              }}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-6 bg-surface-dark">
              <p className="text-primary text-sm font-normal leading-normal">Ejemplo claro y sencillo</p>
              <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Invierte $60,000, recibe $84,000</p>
              <div className="flex items-end gap-3 justify-between">
                <p className="text-white/70 text-base font-normal leading-normal">
                  Así de fácil es ver crecer tu inversión con nuestro plan a 18 meses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-primary/10 shadow-sm">
            <div className="flex justify-between gap-x-6 py-3 border-b border-gray-100 dark:border-white/10">
              <p className="text-gray-600 dark:text-white/70 text-sm font-normal leading-normal">Inversión Inicial:</p>
              <p className="text-black dark:text-white text-sm font-semibold leading-normal text-right">$60,000 MXN</p>
            </div>
            <div className="flex justify-between gap-x-6 py-3 border-b border-gray-100 dark:border-white/10">
              <p className="text-gray-600 dark:text-white/70 text-sm font-normal leading-normal">Plazo Total:</p>
              <p className="text-black dark:text-white text-sm font-semibold leading-normal text-right">1.5 años (18 meses)</p>
            </div>
            <div className="flex justify-between gap-x-6 py-3 border-b border-gray-100 dark:border-white/10">
              <p className="text-gray-600 dark:text-white/70 text-sm font-normal leading-normal">Pagos mensuales (mes 6 al 17):</p>
              <p className="text-primary text-sm font-semibold leading-normal text-right">$3,500 MXN</p>
            </div>
            <div className="flex justify-between gap-x-6 py-3 border-b border-gray-100 dark:border-white/10">
              <p className="text-gray-600 dark:text-white/70 text-sm font-normal leading-normal">Pago final (mes 18):</p>
              <p className="text-black dark:text-white text-sm font-semibold leading-normal text-right">$42,000 MXN</p>
            </div>
            <div className="flex justify-between gap-x-6 py-3">
              <p className="text-gray-600 dark:text-white/70 text-sm font-normal leading-normal">Retorno Bruto Total:</p>
              <p className="text-primary text-sm font-semibold leading-normal text-right">$84,000 MXN</p>
            </div>
          </div>
        </div>

        <div className="px-4 pt-8">
          <h3 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
            Ventajas de tu inversión
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-primary/10 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-primary mt-1">payments</span>
              <div>
                <p className="text-black dark:text-white font-semibold">Recibes dinero mes a mes</p>
                <p className="text-gray-600 dark:text-white/70 text-sm">Disfruta de tus ganancias con pagos mensuales a partir del sexto mes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-primary/10 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-primary mt-1">shield</span>
              <div>
                <p className="text-black dark:text-white font-semibold">Seguridad y Confianza</p>
                <p className="text-gray-600 dark:text-white/70 text-sm">Tu inversión está respaldada y nuestros procesos son transparentes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-primary/10 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-primary mt-1">schedule</span>
              <div>
                <p className="text-black dark:text-white font-semibold">Plazo y Retorno Definidos</p>
                <p className="text-gray-600 dark:text-white/70 text-sm">Sabes cuánto ganarás y cuándo desde el primer día.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 max-w-md mx-auto w-full p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-white/10 z-20">
        <div className="text-center mb-4">
          <h4 className="text-black dark:text-white font-bold">¿Quieres un plan a tu medida?</h4>
          <p className="text-gray-600 dark:text-white/70 text-sm">Contáctanos para explorar otros montos y esquemas de inversión.</p>
        </div>
        <button 
          onClick={() => navigate('/contact')}
          className="w-full bg-primary hover:bg-green-400 text-background-dark font-bold py-4 px-6 rounded-xl transition-all active:scale-95 shadow-lg"
        >
          Contactar a un Asesor
        </button>
      </footer>
    </div>
  );
};

export default Details;