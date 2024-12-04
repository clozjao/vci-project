const { execSync } = require('child_process');
const depcheck = require('depcheck');

const options = {
  ignoreBinPackage: false, // ignore the packages with bin entry
  skipMissing: false, // skip calculation of missing dependencies
};

depcheck(process.cwd(), options, (unused) => {
  const unusedDeps = [...unused.dependencies, ...unused.devDependencies];
  if (unusedDeps.length > 0) {
    console.log('Unused dependencies:', unusedDeps);
    unusedDeps.forEach(dep => {
      execSync(`npm uninstall ${dep}`);
      console.log(`Uninstalled ${dep}`);
    });
  } else {
    console.log('No unused dependencies found.');
  }
});
