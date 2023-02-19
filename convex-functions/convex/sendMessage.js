import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export default mutation(async ({ db }, id, response) => {
  // await db.insert("messages", message);
  await db.patch(id, {'completed':true, 'response':response})
});