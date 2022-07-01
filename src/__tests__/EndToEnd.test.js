import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer
      .launch
      // ({
      //   headless: false,
      //   slowMo: 250,
      //   ignoreDefaultArgs: ['--disable-extensions']
      // });
      ();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .event-button");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .event-button");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer
      .launch
      // ({
      //   headless: false,
      //   slowMo: 250,
      //   ignoreDefaultArgs: ['--disable-extensions']
      // });
      ();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
    const eventCityDetails = await page.$$eval(".event", (el) => el.length);
    expect(eventCityDetails).toBe(16);
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin");
    const countCity = await page.$$eval(".suggestions li", (el) => el.length);
    expect(countCity).toBe(2);
  });

  test("User can select a city from the suggested list", async () => {
    await page.reload();
    await page.type(".city", "Berlin");
    await page.click(".suggestions li");
    const selectCity = await page.$$eval(".city", (el) => el.length);
    expect(selectCity).toBe(1);
  });
});
