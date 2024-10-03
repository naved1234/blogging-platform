const request = require('supertest');
const app = require('../server');
const { sequelize, User, Post } = require('../models');

let token; // Store the JWT token for authenticated requests

beforeAll(async () => {
  await sequelize.sync({ force: true });
  
  // Create a user and obtain a token
  await request(app)
    .post('/api/auth/register')
    .send({ username: 'writer', password: 'password123', role: 'writer' });
  
  const res = await request(app)
    .post('/api/auth/login')
    .send({ username: 'writer', password: 'password123' });
  
  token = res.body.token;
});

describe('Post Endpoints', () => {
  let postId;

  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'First Post', content: 'This is my first post.', author: 'writer' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'First Post');
    postId = res.body.id;
  });

  it('should get all posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toHaveLength(1);
  });

  it('should get a single post by ID', async () => {
    const res = await request(app).get(`/api/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'First Post');
  });

  it('should update a post', async () => {
    const res = await request(app)
      .put(`/api/posts/${postId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Updated Post' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Updated Post');
  });

  it('should not update a post with invalid data', async () => {
    const res = await request(app)
      .put(`/api/posts/${postId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: '' });
    expect(res.statusCode).toEqual(400);
  });

  it('should delete a post', async () => {
    const res = await request(app)
      .delete(`/api/posts/${postId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(204);
  });

  it('should return 404 for non-existing post', async () => {
    const res = await request(app).get(`/api/posts/${postId}`);
    expect(res.statusCode).toEqual(404);
  });
});
