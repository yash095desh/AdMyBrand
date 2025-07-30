export interface MetricData {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  date?: string;
}

export interface CampaignData {
  id: string;
  name: string;
  status: 'Active' | 'Paused' | 'Draft';
  clicks: number;
  impressions: number;
  ctr: number;
  cost: number;
  conversions: number;
  revenue: number;
  date: string;
}

export const getMetricsData = (): MetricData[] => [
  {
    title: 'Total Revenue',
    value: '$124,592',
    change: 12.5,
    icon: 'DollarSign',
    color: 'text-green-600'
  },
  {
    title: 'Active Users',
    value: '8,429',
    change: 8.2,
    icon: 'Users',
    color: 'text-blue-600'
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: -2.1,
    icon: 'Target',
    color: 'text-purple-600'
  },
  {
    title: 'Growth Rate',
    value: '24.8%',
    change: 15.3,
    icon: 'TrendingUp',
    color: 'text-orange-600'
  }
];

export const getRevenueData = (): ChartDataPoint[] => [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
  { name: 'Aug', revenue: 4200, users: 5200 },
  { name: 'Sep', revenue: 3800, users: 4900 },
  { name: 'Oct', revenue: 4500, users: 5800 },
  { name: 'Nov', revenue: 5200, users: 6200 },
  { name: 'Dec', revenue: 5800, users: 6800 }
];

export const getTrafficSourceData = (): ChartDataPoint[] => [
  { name: 'Direct', value: 35 },
  { name: 'Social Media', value: 28 },
  { name: 'Email Marketing', value: 20 },
  { name: 'Paid Ads', value: 12 },
  { name: 'Referrals', value: 5 }
];

export const getDailySignupsData = (): ChartDataPoint[] => [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 95 },
  { name: 'Wed', value: 140 },
  { name: 'Thu', value: 110 },
  { name: 'Fri', value: 180 },
  { name: 'Sat', value: 85 },
  { name: 'Sun', value: 75 }
];

export const getCampaignData = (): CampaignData[] => [
  {
    id: '1',
    name: 'Summer Sale 2024',
    status: 'Active',
    clicks: 12540,
    impressions: 89230,
    ctr: 14.05,
    cost: 2450.80,
    conversions: 387,
    revenue: 15820.90,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Brand Awareness Q1',
    status: 'Active',
    clicks: 8920,
    impressions: 156780,
    ctr: 5.69,
    cost: 1890.50,
    conversions: 234,
    revenue: 9876.45,
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Product Launch',
    status: 'Paused',
    clicks: 5670,
    impressions: 67890,
    ctr: 8.35,
    cost: 980.25,
    conversions: 145,
    revenue: 7234.60,
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'Holiday Special',
    status: 'Draft',
    clicks: 0,
    impressions: 0,
    ctr: 0,
    cost: 0,
    conversions: 0,
    revenue: 0,
    date: '2024-01-20'
  },
  {
    id: '5',
    name: 'Mobile App Promotion',
    status: 'Active',
    clicks: 15680,
    impressions: 198450,
    ctr: 7.90,
    cost: 3240.75,
    conversions: 498,
    revenue: 19876.30,
    date: '2024-01-12'
  }
];

// Simulate real-time data updates
export const generateRandomMetrics = (): MetricData[] => {
  const baseData = getMetricsData();
  return baseData.map(metric => ({
    ...metric,
    value: metric.title === 'Total Revenue' ? 
      `$${(124592 + Math.floor(Math.random() * 1000)).toLocaleString()}` :
      metric.title === 'Active Users' ?
        `${(8429 + Math.floor(Math.random() * 100)).toLocaleString()}` :
        metric.title === 'Conversion Rate' ?
          `${(3.2 + (Math.random() - 0.5) * 0.5).toFixed(1)}%` :
          `${(24.8 + (Math.random() - 0.5) * 2).toFixed(1)}%`,
    change: metric.change + (Math.random() - 0.5) * 2
  }));
};