import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/LoginPage.ts'
import SecurePage from '../pageobjects/SecurePage.ts'
import CheckBoxes from '../pageobjects/CheckBoxesPage.ts';
import DropDownPage from '../pageobjects/DropDownPage.ts';
import { wait } from '../helper/Ultis.ts';
import { click } from 'webdriverio/build/commands/element';

// describe('Scenario 1: Verify Form Authentication', () => {
//     beforeEach(async () => {
//         await LoginPage.open();
//     })
//     it('TC01: Should login with valid credentials', async () => {
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeDisplayed();
//         let titleAlert = await SecurePage.getFlashAlertTitle();
//         expect(titleAlert === 'You logged into a secure area!').toBe(true);
//         await expect(SecurePage.flashAlert).toMatchSnapshot('flashAlert');
//     });

//     it('TC02: Should not login with invalid username', async () => {
//         await LoginPage.login('test','lalala');
//         await expect(SecurePage.flashAlert).toBeDisplayed();
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringMatching('Your username is invalid!'));
//     });

//     it('TC03: Should not login with invalid password', async () =>{
//         await LoginPage.login('tomsmith','123456');
//         await expect(SecurePage.flashAlert).toBeDisplayed();
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringMatching('Your password is invalid!'));
//     });


//     afterEach(async () => {
        
//     });
// });

// describe('Scenario 2: Verify checkboxes screen', () => {
//     it('TC01: Verify checkbox1 can be checked and unchecked ', async () =>{
//         await CheckBoxes.open();
//         let isCheckBox1Checked = await CheckBoxes.isCheckBox1Checked();
//         expect(isCheckBox1Checked).toBe(false);
//         await CheckBoxes.clickCheckBox1();
//         let isCheckBox1Selected = await CheckBoxes.isCheckBox1Checked();
//         expect(isCheckBox1Selected).toBe(true);
//         });

//     it('TC02: Verify checkbox2 can be checked and unchecked', async() => {
//         await CheckBoxes.open();
//         let isCheckBox2Checked = await CheckBoxes.isCheckBox2Checked();
//         expect(isCheckBox2Checked).toBe(true);
//         await CheckBoxes.clickCheckBox2();
//         let isCheckBox2Selected = await CheckBoxes.isCheckBox2Checked();
//         expect(isCheckBox2Selected).toBe(false);
//     });
    
// });

describe('Scenario 4 : Upload File',() => {
    it('TC01: Uploaded file successfully', async() => {


    });


});


