import { test, expect } from '@playwright/test';

test('Fill keyword and expext contain movie', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/react-movies-explorer');

  // Fill the input field with "purwnt"
  await page.fill('input', 'last');

  // Simulating pressing Enter key
  await page.press('input', 'Enter');

  // Assert the presence of the paragraph
  await expect(page.getByText('Search your favorite movies')).toHaveText(
    'Search your favorite movies',
    {
      timeout: 10000,
    }
  );

  // Assert the presence of the movies named 'The Last Heretic'
  await expect(
    page.getByRole('heading', { name: 'The Last Heretic', exact: true })
  ).toHaveText('The Last Heretic', {
    timeout: 10000,
  });
});
