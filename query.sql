CREATE TABLE usuarios(
    nome VARCHAR(60),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES (
    "Pedro Augusto",
    "meuemail@gmail.com",
    18
);

SELECT * FROM usuarios;