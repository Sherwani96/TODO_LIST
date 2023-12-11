import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2500);
    });
};
async function welcome() {
    let title = chalkAnimation.karaoke(`         TODO List CLI APP\n`);
    await sleep();
    title.stop();
}
;
export { welcome };
