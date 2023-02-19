import { mutation } from "./_generated/server";

export default mutation(async ({ db }, available_compute, requesting_user, code_to_run, requirements_input) => {
    const complete_flag = false;
    const time_to_complete = 0;

    await db.patch(available_compute, {in_progress_flag: true});

    const request = { available_compute, requesting_user, code_to_run , complete_flag, time_to_complete, requirements_input};
    await db.insert("take_compute_request", request);
});
