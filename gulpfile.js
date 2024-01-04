const gulp = require("gulp");
const fs = require("fs");
const ghpages = require("gh-pages");


gulp.task("send production workspacePanel", async () => {
  var ghpages = require("gh-pages");
  await ghpages.publish("./dist/panel-zakladu", { branch: "production_workspacePanel_build" }, (error) => {
    console.log(error);
  });
  return true;
});
gulp.task("send production registerPage", async () => {
  var ghpages = require("gh-pages");
  const k = await ghpages.publish("./dist/reklamowaStronaZakladu/browser/", { branch: "production_registerPage_build" }, (error) => {
    console.log(error);
  });
  return k;
});


gulp.task("increaseVersion", function(done) {
  const packageJSONPath = "./package.json";

  fs.readFile(packageJSONPath, "utf8", (err, data) => {
    if (err) {
      console.error("Błąd odczytu pliku package.json:", err);
      return done();
    }

    try {
      const packageJSON = JSON.parse(data);
      const currentVersion = packageJSON.version;
      const [major, minor, patch] = currentVersion.split("."); // Zakładając format wersji X.Y.Z

      const increasedPatch = parseInt(patch, 10) + 1;
      const newVersion = `${major}.${minor}.${increasedPatch}`;

      packageJSON.version = newVersion;

      fs.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2), err => {
        if (err) {
          console.error("Błąd zapisu do pliku package.json:", err);
        } else {
          console.log(`Wersja zaktualizowana. Nowa wersja: ${newVersion}`);
        }
        done();
      });
    } catch (error) {
      console.error("Błąd przetwarzania pliku JSON:", error);
      done();
    }
  });
});

gulp.task("updateReleaseDate", function(done) {
  const packageJSONPath = "./package.json";
  const date = new Date().toLocaleString("pl", { timeZone: "Europe/Warsaw" });
  const currentDate =
    date.split(", ")[0].replaceAll("-", ".") +
    " " +
    date.split(", ")[1].slice(0, -3); // Pobranie aktualnej daty w formacie YYYY-MM-DD

  fs.readFile(packageJSONPath, "utf8", (err, data) => {
    if (err) {
      console.error("Błąd odczytu pliku package.json:", err);
      return done();
    }

    try {
      const packageJSON = JSON.parse(data);

      // Ustawienie pola 'data_wydania' na aktualną datę
      packageJSON.relase_date = currentDate;

      fs.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2), err => {
        if (err) {
          console.error("Błąd zapisu do pliku package.json:", err);
        } else {
          console.log(`Data wydania zaktualizowana. Nowa data: ${currentDate}`);
        }
        done();
      });
    } catch (error) {
      console.error("Błąd przetwarzania pliku JSON:", error);
      done();
    }
  });
});
