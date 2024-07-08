const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
async function dict(b) {
    const response = await fetch(url + b);
    var data = await response.json()
    
    console.log(data)
    if (response.status == 404) {
        document.getElementById("hid").className = "hidden"
        document.getElementById("wrong").className = "none"
        }
        else {
            
        document.getElementById("showw").innerHTML = data[0].word
        document.getElementById("showm").innerHTML = data[0].meanings[0].definitions[0].definition
        document.getElementById("showm1").innerHTML = data[0].meanings[1].definitions[0].definition

        document.getElementById("showp").innerHTML = data[0].meanings[0].partOfSpeech
        document.getElementById("hid").className = "none"
        document.getElementById("wrong").className = "hidden"
        
      }
      
      }
      
      
      
     

function search() {
    const a = document.getElementById("word")

    if (a.value == '') {
        alert("entre something")
    }
    else {

        dict(a.value)
    }
    a.value = '';
}


