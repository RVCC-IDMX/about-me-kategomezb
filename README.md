# About Me

/*Hero*/

/*Biography*/

I knew that I wanted to do something different. That is why I decided to use a flip card that can show a little bit of my personal information and I knew that it would be fun and it would also benefit my website visually.

In my code I used a display so I could align and position the content of the flip card. I also used the transform property to flip the card over on hover. I also added the box-shadow property to add a shadow effect to the card and the background property to add gradient backgrounds to both sides of the card.

/*My Hobbies*/

This section was really hard because I did not want it to be simple. I got the images from https://www.flaticon.com/, so it would give my section a different style insted of just text. In the CSS stylesheet it includes rules for the layout and appearance of my "hobbies" section, as well as rules for a "skills" section with clickable boxes displaying icons and text. I also included the responsive design rules to adjust the layout for different screen sizes.

I am really proud of my final product in this section. 

/*Gallery*/

For this section I knew that I wanted to do a polaroid style, but I knew it would not be easy because I had issues with fitting the images on all devices before. 

In my first try, each card contained a thumbnail image of the main photo in the background and a larger version of the photo in the foreground, along with a category, heading, and author information. I put source images for the thumbnails and foreground photos in the src and srcset attributes. The srcset attribute helps the browser to choose the best image based on the device's pixel density and viewport size. However, it was not working for me so it was really frustating because I did not know what to do. Each card had a figure element with a class attribute set to "card". 

The first thing I did, it did not work, that is why I started playing with the elements of my code so I could see if something could make it look better. It took me like 2 hrs to remember something I knew and I watched on tik tok a long time ago.

At the end I kept the section with the ID of "gallery" that contains three figures, each with a class of "card." Inside each figure, I change the images (I change two images because I wanted them to have the same height) and I kept the image tag with the source URL and alt text. The images also have a srcset attribute with a list of URLs and their corresponding sizes for responsive images (which helped me to fit all the images on all the devices). Additionally, I kept the divs inside each figure for category with the heading, and author information. Finally, I added some inline styling to ensure the images fill their respective cards.

/*Video*/

I did not have to do that much on this section because it was just adding a video, and of course I wanted to add some text that could complement my video.

At first I had a lot of problems because the video was on the left all the time, I coul not make it occupy 100% horizontally, and It was not fitting on all devices. 

I used CSS to style the properties for the section, such as the background color, padding, margin, font family, and text alignment. Additionally, I fixed the font size and line height for the heading and paragraph text. I used a class called 'video-wrapper', in which I used some padding to maintain a fixed aspect ratio. I made sure that the video is positioned (this is what it helped me to fix my issue) using the 'video' class with absolute positioning, and its width and height are set to 100% while removing its border.

/*CSS Animation*/






Katerine Gomez Bautista!