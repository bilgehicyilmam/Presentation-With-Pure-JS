(function () {
    async function it(desc, func) {
        try {
            await func();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
        } catch (error) {
            console.log('\n');
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.error(error);
            console.log('\n');
        }
    }

    function assert(isTrue) {
        if (!isTrue) {
            throw new Error();
        }
    }

    function delay(t, v) {
        return new Promise(function (resolve) {
            setTimeout(resolve.bind(null, v), t)
        });
    }

    it('should go with concepts links', async function () {

        showInitialPage();
        console.log("P1")
        await delay(1000);

        nextButtonClicked();
        console.log("P2")
        await delay(1000);

        nextButtonClicked();
        console.log("P3")
        await delay(1000);

        goToPath(3);
        console.log("C1")
        await delay(1000);

        nextButtonClicked();
        console.log("C2")
        await delay(1000);

        backButtonClicked();
        console.log("P3");
        await delay(1000);

        goToPath(6);
        console.log("D1")
        await delay(1000);

        nextButtonClicked();
        console.log("D2")
        await delay(1000);

        backButtonClicked();
        console.log("P3");
        await delay(1000);

        goToPath(12);
        console.log("C1")
        await delay(1000);

        nextButtonClicked();
        console.log("C2")
        await delay(1000);

        nextButtonClicked();
        console.log("C3")
        await delay(1000);

        backButtonClicked();
        console.log("P3");
        await delay(1000);


        const iframe = document.getElementById('content');
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const pageContent = innerDoc.body.children[0].textContent;
        assert(pageContent.includes('P3'));
    });
})();

