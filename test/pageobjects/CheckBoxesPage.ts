import Page from "./Page";

class CheckBoxes extends Page{
    
    private get checkBox1 (){
        return $('#checkboxes > input[type=checkbox]:nth-child(1)')
    }

    private get checkBox2 (){
        return $('#checkboxes > input[type=checkbox]:nth-child(3)')
    }

    async clickCheckBox1 (){
        await this.checkBox1.waitForDisplayed();
        await this.checkBox1.click();
    }

    async clickCheckBox2 (){
        await this.checkBox2.click();
    }

    async isCheckBox1Checked(): Promise<boolean> {
        return await this.checkBox1.isSelected(); // => false
    }

    async isCheckBox2Checked(): Promise<boolean> {
       return await this.checkBox2.isSelected(); // => true
    }

    public open () {
        return super.open('checkboxes');
    }
   
}

export default new CheckBoxes();

