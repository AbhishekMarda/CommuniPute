import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export default mutation(async ({ db }, id, response) => {
  // await db.insert("messages", message);
  await db.patch(id, {'completed':true, 'response':response})
  
  // patch the in_progress_flag to let the world know that the machine is free again
  assoc_compute_request = await db.query('available_compute_request')
    .filter(q=> q.eq(q.field('host_id'), id))
    .unique()

  await db.patch(assoc_compute_request._id, {'in_progress_flag':false})

});