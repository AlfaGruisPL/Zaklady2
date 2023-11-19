const gulp = require('gulp');
const fs = require('fs');

gulp.task('increaseVersion', function (done) {
  const packageJSONPath = './package.json';

  fs.readFile(packageJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Błąd odczytu pliku package.json:', err);
      return done();
    }

    try {
      const packageJSON = JSON.parse(data);
      const currentVersion = packageJSON.version;
      const [major, minor, patch] = currentVersion.split('.'); // Zakładając format wersji X.Y.Z

      const increasedPatch = parseInt(patch, 10) + 1;
      const newVersion = `${major}.${minor}.${increasedPatch}`;

      packageJSON.version = newVersion;

      fs.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2), err => {
        if (err) {
          console.error('Błąd zapisu do pliku package.json:', err);
        } else {
          console.log(`Wersja zaktualizowana. Nowa wersja: ${newVersion}`);
        }
        done();
      });
    } catch (error) {
      console.error('Błąd przetwarzania pliku JSON:', error);
      done();
    }
  });
});

gulp.task('updateReleaseDate', function (done) {
  const packageJSONPath = './package.json';

  const currentDate =
    new Date().toISOString().split('T')[0].replaceAll('-', '.') +
    ' ' +
    new Date().toISOString().split('T')[1].slice(0, -8); // Pobranie aktualnej daty w formacie YYYY-MM-DD

  fs.readFile(packageJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Błąd odczytu pliku package.json:', err);
      return done();
    }

    try {
      const packageJSON = JSON.parse(data);

      // Ustawienie pola 'data_wydania' na aktualną datę
      packageJSON.relase_date = currentDate;

      fs.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2), err => {
        if (err) {
          console.error('Błąd zapisu do pliku package.json:', err);
        } else {
          console.log(`Data wydania zaktualizowana. Nowa data: ${currentDate}`);
        }
        done();
      });
    } catch (error) {
      console.error('Błąd przetwarzania pliku JSON:', error);
      done();
    }
  });
});
