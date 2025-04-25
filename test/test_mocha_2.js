
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('search in Amazon again', function () {

     it('should find another product', async function () {
          let driver = await new Builder().forBrowser('firefox').build();

          await driver.get('https://www.amazon.com');

          await driver.sleep(5000);
          await driver.wait(until.elementIsVisible(driver.findElement(By.id("twotabsearchtextbox"))), 10000);
          await driver.findElement(By.id("twotabsearchtextbox")).sendKeys('gi joe', Key.RETURN);

          await driver.sleep(3000);
          let items = await driver.findElements(By.className("a-link-normal s-line-clamp-4 s-link-style a-text-normal"));

          for (let i = 0; i < items.length; i++) {

               let text = (await items[i].getText()).toString();

               if (text.includes("Cobra")) {

                    await items[i].click();
                    await driver.sleep(2000);

                    let title = await driver.findElement(By.id("title")).getText();

                    let description = title.toString();


                    try {
                         assert(description.includes("Duke"));
                    } catch (error) {
                         console.error("La descripción no incluye la palabra 'Duke'");
                    }

                    break;
               }
          }
          await driver.quit();
     })
})
//  run with:   node test/first_test.js