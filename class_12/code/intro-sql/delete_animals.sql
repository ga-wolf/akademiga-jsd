-- Add a record that we can delete
INSERT INTO
  animals (name, habitat)
VALUES
  ("BUILDING", "CITY");

-- Show that the new record is there
SELECT
  *
FROM
  animals;

-- Delete the record
DELETE FROM
  animals
WHERE
  name == "BUILDING";

-- Show that it has been deleted
SELECT
  *
FROM
  animals;