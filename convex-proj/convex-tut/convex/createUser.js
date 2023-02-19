import { mutation } from "./_generated/server";

export default mutation(async ({ db }, username, first_name, last_name,
                               email, password) => {
    const new_user = { username, first_name, last_name , email, password};
     await db.insert("users", new_user);
});