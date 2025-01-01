import { Hono } from 'hono';
import HealthService from './health.service';

const app = new Hono().get('/', (c) => c.json(HealthService.getHealth()));

export default app;
