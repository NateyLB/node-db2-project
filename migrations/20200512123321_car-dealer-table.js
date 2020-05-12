
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        // primary key, called id, autoincrements, not null
        tbl.increments();
        tbl.string("VIN", 17).notNullable().unique();
        tbl.string("make").notNullable();
        tbl.string("model").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.string("transmission type");
        tbl.string("title status");
        tbl.timestamps(true, true); // created_at and updated_at
    })
};

exports.down = function (knex) {
return knex.schema.dropTableIfExists("cars")
};
