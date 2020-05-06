function onload_password_generate() {
    var e = "&U_case=ON&L_case=ON&S_chars=OFF&Num_value=ON&slider_range=12&lazy_words=run";
    return $.ajax({
        type: "GET",
        url: "/password_generator.html",
        data: e,
        success: function (e) {
            var t = e.password;
            document.getElementById("password").innerHTML = t
        }
    }), !1
}

function password_generate() {
    var e = document.getElementById("myRange").value;
    var lazy_words = document.getElementById("lazy_words_text").value;

    if (document.getElementById("U_case").checked) var t = "ON";
    else t = "OFF";
    if (document.getElementById("L_case").checked) var a = "ON";
    else a = "OFF";
    if (document.getElementById("S_chars").checked) var n = "ON";
    else n = "OFF";
    if (document.getElementById("Num_value").checked) var c = "ON";
    else c = "OFF";
    var d = "&U_case=" + t + "&L_case=" + a + "&S_chars=" + n + "&Num_value=" + c + "&slider_range=" + e + "&lazy_words=" + lazy_words;
    return $.ajax({
        type: "GET",
        url: "/password_generator.html",
        data: d,
        success: function (e) {
            var t = e.password;
            
            if( lazy_words ) {
                var word_a = e.word_list;
                word_a.length = 4;
                document.getElementById("lazy_words_suggestion").innerHTML = word_a + "...";
                var x = document.getElementById("lazy_words_suggestion_p");
                x.style.display = "block";
            } else {
                var x = document.getElementById("lazy_words_suggestion_p");
                x.style.display = "none";
            }
            document.getElementById("password").innerHTML = t;
            
        }
    }), !1
}

function copyToClipboard() {
    var e = document.createElement("textarea");
    e.style.opacity = "0", e.style.position = "fixed", e.textContent = document.getElementById("password").innerText;
    var t = document.getElementsByTagName("body")[0];
    t.appendChild(e), e.select(), document.execCommand("copy"), t.removeChild(e), $("#show_copied").show(), setTimeout(function () {
        $("#show_copied").hide()
    }, 1e3)
}

function disableOnlyCheckbox() {
    let e = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(e => e.checked);
    e.forEach(t => {
        1 == e.length ? t.disabled = !0 : t.disabled = !1
    })
}
const uppercaseEl = document.getElementById("U_case"),
    lowercaseEl = document.getElementById("L_case"),
    numberEl = document.getElementById("Num_value"),
    symbolEl = document.getElementById("S_chars");
[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach(e => {
    e.addEventListener("click", () => {
        disableOnlyCheckbox()
    })
}), $(document).ready(function () {
    $("#slow_loading").hide(), $("#slow_loading").delay(200).fadeIn(100)
});

document.getElementById("lazy_words_text").parentNode.addEventListener("keydown", check_key, false);

function check_key(e) {
    if (e.keyCode == 32) {
        alert("Only singe word is supported!");
    }
    if (e.keyCode == 13) {
        password_generate();
    }
}





function addToPlaceholder(toAdd, el) {
    el.attr('placeholder', el.attr('placeholder') + toAdd);
    // Delay between symbols "typing" 
    return new Promise(resolve => setTimeout(resolve, 100));
}

// Cleare placeholder attribute in given element
function clearPlaceholder(el) {
    el.attr("placeholder", "");
}

// Print one phrase
function printPhrase(phrase, el) {
    return new Promise(resolve => {
        // Clear placeholder before typing next phrase
        clearPlaceholder(el);
        let letters = phrase.split('');
        // For each letter in phrase
        letters.reduce(
            (promise, letter, index) => promise.then(_ => {
                // Resolve promise when all letters are typed
                if (index === letters.length - 1) {
                    // Delay before start next phrase "typing"
                    setTimeout(resolve, 1000);
                }
                return addToPlaceholder(letter, el);
            }),
            Promise.resolve()
        );
    });
} 

// Print given phrases to element
function printPhrases(phrases, el) {
    // For each phrase
    // wait for phrase to be typed
    // before start typing next
    phrases.reduce(
        (promise, phrase) => promise.then(_ => printPhrase(phrase, el)), 
        Promise.resolve()
    );
}

// Start typing
function run() {
    let phrases = [
        "Generate password based on word!!!",
        "Type Word e.g. \"Flower\""
        
    ];

    printPhrases(phrases, $('#lazy_words_text'));
}

run();

var slider = document.getElementById("myRange");
var output = document.getElementById("myRange-display");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
}

onload_password_generate();