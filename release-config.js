module.exports = {
    branches: ['master'],
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
      '@semantic-release/npm',
      '@semantic-release/github'
    ]
  };