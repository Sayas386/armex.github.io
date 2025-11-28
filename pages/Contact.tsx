import React from 'react';
import Header from '../components/Header';

const Contact: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <Header title="Contacto y Soporte" />
      
      <main className="flex-1 px-4 pt-4 pb-8">
        <h2 className="pb-6 text-left text-[32px] font-bold leading-tight tracking-tight text-black dark:text-white">
          ¿Necesitas ayuda?
        </h2>
        
        <div className="mb-8 flex flex-col gap-2">
          <a 
            className="flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-surface-dark p-4 min-h-14 border border-gray-200 dark:border-transparent shadow-sm hover:bg-gray-50 dark:hover:bg-surface-dark/80 transition-colors" 
            href="tel:+525574500593"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-black dark:text-white">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <p className="flex-1 truncate text-base font-normal leading-normal text-black dark:text-white">Llámanos</p>
            </div>
            <div className="shrink-0">
              <div className="flex h-7 w-7 items-center justify-center text-black/50 dark:text-white/50">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </a>
          
          <a 
            className="flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-surface-dark p-4 min-h-14 border border-gray-200 dark:border-transparent shadow-sm hover:bg-gray-50 dark:hover:bg-surface-dark/80 transition-colors" 
            href="mailto:davidarridescartes.sabatino@gmail.com"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-black dark:text-white">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <p className="flex-1 truncate text-base font-normal leading-normal text-black dark:text-white">Envíanos un correo</p>
            </div>
            <div className="shrink-0">
              <div className="flex h-7 w-7 items-center justify-center text-black/50 dark:text-white/50">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </a>
        </div>

        <h3 className="pb-3 text-lg font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">
          Envíanos un mensaje
        </h3>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="sr-only" htmlFor="name">Nombre</label>
            <input 
              className="w-full rounded-lg border-gray-200 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary dark:border-0 dark:bg-surface-dark dark:text-white dark:placeholder-white/50 p-4" 
              id="name" 
              placeholder="Nombre completo" 
              type="text" 
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">Correo electrónico</label>
            <input 
              className="w-full rounded-lg border-gray-200 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary dark:border-0 dark:bg-surface-dark dark:text-white dark:placeholder-white/50 p-4" 
              id="email" 
              placeholder="Correo electrónico" 
              type="email" 
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="phone">Teléfono</label>
            <input 
              className="w-full rounded-lg border-gray-200 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary dark:border-0 dark:bg-surface-dark dark:text-white dark:placeholder-white/50 p-4" 
              id="phone" 
              placeholder="Teléfono" 
              type="tel" 
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="message">Mensaje</label>
            <textarea 
              className="w-full rounded-lg border-gray-200 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary dark:border-0 dark:bg-surface-dark dark:text-white dark:placeholder-white/50 p-4 resize-none" 
              id="message" 
              placeholder="Escribe aquí tu duda o solicitud..." 
              rows={5}
            ></textarea>
          </div>
          
          <button 
            className="w-full rounded-full bg-primary hover:bg-green-400 py-4 px-4 text-center font-bold text-black dark:text-background-dark transition-all active:scale-95 shadow-md mt-2" 
            type="submit"
          >
            Enviar Mensaje
          </button>
        </form>
        
        <p className="mt-6 px-4 text-center text-xs text-black/50 dark:text-white/50">
          Al enviar este formulario, aceptas nuestra <a className="font-medium underline hover:text-primary" href="#">Política de Privacidad</a>.
        </p>
      </main>
    </div>
  );
};

export default Contact;