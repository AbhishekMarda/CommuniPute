import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export default mutation(async ({ db }, id, host_id, response) => {
  await db.patch(id, {'complete_flag':true, 'response':response})
  // patch the in_progress_flag to let the world know that the machine is free again

  // return row
  const assoc_compute_request = await db.query('available_compute_request')
    .filter(q => q.eq(q.field('host_id'), host_id))
    .unique()

  // return assoc_compute_request
  // return assoc_compute_request
  await db.patch(assoc_compute_request._id, { 'in_progress_flag': false })

});