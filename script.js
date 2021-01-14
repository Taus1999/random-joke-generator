document.getElementById('get_jokes').addEventListener('click', loadJokes);

function loadJokes(e) {
    let number = document.getElementById('input').value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function() {
        document.getElementById('output').innerHTML = `<h4>Loading......</h4>`;
    }

    xhr.onload = function() {
      if(this.status === 200) {
        let data = JSON.parse(this.responseText);
        let jokes = data.value;
        let output = "<ol>";
        jokes.forEach(function(item) {
            output += `<li>${item.joke}</li>` ;
            /* console.log(item.joke); */
        });
        output += "<ol>";

        document.getElementById('output').innerHTML = output;

      } 
        /* console.log(data); */
        
    }

    xhr.send();
}