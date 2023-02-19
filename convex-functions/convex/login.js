import {query} from "./_generated/server";

export default query(async ({ db }, username, password) => {
    return await db.query("users")
    .filter(q => q.and(q.eq(q.field("username"), username),
        q.eq(q.field("password"), password))).unique();
    });

