Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
  Given the user is on main page
  When the user did not specify the number of events to be displayed
  Then the default number of events is 32

Scenario: User can change the number of events they want to see
  Given the user is on main page
  When the user types the number of events
  Then the given number of events to be displayed


  