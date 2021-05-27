# SureTakeHome
Basic BDD Automation for [Sure's Take Home Exam](https://www.notion.so/Sure-QA-Technical-Challenge-8ac9b18e1f7b4317ba104968e60c8d91).
This test verifies several gherkin user stories on each page: 
- Entering invalid and valid zip codes on the landing page
- Selecting "Next" before selecting an option on the building-materials and water-proximity pages and then selecting an option to continue
- Verifying that two plans exist on the Quote page and that their prices are greater than $0
- Verifying that the flood insurance has a price greater than $0 when a user has selected "Yes" to the water proximity question.

## Instructions:
To use this automation, follow these steps: 
1. Clone the repository to your computer.
2. Download [Visual Studio Code](https://code.visualstudio.com/).
3. Run `npm install` (and `yarn install` on Mac) while inside the `SureTakeHome/` folder
4. Run the test
    - Run `npm test` in the terminal while inside the `SureTakeHome/` folder
5. Alternatively, on VS Code, go to the marketplace and download the [TestCafe Test Runner](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner).
    - Open [**SureQAExam.js**](https://github.com/WParlow/SureTakeHome/blob/main/SureQAExam.js), right click inside the *test* and click "TestCafe: Run Test(s) in Chrome" or your browser of choice. 


## Manual Test Cases:
1. [Landing Page](https://docs.google.com/document/d/1jerPKQGwIkFNSIJ87--XGUQL7PsFN00SQcPB1C6FdDo/edit?usp=sharing)
2. [Building Materials](https://docs.google.com/document/d/12wtU0vR5auR_7LBRzxUeva0shR0bRQp-_Z5Gzfvh_cM/edit?usp=sharing)
3. [Water Proximity](https://docs.google.com/document/d/1BKfkV1gPFQbC6umtwm0mQVLDqIcCEu-GHgWGMMhVajY/edit?usp=sharing)
4. [Quotes](https://docs.google.com/document/d/1BdVZ0lA4ks10rVY_74LGZtiZf1JLBlLgHWNYIuAmQ4Y/edit?usp=sharing)
