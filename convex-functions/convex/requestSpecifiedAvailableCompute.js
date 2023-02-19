import { mutation } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export default mutation(async ({ db }, host_id, client_id, code, requirements) => {
    const complete_flag = false;
    console.log(requirements)

    const response = ""

    const request = {client_id, code, complete_flag, host_id, requirements, response};
    await db.insert("requests", request);
});
