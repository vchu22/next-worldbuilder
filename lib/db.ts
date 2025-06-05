const getUserFromDb = (email: String, hash: String) => {
    // search DB and evaluate
    console.log("search user with email: %s", email, hash)
    const db_res = [
        {email: "jdoe@email.com", passwordHash: "1234", name: "John Doe" },
        {email: "janedoe@email.com", passwordHash: "1234", name: "Jane Doe" },
    ]
    const row = db_res.find(x => x.email === email);
    if (row) {
        return row;
    } else {
        return null;
    }
}

export { getUserFromDb };