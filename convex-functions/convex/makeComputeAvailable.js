import { mutation } from "./_generated/server";

export default mutation(async ({ db }, host, operating_system,
    ram_available, runtime_available, cpu_arch_type, os_version_info, end_available_time) => {
    // By default, compute availability requests are false
    let in_progress_flag = false;
    const request = { host, operating_system, ram_available, runtime_available, cpu_arch_type,
        os_version_info, end_available_time, in_progress_flag };

    // only one availability should exist per host
    const existing_availability = await db.query("available_compute_request")
    .filter(q=>q.eq(q.field('host_id'), host))
    .collect()[0]


    if (existing_availability != null) {
        await db.delete(existing_availability._id)
    } 

    await db.insert("available_compute_request", request);
    
    

    });

