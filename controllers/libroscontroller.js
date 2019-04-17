var libroscontroller= {
	list: function(req, res, next) {

		var listado=[
		{
		  autor:"CAMILLA LACKBERG",
		  titulo:"UNA JAULA DE ORO: LA VENGANZA DE UNA MUJER ES BELLA Y BRUTAL",
		  isbn:"9788417708184"
		},
		{
		  autor:"ANNETTE HESS",
		  titulo:"LA CASA ALEMANA",
		  isbn:"9788408206767"
		},
		{
		  autor:"FERNANDO ARAMBURU",
		  titulo:"VETAS PROFUNDAS",
		  isbn:"9788490666746"
		}];

		res.json(listado);

	},
	create: function(req, res, next) {
	  console.log(req.body);
	  var libro=req.body;
	  res.json(libro);
	},
	update:function(req, res, next) {
	  var isbn=req.params.isbn;
	  console.log(req.body);
	  var libro=req.body;
	  res.json(libro);
	},
	get: function(req, res, next) {
  
	  var isbn=req.params.isbn;

	  var libro={
		"autor": "LAURA GALLEGO",
		"titulo": "LA MISIÓN DE ROX (GUARDIANES DE LA CIUDADELA 3)",
		"isbn": "9788417460655"
	  };
	  res.json(libro);
	},
	
	delete: function(req, res, next) {
	  var isbn=req.params.isbn;
	  var libro={
		"autor": "LAURA GALLEGO",
		"titulo": "LA MISIÓN DE ROX (GUARDIANES DE LA CIUDADELA 3)",
		"isbn": "9788417460655"
	  };
	  res.json(libro);
	}
};

module.exports=libroscontroller;

