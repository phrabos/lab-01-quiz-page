# lab-01-quiz-page

OUTCOMES:  
 - alert box using alert()
 - confirm using confirm()
 - prompt first name with prompt() 
 - prompt last name with prompt()
 - three questions prompt()
 - Show the user the results

 HTML setup:
 - some information about Spartathlon presented with an image and list items
 - submit button "Take Quiz"
 - empty results ``<div></div>``    

Actions:
 1) Get DOM Elements
 - button
 - empty div
 2) Add event listener
 - button
 3) 
- launch alert  
 - launch confirmation
    - if user says no, nothing else happens (return nothing to break out of cool zone)
    - if user says yes, launch the series of prompts
- prompts needed
    - first name
        store the result to a variable
    - last name
        store the results to a variable
    - launch quiz prompts
        - what counts as a yes
        - anything that starts with a 'y' counts as a yes
        - how many times are we going to see if something counts as a yes
            - three times
- make a results string
display results string
    - inject into empty div