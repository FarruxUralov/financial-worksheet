export default function AdditionalSections({ data, updateField }) {
  const childrenOptions = Array.from({ length: 11 }, (_, i) => i); // 0 to 10
  const roundsOptions = Array.from({ length: 15 }, (_, i) => i + 1); // 1 to 15

  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-orange-200 dark:border-orange-900/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
      <h2 className="text-xl font-bold text-orange-800 dark:text-orange-400 mb-6 border-b-2 border-orange-100 dark:border-orange-900/50 pb-2 flex items-center gap-2 transition-colors duration-200">
        <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-400 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200">6</span>
        QO'SHIMCHA MA'LUMOTLAR
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Farzandlar soni</label>
          <div className="flex flex-wrap gap-2">
            {childrenOptions.map(num => (
              <button
                key={num}
                onClick={() => updateField('children', num)}
                className={`w-10 h-10 rounded-full font-bold transition-colors ${
                  data.children === num 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'bg-orange-50 dark:bg-slate-900/50 text-orange-800 dark:text-orange-300 border-2 border-orange-200 dark:border-orange-900/50 hover:bg-orange-100 dark:hover:bg-orange-900/80'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Qarzlar</label>
          <textarea
            className="w-full h-24 border-2 border-gray-200 dark:border-slate-600 focus:border-orange-400 dark:focus:border-orange-500 rounded-lg p-3 bg-gray-50 dark:bg-slate-900/50 outline-none resize-none transition-colors duration-200"
            placeholder="Shaxsiy qarzlar yoki kreditlarni kiriting..."
            value={data.debts}
            onChange={(e) => updateField('debts', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Tugallangan davralar</label>
          <div className="flex flex-wrap gap-2">
            {roundsOptions.map(num => (
              <button
                key={num}
                onClick={() => updateField('completedRounds', num)}
                className={`w-10 h-10 rounded font-bold transition-colors ${
                  data.completedRounds === num 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'bg-orange-50 dark:bg-slate-900/50 text-orange-800 dark:text-orange-300 border-2 border-orange-200 dark:border-orange-900/50 hover:bg-orange-100 dark:hover:bg-orange-900/80'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Eslatmalar</label>
          <textarea
            className="w-full h-24 border-2 border-gray-200 dark:border-slate-600 focus:border-orange-400 dark:focus:border-orange-500 rounded-lg p-3 bg-gray-50 dark:bg-slate-900/50 outline-none resize-none transition-colors duration-200"
            placeholder="Qo'shimcha fikrlar yoki eslatmalar..."
            value={data.notes}
            onChange={(e) => updateField('notes', e.target.value)}
          />
        </div>
      </div>

      <div className="pt-6 border-t border-orange-100 dark:border-orange-900/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-end transition-colors duration-200">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Sana</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-orange-400 bg-transparent px-2 py-1 outline-none transition-colors duration-200"
            placeholder="KK/OO/YYYY"
            value={data.date}
            onChange={(e) => updateField('date', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Imzo</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-orange-400 bg-transparent px-2 py-1 outline-none transition-colors duration-200 italic font-serif"
            placeholder="Shu yerga imzo qo'ying"
            value={data.signature}
            onChange={(e) => updateField('signature', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
