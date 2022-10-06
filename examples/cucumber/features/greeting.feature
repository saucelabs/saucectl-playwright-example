Feature: Greeting

  @smoke
  Scenario: Say hello smoke test
    When I open "https://www.google.com/" with chrome
    Then Close chrome

  Scenario: Say hello
    When I open "https://www.google.com/" with chrome
    Then Close chrome

