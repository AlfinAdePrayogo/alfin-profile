import React from 'react';
import { useTheme } from '../../hooks/useTheme'; // Sesuaikan jalur folder ke file useTheme kamu
import { Sun, Moon } from 'lucide-react'; // Pastikan sudah install lucide-react (npm install lucide-react)

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full 
                 bg-slate-900/80 dark:bg-slate-100/80 backdrop-blur-md
                 border border-slate-800/10 dark:border-slate-200/20
                 text-amber-500 dark:text-indigo-600
                 shadow-lg shadow-slate-900/20 dark:shadow-slate-100/10
                 transition-all duration-300 ease-in-out
                 hover:scale-110 active:scale-95 group"
      aria-label="Toggle Theme"
    >
      {/* Jika mode gelap, tampilkan ikon Matahari (untuk beralih ke terang) */}
      {isDark ? (
        <Sun className="w-6 h-6 transition-transform duration-500 rotate-0 scale-100 group-hover:rotate-45" />
      ) : (
        <Moon className="w-6 h-6 transition-transform duration-500 rotate-0 scale-100 group-hover:-rotate-12" />
      )}
    </button>
  );
};