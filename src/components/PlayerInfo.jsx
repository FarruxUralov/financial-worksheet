export default function PlayerInfo({ data, updateField }) {
  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-purple-900/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
      <h2 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4 border-b-2 border-purple-100 dark:border-purple-900/50 pb-2 flex items-center gap-2 transition-colors duration-200">
        <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200">1</span>
        O'YINCHI MA'LUMOTLARI
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">O'YINCHI ISMI</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 bg-transparent px-2 py-1 outline-none transition-colors duration-200"
            value={data.playerName}
            onChange={(e) => updateField('playerName', e.target.value)}
            placeholder="Ali Valiyev"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Kasb</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 bg-transparent px-2 py-1 outline-none transition-colors duration-200"
            value={data.profession}
            onChange={(e) => updateField('profession', e.target.value)}
            placeholder="Muhandis"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider transition-colors duration-200">Orzudagi maqsad</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 bg-transparent px-2 py-1 outline-none transition-colors duration-200"
            value={data.dreamGoal}
            onChange={(e) => updateField('dreamGoal', e.target.value)}
            placeholder="Yaxta sotib olish"
          />
        </div>
      </div>
    </div>
  )
}
