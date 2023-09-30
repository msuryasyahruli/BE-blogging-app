CREATE DATABASE blogging;

CREATE TABLE users (
  id_user VARCHAR PRIMARY KEY,
  username VARCHAR,
  email VARCHAR,
  password VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blogs (
  id_blog VARCHAR PRIMARY KEY,
  blog_title VARCHAR,
  user_id VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles (
  id_article VARCHAR PRIMARY KEY,
  title text,
  article text,
  user_id VARCHAR,
  blog_id VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
