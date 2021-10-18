Start-Process cmd -ArgumentList '/C npm run e2e:chrome && PAUSE'
Start-Process cmd -ArgumentList '/C npm run e2e:ff && PAUSE'
Start-Process cmd -ArgumentList '/C npm run e2e:edge && PAUSE'