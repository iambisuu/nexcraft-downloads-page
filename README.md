yellow colour hex - [#ffe900]

starting with db tables

SQL Schema (Table Structure)
Run this SQL command in your PostgreSQL (Neon DB):

CREATE TABLE releases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    version TEXT NOT NULL,
    release_date TIMESTAMP DEFAULT NOW(),
    metadata TEXT,
    platform_type TEXT CHECK (platform_type IN ('Windows', 'Mac', 'Linux')) NOT NULL,
    download_url TEXT NOT NULL
);

Example Data for Testing

INSERT INTO releases (version, metadata, platform_type, download_url)
VALUES 
('v1.0.0', 'Initial release', 'Windows', 'https://example.com/download/win-v1.0.0.exe'),
('v1.0.1', 'Bug fixes', 'Mac', 'https://example.com/download/mac-v1.0.1.dmg'),
('v1.0.2', 'Performance updates', 'Linux', 'https://example.com/download/linux-v1.0.2.tar.gz');
