module.exports = {
    branches: ['master'], // Define the branch where releases will be triggered
    plugins: [
      '@semantic-release/commit-analyzer', // Determines the release type based on commit messages
      '@semantic-release/release-notes-generator', // Generates release notes
      '@semantic-release/changelog', // Updates the CHANGELOG.md file
      [
        '@semantic-release/npm', // Publishes the package to npm
        {
          npmPublish: true,
          tarballDir: 'dist', // Change this to your package distribution directory
        },
      ],
      '@semantic-release/github', // Creates a GitHub release
    ],
  };
  