module.exports = {
    branches: ['main', 'develop'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      [
        '@semantic-release/exec',
        {
          prepareCmd: 'npm version ${nextRelease.version}'
        }
      ],
      [
        '@semantic-release/npm',
        {
          npmPublish: true,
        },
      ],
      '@semantic-release/github'
    ]
  };