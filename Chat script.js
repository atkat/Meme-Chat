
var firstTime = true

var regexNo = /(no)+/i
var regexYes = /(yes)+/i

//greeting 

greeting()

$("#submit").on("click", function(event){
    event.preventDefault();

    // first interaction
    
        //cleanup
        var input = $("#input").val() 
        if (regexYes.test(input)) { input = 'yes'}
        else if (regexNo.test(input)) { input = 'no'}

        formatMessage( $("<p>").text(input).addClass("userMessage") ) 
  
    // resets form  
    $(".form")[0].reset()   

    // first answer   
    if (firstTime===true && input==="no") {
        formatMessage( $("<p>").addClass("botMessage poop").text("💩") )

    } else if (firstTime===true && input==="yes") {
            formatMessage( $("<p>").addClass("botMessage").text('Wicked! Would you like to see one?') )
            firstTime = false 

            // further interaction
    } else if (firstTime===false) { 
        setTimeout( 
            function() {
                formatMessage (genAnswer(input).addClass("botMessage"))
                setTimeout( 
                    function(){
                       if (input==="yes") {
                            formatMessage( $("<p>")
                              .text("Would you like to see another one?").addClass("botMessage"))
                        }
                    }    
                , 700)
            }                    
        , 600)
    
    } else { formatMessage( $("<p>").text("Please answer 'Yes' or 'No'.").addClass("botMessage") ) }
    
})
// evaluates user input  

function genAnswer (input) {            
    if (input==="no") { 
        return $("<p>").text("Ok baiii! See you another time!")
    } else if (input==="yes") {
        return generateImg()
    } else { return $("<p>").text("Please answer 'yes' or 'no'.") }
}

function formatMessage ($content){
    $content.appendTo(".chat-body").addClass("bubble")
    $("<p>").text(getTime()).addClass("timeStamp").appendTo($content)
    $(".chat-body").scrollTop($(".chat-body")[0].scrollHeight)    // and scroll to bottom
}

// get and format time 
function getTime(){
    let date = new Date ()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    hours =  hours <10 ? "0" + hours : hours
    minutes =  minutes <10 ? "0" + minutes : minutes
    return hours + ":" + minutes
}
//greeting
function greeting () {
    formatMessage( $("<p>").text("YO YO YO! 🌲").addClass("botMessage greeting") ) 
    formatMessage( $("<img>").attr("src","cat christmas tree.jpg").attr("width", "400").addClass("botMessage greeting") )
    setTimeout( 
        function() {
            formatMessage( $("<p>").text("Do you like memes?").addClass("botMessage") ) 
    }, 900)
}
// scroll to bottom
function scrollToBottom () {
    setTimeout( 
        function() {
             $(".chat-body").scrollTop($(".chat-body")[0].scrollHeight) 
        }
    ,1300)
}

//generates images
function generateImg (src) {
    let index = Math.floor(Math.random()* images.length)
    for (i=0; i<images.length; i++) {
       let index1 = Math.floor(Math.random()* images.length)
        if (index1==index) { 
          return $("<img>").attr("src",images[index+1]).attr("width", "400")
        } else { return $("<img>").attr("src",images[index+1]).attr("width", "400")
        }
    }
}

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
