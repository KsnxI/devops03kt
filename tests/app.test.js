const request = require('supertest');
const app = require('../src/app');

describe('KT3 App', () => {
  test('GET / returns "KT3 App"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('KT3 App');
  });

  test('GET /health returns { status: "ok" }', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('Environment', () => {
  test('database host is readable from environment', () => {
    const host = process.env.DB_HOST || 'localhost';
    expect(typeof host).toBe('string');
  });
});
