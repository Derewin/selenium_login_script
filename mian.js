const { By, Builder, until, WebDriver} = require('selenium-webdriver');
const assert = require("assert");

async function Sele() {

    let driver;
    
    driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://env-game24hs-daniel.kinsta.cloud/dixgamer_v2/');

    await driver.manage().setTimeouts({ implicit: 500 });

    let loginUserTextBox = await driver.findElement(By.name('name'));
    let loginPassTextBox = await driver.findElement(By.name('password'));
    let loginButton = await driver.findElement(By.className('btn-primary'));

    await loginUserTextBox.sendKeys('Daniel');
    await loginPassTextBox.sendKeys('DaniBot1.');
    await loginButton.click();


    await driver.get('https://env-game24hs-daniel.kinsta.cloud/dixgamer_v2/cuentas/71044');

    let emailAccount = await driver.findElement(By.id('email-copy'));
    let passAccount = await driver.findElement(By.id('pass-copy'));

    let userEmail = await emailAccount.getAttribute('innerText');
    var userPass = await passAccount.getAttribute('innerText');

    console.log(`Usuario: ${userEmail}, Pass: ${userPass}`);

    await driver.get('https://www.playstation.com/es-ar/');

    let psLoginButton = await driver.findElement(By.className('web-toolbar__signin-button'));
    await psLoginButton.click();

    let sonyUser = await driver.findElement(By.className('psw-t-body'));
    await driver.wait(until.elementIsVisible(sonyUser), 100);
    let psNextLoginButton = await driver.findElement(By.id('signin-entrance-button'));

    await sonyUser.sendKeys(`${userEmail}`);
    await psNextLoginButton.click();

    
    var sonyPass = await driver.wait(until.elementLocated(By.id('signin-password-input-password'), 10000));

    await sonyPass.sendKeys(`${userPass}`);

    var psPassLoginButton = await driver.wait(until.elementLocated(By.id('signin-password-button'), 10000));

    await setTimeout( () => {
        psPassLoginButton.click();
    }, 5000);

    var element_present = await driver.wait(until.elementLocated(By.className('profile-icon psw-l-line-center'), 50000));

    await element_present.click();
    

}

Sele();