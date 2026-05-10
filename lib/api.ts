const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://finance-api-divine-frost-6922.fly.dev';

export interface Project {
  id: string;
  user_id: string;
  name: string;
  location: string;
  budget?: number;
  project_type?: string;
  start_date?: string;
  description?: string;
  units?: number;
  square_footage?: number;
  floors?: number;
  parking_spaces?: number;
  status: string;
  current_phase?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProjectData {
  name: string;
  location: string;
  budget?: number;
  projectType?: string;
  startDate?: string;
  description?: string;
  units?: number;
  squareFootage?: number;
  floors?: number;
  parkingSpaces?: number;
}

class ApiClient {
  private baseUrl: string;
  private userId: string;

  constructor() {
    this.baseUrl = API_URL;
    // Demo user for no-auth mode
    this.userId = '00000000-0000-0000-0000-000000000000';
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': this.userId,
      ...options.headers,
    };

    let response: Response;
    try {
      response = await fetch(url, {
        ...options,
        headers,
      });
    } catch (err: any) {
      throw new Error(`Network error: ${err.message || 'Unable to reach server'}`);
    }

    let data: any = null;
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      try {
        data = await response.json();
      } catch {
        data = null;
      }
    }

    if (!response.ok) {
      const errMsg = data?.error || data?.message || `Request failed (HTTP ${response.status})`;
      throw new Error(errMsg);
    }

    return data;
  }

  // Projects
  async getProjects(): Promise<{ projects: Project[] }> {
    return this.request('/api/projects');
  }

  async getProject(id: string): Promise<{ project: Project }> {
    return this.request(`/api/projects/${id}`);
  }

  async createProject(data: CreateProjectData): Promise<{ project: Project; message: string }> {
    return this.request('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProject(id: string, data: Partial<CreateProjectData>): Promise<{ project: Project; message: string }> {
    return this.request(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProject(id: string): Promise<{ message: string }> {
    return this.request(`/api/projects/${id}`, {
      method: 'DELETE',
    });
  }

  async getProjectAnalytics(id: string) {
    return this.request(`/api/projects/${id}/analytics`);
  }

  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiClient();
