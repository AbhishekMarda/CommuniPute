import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
    // Users table definition
    users: defineTable({
        username: s.string(),
        first_name: s.string(),
        last_name: s.string(),
        email: s.string(),
        password: s.string(),
    }),
    // Available Compute Table definition
    available_compute_request: defineTable({
        host_user: s.id("users"),
        operating_system: s.string(),
        ram_available: s.number(),
        runtime_available: s.string(),
        cpu_arch_type: s.string(),
        os_version_info: s.string(),
        end_available_time: s.string(),
        in_progress_flag: s.boolean(),
    }),
    // Take compute request table definition
    take_compute_request: defineTable({
        available_compute_id: s.id("available_compute_request"),
        client_user_id: s.id("users"),
        code_to_run: s.string(),
        completed_flag: s.boolean(),
        time_to_complete_secs: s.number(),
        requirements_input: s.string()
    }),
});