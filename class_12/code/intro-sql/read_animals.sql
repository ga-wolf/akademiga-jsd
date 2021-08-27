-- Show all fields from all animals
SELECT
  *
FROM
  animals;

-- Show just the name from all animals
SELECT
  name
FROM
  animals;

-- Show just a particular animal
SELECT
  *
FROM
  animals
WHERE
  name == "Orca";