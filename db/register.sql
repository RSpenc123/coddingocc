insert into users(
    email, 
    password, 
    username, 
    name,
    company,
    phone,
    fax,
    address,
    city,
    state,
    zipcode
    
) values (
    ${email},
    ${password},
    ${username},
    ${company},
    ${phone},
    ${fax},
    ${address},
    ${city},
    ${state},
    ${zipcode}
)

returning *