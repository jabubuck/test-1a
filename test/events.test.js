const EventInterface = require('../src/Events/EventInterface'),
EventProcessor = require('../src/EventProcessor'),
EventStorageInterface = require('../src/Events/EventStorageInterface');

describe('Process Football Events', () => {
  test('stores valid football events', () => {
    const eventInterfaceMock = new EventInterface();
    const eventStorageInterfaceMock = new EventStorageInterface();

    jest.spyOn(eventInterfaceMock, 'getSport').mockImplementation(() => 'football');
    jest.spyOn(eventInterfaceMock, 'getEventType').mockImplementation(() => 'kickoff');
    jest.spyOn(eventStorageInterfaceMock, 'store').mockImplementation(() => true);

    expect(new EventProcessor(eventStorageInterfaceMock).processEvent(eventInterfaceMock)).toBe(true);

  });
  test('rejects invalid sport type', () => {
    const eventInterfaceMock = new EventInterface();
    const eventStorageInterfaceMock = new EventStorageInterface();

    jest.spyOn(eventInterfaceMock, 'getSport').mockImplementation(() => 'golf');
    jest.spyOn(eventInterfaceMock, 'getEventType').mockImplementation(() => 'kickoff');
    jest.spyOn(eventStorageInterfaceMock, 'store').mockImplementation(() => true);

    expect(new EventProcessor(eventStorageInterfaceMock).processEvent(eventInterfaceMock)).toBe(false);
  });
  test('rejects invalid event type', () => {
    const eventInterfaceMock = new EventInterface();
    const eventStorageInterfaceMock = new EventStorageInterface();

    jest.spyOn(eventInterfaceMock, 'getSport').mockImplementation(() => 'football');
    jest.spyOn(eventInterfaceMock, 'getEventType').mockImplementation(() => 'touchdown');
    jest.spyOn(eventStorageInterfaceMock, 'store').mockImplementation(() => true);

    expect(new EventProcessor(eventStorageInterfaceMock).processEvent(eventInterfaceMock)).toBe(false);
  });
  test('store failed to store the event', () => {
    const eventInterfaceMock = new EventInterface();
    const eventStorageInterfaceMock = new EventStorageInterface();

    jest.spyOn(eventInterfaceMock, 'getSport').mockImplementation(() => 'football');
    jest.spyOn(eventInterfaceMock, 'getEventType').mockImplementation(() => 'yellowcard');
    jest.spyOn(eventStorageInterfaceMock, 'store').mockImplementation(() => false);

    expect(new EventProcessor(eventStorageInterfaceMock).processEvent(eventInterfaceMock)).toBe(false);
  });
});