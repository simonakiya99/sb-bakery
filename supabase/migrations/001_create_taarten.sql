CREATE TABLE IF NOT EXISTS taarten (
  id        SERIAL PRIMARY KEY,
  naam_nl   TEXT NOT NULL,
  naam_ti   TEXT NOT NULL,
  actief    BOOLEAN DEFAULT true,
  volgorde  INT DEFAULT 0
);

INSERT INTO taarten (naam_nl, naam_ti, volgorde) VALUES
  ('Bruidstaart',      'ናይ መርዓ ኬክ',  1),
  ('Verjaardagstaart', 'ናይ ልደት ኬክ',  2),
  ('Speciale taart',   'ፍሉይ ኬክ',      3),
  ('Andere',           'ካልእ',         4);
