Work Day Scheduler

I started this project by identifying the classes that were created in the CSS. Knowing that, I was able to start my HTML script. I also made sure I had all of my scripts and links properly input into the HTML. I had to create my app.js script, but other than that the rest was done for me. 

Now it was time to fill the rest of the HTML. I needed to create time slots that fit my work day schedule. I work a 9/80 schedule based on central time so I work 7am-4pm. So those are the time slots I need for my work day scheduler. I created div's for each time slot, and inside those div's were, a second div to asign the time, textarea for the input and a button element. Once that way finished I needed to fill in the appropreate classes and id's for each elemnt. We had a bootstrape link at the top for us, so I used Bootstrap to help me with the design. Once I had my id's and classes set up and labeling of each time slot done I could start building the javaScript. 

The javaScript was straight forward this time. I started by creating global variables for currentDay, timeBlock and saveBtn. seeing how those are the 3 points i have to target for each section on the html. 
After that I had to create the clock function that is required in this assignment. currentDayDisplay was what I chose to name this function. I went to moment.js to get the time display I wanted and I chose the one with running seconds. I added that to the currentDayDisplay function and closed it by setInterval. I needed to go back to create the empty array so that the time would always be running, not just show the time in witch the page was lanched.
Next I needed to create the hourtracker function. This function makes sure that I know if the time slot is in the past, present or future while working with date and time.
Then I set the value of each hour to tie it to localStorage. 
Last it was time to tie the saveBtn into my code to make sure when the user presses the saveBtn, the input area is actually saved in localStorage. then you can refresh the page and the input area is clear, but the localStorage is still logging the event.

Last note, I tried it in Flex and I liked it a lot more. However, the assignment called for the user to be able to scroll down to the time slots.

