// 'use client';
// import { useEffect, useState } from 'react';

// export default function DarkModeToggle() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   return (
//     <button
//       className="ml-4 p-2 border rounded text-sm"
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//     >
//       {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
//     </button>
//   );
// }

'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      className="ml-4 p-2  flex items-center gap-2 text-sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <>
          <Sun className="w-4 h-4 text-yellow-500" />
        
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-gray-700" />
        </>
      )}
    </button>
  );
}

