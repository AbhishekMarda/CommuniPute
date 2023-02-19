import {query} from "./_generated/server";

// return true if job is complete else false
export default query(async ({ db }, user_id) => {
    return await db.query("requests")
    .filter(q=>q.eq(q.field('client_id'), user_id))
    .collect();
    });