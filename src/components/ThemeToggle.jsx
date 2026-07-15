import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.dataset.theme = saved
    }
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('portfolio-theme', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full border border-line flex items-center justify-center text-paper hover:border-gold hover:text-gold transition-colors bg-ink/60 backdrop-blur"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
