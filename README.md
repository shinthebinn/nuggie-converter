# Prices

All prices are currently based on the 4-piece from the respective chain or the equivalent lowest amount of nuggies. Plan is to add multiple prices and combos after the base is finished.

# API Docs

The api is accessed through the [/api](https://nuggies.shinthebin.ml/api) endpoint. However, this endpoint does not return anything on its own and will return a server error.

## Manifest

The manifest is the big nuggie data dump, and contains everything that is used in the site and more. To access this go to [/api/manifest](https://nuggies.shinthebin.ml/api/manifest). 

You can also get data for specific restaurants by adding a `/[restaurant]` after the url. For example: [/api/manifest/mcdonalds](https://nuggies.shinthebin.ml/api/manifest/mcdonalds).

## Conversion

The [/api/conversion](https://nuggies.shinthebin.ml/conversion) endpoint lets you convert nuggies to USD and USD to nuggies painlessly. This url takes 3 query arguments that should be added in the url with standard syntax:

- **from** - Only takes two different strings as arguments, `nugs` or `usd`. This query specifies which conversion method to use. `from=nugs` is nuggies to USD, and `from=usd` is the inverse.
- **chain** - The specified restaurant you would like to use metrics from. Using an unsupported restaurant will return `-1` as the price.
- [optional] **count** - How many nuggies or how much money to convert to the other metric. If left unspecified will default to `1`.
