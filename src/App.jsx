import { useState, useEffect } from 'react'
import { Save, RotateCcw, Sun, Moon } from 'lucide-react'
import PlayerInfo from './components/PlayerInfo'
import FinancialCalculator from './components/FinancialCalculator'
import Stocks from './components/Stocks'
import Investments from './components/Investments'
import RealEstate from './components/RealEstate'
import AdditionalSections from './components/AdditionalSections'

const initialData = {
  playerName: '',
  profession: '',
  dreamGoal: '',
  salary: '',
  businessIncome: '',
  expenses: '',
  stocks: {
    UTG: { quantity: '', price: '' },
    STUP: { quantity: '', price: '' },
    CF: { quantity: '', price: '' },
    AIR: { quantity: '', price: '' },
    GM: { quantity: '', price: '' },
    UTY: { quantity: '', price: '' },
  },
  investments: [
    { id: 1, name: '', value: '', income: '' },
    { id: 2, name: '', value: '', income: '' },
    { id: 3, name: '', value: '', income: '' },
  ],
  realEstate: [
    { id: 1, value: '', size: '' },
    { id: 2, value: '', size: '' },
    { id: 3, value: '', size: '' },
  ],
  children: 0,
  debts: '',
  completedRounds: 0,
  notes: '',
  date: ''
}

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('financialWorksheet')
    return saved ? JSON.parse(saved) : initialData
  })

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('financialWorksheet', JSON.stringify(data))
  }, [data])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const handleReset = () => {
    if (window.confirm('Barcha maydonlarni tozalashga ishonchingiz komilmi?')) {
      setData(initialData)
    }
  }

  const handleSave = () => {
    // Already auto-saving, but this acts as manual feedback
    localStorage.setItem('financialWorksheet', JSON.stringify(data))
    alert("O'zgarishlar saqlandi!")
  }

  const updateField = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-gray-100 p-4 md:p-8 font-sans pb-24 transition-colors duration-200">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-colors duration-200">
        {/* Header Section */}
        <div className="bg-purple-700 dark:bg-purple-900 text-white p-6 flex flex-col md:flex-row justify-between items-center print:bg-purple-700 print:text-white transition-colors duration-200">
          <h1 className="text-3xl font-bold tracking-tight mb-4 md:mb-0">Moliyaviy hisobot</h1>
          <div className="flex gap-4">
            {/* Simple Professional Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 print:hidden focus:outline-none focus:ring-2 focus:ring-white/30"
              title={isDarkMode ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="text-yellow-300 transition-transform hover:rotate-45" size={20} />
              ) : (
                <Moon className="text-indigo-200 transition-transform hover:-rotate-12" size={20} />
              )}
            </button>
            <button 
              onClick={handleSave} 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg font-medium text-sm print:hidden"
            >
              <Save size={18} /> Saqlash
            </button>
            <button 
              onClick={handleReset} 
              className="flex items-center gap-2 bg-white text-purple-700 hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg font-medium text-sm print:hidden"
            >
              <RotateCcw size={18} /> Tozalash
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-8 bg-white dark:bg-slate-800 transition-colors duration-200">
          <PlayerInfo data={data} updateField={updateField} />
          <FinancialCalculator data={data} updateField={updateField} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Stocks data={data} setData={setData} />
            </div>
            <div className="space-y-8">
              <Investments data={data} setData={setData} />
              <RealEstate data={data} setData={setData} />
            </div>
          </div>
          
          <AdditionalSections data={data} updateField={updateField} />
        </div>
      </div>
    </div>
  )
}
