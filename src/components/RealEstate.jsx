export default function RealEstate({ data, setData }) {
  const handleRealEstateChange = (index, field, value) => {
    setData((prev) => {
      const newRealEstate = [...prev.realEstate];
      newRealEstate[index] = { ...newRealEstate[index], [field]: value };
      return { ...prev, realEstate: newRealEstate };
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-teal-200 dark:border-teal-900/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
      <h2 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-4 border-b-2 border-teal-100 dark:border-teal-900/50 pb-2 flex items-center gap-2 transition-colors duration-200">
        <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-400 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200">5</span>
        KO'CHMAS MULK
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-teal-50 dark:bg-slate-700/50 transition-colors duration-200">
              <th className="p-2 border border-teal-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Mulk qiymati</th>
              <th className="p-2 border border-teal-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Yer maydoni (kv.m yoki sotix)</th>
            </tr>
          </thead>
          <tbody>
            {data.realEstate.map((property, index) => (
              <tr key={property.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors duration-200">
                <td className="p-2 border border-teal-100 dark:border-slate-700">
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mr-1 transition-colors duration-200">$</span>
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none focus:border-b focus:border-teal-400 dark:focus:border-teal-500 py-1 transition-colors duration-200"
                      value={property.value}
                      onChange={(e) => handleRealEstateChange(index, 'value', e.target.value)}
                      placeholder="Qiymati"
                    />
                  </div>
                </td>
                <td className="p-2 border border-teal-100 dark:border-slate-700">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none focus:border-b focus:border-teal-400 dark:focus:border-teal-500 py-1 px-1 transition-colors duration-200"
                    value={property.size}
                    onChange={(e) => handleRealEstateChange(index, 'size', e.target.value)}
                    placeholder="masalan, 100 kv.m / 6 sotix"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
