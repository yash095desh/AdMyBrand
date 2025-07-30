'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { TrafficChart } from '@/components/dashboard/TrafficChart';
import { SignupsChart } from '@/components/dashboard/SignupsChart';
import { CampaignTable } from '@/components/dashboard/CampaignTable';
import { DateRangePicker } from '@/components/dashboard/DateRangePicker';
import { ThemeToggle } from '@/components/dashboard/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import {
  getMetricsData,
  getRevenueData,
  getTrafficSourceData,
  getDailySignupsData,
  getCampaignData,
  generateRandomMetrics,
  MetricData,
  ChartDataPoint,
  CampaignData
} from '@/data/mockData';
import { exportDashboardData } from '@/lib/export';
import { DateRange } from 'react-day-picker';

export default function Dashboard() {
  const [metricsData, setMetricsData] = useState<MetricData[]>([]);
  const [revenueData, setRevenueData] = useState<ChartDataPoint[]>([]);
  const [trafficData, setTrafficData] = useState<ChartDataPoint[]>([]);
  const [signupsData, setSignupsData] = useState<ChartDataPoint[]>([]);
  const [campaignData, setCampaignData] = useState<CampaignData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const loadData = async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMetricsData(getMetricsData());
    setRevenueData(getRevenueData());
    setTrafficData(getTrafficSourceData());
    setSignupsData(getDailySignupsData());
    setCampaignData(getCampaignData());
    setLastUpdated(new Date());
    setIsLoading(false);
  };

  const refreshData = () => {
    setMetricsData(generateRandomMetrics());
    setLastUpdated(new Date());
  };

  const handleDateRangeChange = (dateRange: DateRange | undefined) => {
    // Here you would typically filter data based on the date range
    console.log('Date range changed:', dateRange);
  };

  useEffect(() => {
    loadData();

    // Set up real-time updates every 30 seconds
    const interval = setInterval(() => {
      setMetricsData(generateRandomMetrics());
      setLastUpdated(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 border-r bg-card">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
              <p className="text-muted-foreground">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <DateRangePicker onDateRangeChange={handleDateRangeChange} />
              <div className="flex items-center gap-2">
                <Button
                  onClick={refreshData}
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button
                  onClick={exportDashboardData}
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <MetricCard key={index} data={{} as MetricData} isLoading={true} />
                ))
              : metricsData.map((metric, index) => (
                  <MetricCard key={index} data={metric} />
                ))
            }
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <RevenueChart data={revenueData} isLoading={isLoading} />
            <TrafficChart data={trafficData} isLoading={isLoading} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <SignupsChart data={signupsData} isLoading={isLoading} />
            <div className="lg:col-span-1"></div>
          </div>

          {/* Campaign Table */}
          <CampaignTable data={campaignData} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}