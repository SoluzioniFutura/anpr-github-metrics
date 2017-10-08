This application leverages the GitHub API to query a User or Organization for the following metrics for each repository:

* Number of open issues
* Average time for an issue to be closed
* Closed issues with no comments
* Issues with no label
* Graph with the number of open, closed and total issues for each day during the last month (tracking period and granularity can be adjusted)

Organization or User can be specified via "src/config.json";
Credentials for GitHub authentication can be specified via "src/credentials.json"

The application, linked to the "[italia](https://github.com/italia)" GitHub Organization, can be viewed at the following address:
https://soluzionifutura.github.io/anpr-github-metrics/

