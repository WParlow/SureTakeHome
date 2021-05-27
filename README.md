# SureTakeHome
Basic BDD Automation for Sure's Take Home Exam.
This test verifies several gherkin user stories on each page: 
- Entering invalid and valid zip codes on the landing page
- Selecting "Next" before selecting an option on the building-materials and water-proximity pages and then selecting an option to continue
- Verifying that two plans exist on the Quote page and that their prices are greater than $0
- Verifying that the flood insurance has a price greater than $0 when a user has selected "Yes" to the water proximity question.

## Instructions:
To use this automation, follow these steps: 
1. Clone the repository to your computer.
2. Download [Visual Studio Code](https://code.visualstudio.com/).
3. On VS Code, go to the marketplace and download the [TestCafe Test Runner](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner).
4. Open [**SureQAExam.js**](https://github.com/WParlow/SureTakeHome/blob/main/SureQAExam.js), right click inside the *test* and click "TestCafe: Run Test(s) in Chrome" or your browser of choice.
