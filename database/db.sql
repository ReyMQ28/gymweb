CREATE TABLE
    product (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        identificación VARCHAR(200) NOT NULL,	
        name VARCHAR(200) NOT NULL,
        lastname VARCHAR(200) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )