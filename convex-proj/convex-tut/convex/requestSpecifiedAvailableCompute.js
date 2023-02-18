import { mutation } from "./_generated/server";

export default mutation(async ({ db }, available_compute, requesting_user, code_to_run) => {
    const complete_flag = false;
    const time_to_complete = 0;
    // let compute_request = await db.get(available_compute);
    // compute_request.in_progress = true;

    await db.patch(available_compute, {in_progress_flag: true});

    const request = { available_compute, requesting_user, code_to_run , complete_flag, time_to_complete};

    // await db.replace("available_compute_request", compute_request);
    await db.insert("take_compute_request", request);
});
