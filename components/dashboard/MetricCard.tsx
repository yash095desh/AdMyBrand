'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, Target, TrendingUp, TrendingDown, DivideIcon as LucideIcon } from 'lucide-react';
import { MetricData } from '@/data/mockData';

const iconMap: Record<string, typeof LucideIcon> = {
  DollarSign,
  Users,
  Target,
  TrendingUp
};

interface MetricCardProps {
  data: MetricData;
  isLoading?: boolean;
}

export function MetricCard({ data, isLoading }: MetricCardProps) {
  const Icon = iconMap[data.icon];
  const isPositive = data.change > 0;

  if (isLoading) {
    return (
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
        </CardHeader>
        <CardContent>
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {data.title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${data.color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {Math.abs(data.change).toFixed(1)}%
          </span>
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}