import { query } from "./_generated/server";

export default query(async ({ db }) => {
    // Get all database entries that are not in progress (available to requesting client)
    return await db.query("available_compute_request").filter(
        q => q.eq(q.field("in_progress_flag"), false)
    ).collect();
});
