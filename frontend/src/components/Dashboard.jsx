import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, DollarSign, Globe, BarChart3, PieChart, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { tariffData, formatCurrency, formatPercentage, getCountryColor } from '../data/tariffData';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('2024');
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const total = tariffData.countryTotals2024.reduce((sum, country) => sum + country.amount, 0);
    setTotalRevenue(total);
  }, []);

  const topCountriesData = tariffData.countryTotals2024.map(country => ({
    name: country.country,
    value: country.amount,
    percentage: country.percentage,
    growth: country.growth,
    fill: getCountryColor(country.country)
  }));

  const monthlyTrendData = tariffData.monthlyData.map(month => ({
    month: month.month,
    China: month.china / 1000000000,
    Mexico: month.mexico / 1000000000,
    Canada: month.canada / 1000000000,
    Japan: month.japan / 1000000000,
    Germany: month.germany / 1000000000,
    Total: month.total / 1000000000
  }));

  const quarterlyComparisonData = tariffData.quarterlyData.map(quarter => ({
    quarter: quarter.quarter,
    China: quarter.china / 1000000000,
    Mexico: quarter.mexico / 1000000000,
    Canada: quarter.canada / 1000000000,
    Japan: quarter.japan / 1000000000,
    Germany: quarter.germany / 1000000000,
    Total: quarter.total / 1000000000
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value * 1000000000)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              US Tariff Revenue Analytics
            </h1>
            <p className="text-gray-600 mt-1">Import tariff income by country since 2024</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">
              <Calendar className="h-4 w-4 mr-2" />
              2024 Data
            </Badge>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue 2024</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              +12.8% from 2023
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Source Country</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">China</div>
            <p className="text-xs text-muted-foreground">
              56.8% of total revenue
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Countries Tracked</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              Major trading partners
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">+12.4%</div>
            <p className="text-xs text-muted-foreground">
              YoY average growth
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
          <TabsTrigger value="comparison">Quarterly Analysis</TabsTrigger>
          <TabsTrigger value="breakdown">Country Breakdown</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue by Country - Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Revenue Distribution by Country
                </CardTitle>
                <CardDescription>2024 total tariff income breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <RechartsPieChart>
                    <PieChart data={topCountriesData}>
                      {topCountriesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </PieChart>
                    <Tooltip 
                      formatter={(value) => formatCurrency(value)}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Countries Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Top 10 Countries by Revenue
                </CardTitle>
                <CardDescription>Annual tariff income in billions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={topCountriesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis 
                      tickFormatter={(value) => formatCurrency(value)}
                      fontSize={12}
                    />
                    <Tooltip 
                      formatter={(value) => [formatCurrency(value), 'Revenue']}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Growth Rates Table */}
          <Card>
            <CardHeader>
              <CardTitle>Country Performance Summary</CardTitle>
              <CardDescription>Revenue amounts and growth rates for 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Country</th>
                      <th className="text-right p-3 font-semibold">Revenue</th>
                      <th className="text-right p-3 font-semibold">Share</th>
                      <th className="text-right p-3 font-semibold">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tariffData.countryTotals2024.map((country, index) => (
                      <tr key={country.country} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: getCountryColor(country.country) }}
                            />
                            <span className="font-medium">{country.country}</span>
                          </div>
                        </td>
                        <td className="text-right p-3 font-mono">{formatCurrency(country.amount)}</td>
                        <td className="text-right p-3">{formatPercentage(country.percentage)}</td>
                        <td className="text-right p-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            country.growth > 10 ? 'bg-green-100 text-green-800' :
                            country.growth > 5 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            +{formatPercentage(country.growth)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Monthly Tariff Revenue Trends
              </CardTitle>
              <CardDescription>Revenue progression throughout 2024 (in billions USD)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={monthlyTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis tickFormatter={(value) => `$${value}B`} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="Total" 
                    stroke="#3b82f6" 
                    fillOpacity={0.6} 
                    fill="url(#colorTotal)" 
                  />
                  <Line type="monotone" dataKey="China" stroke="#dc2626" strokeWidth={2} />
                  <Line type="monotone" dataKey="Mexico" stroke="#16a34a" strokeWidth={2} />
                  <Line type="monotone" dataKey="Canada" stroke="#2563eb" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Comparison</CardTitle>
              <CardDescription>Revenue comparison by quarters in 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={quarterlyComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis tickFormatter={(value) => `$${value}B`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="China" stackId="a" fill="#dc2626" />
                  <Bar dataKey="Mexico" stackId="a" fill="#16a34a" />
                  <Bar dataKey="Canada" stackId="a" fill="#2563eb" />
                  <Bar dataKey="Japan" stackId="a" fill="#ca8a04" />
                  <Bar dataKey="Germany" stackId="a" fill="#7c3aed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breakdown" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tariffData.countryTotals2024.slice(0, 4).map((country) => (
              <Card key={country.country}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: getCountryColor(country.country) }}
                      />
                      {country.country}
                    </span>
                    <Badge variant="outline">
                      {formatPercentage(country.percentage)}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Annual Revenue</span>
                        <span>{formatCurrency(country.amount)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${country.percentage * 1.7}%`,
                            backgroundColor: getCountryColor(country.country)
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">YoY Growth</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        country.growth > 10 ? 'bg-green-100 text-green-800' :
                        country.growth > 5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        +{formatPercentage(country.growth)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;