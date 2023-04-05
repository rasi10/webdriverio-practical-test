npm init -y
npm install @wdio/cli
npx wdio config

# To run the selenium grid with docker compose
docker compose up

# To enter a running instance of docker running with docker compose
docker compose exec chrome sh

# To run the tests
npm run test

# To get the test results (You need to have java 1.8 or higher to use allure command)
# https://www.npmjs.com/package/allure-commandline
allure generate allure-results
