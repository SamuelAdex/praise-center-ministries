'use client';

import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

type Transaction = {
  id: string;
  asset: string;
  type: 'buy' | 'sell';
  amount: string;
  price: string;
  status: 'completed' | 'pending' | 'failed';
  time: string;
};

const transactions: Transaction[] = [
  {
    id: 'TX-9348',
    asset: 'BTC',
    type: 'buy',
    amount: '0.052 BTC',
    price: '$27,560',
    status: 'completed',
    time: '2 min ago',
  },
  {
    id: 'TX-9347',
    asset: 'ETH',
    type: 'sell',
    amount: '1.20 ETH',
    price: '$1,845',
    status: 'completed',
    time: '15 min ago',
  },
  {
    id: 'TX-9346',
    asset: 'SOL',
    type: 'buy',
    amount: '25 SOL',
    price: '$98.40',
    status: 'pending',
    time: '1 hr ago',
  },
  {
    id: 'TX-9345',
    asset: 'ADA',
    type: 'sell',
    amount: '1,000 ADA',
    price: '$0.52',
    status: 'failed',
    time: '3 hr ago',
  },
];

const statusStyles = {
  completed: 'text-emerald-400 bg-emerald-500/10',
  pending: 'text-yellow-400 bg-yellow-500/10',
  failed: 'text-rose-400 bg-rose-500/10',
};

export default function RecentTransactions() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      
      {/* Gradient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />

      <div className="relative p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Recent Transactions
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-sm text-white/50">
                <th className="px-4 py-2">Asset</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="group rounded-xl bg-white/5 transition hover:bg-white/10"
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {tx.asset}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                        tx.type === 'buy'
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-rose-400 bg-rose-500/10'
                      }`}
                    >
                      {tx.type === 'buy' ? (
                        <ArrowDownLeft size={14} />
                      ) : (
                        <ArrowUpRight size={14} />
                      )}
                      {tx.type.toUpperCase()}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-white/80">
                    {tx.amount}
                  </td>

                  <td className="px-4 py-3 text-white">
                    {tx.price}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[tx.status]}`}
                    >
                      {tx.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-sm text-white/50">
                    {tx.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
