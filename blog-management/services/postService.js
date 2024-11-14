const db = require('../config/database');

const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM posts', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const getPostById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM posts WHERE id = ?', [id], (error, results) => {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

const createPost = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO posts SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve({ id: results.insertId, ...data });
        });
    });
};

const updatePost = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE posts SET ? WHERE id = ?', [data, id], (error, results) => {
            if (error) reject(error);
            resolve(results.affectedRows > 0);
        });
    });
};

const deletePost = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM posts WHERE id = ?', [id], (error, results) => {
            if (error) reject(error);
            resolve(results.affectedRows > 0);
        });
    });
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
