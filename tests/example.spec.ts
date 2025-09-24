import { test, expect } from '@playwright/test';
import { Dictionary } from '../Dictionary/Locators.spec';
import { time } from 'console';

test('has title', async ({ page }) => {
  await page.goto(Dictionary.URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Software Testing/);
});

test('Add item to cart', async ({ page }) => {
  await page.goto(Dictionary.URL);

  // Click the get started link.
  await page.getByRole('img', { name: Dictionary.BoltCutters }).click();

  // Expects page to have a heading with the name of Installation.
  await page.getByRole('button', { name: Dictionary.AddToCart }).click();

  //Await the icon on the cart
  await page.locator( '[data-test="nav-cart"]').click();  

  //Search for the Bolt Cutters on the cart page
  await page.locator('td').first().waitFor();

  //Simple visual confirmation for dev purposes
  console.log(await page.locator('td').first().textContent());  
  //Validate the value of the first row on the cart page to be the bolt cutters we added.
  expect(Dictionary.BoltCutters == page.locator('td').first().textContent().toString());
});
