import { mutation } from "./_generated/server";


export default mutation(async ({ db }, host_id) => {
// I have a job assigned. Let's mark the machine to be in progress now
    const available_compute_entry = await db.query('available_compute_request')
      .filter(q=>q.eq(q.field('host_id'), host_id)).unique();
    // return available_compute_entry

    await db.patch(available_compute_entry._id, {'in_progress_flag': true});

})