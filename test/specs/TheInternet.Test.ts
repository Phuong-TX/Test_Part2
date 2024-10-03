import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/LoginPage.ts'
import SecurePage from '../pageobjects/SecurePage.ts'
import CheckBoxes from '../pageobjects/CheckBoxesPage.ts';
import DropDownPage from '../pageobjects/DropDownPage.ts';
import { wait } from '../helper/Ultis.ts';
import FileUpload from '../pageobjects/FileUploadPage.ts';

describe('Scenario 1: Verify Form Authentication', () => {
    beforeEach (async () =>{
        await LoginPage.open();
    });
    
    it('TC01: Should login with valid credentials', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await SecurePage.checkFlashAlertDisplayed();
        await wait(5000);
        let titleAlert = await SecurePage.getFlashAlertTitle();
        expect(titleAlert.includes('You logged into a secure area!')).toBe(true);
    });

    it('TC02: Should not login with invalid username', async () => {
        await LoginPage.login('test','lalala');
        await SecurePage.checkFlashAlertDisplayed();
        let titleAlert = await SecurePage.getFlashAlertTitle();
        expect(titleAlert.includes('Your username is invalid!')).toBe(true);
    });

    it('TC03: Should not login with invalid password', async () =>{
        await LoginPage.login('tomsmith','123456');
        await SecurePage.checkFlashAlertDisplayed();
        let titleAlert = await SecurePage.getFlashAlertTitle();
        expect(titleAlert.includes('Your password is invalid!' )).toBe(true);
    });

    afterEach(async () => {
    });
});

describe('Scenario 2: Verify checkboxes screen', () => {
    beforeEach(async() => {
        await CheckBoxes.open();
    })
    it('TC04: Verify checkbox1 can be checked and unchecked ', async () =>{
        let isCheckBox1Checked = await CheckBoxes.isCheckBox1Checked();
        expect(isCheckBox1Checked).toBe(false);
        await CheckBoxes.clickCheckBox1();
        let isCheckBox1Selected = await CheckBoxes.isCheckBox1Checked();
        expect(isCheckBox1Selected).toBe(true);
        });

    it('TC05: Verify checkbox2 can be checked and unchecked', async() => {
        let isCheckBox2Checked = await CheckBoxes.isCheckBox2Checked();
        expect(isCheckBox2Checked).toBe(true);
        await CheckBoxes.clickCheckBox2();
        let isCheckBox2Selected = await CheckBoxes.isCheckBox2Checked();
        expect(isCheckBox2Selected).toBe(false);
    });

    afterEach(async ()=> {
    });

});

describe('Screnario 3: Verify dropdown list screen', () => {
    beforeEach(async () => {
        await DropDownPage.open();
        await wait(3000);
        let title = await DropDownPage.getTitle();
        expect(title == 'Dropdown List').toBe(true);
        let placeholder = await DropDownPage.getPlaceholder();
        expect(placeholder == 'Please select an option').toBe(true);
        await DropDownPage.clickDropdown();
    })

    it('TC6: Verify option 1 is selected', async () => {
        await DropDownPage.clickOption1();
        await DropDownPage.clickDropdown(); // click dropdown again to close dropdown list
        await DropDownPage.isOption1Selected();
    });

    it('TC7: Verify option 2 is selected', async () => {
        await DropDownPage.clickOption2();
        await DropDownPage.clickDropdown(); // click dropdown again to close dropdown list
        await DropDownPage.isOption2Selected();
    });

    afterEach(async () => {
    });
});

describe('Scenario 4 : Upload File',() => {
    it('TC08: Uploaded file successfully', async() => {
        await FileUpload.open();
        let filePath = ('test/helper/meo-meme-1hRKRK1.jpg');
        let remoteFilePath = await browser.uploadFile(filePath);
        await FileUpload.fileInput(remoteFilePath);
        await FileUpload.clickBtnUpload();
        await FileUpload.msgUploadSucessDisplayed();
        let uploadedFileName = await FileUpload.getUploadedFileNameText();
        expect(uploadedFileName === 'meo-meme-1hRKRK1.jpg').toBe(true);
    });
});


