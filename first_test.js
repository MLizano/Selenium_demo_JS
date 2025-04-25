
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.amazon.com');

        // Esperar hasta que el elemento con ID "leo_search_query_top" sea visible
        //     await driver.wait(until.elementLocated(By.id("leo_search_query_top")), 10000);
        //     await driver.wait(until.elementIsVisible(driver.findElement(By.id("leo_search_query_top"))), 10000);

        await driver.wait(until.elementIsVisible(driver.findElement(By.id("twotabsearchtextbox"))), 10000);
        await driver.findElement(By.id("twotabsearchtextbox")).sendKeys('led Lámpara de pie', Key.RETURN);
        console.log("Buscando producto...");
        await driver.sleep(2000);

        let items = await driver.findElements(By.className("a-section a-spacing-none a-spacing-top-small s-title-instructions-style"));

        for (let i = 0; i < items.length; i++) {
            let text = await items[i].getText();
            if (text.includes("Govee RGBIC")) {

                await items[i].click();
                console.log("Elemento encontrado y clickeado");
                await driver.sleep(2000);

                await driver.wait(until.elementIsVisible(driver.findElement(By.id("add-to-wishlist-button-group"))), 10000);

                await driver.findElement(By.id("add-to-wishlist-button-group")).click();
                console.log("Elemento agregado a la lista de deseos");
                await driver.sleep(2000);
                break;

            }
        }
    } finally {
        await driver.quit();
        console.log("Cerrando el navegador");
    }
})();


//  run with:   node test/first_test.js