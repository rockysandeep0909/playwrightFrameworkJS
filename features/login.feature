Feature: Login

Scenario: Successful login using valid credential
    Given I am in login page of saucedemo
    When I enter valid username  
    When I enter valid Password
    And I click on login button
    Then user should be redirected to saucedemo page

Scenario: Invalid login
    Given I am in login page of saucedemo
    When I enter valid username  
    When I enter invalid Password
    And I click on login button
    Then user should be redirected to saucedemo page
