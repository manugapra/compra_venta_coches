<?php

if(isset($_POST["m"])){
    extract($_POST);

    //ALTA PROVEEDOR
    if($m=="proveedor"){
        $resultado=insert("INSERT INTO proveedor (cif, nombre, direccion, telefono) VALUES ('$c','$n','$d',$t)");
        
        if($resultado==""){
            //Si no ha devuelto error
            echo '<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Proveedor dado de alta correctamente</div>';
        } else if ($resultado!=""){
            //si ha devuelto error
            $errores = explode (" ", $resultado); //separa el mensaje de error para detectar el error
            if ($errores[0]=="Duplicate"){
                //en caso de entrada duplicada
                echo '<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Ya existe un proveedor dado de alta con ese CIF</div>';
            } else {
                //otro error no indicado
                echo '<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Ha ocurrido un error.</div>';
            }
        }
    }


    //ALTA EMPLEADO
    if($m=="empleado"){
        $resultado=insert("INSERT INTO empleados (dni, nombre, apellidos, num_ventas, salario) VALUES ('$d','$n','$a',0,$s)");
        if($resultado==""){
            echo '<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Empleado dado de alta correctamente</div>';
        } else if ($resultado!=""){
            
            $errores = explode (" ", $resultado);
            if ($errores[0]=="Duplicate"){
                echo '<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Ya existe un empleado dado de alta con ese DNI</div>';
            } else {
                echo '<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Ha ocurrido un error.</div>';
            }
        }
      
    }
}


     function insert($consulta){

        $mysqli = new mysqli("localhost", "root", "", "coches");
      
      
      
      /* comprobar la conexión */
      
      if (mysqli_connect_errno()) {
      
      printf("Falló la conexión: %s\n", mysqli_connect_error());
      
      exit();
      
      }
      
      $mysqli->query($consulta);
      
        
        return mysqli_error($mysqli);
      
      
      
      $mysqli->close();
      
      }

   


   
      
?>