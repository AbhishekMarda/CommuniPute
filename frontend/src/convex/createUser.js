import { mutation } from "./_generated/server";

export default mutation(async ({ db }, firstName, lastName, email, username, password) => {
    const default_compute_credits = 1000;
    const user = {firstName, lastName, email, username, password, computeCredits: default_compute_credits};

    await db.insert("users", user);
});
