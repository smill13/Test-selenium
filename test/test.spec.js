const { Builder, By } = require('selenium-webdriver');

describe("Login", () => {
    it("Login with standerd_user credentials", async function () {
        // Ajuste del tiempo de espera para esta prueba específica
        this.timeout(10000);  // Establece el timeout a 10 segundos

        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();

        await driver.get('file:///C:/Users/EMMANUEL/OneDrive/Escritorio/selenium/WEB/login.html');
        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('admin');
        await driver.findElement(By.css('input[type="submit"][value="Iniciar sesión"]')).click();
        await driver.sleep(5000);
        await driver.quit();
    });
});
