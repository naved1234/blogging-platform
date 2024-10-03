const request = require('supertest');
const app = require('../server'); // Assuming your server file exports the express app
const { sequelize, User } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Auth Endpoints', () => {
  let userCredentials = { username: 'testuser', password: 'password123' };

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userCredentials);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('username', 'testuser');
  });

  it('should not register a user with an existing username', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userCredentials);
    expect(res.statusCode).toEqual(400);
  });

  it('should login with valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send(userCredentials);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not login with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'wrongpassword' });
    expect(res.statusCode).toEqual(400);
  });
});
