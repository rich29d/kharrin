<?php
	
	// Create connection
	$conn = new mysqli('mysql.richardds.com.br', 'richardds', 'gre423', 'richardds');
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
    
    $sql = "INSERT INTO tbl_ranking_kharrin (nome, dist, cor)
	VALUES ('" . $_POST['nome'] . "', '" . $_POST['dist'] . "', '" . $_POST['cor'] . "')";

	if ($conn->query($sql) === TRUE) {
	    $select_id = $conn->insert_id;
	    $sql = "SELECT * FROM tbl_ranking_kharrin ORDER BY dist DESC ";
		$result = $conn->query($sql);
		echo '{ "id": ' . $select_id . ', "ranking" : [';
		$num_rows = 0;
		while($ln = $result->fetch_assoc()){
			echo '{"id":' . $ln["id"] . ', "nome":"' . $ln["nome"] . '","dist":' . $ln["dist"] . ',"cor":"' . $ln["cor"] . '"}';
			if(++$num_rows != $result->num_rows) echo ',';	
		}
		echo '] }';

	} else {
	    echo '{ "id": "false", "ranking" : [] }';
	}


	/*$sql = "SELECT * FROM tbl_ranking_kharrin ORDER BY dist DESC ";
		$result = $conn->query($sql);
		while($ln = $result->fetch_assoc()){
			echo $ln["dist"] . "<br>";	
		}*/

	$conn->close();
?>