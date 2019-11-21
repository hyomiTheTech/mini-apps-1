USE userinfoDB;

CREATE TABLE userinfos
(
    id int not null
    auto_increment primary key,
    user varchar
    (255),
    email varchar
    (255),
    user_password varchar
    (255),
    line_1 varchar
    (255),
    line_2 varchar
    (255),
    city varchar
    (255),
    user_state varchar
    (255),
    zip varchar
    (255),
    phone varchar
    (255),
    credit_card varchar
    (255),
    expire_date varchar
    (255),
    cvv varchar
    (255),
    billing_zip varchar
    (255)
);