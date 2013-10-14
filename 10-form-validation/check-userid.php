<?php
$ids = array(
	'agent_smith',
	'apoc',
	'cypher',
	'dozer',
	'morpheus',
	'mouse',
	'neo',
	'oracle',
	'switch',
	'tank',
	'trinity'
);
if (isset($_REQUEST['userid'])) {
	$userid = $_REQUEST['userid'];
	$result = array('userid' => $userid, 'found' => in_array($userid, $ids));
	
	header('Content-Type', 'application/json');
	echo json_encode($result);
}
?>