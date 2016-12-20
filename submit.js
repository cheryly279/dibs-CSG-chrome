function addTopic(e) {
    e.preventDefault();
    var topicName = document.getElementById('name').value;

    fetch('http://ec2-54-144-194-47.compute-1.amazonaws.com:8081/topic', {
    	method: 'POST',
        body: JSON.stringify({
            addedBy: 1,
    		name: document.getElementById('name').value,
    		description: document.getElementById('description').value
    	}),
    	headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    }).then(function(result) {
        document.getElementById('status').innerHTML = 'Topic ' + topicName + ' added successfully!<br /><br />';
    }).catch(function(err) {
        document.getElementById('status').innerHTML = 'Error: ' + err.message + '<br /><br />';
    });
}

window.addEventListener('load', function(evt) {
    document.getElementById('topic-form').addEventListener('submit', addTopic);
});
