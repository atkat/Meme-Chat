
var firstTime = true

$("#submit").on("click", function(event){
    event.preventDefault();

    var input = $("#input").val()

    // first interaction
    formatMessage( $("<p>").text(input).addClass("userMessage bubble") ) 

    // resets form  
    $("#field")[0].reset()   

    //scroll to bottom???
    scrollToBottom ()

    // first answer   
    if (firstTime===true && input=='no') {
        console.log(new Date().toString())
        formatMessage( $("<p>").addClass("botMessage bubble").text("💩") )// .appendTo(".chat-body")

    } else if (firstTime===true && input=='yes') {
            formatMessage( $("<p>").addClass("botMessage bubble").text('Wicked! Would you like to see one?') )//.appendTo(".chat-body") 
            firstTime = false 
  
            // further interaction
    } else if (firstTime===false) { 
        setTimeout( 
            function() {
            formatMessage (genAnswer(input).addClass("botMessage bubble")) //.appendTo(".chat-body")
            setTimeout( 
                function(){
                    if (input==="yes") {
                        formatMessage($("<p>")
                            .text("Would you like to see another one?").addClass("botMessage bubble")
                        )   // .appendTo(".chat-body")
                    }
                }
            , 500)}          
        , 1000)

    } else { formatMessage($("<p>").text("Please answer 'yes' or 'no'.").addClass(".botMessage bubble") )//.appendTo(".chat-body")
    }
})

//adding messages to body
function append ($element) {
    $element.appendTo("chat-body")
}

// evaluates user input  // Don't forget REGEX!!!
function genAnswer (input) {            
        if (input==="no") { 
            return $("<p>").text("Ok baiii! See you another time!")
        } else if (input==="yes") {
           return generateImg ()
        } else {return $("<p>").text("Please answer 'yes' or 'no'.") }
    }

// gets time
function getTime(){
    // TAKE CARE OF MINUTES 
    let date = new Date ()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    hours =  hours <10 ? "0" + hours : hours
    minutes =  minutes <10 ? "0" + minutes : minutes
    return hours + ":" + minutes
}

function formatMessage ($content){
    $content.appendTo(".chat-body")
    $("<p>").text(getTime()).addClass("timeStamp").appendTo($content)
}

 // scroll to bottom
function scrollToBottom () {
    //$(".chat-body").scrollTop($(document).height())

    setTimeout( 
        function() {
             $(".chat-body").scrollTop($(".chat-body")[0].scrollHeight) 
        }
    , 1700)
}

function generateImg (src) {

    let index = Math.floor(Math.random()* images.length)

    return $("<img>").attr("src",images[index]).attr("width", "300")
}


/* TO DO:

- scroll
- generate images
- regex

*/


var images = [
    'memes/graveyard.jpg',
    'memes/photosynthesis.jpeg',
    'memes/centaur_butt.jpg',
    'memes/scream_yawn.jpg',
    'memes/pretend_work.jpg',
    'memes/fire_trucks.jpg',
    'memes/underground_music.jpg',
    'memes/carbonemissions.jpg',
    'memes/holiday_spok.jpg',
    'memes/are_you_free.jpg',
    'memes/meme_dystopia.jpg',
    'memes/escalator.jpg',
    'memes/chart.jpg',
    'memes/drinks.jpg',
    'memes/silicone.jpg',
    'memes/PopcornHotOutside.jpg'
]

