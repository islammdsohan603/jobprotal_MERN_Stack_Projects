import React from 'react';
import { Card } from '@heroui/react';

export const StatCard = ({ title, value, icon: Icon, className = '' }) => {
  return (
    <Card
      className={`rounded-2xl border border-white/10 bg-white/[0.055] p-2 shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:border-blue-500/40 ${className}`}
    >
      <Card.Content className="flex flex-col gap-6 justify-between p-4">
        {Icon && (
          <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-300">
            <Icon width={20} height={20} />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-400">{title}</span>
          <span className="text-3xl font-semibold text-white tracking-tight">
            {value}
          </span>
        </div>
      </Card.Content>
    </Card>
  );
};
