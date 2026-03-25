document.getElementById("Execute").onclick = function() {
    
    let sentence = document.getElementById("sentence").value;

    
    let words = sentence
        .split(" ")
        .map(w => w.replace(/[^a-zA-Z0-9]/g, ""))
        .filter(w => w.length > 0);

    
    let total = words.length;

    
    let underlined = words.map(w => `<span class="word">${w}</span>`).join(" ");
    document.getElementById("words").innerHTML = underlined;

   
    document.getElementById("sent-count").value = total;
    document.getElementById("count").innerHTML = "Total words: " + total;};