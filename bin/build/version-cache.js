const replace = require('replace-in-file');
const options = {
  files: './out/**/*.js',
  from: 'X_VERSION',
  to: new Date().toUTCString(),
};

(async () => {
  const changes = await replace(options);
  console.info('version-cache', changes);
})();
