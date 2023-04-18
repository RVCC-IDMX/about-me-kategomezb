# About Me

/*Biography*/

I knew that I wanted to do something different. That is why I decided to use a flip card that can show a little bit of my personal information and I knew that it would benefit my website visually.

In my code I used a display so I could align and position the content of the flip card. I also used the transform property to flip the card over on hover. Additionally, I added the box-shadow property to add a shadow effect to the card and the background property to add gradient backgrounds to both sides of the card.

/*My Hobbies*/

This section was really hard because I did not want it to be simple. I got the images from https://www.flaticon.com/, so it would give my section a different style insted of just text. In the CSS stylesheet it includes rules for the layout and appearance of my "hobbies" section, as well as rules for a "skills" section with clickable boxes displaying icons and text. I also included the responsive design rules to adjust the layout for different screen sizes.

/*Gallery*/

For this section I knew that I wanted to do a polaroid style, but I knew it would not be easy because I had issues with fitting the images on all devices before. 

In my first try, each card contained a thumbnail image of the main photo in the background and a larger version of the photo in the foreground, along with a category, heading, and author information. I put source images for the thumbnails and foreground photos in the src and srcset attributes. The srcset attribute helps the browser to choose the best image based on the device's pixel density and viewport size. However, it was not working for me so it was really frustating because I did not know what to do. Each card had a figure element with a class attribute set to "card". 

The first try did not work so I started playing with the elements of my code so I could see if something could make it look better. It took my like 2 hrs to remember something I knew.

At the end I kept the section with the ID of "gallery" that contains three figures, each with a class of "card." Inside each figure, I change the images and I kept the image tag with the source URL and alt text. The images also have a srcset attribute with a list of URLs and their corresponding sizes for responsive images (which helped me to fit all the images on all the devices). Additionally, I kept the divs inside each figure for category with the heading, and author information. Finally, there is some inline styling to ensure the images fill their respective cards.




Katerine Gomez Bautista!