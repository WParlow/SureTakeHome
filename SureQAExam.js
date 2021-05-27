import { Selector, t } from 'testcafe';
import { ClientFunction } from 'testcafe';
const getWindowLocation = ClientFunction(() => window.location);

fixture `Sure QA Take Home Exam`
    .page `https://sure-qa-challenge.vercel.app/`;

test('Happy Path BDD Test', async t => {

        /*Landing page*/
        //Don't enter a zipcode
        await t
            .click(Selector('span').withText('GET A QUOTE'))
            .expect(Selector('p').withText('Required').exists).ok()
        await checkURL(false, 'building-material')

        //Enter an invalid zip code
        await t
            .typeText(Selector('input').withAttribute('name', 'postalCode'), '1234')
            .click(Selector('span').withText('GET A QUOTE'))
            .expect(Selector('p').withText('Invalid zip code').exists).ok()
        await checkURL(false, 'building-material')
        
        //Enter a valid zip code
        await t
            .selectText(Selector('input').withAttribute('name', 'postalCode'))
            .typeText(Selector('input').withAttribute('name', 'postalCode'), '12345')
            .click(Selector('span').withText('GET A QUOTE'))
        await checkURL(true, 'building-material')

        /*Building Materials:*/
        //Select nothing
        await t
            .click(Selector('span').withText('NEXT'))
        await checkURL(false, 'water-proximity')
        //Select 'Bricks'
        await t
            .click(Selector('input').withAttribute('value', 'bricks'))
            .click(Selector('span').withText('NEXT'))
        await checkURL(true, 'water-proximity')

        /*Water Proximity:*/
        //Select nothing
        await t
            .click(Selector('span').withText('NEXT'))
        await checkURL(false, 'quote')
        //Select 'Yes'
        await t
            .click(Selector('input').withAttribute('name', 'waterProximity').withAttribute('value', 'true'))
            .click(Selector('span').withText('NEXT'))
        await checkURL(true, 'quote')

        /*Quote*/
        //Expect the plans and checkbox exist
        await t
            .expect(Selector('div').withText('Standard').exists).ok()
            .expect(Selector('span').withText('CHOOSE STANDARD').exists).ok()
            .expect(Selector('div').withText('Complete').exists).ok()
            .expect(Selector('input').withAttribute('name', 'includeFloodProtection').exists).ok()
            .expect(Selector('span').withText('CHOOSE COMPLETE').exists).ok()
        //Expect the plans to have prices greater than $0 and the flood addition to be greater than 0 if it exists
        var standard = parseInt(await getDigits(await Selector('h3').nth(1).innerText))
        var complete = parseInt(await getDigits(await Selector('h3').nth(3).innerText))
        console.log("Standard Cost: $" + standard)
        console.log("Complete Cost: $" + complete)
        await t
            .expect(standard).gt(0)
            .expect(complete).gt(0)
        try{
            var flood = parseInt(await getDigits(await Selector('.MuiTypography-body1').innerText))
            console.log("Flood Cost: $" + flood)
            await t.expect(flood).gt(0)
        }
        catch (e){
            console.log('Flood protection is included in the price.')
        }
        
        await t.wait(5000)
});

async function checkURL(bool, str){
    var url = getWindowLocation();

    if (bool == true){
        await t.expect(url).contains(new RegExp(str))
    }
    else {
        await t.expect(url).notContains(new RegExp(str))
    }
}

async function getDigits(str){
    var digits = ''
    for (var i = 0; i < str.length; i++){
        digits = str.match(/\d+/g)
    }
    digits = digits[0]
    return digits
}