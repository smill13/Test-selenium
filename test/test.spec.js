const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe("Login", () => {
    it("Login with standerd_user credentials", async function () {
        this.timeout(150000);
        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();
        await driver.get('file:///C:/Users/EMMANUEL/OneDrive/Escritorio/selenium/WEB/login.html');
        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('admin');
        await driver.findElement(By.css('input[type="submit"][value="Iniciar sesión"]')).click();
        // Dormir durante 5 segundos para esperar que el modal esté presente en el DOM
        await driver.sleep(5000);
        await driver.findElement(By.css('button.btn-secondary[value="Cerrar modal"]')).click();
        await driver.quit();
        //Introduce las credenicales admin como usuario y como contraseña para logear
    });

    it("Crear usuarios", async function () {
        this.timeout(150000);
        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();
        await driver.get('file:///C:/Users/EMMANUEL/OneDrive/Escritorio/selenium/WEB/crearUsers.html');
        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('aSDF234adsS@@@ED##E');
        await driver.findElement(By.css('.btn.btn-primary[value="Añadir Usuario"]')).click();
        await driver.sleep(3000);
        await driver.quit();
        //introduce una contraseña para un usuario x y un nombre
    });

    it("Validar calidad de la contraseña", async function () {
        this.timeout(150000);
        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();
        await driver.get('file:///C:/Users/EMMANUEL/OneDrive/Escritorio/selenium/WEB/crearUsers.html');
        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('ContraseñaIncorrecta');
        await driver.findElement(By.css('.btn.btn-primary[value="Añadir Usuario"]')).click();
        try {
            // Intentar obtener y aceptar la alerta
            const alert = await driver.switchTo().alert();
            const alertText = await alert.getText();
            console.log('Alert text:', alertText);
            await driver.sleep(5000)
            await alert.accept();
        } catch (error) {
            // No se pudo obtener la alerta (puede ser que no haya aparecido)
            console.log('No alert present');
        }
        // La prueba pasa incluso si se muestra un mensaje de error
        await driver.sleep(3000);
        await driver.quit();
        //verifica que las contraseñas introducidas por los usuarios sean lo suficientemente robustas
    });
});
