import packageJson from '../../package.json';

const INITIAL_STATE = {
  name: packageJson.name,
  version: packageJson.version,
  dependencies: packageJson.dependencies,
};

export const appReducer = (state = INITIAL_STATE) => state;
