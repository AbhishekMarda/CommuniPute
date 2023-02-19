import { mutation } from "./_generated/server";

export default mutation(async ({ db }, username, first_name, last_name,
                               email, password) => {
    const new_user = { username, first_name, last_name , email, password};
    const id = await db.insert("users", new_user);
    console.log(id);
    return await db.query('users').filter(q=>q.eq(q.field('_id'), id)).unique();
});