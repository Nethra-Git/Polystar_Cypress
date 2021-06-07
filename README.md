# Polystar_Cypress

## Clone this repo...

- ...by running `git clone git@github.com:mapproject/business-tool.git`
- ...or by running `git clone https://github.com/mapproject/business-tool.git`

##Installing Cypress using below command

- npm install cypress --save-dev

## Tests
In order to run the scripts, Do the following.

1. Run "npx cypress open"
2. Choose selected script and run

## Execute test scripts in CLI mode
- npm run test:cli/ npx cypress run
![image](https://user-images.githubusercontent.com/77015698/121090970-a1c0b300-c7e9-11eb-945a-48ef89a2c441.png)

## Generating an HTML report
Adding Mochawesome reporter to Cypress will generate a website with the test report.

Installation steps in general:

1. Install mochawesome, mochawesome-merge and mochawesome-report-generator.
  - npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator
2. Config Mochawesome reporter.
3. Merge Mochawesome reports into one JSON file.
4. Generate an HTML report based on that file.

![image](https://user-images.githubusercontent.com/77015698/121090591-1c3d0300-c7e9-11eb-89e0-893359a3d24f.png)

## Add screenshots to the report

When a test fails Cypress saves a screenshot in cypress/screenshots folder, so we are going to need to add the screenshot for each failed test.












##License

This project is licensed under the terms of the MIT license.





