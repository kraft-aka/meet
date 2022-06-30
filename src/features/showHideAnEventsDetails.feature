Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
  Given user has started the app
  When the user doesn't click any event
  Then the event details will be collapsed

Scenario: User can expand an event to see its details
  Given the user has started the app
  When the user clicks on an event
  Then the chosen event's details will be expanded

Scenario: User can collapse an event to hide its details
  Given user expanded detail of event
  When the user click on the event's detail
  Then the event details will be collapsed
  