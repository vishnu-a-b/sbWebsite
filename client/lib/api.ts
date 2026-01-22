// API Configuration for Express Backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const API_ENDPOINTS = {
  banner: `${API_BASE_URL}/banner`,
  payment: `${API_BASE_URL}/payment`,
  contact: `${API_BASE_URL}/contact`,
  volunteer: `${API_BASE_URL}/volunteer`,
  stats: `${API_BASE_URL}/stats`,
  service: `${API_BASE_URL}/service`,
  aboutImage: `${API_BASE_URL}/about-image`,
  health: `${API_BASE_URL}/health`,
};

export default API_BASE_URL;
