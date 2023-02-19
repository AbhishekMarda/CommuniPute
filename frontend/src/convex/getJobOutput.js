import {query} from "./_generated/server";

// return true if job is complete else false
export default query(async ({ db }, user_id) => {
    const response = await db.query("requests")
    .filter(q=>q.eq(q.field('_id'), user_id))
    .unique();

    if (response ==null)
        return null;
    else
        return response['response'];
    });