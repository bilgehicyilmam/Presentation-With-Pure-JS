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

    it('should go forward and backward linearly', async function () {

        showInitialPage();
        console.log("P1")
        await delay(1000);

        nextButtonClicked();
        console.log("P2")
        await delay(1000);

        nextButtonClicked();
        console.log("P3")
        await delay(1000);

        nextButtonClicked();
        console.log("C1")
        await delay(1000);

        nextButtonClicked();
        console.log("C2")
        await delay(1000);

        nextButtonClicked();
        console.log("C3")
        await delay(1000);

        nextButtonClicked();
        console.log("D1")
        await delay(1000);

        nextButtonClicked();
        console.log("D2")
        await delay(1000);

        nextButtonClicked();
        console.log("D3")
        await delay(1000);

        nextButtonClicked();
        console.log("P1")
        await delay(1000);

        nextButtonClicked();
        console.log("D1")
        await delay(1000);

        nextButtonClicked();
        console.log("P2")
        await delay(1000);

        nextButtonClicked();
        console.log("C1")
        await delay(1000);

        nextButtonClicked();
        console.log("C2")
        await delay(1000);

        nextButtonClicked();
        console.log("C3")
        await delay(1000);

        nextButtonClicked();
        console.log("D4")
        await delay(1000);

        prevButtonClicked();
        console.log("C3")
        await delay(1000);

        prevButtonClicked();
        console.log("C2")
        await delay(1000);

        prevButtonClicked();
        console.log("C1")
        await delay(1000);

        prevButtonClicked();
        console.log("P2")
        await delay(1000);

        prevButtonClicked();
        console.log("D1")
        await delay(1000);

        prevButtonClicked();
        console.log("P1")
        await delay(1000);

        prevButtonClicked();
        console.log("D3")
        await delay(1000);

        prevButtonClicked();
        console.log("D2")
        await delay(1000);

        prevButtonClicked();
        console.log("D1")
        await delay(1000);

        prevButtonClicked();
        console.log("C3")
        await delay(1000);

        prevButtonClicked();
        console.log("C2")
        await delay(1000);

        prevButtonClicked();
        console.log("C1")
        await delay(1000);

        prevButtonClicked();
        console.log("P3")
        await delay(1000);

        prevButtonClicked();
        console.log("P2")
        await delay(1000);

        prevButtonClicked();
        console.log("P1")
        await delay(1000);

        const iframe = document.getElementById('content');
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const pageContent = innerDoc.body.children[0].textContent;
        assert(pageContent.includes('P1'));
    });
})();

