export default function FinancialCalculator({ data, updateField }) {
  const salary = parseFloat(data.salary) || 0;
  const businessIncome = data.investments 
    ? data.investments.reduce((sum, inv) => sum + (parseFloat(inv.income) || 0), 0)
    : 0;
  const expenses = parseFloat(data.expenses) || 0;
  const cashFlow = (salary + businessIncome) - expenses;

  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-green-200 dark:border-green-900/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
      <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4 border-b-2 border-green-100 dark:border-green-900/50 pb-2 flex items-center gap-2 transition-colors duration-200">
        <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200">2</span>
        Moliyaviy kalkulyator
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-3 space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">AKTIV DAROMAD</label>
          <div className="relative">
            <span className="absolute left-0 bottom-1 text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200">$</span>
            <input
              type="number"
              className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400 bg-transparent pl-4 pr-2 py-1 outline-none transition-colors duration-200"
              value={data.salary}
              onChange={(e) => updateField('salary', e.target.value)}
              placeholder="0"
            />
          </div>
        </div>
        <div className="md:col-span-1 text-center hidden md:block pb-2 text-gray-400 dark:text-gray-500 font-bold text-xl transition-colors duration-200">+</div>
        <div className="md:col-span-3 space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">PASSIV DAROMAD</label>
          <div className="relative">
            <span className="absolute left-0 bottom-1 text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200">$</span>
            <input
              type="number"
              className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400 bg-transparent pl-4 pr-2 py-1 outline-none transition-colors duration-200 cursor-not-allowed text-gray-500"
              value={businessIncome || ""}
              readOnly
              placeholder="0"
            />
          </div>
        </div>
        <div className="md:col-span-1 text-center hidden md:block pb-2 text-gray-400 dark:text-gray-500 font-bold text-xl transition-colors duration-200">-</div>
        <div className="md:col-span-4 space-y-2 relative">
          <label className="block text-sm font-semibold text-gray-700 dark:text-red-400 uppercase tracking-wider text-red-600 transition-colors duration-200">Oylik xarajatlar</label>
          <div className="relative">
            <span className="absolute left-0 bottom-1 text-red-500 dark:text-red-400 font-medium transition-colors duration-200">$</span>
            <input
              type="number"
              className="w-full border-b-2 border-red-300 dark:border-red-900/50 focus:border-red-500 dark:focus:border-red-400 bg-transparent pl-4 pr-2 py-1 outline-none text-red-700 dark:text-red-400 transition-colors duration-200"
              value={data.expenses}
              onChange={(e) => updateField('expenses', e.target.value)}
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center transition-colors duration-200">
        <span className="text-lg font-bold text-green-900 dark:text-green-300 uppercase tracking-wider mb-2 md:mb-0 transition-colors duration-200">Oylik pul oqimi</span>
        <div className="bg-white dark:bg-slate-800 border-2 border-green-500 dark:border-green-600 rounded-lg px-6 py-2 shadow-inner transition-colors duration-200">
          <span className={`text-2xl font-black transition-colors duration-200 ${cashFlow >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            ${cashFlow.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  )
}
