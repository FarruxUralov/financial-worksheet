import { Plus, Trash2 } from 'lucide-react';

export default function Investments({ data, setData }) {
  const handleInvestmentChange = (index, field, value) => {
    setData((prev) => {
      const newInvestments = [...prev.investments];
      newInvestments[index] = { ...newInvestments[index], [field]: value };
      return { ...prev, investments: newInvestments };
    });
  };

  const addBusiness = () => {
    setData((prev) => ({
      ...prev,
      investments: [
        ...prev.investments,
        { id: Date.now(), name: '', value: '', income: '' }
      ]
    }));
  };

  const removeBusiness = (id) => {
    setData((prev) => ({
      ...prev,
      investments: prev.investments.filter(inv => inv.id !== id)
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-900/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
      <h2 className="text-xl font-bold text-indigo-800 dark:text-indigo-400 mb-4 border-b-2 border-indigo-100 dark:border-indigo-900/50 pb-2 flex items-center gap-2 transition-colors duration-200">
        <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200">4</span>
        Bizneslar
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-50 dark:bg-slate-700/50 transition-colors duration-200">
              <th className="p-2 border border-indigo-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Biznes nomi</th>
              <th className="p-2 border border-indigo-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Aktiv / Qiymati</th>
              <th className="p-2 border border-indigo-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Oylik daromad</th>
              <th className="p-2 border border-indigo-200 dark:border-slate-600 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {data.investments.map((inv, index) => (
              <tr key={inv.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors duration-200">
                <td className="p-2 border border-indigo-100 dark:border-slate-700 w-1/3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none focus:border-b focus:border-indigo-400 dark:focus:border-indigo-500 py-1 transition-colors duration-200"
                      value={inv.name || ''}
                      onChange={(e) => handleInvestmentChange(index, 'name', e.target.value)}
                      placeholder="Biznes nomi"
                    />
                  </div>
                </td>
                <td className="p-2 border border-indigo-100 dark:border-slate-700">
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mr-1 transition-colors duration-200">$</span>
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none focus:border-b focus:border-indigo-400 dark:focus:border-indigo-500 py-1 transition-colors duration-200"
                      value={inv.value}
                      onChange={(e) => handleInvestmentChange(index, 'value', e.target.value)}
                      placeholder="Biznes qiymati"
                    />
                  </div>
                </td>
                <td className="p-2 border border-indigo-100 dark:border-slate-700">
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mr-1 transition-colors duration-200">$</span>
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none focus:border-b focus:border-indigo-400 dark:focus:border-indigo-500 py-1 transition-colors duration-200"
                      value={inv.income}
                      onChange={(e) => handleInvestmentChange(index, 'income', e.target.value)}
                      placeholder="Oylik daromad"
                    />
                  </div>
                </td>
                <td className="p-2 border border-indigo-100 dark:border-slate-700 text-center">
                  <button
                    onClick={() => removeBusiness(inv.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="O'chirish"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          onClick={addBusiness}
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors text-sm"
        >
          <Plus size={18} /> Yangi biznes qo'shish
        </button>
      </div>
    </div>
  );
}
