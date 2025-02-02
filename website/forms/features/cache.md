---
id: cache
title: Cache
---

Eightshift Forms utilizes WordPress's internal cache tools to store integration API response data, reducing API calls and improving site performance. Clear the cache via our global settings page to retrieve fresh data from the API.

![Cache screen](/img/forms/cache.webp)

## Integration cache

For example, if you are using HubSpot integration, we pull the API data and store it in the cache. When you need to show the form on the front end, we no longer pull the data from the API but from the cache. This way, we can reduce the number of API calls and improve the site's performance. If you change the form fields on HubSpot, you should clear the cache before pulling the data again.

When using forms editor builder there is also an cache clear button in the block editor sidebar options.

:::note
The integration cache is stored for 60 minutes.
:::

## Country

The country list is set using the `JSON` format in the repository, and we use the WordPress internal cache to store it for a short time. This way, we don't need to read the file from the disk every time. You should clear the cache by changing the country list using WordPress filters.

:::note
The country cache is stored for 3 minutes.
:::

## Validation labels

The validation label is a list we use to provide UX responses in every form interaction on the front end. This list is extensive, so we reduced the load time by storing it in the WordPress internal cache. You should clear the cache if you change the validation labels using the provided WordPress filters.

:::note
The validation labels cache is stored for 3 minutes.
:::
