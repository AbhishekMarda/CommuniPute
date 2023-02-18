import { mutation } from "./_generated/server";

export default mutation(async ({ db }, host, operating_system,
    ram_available, runtime_available, cpu_arch_type, os_version_info,
                               end_available_time) => {
    // By default, compute availability requests are false
    let in_progress_flag = false;

    const request = { host, operating_system, ram_available, runtime_available, cpu_arch_type,
        os_version_info, end_available_time, in_progress_flag };
    await db.insert("available_compute_request", request);
});
