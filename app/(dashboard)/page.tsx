'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Package, Clock, CheckCircle, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { t } = useLanguage()

  const stats = [
    {
      title: t('dashboard.totalOrders'),
      value: '156',
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: t('dashboard.pendingOrders'),
      value: '23',
      icon: Clock,
      color: 'text-yellow-600',
    },
    {
      title: t('dashboard.completedOrders'),
      value: '133',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      title: t('dashboard.revenue'),
      value: '₪543,210',
      icon: DollarSign,
      color: 'text-purple-600',
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('dashboard.welcome')}
        </h1>
        <p className="text-gray-600 mt-2">{t('dashboard.title')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">
                  {stat.title}
                </h3>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">פעולות מהירות</h2>
          <div className="space-y-2">
            <Link
              href="/orders"
              className="block p-3 rounded-lg border hover:bg-gray-50"
            >
              צפה בהזמנות
            </Link>
            <Link
              href="/supplier/portal"
              className="block p-3 rounded-lg border hover:bg-gray-50"
            >
              פורטל ספקים
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">הזמנות אחרונות</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 border-b">
              <span>ORD-2025-001</span>
              <span className="text-sm text-gray-500">לפני 2 שעות</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b">
              <span>ORD-2025-002</span>
              <span className="text-sm text-gray-500">לפני 5 שעות</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
