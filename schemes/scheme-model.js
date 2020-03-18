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
    return db("scheme");
}

function findById(id) {
    return db("scheme")
        .where({ id })
        .then(scheme => {scheme ? scheme : null})
        .first();
}

function findSteps(id) {
    return db("scheme as sch")
        .join("steps as s", "s.scheme_Id", "sch.id" )
        .select("sch.id", "sch.scheme_name", "s.step_number", "s.instructions")
        .where("sch.id", id);
}

function add(scheme) {
    return db("scheme").insert(scheme, id);   
}

function update(changes, id) {
    return db("scheme")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("scheme")
        .where({ id })
        .del();
}