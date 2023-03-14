import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    console.log(`Before opening browser...`);
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log(`After opening browser...`);
})

When(/^Search with (.*)$/, async function(SearchItem){
    console.log(`>> searchItem: ${SearchItem}`);
    let element = await $(`[name=q]`)
    await element.setValue(SearchItem)
    await browser.keys("Enter")
})

Then (/^Click on the first search result$/, async function() {
    let element = await $(`<h3>`)
    element.click()
})

Then (/^URL should match (.*)$/, async function(ExpectedURL){
    console.log(`>> expectedURL: ${ExpectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)

})