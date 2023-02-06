function checkValid() {
    var input = document.getElementById("nhapngaysinh");
    if (input.value == "29/06/2004") {
        showImage('./assets/texts/tunganh.txt');
    } else if (input.value == "10/02/2004") {
        showImage("./assets/texts/daothanhdung.txt");
    } else {
        alert("Ngày sinh không chính xác!");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showImage(imgName) {

    jQuery.get('./assests/texts/daothanhdung.txt', async function(data) {
      
        var lines = data.split("/\r\n|\n/");
        
            for (var line = 0; line < lines.length; line++) {
            document.wirte(line[line]+"<br>") 
                await sleep(50);
            }
        }
    });
}

$("#nhapngaysinh").on('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        checkValid();
    }
});