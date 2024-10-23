CREATE TABLE
    products (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        unityCost VARCHAR(200) NOT NULL,
        unityPrice VARCHAR(200) NOT NULL,
        existence VARCHAR(200) NOT NULL,
        status VARCHAR(200) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )