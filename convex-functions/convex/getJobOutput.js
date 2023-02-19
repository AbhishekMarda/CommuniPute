import {query} from "./_generated/server";

// return true if job is complete else false
export default query(async ({ db }, request_id) => {
    return (await db.query("requests")
    .filter(q=>q.eq(q.field('_id'), request_id))
    .unique())['response'];
    });
