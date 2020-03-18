const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}

function findSteps(id) {
    return db("schemes as sch")
        .join("steps as s", "s.scheme_Id", "sch.id" )
        .select("sch.id", "sch.scheme_name", "s.step_number", "s.instructions")
        .where("sch.id", id);
}

function add(scheme) {
    return db("schemes").insert(scheme);   
}

function update(changes, id) {
    return db("schemes")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("schemes")
        .where({ id })
        .del();
}