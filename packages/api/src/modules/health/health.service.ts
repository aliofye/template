interface HealthCheck {
  status: string;
}

class HealthService {
  getHealth(): HealthCheck {
    return {
      status: 'A-ok!',
    };
  }
}

export default new HealthService();
