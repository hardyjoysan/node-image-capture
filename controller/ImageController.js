const puppeteer = require('puppeteer');

module.exports = {
    home: function(req, res, next){

        const student_id = req.params.student_id;

        (async () => {
            const browser = await puppeteer.launch({
                defaultViewport: {
                    width: 1440,
                    height: 1000
                }
            });
            const page = await browser.newPage()
            await page.goto(process.env.CLIENT_SERVER + '/graduate/' + student_id)
            await page.waitFor(2*1000)
            await page.screenshot({path: 'public/images/'+student_id+'.jpg'})
            await browser.close();

            var url  = req.protocol + '://' + req.get('host') + '/images/' + student_id + '.jpg';

            res.json({ status: 200, data:{'image' : url }, message: process.env.CLIENT_SERVER });
        })();

    }
}