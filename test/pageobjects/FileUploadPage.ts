import Page from "./Page";

class FileUpload extends Page {

    private get btnChooseFile () {
        return $('#file-upload');
    }

    private get btnUpload() {
        return $('#file-submit');
    }

    private get msgUploadSuccess() {
        return $('#content > div > h3');
    }

    private get fileUploaded() {
        return $('#uploaded-files');
    }


    async clickBtnChooseFile () {
        await this.btnChooseFile.isDisplayed();
        await this.btnChooseFile.click();
    }

    async clickBtnUpload() {
        await this.btnUpload.isDisplayed();
        await this.btnUpload.click();
    }

    async fileInput(filePath:string):Promise<void> {
       return await this.btnChooseFile.setValue(filePath);
    }

    async msgUploadSucessDisplayed() {
        await this.msgUploadSuccess.isDisplayed();
    }

    async getUploadedFileNameText(): Promise<string> {
        return await this.fileUploaded.getText();
    }

    public open () {
        return super.open('upload');
    }

}

export default new FileUpload(); 