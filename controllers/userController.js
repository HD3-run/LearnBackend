// This is a named export. We can have multiple functions in one file.
export const getUsers = (req, res) => {
    // In real life, we would query the database here.
    res.status(200).json({
        message: "Here are all the users",
        users: ["Alice", "Bob", "Charlie"]
    });
};

