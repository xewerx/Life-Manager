export const checkForEnvironmentVariable = (envVariable: string): string => {
  if (!process.env[envVariable]) {
    throw new Error(`Missing env variable: ${envVariable}`);
  }

  return process.env[envVariable];
};
