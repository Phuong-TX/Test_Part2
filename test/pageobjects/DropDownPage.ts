import Page from "./Page";

class DropDownPage extends Page {
    public open () {
        return super.open('dropdown');
    }

}

export default new DropDownPage();



//*[@id="dropdown"]/option[2]
//*[@id="dropdown"]/option[2]
// <option value="1">Option 1</option>
// <option value="1" selected="selected">Option 1</option>
//*[@id="dropdown"]/option[2]
// <option value="1" selected="selected">Option 1</option>
//*[@id="dropdown"]/option[1]
//*[@id="dropdown"]/option[1]
// <option value="" disabled="disabled" selected="selected">Please select an option</option>
// <option value="" disabled="disabled">Please select an option</option>
// <option value="1">Option 1</option>
