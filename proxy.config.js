const proxy = [
  {
    context: '/api',
    target: 'http://localhost:3333',
    pathRewrite: { '^/api': '' },
    // changeOrigin: true,
  },
]

module.exports = proxy
