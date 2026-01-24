Feature: Login
    @smoke
    Scenario: Successful login using valid credential
        Given I am in login page of saucedemo
        When I enter valid username
        When I enter valid Password
        And I click on login button
        Then user should be redirected to saucedemo page

    @smoke
    Scenario: Invalid login
        Given I am in login page of saucedemo
        When I enter valid username
        When I enter invalid Password
        And I click on login button
        Then user should see an error message


    Scenario: dashboard validation
        Given I am in login page of saucedemo
        When I enter valid username
        When I enter valid Password
        And I click on login button
        Then user should be redirected to saucedemo page

    @login_valid
    Scenario Outline: Login with multiple credentials
        Given I am in login page of saucedemo
        When I enter username "<username>" and password "<password>"
        And I click on login button
        Then I should see a message "<message>"

        Examples:
            | username                | password     | message                  |
            | standard_user           | secret_sauce | Products                 |
            | locked_out_user         | secret_sauce | Epic sadface: Sorry, ... |
            | problem_user            | secret_sauce | Products                 |
            | visual_user | secret_sauce | Products                 |

