
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Cars').insert([
        {id: 1, VIN:"12345678901234567", Make:"Mercedez-Benz", Model:"C350", Mileage:12300 , TransmissionType:"automatic" , TitleStatus:"clean" },
        {id: 2, VIN:"09876543210987654" , Make:"Honda" , Model:"Accord" ,Mileage:74683 , TransmissionType:"automatic" , TitleStatus:"clean" },
        {id: 3, VIN:"11223344556677889" , Make:"Hyundai" , Model:"Elantra" ,Mileage:123432 , TransmissionType:"automatic" , TitleStatus:"salvage" },
        {id: 4, VIN:"99887766554433221" , Make:"Lamborghini" , Model:"Murcielago" ,Mileage:35989 , TransmissionType:"manual" , TitleStatus:"clean" }

      ]);
    });
};
