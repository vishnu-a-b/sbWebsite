import { Request, Response } from 'express';

// Standard API response structure
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Express extended types
export type TypedRequest<T = any> = Request<any, any, T>;
export type TypedResponse<T = any> = Response<T>;

// Aggregation result types for stats
export interface PaymentAggregation {
  _id: null;
  totalAmount: number;
}

export interface MonthlyTrendItem {
  _id: number;
  amount: number;
  count: number;
}

export interface StatsResponse {
  payments: {
    total: number;
    completed: number;
    totalAmount: number;
    recent: number;
  };
  volunteers: {
    total: number;
  };
  contacts: {
    total: number;
  };
  monthlyTrend: MonthlyTrendItem[];
}
