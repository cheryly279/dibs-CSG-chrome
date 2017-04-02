function addTopic(e) {
    e.preventDefault();
    var topicName = document.getElementById('name').value;

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;

        fetch('http://localhost:8081/topic', {
        	method: 'POST',
            body: JSON.stringify({
                addedBy: 3,
        		name: document.getElementById('name').value,
        		description: document.getElementById('description').value,
                url: url
        	}),
        	headers: new Headers({
        		'Content-Type': 'application/json'
        	})
        }).then(function(result) {
            console.log(result);
            document.getElementById('status').innerHTML = 'Topic ' + topicName + ' added successfully!<br /><br />';
        }).catch(function(err) {
            document.getElementById('status').innerHTML = 'Error: ' + err.message + '<br /><br />';
        });
    });
}

window.addEventListener('load', function(evt) {
    document.getElementById('topic-form').addEventListener('submit', addTopic);
});
