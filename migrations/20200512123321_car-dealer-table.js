
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        // primary key, called id, autoincrements, not null
        tbl.increments();
        tbl.string("VIN", 17).notNullable().unique();
        tbl.string("Make").notNullable();
        tbl.string("Model").notNullable();
        tbl.integer("Mileage").notNullable();
        tbl.string("TransmissionType");
        tbl.string("TitleStatus");
        tbl.timestamps(true, true); // created_at and updated_at
    })
};

exports.down = function (knex) {
return knex.schema.dropTableIfExists("cars")
};
