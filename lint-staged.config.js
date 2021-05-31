module.exports = {
  '*.@(js|jsx|ts|tsx)': ['prettier --write', 'npm run lint:ts -- --fix'],
  '*.@(json|md)': ['prettier --write'],
};
