var cvCoches = new CVCoches();

//BOTONES PARA MOSTRAR FORMULARIOS

var oBtnAltaProveedor= document.getElementById("btnAltaProveedor");
oBtnAltaProveedor.addEventListener("click",altaProveedor,false);

var oBtnAltaInicio= document.getElementById("btnInicio");
oBtnAltaInicio.addEventListener("click",ocultarFormularios,false);

var oBtnAltaEmpleado= document.getElementById("btnAltaEmpleado");
oBtnAltaEmpleado.addEventListener("click",altaEmpleado,false);

var oBtnAltaVehiculo= document.getElementById("btnAltaVehiculo");
oBtnAltaVehiculo.addEventListener("click",altaVehiculo,false);

var oBtnAltaCliente= document.getElementById("btnAltaCliente");
oBtnAltaCliente.addEventListener("click",altaCliente,false);

var oBtnRegCompra= document.getElementById("btnRegistrarCompra");
oBtnRegCompra.addEventListener("click",mostrarRegistrarCompra,false);

var oBtnRegVenta= document.getElementById("btnRegistrarVenta");
oBtnRegVenta.addEventListener("click",mostrarRegistrarVenta,false);

var oBtnRegRep= document.getElementById("btnRegistrarReparacion");
oBtnRegRep.addEventListener("click",mostrarRegistrarRep,false);

//BOTONES ALTAS DE LOS FORMULARIOS

var oBtnEnviarAltaProveedor = document.getElementById("btnEnviarAltaProveedor");
oBtnEnviarAltaProveedor.addEventListener("click", enviarAltaProveedor, false);

var oBtnEnviarAltaEmpleado = document.getElementById("btnEnviarAltaEmpleado");
oBtnEnviarAltaEmpleado.addEventListener("click", enviarAltaEmpleado, false);

var oBtnEnviarAltaVehiculo = document.getElementById("btnEnviarAltaVehiculo");
oBtnEnviarAltaVehiculo.addEventListener("click", enviarAltaVehiculo, false);

var oBtnEnviarAltaCliente = document.getElementById("btnEnviarAltaCliente");
oBtnEnviarAltaCliente.addEventListener("click", enviarAltaCliente, false);

var oBtnEnviarVenta = document.getElementById("btnEnviarVenta");
oBtnEnviarVenta.addEventListener("click", enviarVenta, false);

var oBtnEnviarCompra = document.getElementById("btnEnviarCompra");
oBtnEnviarCompra.addEventListener("click", enviarCompra, false);

var oBtnEnviarReparacion = document.getElementById("btnEnviarReparacion");
oBtnEnviarReparacion.addEventListener("click", enviarReparacion, false);



//BOTONES MOSTRAR LISTAS


var oBtnListarProv = document.getElementById("btnListarProveedores");
oBtnListarProv.addEventListener("click", mostrarListaProv, false);




function altaProveedor(){
	
	ocultarFormularios();
	var formAltaProv = document.getElementById("formAltaProv");
	formAltaProv.reset();
	formAltaProv.style.display = "block";
	var inputsAltaProv = formAltaProv.querySelectorAll('input');
	for (var i = 0; i<inputsAltaProv.length; i++)
		inputsAltaProv[i].classList.remove('error');	
	
}

function enviarAltaProveedor(){
	if (validarAltaProv()){
	var formAltaProv= document.getElementById("formAltaProv");
	var sMensaje = "";
		
	/*if(formAltaProv.cifProv.value=="" || formAltaProv.nomProv.value=="" || formAltaProv.dirProv.value=="" || 
		formAltaProv.telProv.value=="" || formAltaProv.tipoProv.value==""){
		sMensaje= "Debe Rellenar Todos los Campos.";				
	} else{*/
		var cifProv= formAltaProv.cifProv.value.trim();
		var nomProv= formAltaProv.nomProv.value.trim();
		var dirProv= formAltaProv.dirProv.value.trim();
		var telProv= formAltaProv.telProv.value.trim();
		//var tipoProv= formAltaProv.tipoProv.value.trim();
		
		var oProveedor= new Proveedor(cifProv,nomProv,dirProv,telProv);
		
		sMensaje = cvCoches.altaProveedor(oProveedor);
        //altaProveedor();
	//}

	alert(sMensaje);
	ocultarFormularios();
	}

}

function altaEmpleado(){
	
	ocultarFormularios();
	var formAltaEmp = document.getElementById("formAltaEmpleado");
	formAltaEmp.reset();
	formAltaEmp.style.display = "block";
	var inputsAltaEmp = formAltaEmp.querySelectorAll('input');
	for (var i = 0; i<inputsAltaEmp.length; i++)
		inputsAltaEmp[i].classList.remove('error');
	
	
}

function enviarAltaEmpleado(){
	if(validarAltaEmpleado()){
		var formAltaEmpleado= document.getElementById("formAltaEmpleado");
		var sMensaje = "";
			
		/*if(formAltaEmpleado.dniEmp.value=="" || formAltaEmpleado.nomEmp.value=="" || formAltaEmpleado.apeEmp.value=="" || 
			formAltaEmpleado.ventasEmp.value=="" || formAltaEmpleado.salEmp.value==""){
			sMensaje= "Debe Rellenar Todos los Campos.";				
		} else{*/
			var dniEmp= formAltaEmpleado.dniEmp.value.trim();
			var nomEmp= formAltaEmpleado.nomEmp.value.trim();
			var apeEmp= formAltaEmpleado.apeEmp.value.trim();
			var ventasEmp= formAltaEmpleado.ventasEmp.value.trim();
			var salEmp= formAltaEmpleado.salEmp.value.trim();
			
			var oEmpleado= new Empleado(dniEmp,nomEmp,apeEmp,ventasEmp,salEmp);
			
			sMensaje = cvCoches.altaEmpleado(oEmpleado);
	        //altaEmpleado();
		//}

		alert(sMensaje);
		ocultarFormularios();
	}

}

function altaVehiculo(){
	
	ocultarFormularios();
	var formAltaVeh = document.getElementById("formAltaVeh");
	formAltaVeh.reset();
	formAltaVeh.style.display = "block";
	//formAltaVeh.btnEnviarAltaVehiculo.addEventListener('click',validarAltaVeh, false);
	var inputsAltaVeh = formAltaVeh.querySelectorAll('input');
	for (var i = 0; i<inputsAltaVeh.length; i++)
		inputsAltaVeh[i].classList.remove('error');
	formAltaVeh.querySelector('.radio').classList.remove('error');
	
}

function enviarAltaVehiculo()
{
	if(validarAltaVeh())
	{
		var formAltaVeh = document.getElementById("formAltaVeh");
		var sMensaje = "";
			
		/*if(formAltaEmpleado.dniEmp.value=="" || formAltaEmpleado.nomEmp.value=="" || formAltaEmpleado.apeEmp.value=="" || 
			formAltaEmpleado.ventasEmp.value=="" || formAltaEmpleado.salEmp.value==""){
			sMensaje= "Debe Rellenar Todos los Campos.";				
		} else{*/
			var matVehiculo = formAltaVeh.matVehiculo.value.trim();
			var marcaVehiculo = formAltaVeh.marcaVehiculo.value.trim();
			var modVehiculo = formAltaVeh.modVehiculo.value.trim();
			var tasVehiculo = formAltaVeh.tasVehiculo.value.trim();
			var combVehiculo = formAltaVeh.combVehiculo.value.trim();
			var plazasVehiculo = formAltaVeh.plazasVehiculo.value.trim();
			var tipoVehiculo = formAltaVeh.tipoVehiculo.value.trim();

			var oVehiculo = new Vehiculo(matVehiculo,marcaVehiculo,modVehiculo,tasVehiculo,combVehiculo,plazasVehiculo);
			if (tipoVehiculo=='coche') 
			{
				var nPuertasCoche = formAltaVeh.nPuertasCoche.value.trim();
				var tapiceriaCoche = formAltaVeh.tapiceriaCoche.value.trim();
				var tpCoche = formAltaVeh.tpCoche.value.trim();

				var oCoche = new Coche(matVehiculo,marcaVehiculo,modVehiculo,tasVehiculo,combVehiculo,plazasVehiculo,nPuertasCoche,tapiceriaCoche,tpCoche);

			}
			else
			{
				var cargaCamion = formAltaVeh.cargaCamion.value.trim();
				var tipoCargaCamion = formAltaVeh.tipoCargaCamion.value.trim();
				var capCombCamion = formAltaVeh.capCombCamion.value.trim();

				var oCamion = new Camion(matVehiculo,marcaVehiculo,modVehiculo,tasVehiculo,combVehiculo,plazasVehiculo,cargaCamion,tipoCargaCamion,capCombCamion);
			}
			
			sMensaje = cvCoches.altaVehiculo(oVehiculo);
	        //altaEmpleado();
		//}

		alert(sMensaje);
		ocultarFormularios();
	}


}

function altaCliente(){
	
	ocultarFormularios();
	var formAltaCli = document.getElementById("formAltaCli");
	formAltaCli.reset();
	formAltaCli.style.display = "block";
	//formAltaCli.btnEnviarAltaCliente.addEventListener('click',validarAltaCli, false);
	var inputsAltaCli = formAltaCli.querySelectorAll('input');
	for (var i = 0; i<inputsAltaCli.length; i++)
		inputsAltaCli[i].classList.remove('error');
	
}

function enviarAltaCliente(){
if (validarAltaCli()) 
{

	var formAltaCli= document.getElementById("formAltaCli");
	var sMensaje = "";
		
	/*if(formAltaCli.dniCliente.value=="" || formAltaCli.nomCliente.value=="" || formAltaCli.apCliente.value=="" || 
		formAltaCli.telCliente.value==""){
		sMensaje= "Debe Rellenar Todos los Campos.";				
	} else{*/
		var dniCliente= formAltaCli.dniCliente.value.trim();
		var nomCliente= formAltaCli.nomCliente.value.trim();
		var apCliente= formAltaCli.apCliente.value.trim();
		var telCliente= formAltaCli.telCliente.value.trim();

		//console.log(dniCliente+' '+nomCliente+' '+apCliente+' '+telCliente);
		
		var oCliente = new Cliente(dniCliente,nomCliente,apCliente,telCliente);
		
		sMensaje = cvCoches.altaCliente(oCliente);
        //altaCliente();
	//}

	alert(sMensaje);
	ocultarFormularios();
	}
}

function mostrarRegistrarCompra(){
	ocultarFormularios();
	var formRegCompra = document.getElementById("formRegCompra");

	formRegCompra.reset();
	rellenarCombosCompra();
	var inputsAltaReg = formRegCompra.querySelectorAll('input');
	for (var i = 0; i<inputsAltaReg.length; i++)
		inputsAltaReg[i].classList.remove('error');
	formRegCompra.style.display="block";

}

//-------FUNCION REGISTRAR COMPRA--------

function enviarCompra()
{
	if (validarCompra()) 
	{
		var formRegCompra= document.getElementById("formRegCompra");
		var sMensaje = "";
		
		var selectCompraVehiculo= formRegCompra.selectCompraVehiculo.value.trim();
		var importeCompraVehiculo= formRegCompra.importeCompraVehiculo.value.trim();
		var fechaCompraVehiculo= formRegCompra.fechaCompraVehiculo.value.trim();
		var selectCompraProv= formRegCompra.selectCompraProv.value.trim();
		var selectCompraEmp= formRegCompra.selectCompraEmp.value.trim();
		var observCompraVehiculo= formRegCompra.observCompraVehiculo.value.trim();
		
		var oCompra = new Compra(selectCompraVehiculo,importeCompraVehiculo,fechaCompraVehiculo,selectCompraProv,selectCompraEmp,observCompraVehiculo);
		
		sMensaje = cvCoches.altaCompra(oCompra);
        

	alert(sMensaje);
	ocultarFormularios();
	}
		
	
}



function mostrarRegistrarVenta(){
	ocultarFormularios();
	var formRegVenta = document.getElementById("formRegVenta");

	formRegVenta.reset();
	rellenarCombosVenta();
	formRegVenta.style.display="block";
}




//-------FUNCION REGISTRAR VENTA-------

function enviarVenta()
{

}

//-------FUNCION REGISTRAR REPARACION-------
function mostrarRegistrarRep(){
	ocultarFormularios();
	rellenarCombosReparacion();
	var formRegRep = document.getElementById("formRegReparacion");
	formRegReparacion.costeRepVehiculo.classList.remove('error');
	formRegRep.reset();
	formRegRep.style.display = "block";
}

function enviarReparacion()
{
	var nCoste = formRegReparacion.costeRepVehiculo.value.trim();
	formRegReparacion.costeRepVehiculo.value = formRegReparacion.costeRepVehiculo.value.trim();
	var sMensaje = '';
	
	if (nCoste=='') 
	{
		formRegReparacion.costeRepVehiculo.classList.add('error');
		formRegReparacion.costeRepVehiculo.focus();
		sMensaje = 'Debe introducir coste de la reparacion.';
	}
	else
	{
		formRegReparacion.costeRepVehiculo.classList.remove('error');
	}
	alert(sMensaje);
}

//MOSTRAR LISTADOS
function mostrarListaProv(){
	ocultarFormularios();
	var oDivListados = document.getElementById("listas");
	var oTablaAntigua = document.getElementById("tabla");
	if (oTablaAntigua !== null){
		oDivListados.removeChild(oTablaAntigua);
	}
	oDivListados.style.display = "block";
	//oDivListados.innerHTML = cvCoches._proveedores[0].toHTMLRow();

	var tabla = document.createElement("table");
	tabla.setAttribute("border","1");
	tabla.setAttribute("id","tabla");
	
	var thCif = document.createElement("th");
	var thNom = document.createElement("th");
	var thDir = document.createElement("th");
	var thTel = document.createElement("th");
	
	



	var textnode = document.createTextNode("CIF");
	thCif.appendChild(textnode);
	tabla.appendChild(thCif);


	var textnode = document.createTextNode("Nombre");
	thNom.appendChild(textnode);
	tabla.appendChild(thNom);

	var textnode = document.createTextNode("Dirección");
	thDir.appendChild(textnode);
	tabla.appendChild(thDir);

	var textnode = document.createTextNode("Teléfono");
	thTel.appendChild(textnode);
	tabla.appendChild(thTel);



	for(var i=0;i<cvCoches._proveedores.length;i++){

	var tr = document.createElement("tr");
	var tdCif = document.createElement("td");
	var tdNom = document.createElement("td");
	var tdDir = document.createElement("td");
	var tdTel = document.createElement("td");
	
	textnode = document.createTextNode(cvCoches._proveedores[i].cif);
	tdCif.appendChild(textnode);
	
	textnode = document.createTextNode(cvCoches._proveedores[i].nombre);
	tdNom.appendChild(textnode);

	textnode = document.createTextNode(cvCoches._proveedores[i].direccion);
	tdDir.appendChild(textnode);

	textnode = document.createTextNode(cvCoches._proveedores[i].telefono);
	tdTel.appendChild(textnode);

	tr.appendChild(tdCif);
	tr.appendChild(tdNom);
	tr.appendChild(tdDir);
	tr.appendChild(tdTel);
	
	tabla.appendChild(tr);
	
	}
	oDivListados.appendChild(tabla);


}



//OCULTAR FORMULARIOS

function ocultarFormularios(){
	document.getElementById("formAltaProv").style.display = "none";
	document.getElementById("formAltaEmpleado").style.display = "none";
	document.getElementById("formAltaVeh").style.display = "none";
	document.getElementById("formAltaCli").style.display = "none";
	document.getElementById("formRegCompra").style.display = "none";
	document.getElementById("formRegVenta").style.display = "none";
	document.getElementById("formRegReparacion").style.display = "none";
	//Ocultar listas
	document.getElementById("listas").style.display = "none";
}

var oBtnTipoCoche= document.getElementById("radioCoche");
oBtnTipoCoche.addEventListener("click",mostrarTipoCoche,false);

var oBtnTipoCamion= document.getElementById("radioCamion");
oBtnTipoCamion.addEventListener("click",mostrarTipoCamion,false);

function mostrarTipoCoche(){
	document.getElementById("tipoCamion").style.display = "none";
	document.getElementById("tipoCoche").style.display = "block";

}

function mostrarTipoCamion(){
	document.getElementById("tipoCoche").style.display = "none";
	document.getElementById("tipoCamion").style.display = "block";

}

//FUNCIONES PARA RELLENAR COMBOS
function rellenarCombosCompra(){
	var formRegCompra = document.getElementById("formRegCompra");
	var selectCompraProv = document.getElementById("selectCompraProv");
	

	//Combo proveedores
	if (cvCoches._proveedores.length==0){
		for (var k=0;k<selectCompraProv.length;k++){
			selectCompraProv.remove(k);
		}
		var optionProv = document.createElement("option");
		var textnode = document.createTextNode("No hay proveedores dados de alta");
		optionProv.appendChild(textnode);
		optionProv = selectCompraProv.appendChild(optionProv);
		//formRegCompra.appendChild(option);
		//formRegCompra.selectCompraProv.innerHTML = '<option>No hay proveedores dados de alta</option>';
	} else {
		for (var k=0;k<selectCompraProv.length;k++){
			selectCompraProv.remove(k);
		}
		for (var i=0;i<cvCoches._proveedores.length;i++){
			var optionProv = document.createElement("option");
			optionProv.setAttribute("value",cvCoches._proveedores[i].cif)
			optionProv.setAttribute("id","comboProv")
			var textnode = document.createTextNode( cvCoches._proveedores[i].cif+' - '+cvCoches._proveedores[i].nombre);
			optionProv.appendChild(textnode);
			optionProv = selectCompraProv.appendChild(optionProv);
		
		}
	}

	//Combo empleados
	var selectCompraEmp = document.getElementById("selectCompraEmp");
	if (cvCoches._empleados.length==0){
		for (var k=0;k<selectCompraEmp.length;k++){
			selectCompraEmp.remove(k);
		}
		var optionEmp = document.createElement("option");
		var textnode = document.createTextNode("No hay proveedores dados de alta");
		optionEmp.appendChild(textnode);
		optionEmp = selectCompraEmp.appendChild(optionEmp);

	} else {

		for (var k=0;k<selectCompraEmp.length;k++){
			selectCompraEmp.remove(k);
		}

		
		for (var i=0;i<cvCoches._empleados.length;i++){
			

			var optionEmp = document.createElement("option");
			optionEmp.setAttribute("value",cvCoches._empleados[i].dni)
			optionEmp.setAttribute("id","comboEmp")
			var textnode = document.createTextNode(cvCoches._empleados[i].dni+' - '+cvCoches._empleados[i].nombre+' '+cvCoches._empleados[i].apellidos);
			optionEmp.appendChild(textnode);
			optionEmp = formRegCompra.selectCompraEmp.appendChild(optionEmp);


		
		}
	}

	//Combo Vehiculo


	if (cvCoches._vehiculos.length==0){

		for (var k=0;k<formRegCompra.selectCompraVehiculo.length;k++){
			formRegCompra.selectCompraVehiculo.remove(k);
		}
		var optionVeh = document.createElement("option");
		var textnode = document.createTextNode("No hay proveedores dados de alta");
		optionVeh.appendChild(textnode);
		optionVeh = formRegCompra.selectCompraVehiculo.appendChild(optionVeh);


		
	} else {
		for (var k=0;k<selectCompraVehiculo.length;k++){
			selectCompraVehiculo.remove(k);
		}

		
		for (var i=0;i<cvCoches._vehiculos.length;i++){

			var optionVeh = document.createElement("option");
			optionVeh.setAttribute("value",cvCoches._vehiculos[i].matricula)
			optionVeh.setAttribute("id","comboVeh")
			var textnode = document.createTextNode(cvCoches._vehiculos[i].matricula+' - '+cvCoches._vehiculos[i].marca+' '+cvCoches._vehiculos[i].modelo);
			optionVeh.appendChild(textnode);
			optionVeh = formRegCompra.selectCompraVehiculo.appendChild(optionVeh);





		//formRegCompra.selectCompraVehiculo.innerHTML += '<option value="'+cvCoches._vehiculos[i].matricula+'">'++'</option>';

		
		}
	}	
}

function rellenarCombosVenta(){
	var formRegVenta = document.getElementById("formRegVenta");

	//Combo clientes
	if (cvCoches._clientes.length==0){
		formRegVenta.selectVentaCliente.innerHTML = '<option>No hay clientes dados de alta</option>';
	} else {
		formRegVenta.selectVentaCliente.innerHTML = '';
		for (var i=0;i<cvCoches._clientes.length;i++){
		formRegVenta.selectVentaCliente.innerHTML += '<option value="'+cvCoches._clientes[i].dni+'">'+cvCoches._clientes[i].dni+' - '+cvCoches._clientes[i].nombre+' '+cvCoches._clientes[i].apellidos+'</option>';

		
		}
	}

	//Combo empleados
	if (cvCoches._empleados.length==0){
		formRegVenta.selectVentaEmp.innerHTML = '<option>No hay empleados dados de alta</option>';
	} else {
		formRegVenta.selectVentaEmp.innerHTML = '';
		for (var i=0;i<cvCoches._empleados.length;i++){
		formRegVenta.selectVentaEmp.innerHTML += '<option value="'+cvCoches._empleados[i].dni+'">'+cvCoches._empleados[i].dni+' - '+cvCoches._empleados[i].nombre+' '+cvCoches._empleados[i].apellidos+'</option>';

		
		}
	}

	//Combo Vehiculo
	if (cvCoches._vehiculos.length==0){
		formRegVenta.selectVentaVehiculo.innerHTML = '<option>No hay vehiculos dados de alta</option>';
	} else {
		formRegVenta.selectVentaVehiculo.innerHTML = '';
		for (var i=0;i<cvCoches._vehiculos.length;i++){
		formRegVenta.selectVentaVehiculo.innerHTML += '<option value="'+cvCoches._vehiculos[i].matricula+'">'+cvCoches._vehiculos[i].matricula+' - '+cvCoches._vehiculos[i].marca+' '+cvCoches._vehiculos[i].modelo+'</option>';

		
		}
	}
}

function rellenarCombosReparacion(){
	var formRegRep = document.getElementById("formRegReparacion");

	//Combo Vehiculo
	if (cvCoches._vehiculos.length==0){
		formRegRep.selectRepVehiculo.innerHTML = '<option>No hay vehiculos dados de alta</option>';
	} else {
		formRegRep.selectRepVehiculo.innerHTML = '';
		for (var i=0;i<cvCoches._vehiculos.length;i++){
		formRegRep.selectVentaVehiculo.innerHTML += '<option value="'+cvCoches._vehiculos[i].matricula+'">'+cvCoches._vehiculos[i].matricula+' - '+cvCoches._vehiculos[i].marca+' '+cvCoches._vehiculos[i].modelo+'</option>';

		
		}
	}
}

//--------------VALIDACION----------------------

//validacion formulario alta proveedor
function validarAltaProv()
{

	var bValido = true;
	var sError = "";

	//campo cif
	var sCif = formAltaProv.cifProv.value.trim();
	formAltaProv.cifProv.value = formAltaProv.cifProv.value.trim();
	var oExpReg = /^[a-zA-Z]\d{8}$/i;

	if (oExpReg.test(sCif) == false)
	{
		formAltaProv.cifProv.classList.add("error");
		formAltaProv.cifProv.focus();
		bValido = false;
		sError = "El CIF tiene que tener una letra y 8 numeros \n"; 
	} else {
		formAltaProv.cifProv.classList.remove("error");
	}

	//campo nombre
	var sNombre = formAltaProv.nomProv.value.trim();
	formAltaProv.nomProv.value = formAltaProv.nomProv.value.trim();
	var oExpReg = /^[a-zA-Z\s]{1,40}$/i;

	if (oExpReg.test(sNombre) == false)
	{
		formAltaProv.nomProv.classList.add("error");
		formAltaProv.nomProv.focus();
		bValido = false;
		sError += "Escriba un nombre \n"; 
	} else {
		formAltaProv.nomProv.classList.remove("error");
	}

	//campo direccion
	var sDireccion = formAltaProv.dirProv.value.trim();
	formAltaProv.dirProv.value = formAltaProv.dirProv.value.trim();
	oExpReg = /^[\w\s]{1,40}$/i;

	if (oExpReg.test(sDireccion) == false)
	{
		formAltaProv.dirProv.classList.add("error");
		formAltaProv.dirProv.focus();
		bValido = false;
		sError += "Debe escribir una direccion. Ejemplo: Calle Arroz 6 \n"; 
	} else {
		formAltaProv.dirProv.classList.remove("error");
	}


	//campo telefono
	var nTelefono = formAltaProv.telProv.value.trim();
	formAltaProv.telProv.value = formAltaProv.telProv.value.trim();
	var oExpReg = /^[6|7][0-9]{8}$/;

	if (oExpReg.test(nTelefono) == false)
	{
		formAltaProv.telProv.classList.add("error");
		formAltaProv.telProv.focus();
		bValido = false;
		sError += "El telefono tiene que empezar por 6 o 7 y tiene que tener 9 cifras \n"; 
	} else {
		formAltaProv.telProv.classList.remove("error");
	}

	if (bValido == false) 
	{
		alert(sError);
		
		return false;
	} else {
		return true;
	}
}

//validacion formulario alta empleado
function validarAltaEmpleado(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo dni
	var sDNI = formAltaEmpleado.dniEmp.value.trim();
	formAltaEmpleado.dniEmp.value = formAltaEmpleado.dniEmp.value.trim();
	oExpReg = /^\d{8}[a-zA-Z]$/i;

	if (oExpReg.test(sDNI)==false) 
	{
		formAltaEmpleado.dniEmp.classList.add('error');
		formAltaEmpleado.dniEmp.focus();
		bValido = false;
		sError = 'El dni tiene que tener 8 cifras y una letra \n';
	}
	else
		formAltaEmpleado.dniEmp.classList.remove('error');

	//campo nombre
	var sNombre = formAltaEmpleado.nomEmp.value.trim();
	formAltaEmpleado.nomEmp.value = formAltaEmpleado.nomEmp.value.trim();
	var oExpReg = /^[a-zA-Z\s]{1,40}$/i;

	if (oExpReg.test(sNombre) == false)
	{
		formAltaEmpleado.nomEmp.classList.add("error");
		formAltaEmpleado.nomEmp.focus();
		bValido = false;
		sError += "Escriba un nombre \n"; 
	} else {
		formAltaEmpleado.nomEmp.classList.remove("error");
	}

	//campo apellido
	var sApellidos = formAltaEmpleado.apeEmp.value.trim();
	formAltaEmpleado.apeEmp.value = formAltaEmpleado.apeEmp.value.trim();
	var oExpReg = /^[a-zA-Z\s]{1,40}$/i;

	if (oExpReg.test(sNombre) == false)
	{
		formAltaEmpleado.apeEmp.classList.add("error");
		formAltaEmpleado.apeEmp.focus();
		bValido = false;
		sError += "Escriba los apellidos \n"; 
	} else {
		formAltaEmpleado.apeEmp.classList.remove("error");
	}

	//campo nº de ventas
	var nVentas = formAltaEmpleado.ventasEmp.value.trim();
	formAltaEmpleado.ventasEmp.value = formAltaEmpleado.ventasEmp.value.trim();
	var oExpReg = /^\d+$/;

	if (oExpReg.test(nVentas) == false)
	{
		formAltaEmpleado.ventasEmp.classList.add("error");
		formAltaEmpleado.ventasEmp.focus();
		bValido = false;
		sError += "Introduzca numero de ventas \n"; 
	} else {
		formAltaEmpleado.ventasEmp.classList.remove("error");
	}

	//campo salario 
	var nSalario = formAltaEmpleado.salEmp.value.trim();
	formAltaEmpleado.salEmp.value = formAltaEmpleado.salEmp.value.trim();
	var oExpReg = /^\d{1,5}$/;

	if (oExpReg.test(nSalario) == false)
	{
		formAltaEmpleado.salEmp.classList.add("error");
		formAltaEmpleado.salEmp.focus();
		bValido = false;
		sError += "Introduzca el salario \n"; 
	} else {
		formAltaEmpleado.salEmp.classList.remove("error");
	}


	if (bValido == false) 
	{
		alert(sError);
		//oE.preventDefault();
		return false;
	} else {
		return true;
	}
}

//validacion formulario alta coche
function validarAltaVeh(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo matricula
	var sMatricula = formAltaVeh.matVehiculo.value.trim();
	formAltaVeh.matVehiculo.value = formAltaVeh.matVehiculo.value.trim();
	var oExpReg = /^\d{4}[BCDFGHJK][BCDFGHJKLMNÑPQRSTVWYZ]{2}$/i;

	if (oExpReg.test(sMatricula)==false) 
	{
		formAltaVeh.matVehiculo.classList.add('error');
		formAltaVeh.matVehiculo.focus();
		bValido = false;
		sError = 'Matricula incorrecta. Debe ser 4 numeros y 3 letras. Esta basado en el formato actual (Empezando por la letra B). Ejemplo : 2341KJD \n';
	}
	else
		formAltaVeh.matVehiculo.classList.remove('error');

	//campo marca
	var sMarca = formAltaVeh.marcaVehiculo.value.trim();
	formAltaVeh.marcaVehiculo.value = formAltaVeh.marcaVehiculo.value.trim();
	var oExpReg = /^\D{2,40}$/i;

	if (oExpReg.test(sMarca)==false) 
	{
		formAltaVeh.marcaVehiculo.classList.add('error');
		formAltaVeh.marcaVehiculo.focus();
		bValido = false;
		sError += 'Introduzca una marca \n';
	}
	else
		formAltaVeh.marcaVehiculo.classList.remove('error');

	//campo modelo
	var sModelo = formAltaVeh.modVehiculo.value.trim();
	formAltaVeh.modVehiculo.value = formAltaVeh.modVehiculo.value.trim();
	var oExpReg = /^\w{2,40}$/i;

	if (oExpReg.test(sModelo)==false) 
	{
		formAltaVeh.modVehiculo.classList.add('error');
		formAltaVeh.modVehiculo.focus();
		bValido = false;
		sError += 'Introduzca un modelo \n';
	}
	else
		formAltaVeh.modVehiculo.classList.remove('error');

	//campo tasasion
	var nTasasion = formAltaVeh.tasVehiculo.value.trim();
	formAltaVeh.tasVehiculo.value = formAltaVeh.tasVehiculo.value.trim();
	var oExpReg = /^\d{1,6}$/;

	if (oExpReg.test(nTasasion)==false) 
	{
		formAltaVeh.tasVehiculo.classList.add('error');
		formAltaVeh.tasVehiculo.focus();
		bValido = false;
		sError += 'Debe introducir una cantidad valida \n';
	}
	else
		formAltaVeh.tasVehiculo.classList.remove('error');

	//campo combustible
	var sCombustible = formAltaVeh.combVehiculo.value.trim();
	formAltaVeh.combVehiculo.value = formAltaVeh.combVehiculo.value.trim();
	var oExpReg = /(\W|^)(Diesel|Gasolina|diesel|gasolina|DIESEL|GASOLINA)(\W|$)/;

	if (oExpReg.test(sCombustible)==false) 
	{
		formAltaVeh.combVehiculo.classList.add('error');
		formAltaVeh.combVehiculo.focus();
		bValido = false;
		sError += 'El combustible solo puede ser Diesel o Gasolina \n';
	}
	else
		formAltaVeh.combVehiculo.classList.remove('error');

	//campo plazas
	var nPlazas = formAltaVeh.plazasVehiculo.value.trim();
	formAltaVeh.plazasVehiculo.value = formAltaVeh.plazasVehiculo.value.trim();
	var oExpReg = /^[2|4|5|7|8]$/;

	if (oExpReg.test(nPlazas)==false) 
	{
		formAltaVeh.plazasVehiculo.classList.add('error');
		formAltaVeh.plazasVehiculo.focus();
		bValido = false;
		sError += 'Los vehiculos pueden tener 2,4,5,6,7 o 8 plazas \n';
	}
	else
		formAltaVeh.plazasVehiculo.classList.remove('error');

	//campo input
	var inputs = formAltaVeh.querySelectorAll('input[type=radio]');
	var contador = 0;
	var tipo = '';
	for(var i = 0; i<inputs.length; i++)
	{
		if (inputs[i].checked)
		{
			contador++;
			if (inputs[i].value=='coche') 
				tipo='coche' ;
			else
				tipo='camion';
		}
	}

	if (contador==0) 
	{
		formAltaVeh.querySelector('.radio').classList.add('error');
		bValido=false;
		sError += 'Debe elegir un tipo de vehiculo \n';
	}
	else
	{
		formAltaVeh.querySelector('.radio').classList.remove('error');
		//vehiculo tipo coche
		if (tipo=='coche') 
		{
			//campo numero puertas
			var nPuertas = formAltaVeh.nPuertasCoche.value.trim();
			formAltaVeh.nPuertasCoche.value = formAltaVeh.nPuertasCoche.value.trim();
			var oExpReg = /^[3|5]$/;

			if (oExpReg.test(nPuertas)==false) 
			{
				formAltaVeh.nPuertasCoche.classList.add('error');
				formAltaVeh.nPuertasCoche.focus();
				bValido = false;
				sError += 'Los vehiculos pueden 3 o 5 puertas \n';
			}
			else
				formAltaVeh.nPuertasCoche.classList.remove('error');	

			//campo tapiceria 
			var sTapiceria = formAltaVeh.tapiceriaCoche.value.trim();
			formAltaVeh.tapiceriaCoche.value = formAltaVeh.tapiceriaCoche.value.trim();
			var oExpReg = /(\W|^)(Cuero|Tela|Vinilo|cuero|tela|vinilo|CUERO|TELA|VINILO)(\W|$)/;

			if (oExpReg.test(sTapiceria)==false) 
			{
				formAltaVeh.tapiceriaCoche.classList.add('error');
				formAltaVeh.tapiceriaCoche.focus();
				bValido = false;
				sError += 'La tapiceria puede ser cuero, tela y vinilo \n';
			}
			else
				formAltaVeh.tapiceriaCoche.classList.remove('error');


			//campo tipo coche 
			var sTipoCoche = formAltaVeh.tpCoche.value.trim();
			formAltaVeh.tpCoche.value = formAltaVeh.tpCoche.value.trim();
			var oExpReg = /(\W|^)(Turismo|Todoterreno|Monovolumen|Furgoneta|Berlina|turismo|todoterreno|monovolumen|furgoneta|berlina|TURISMO|TODOTERRENO|MONOVOLUMEN|FURGONETA|BERLINA)(\W|$)/;

			if (oExpReg.test(sTipoCoche)==false) 
			{
				formAltaVeh.tpCoche.classList.add('error');
				formAltaVeh.tpCoche.focus();
				bValido = false;
				sError += 'El tipo puede ser turismo, todoterreno, monovolumen, furgoneta y berlina \n';
			}
			else
				formAltaVeh.tpCoche.classList.remove('error');

		}

		//vehiculo tipo camion
		else
		{
			//campo carga maxima 
			var nCargaMax = formAltaVeh.cargaCamion.value.trim();
			formAltaVeh.cargaCamion.value = formAltaVeh.cargaCamion.value.trim();
			var oExpReg = /^\d{1,5}$/;

			if (oExpReg.test(nCargaMax)==false) 
			{
				formAltaVeh.cargaCamion.classList.add('error');
				formAltaVeh.cargaCamion.focus();
				bValido = false;
				sError += 'Debe introducir una cantidad \n';
			}
			else
				formAltaVeh.cargaCamion.classList.remove('error');

			//campo tipo carga 
			var sTipoCarga = formAltaVeh.tipoCargaCamion.value.trim();
			formAltaVeh.tipoCargaCamion.value = formAltaVeh.tipoCargaCamion.value.trim();
			var oExpReg = /(\W|^)(Valiosa|Refrigerada|Peligrosa|Granel|Remolque|valiosa|refrigerada|peligrosa|granel|remolque|VALIOSA|REFRIGERADA|PELIGROSA|GRANEL|REMOLQUE)(\W|$)/;

			if (oExpReg.test(sTipoCarga)==false) 
			{
				formAltaVeh.tipoCargaCamion.classList.add('error');
				formAltaVeh.tipoCargaCamion.focus();
				bValido = false;
				sError += 'La carga puede ser valiosa, refrigerada, peligrosa, granel o remolque \n';
			}
			else
				formAltaVeh.tipoCargaCamion.classList.remove('error');

			//campo capacidad combustible 
			var nCapComb = formAltaVeh.capCombCamion.value.trim();
			formAltaVeh.capCombCamion.value = formAltaVeh.capCombCamion.value.trim();
			var oExpReg = /(\d|^)(500|1000|1500)(\d|$)/;

			if (oExpReg.test(nCapComb)==false) 
			{
				formAltaVeh.capCombCamion.classList.add('error');
				formAltaVeh.capCombCamion.focus();
				bValido = false;
				sError += 'La capacidad del combustible puede ser de 500, 1000 y 1500 \n';
			}
			else
				formAltaVeh.capCombCamion.classList.remove('error');
		}
		
	}

	if (bValido == false) 
	{
		alert(sError);
		//oE.preventDefault();
		return false;
	}
	else
		return true;		
}

 function validarAltaCli(oEvento)
 {
 	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo dni
	var nDNI = formAltaCli.dniCliente.value.trim();
	formAltaCli.dniCliente.value = formAltaCli.dniCliente.value.trim();
	var oExpReg = /^\d{8}[a-zA-Z]$/;

	if (oExpReg.test(nDNI)==false) 
	{
		formAltaCli.dniCliente.classList.add('error');
		formAltaCli.dniCliente.focus();
		bValido = false;
		sError = 'El DNI tiene que tener 8 cifras y una letra \n';
	}
	else
		formAltaCli.dniCliente.classList.remove('error');

	//campo nombre
	var sNombre = formAltaCli.nomCliente.value.trim();
	formAltaCli.nomCliente.value = formAltaCli.nomCliente.value.trim();
	var oExpReg = /^[a-zA-Z\s]{1,40}$/;

	if (oExpReg.test(sNombre)==false) 
	{
		formAltaCli.nomCliente.classList.add('error');
		formAltaCli.nomCliente.focus();
		bValido = false;
		sError += 'Escriba un nombre \n';
	}
	else
		formAltaCli.nomCliente.classList.remove('error');

	//campo apellidos
	var sApellidos = formAltaCli.apCliente.value.trim();
	formAltaCli.apCliente.value = formAltaCli.apCliente.value.trim();
	var oExpReg = /^[a-zA-Z\s]{6,40}$/;

	if (oExpReg.test(sApellidos)==false) 
	{
		formAltaCli.apCliente.classList.add('error');
		formAltaCli.apCliente.focus();
		bValido = false;
		sError += 'Escriba los apellidos \n';
	}
	else
		formAltaCli.apCliente.classList.remove('error');

	//campo telefono
	var nTelefono = formAltaCli.telCliente.value.trim();
	formAltaCli.telCliente.value = formAltaCli.telCliente.value.trim();
	var oExpReg = /^[6|7]\d{8}$/;

	if (oExpReg.test(nTelefono)==false) 
	{
		formAltaCli.telCliente.classList.add('error');
		formAltaCli.telCliente.focus();
		bValido = false;
		sError += 'El telefono tiene que tener 9 digitos y debe empezar por 6 o 7 \n';
	}
	else
		formAltaCli.telCliente.classList.remove('error');


	if (bValido == false) 
	{
		alert(sError);
		//oE.preventDefault();
		return false;
	}
	else
		return true;	
 }

function validarCompra(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo importe
	var nImporte = formRegCompra.importeCompraVehiculo.value.trim();
	formRegCompra.importeCompraVehiculo.value= formRegCompra.importeCompraVehiculo.value.trim();
	var oExpReg = /^\d{1,6}$/i;

	if (oExpReg.test(nImporte)==false) 
	{
		formRegCompra.importeCompraVehiculo.classList.add('error');
		formRegCompra.importeCompraVehiculo.focus();
		bValido=false;
		sError = 'Debe introducir un importe.\n';
	}
	else
		formRegCompra.importeCompraVehiculo.classList.remove('error');

	//campo fecha
	var dFecha = formRegCompra.fechaCompraVehiculo.value.trim();
	formRegCompra.fechaCompraVehiculo.value= formRegCompra.fechaCompraVehiculo.value.trim();
	var oExpReg = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/i;

	if (oExpReg.test(dFecha)==false) 
	{
		formRegCompra.fechaCompraVehiculo.classList.add('error');
		formRegCompra.fechaCompraVehiculo.focus();
		bValido=false;
		sError += 'Debe introducir una fecha. Por ejemplo: 01/01/2018.\n';
	}
	else
		formRegCompra.fechaCompraVehiculo.classList.remove('error');

	if (bValido == false) 
	{
		alert(sError);
		return false;
	}
	else
		return true;
}


/*plantilla validaciones
function validarAltaVeh(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	if (bValido == false) 
	{
		alert(sError);
		oE.preventDefault();
	}	
}*/