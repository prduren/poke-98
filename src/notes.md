API calls:

First 151 pokemon:
"https://pokeapi.co/api/v2/pokemon?limit=151"

To check type:
Map the data, check if item.url.types[0].type.name is desired type
(Have to do second fetch on the url of each pokemon, for example venasaur's is https://pokeapi.co/api/v2/pokemon/3/)

To check version and language and get description/id:
item.species.url is the end point you're looking for. Then map flavor_text_entries
and check to see if the item's version is "yellow" and the language is "en". Then
you can grab the flavor_text. id you can get from item.id.
