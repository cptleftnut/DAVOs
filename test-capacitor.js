const { execSync } = require('child_process');

try {
  console.log("Running npm run env | grep PATH");
  execSync('npm run env | grep PATH', { stdio: 'inherit' });
} catch (e) {
  console.log("Error running npm run env", e);
}

try {
  console.log("Running npx capacitor sync android");
  execSync('npx capacitor sync android', { stdio: 'inherit' });
} catch (e) {
  console.log("Error running npx capacitor sync android", e);
}
