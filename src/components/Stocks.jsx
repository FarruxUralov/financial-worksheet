export default function Stocks({ data, setData }) {
  const stockList = [
    { id: 'UTG', name: 'Uztransgaz (UTG)' },
    { id: 'STUP', name: 'Startup Table Games (STUP)' },
    { id: 'CF', name: 'Crafers (CF)' },
    { id: 'AIR', name: 'Uzbekistan Airways (AIR)' },
    { id: 'GM', name: 'GM Uzbekistan (GM)' },
    { id: 'UTY', name: 'Uzbekistan Railways (UTY)' },
  ];

  const handleStockChange = (id, field, value) => {
    setData((prev) => ({
      ...prev,
      stocks: {
        ...prev.stocks,
        [id]: {
          ...prev.stocks[id],
          [field]: value
        }
      }
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-900/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
      <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-4 border-b-2 border-blue-100 dark:border-blue-900/50 pb-2 flex items-center gap-2 transition-colors duration-200">
        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200">3</span>
        Aksiyalar
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50 dark:bg-slate-700/50 transition-colors duration-200">
              <th className="p-2 border border-blue-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Kompaniya</th>
              <th className="p-2 border border-blue-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider w-1/4">Miqdori</th>
              <th className="p-2 border border-blue-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider w-1/4">Narxi</th>
              <th className="p-2 border border-blue-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider w-1/4 text-right">Umumiy qiymati</th>
            </tr>
          </thead>
          <tbody>
            {stockList.map((stock) => {
              const qty = parseFloat(data.stocks[stock.id]?.quantity) || 0;
              const price = parseFloat(data.stocks[stock.id]?.price) || 0;
              const total = qty * price;
              return (
                <tr key={stock.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors duration-200">
                  <td className="p-2 border border-blue-100 dark:border-slate-700 font-medium text-gray-800 dark:text-gray-200">{stock.name}</td>
                  <td className="p-2 border border-blue-100 dark:border-slate-700">
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none focus:border-b focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-200"
                      value={data.stocks[stock.id]?.quantity}
                      onChange={(e) => handleStockChange(stock.id, 'quantity', e.target.value)}
                      placeholder="0"
                    />
                  </td>
                  <td className="p-2 border border-blue-100 dark:border-slate-700">
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm mr-1 transition-colors duration-200">$</span>
                      <input
                        type="number"
                        className="w-full bg-transparent outline-none focus:border-b focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-200"
                        value={data.stocks[stock.id]?.price}
                        onChange={(e) => handleStockChange(stock.id, 'price', e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  </td>
                  <td className="p-2 border border-blue-100 dark:border-slate-700 text-right font-semibold text-blue-700 dark:text-blue-400 transition-colors duration-200">
                    ${total > 0 ? total.toLocaleString() : '0'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
