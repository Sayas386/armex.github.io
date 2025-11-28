import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Simulator: React.FC = () => {
  const [amount, setAmount] = useState(60000);
  const MIN_AMOUNT = 5000;
  const MAX_AMOUNT = 120000;

  // Investment logic based on the example:
  // Input: 60,000 -> Return: 84,000 (1.4x)
  // Monthly (months 6-17 = 12 payments): 3,500
  // Final (month 18): 42,000 (0.5 of total return)
  // Monthly payment calculation: (Total Return * 0.5) / 12
  
  const totalReturn = amount * 1.4;
  const finalPayment = totalReturn * 0.5;
  const monthlyPayment = finalPayment / 12;

  // Slider background gradient calculation
  const percentage = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <Header title="Simulador de Inversión" />
      
      <div className="flex-grow flex flex-col p-4 space-y-6">
        <div className="text-center">
          <p className="text-gray-600 dark:text-primary/70 text-sm font-normal leading-normal pb-1 pt-4">
            Selecciona el monto a invertir
          </p>
          <h1 className="text-black dark:text-white tracking-tight text-[40px] font-bold leading-tight">
            ${amount.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN
          </h1>
        </div>

        {/* Slider Section */}
        <div className="@container pt-4 pb-2">
          <div className="relative flex w-full flex-col items-start justify-between gap-3">
            <div className="flex h-12 w-full items-center gap-4 relative">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">$5k</p>
              
              <div className="relative flex-1 h-6 flex items-center">
                 {/* Custom Range Input */}
                <input
                    type="range"
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={1000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="absolute w-full h-1.5 bg-transparent appearance-none cursor-pointer z-20 focus:outline-none"
                    style={{
                        WebkitAppearance: 'none',
                    }}
                />
                {/* Track Background */}
                <div className="absolute w-full h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 z-0">
                    <div 
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                
                {/* Thumb Visual (Moves with percentage) */}
                <div 
                    className="absolute h-5 w-5 rounded-full bg-primary ring-4 ring-background-dark pointer-events-none z-10 transition-all duration-75 ease-out shadow-lg"
                    style={{ 
                        left: `calc(${percentage}% - 10px)` 
                    }}
                ></div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">$120k</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap gap-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-xl bg-white dark:bg-black/20 p-4 border border-gray-200 dark:border-primary/20">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Inversión Inicial</p>
            <p className="text-black dark:text-white tracking-tight text-2xl font-bold leading-tight">
              ${amount.toLocaleString('es-MX')}
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-xl bg-white dark:bg-black/20 p-4 border border-gray-200 dark:border-primary/20">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Pago Mensual</p>
            <p className="text-black dark:text-white tracking-tight text-2xl font-bold leading-tight">
              ${monthlyPayment.toLocaleString('es-MX', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="flex w-full flex-col gap-1 rounded-xl bg-white dark:bg-black/20 p-4 border border-gray-200 dark:border-primary/20">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Retorno Bruto Total</p>
            <p className="text-black dark:text-white tracking-tight text-3xl font-bold leading-tight">
              ${totalReturn.toLocaleString('es-MX', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="flex w-full flex-col gap-1 rounded-xl bg-white dark:bg-black/20 p-4 border border-gray-200 dark:border-primary/20">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Plazo</p>
            <p className="text-black dark:text-white tracking-tight text-2xl font-bold leading-tight">18 Meses</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-black/20 p-4 border border-gray-200 dark:border-primary/20 mt-4">
          <h3 className="text-black dark:text-white text-base font-bold">Proyección de tu Inversión</h3>
          
          <div className="flex h-48 w-full items-end justify-between gap-4 px-2 pt-8">
            {/* Mes 1 - Low placeholder */}
            <div className="w-full flex flex-col justify-end h-full gap-2">
                <div className="h-1 w-full rounded-t-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            
            {/* Mes 6 - Monthly Payments Start */}
            <div className="w-full flex flex-col justify-end h-full gap-2">
                <div className="h-[25%] w-full rounded-t-sm bg-primary/40 dark:bg-primary/50 transition-all duration-500"></div>
            </div>

            {/* Mes 18 - Full Return */}
            <div className="w-full flex flex-col justify-end h-full gap-2">
                <div className="h-full w-full rounded-t-sm bg-primary transition-all duration-500"></div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-primary/20 pt-2 font-medium">
            <span>Mes 1</span>
            <span>Mes 6</span>
            <span>Mes 18</span>
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 px-2 mt-2">
            Recibe pagos mensuales del mes 6 al 17 y el resto de tu retorno al finalizar el plazo.
          </p>
        </div>
      </div>

      <div className="sticky bottom-0 w-full bg-background-light dark:bg-background-dark p-4 border-t border-gray-200 dark:border-primary/20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button className="w-full h-12 rounded-xl bg-primary hover:bg-green-400 transition-colors text-background-dark font-bold text-base leading-normal active:scale-95 transform">
          Iniciar Inversión
        </button>
      </div>
    </div>
  );
};

export default Simulator;