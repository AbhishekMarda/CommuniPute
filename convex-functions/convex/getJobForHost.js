import { query } from "./_generated/server";

export default query(async ({ db }, host_id) => {
  console.log(host_id)
  const row = (await db.query("requests")
    .filter(q=>q.and(q.eq(q.field('host_id'), host_id), q.eq(q.field('complete_flag'), false)))
    .take(1))[0];

  return row;
});

