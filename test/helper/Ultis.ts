export async function wait(milliseconds: number) {
    await driver.pause(milliseconds)
}