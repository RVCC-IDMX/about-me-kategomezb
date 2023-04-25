
# Katerine Gomez About Me Project README

Hello everyone and welcome to my About Me Project. My name is Katerine Gomez and I will be sharing a little bit more about this project that I did on my Web Development I class at Raritan Valley Community College.

First of all I will share with all of you my Netlify Status Badges: [![Netlify Status](https://api.netlify.com/api/v1/badges/c44c454b-b4e0-47c2-8860-64c968bcc7e1/deploy-status)](https://app.netlify.com/sites/about-me-kategomezb/deploys)

# About Me Project Description - Skill Development

This project called “About Me” helped me to improve my skills in web development. The website is divided into several sections, including: biography, gallery, blog and contact form.

Throughout this project, I learned different skills including HTML and CSS. In the HTML section, I learned how to create different types of elements, such as headings, paragraphs, images, and how to structure them in a meaningful way. In the CSS section, I learned how to style the website by using different colors, fonts, and layouts. Additionally, I learned how to create responsive designs that adjust to different screen sizes and how to make different elements of the website eye-catching to the audience by the use of hover effects (i.e: biography and hobbies section)

Overall, this project taught me the fundamentals of web development and helped me gain valuable experience in creating websites from scratch. I feel very confident in my ability to use HTML and CSS to create good looking websites that are both aesthetically pleasing and functional. 

# Project's Color Scheme

For my project I used a muted purple, a pale pinkish and the dark purple as a complementary color scheme. 

The #9B89B3 and the #362B48 are complementary with each other. The #FDF7FF and the #362B48 are complementary as well, so it was really easy to choose those colors. Selecting this colors helped me to balance the color palette with a good mix of light and dark color that can make my website look a little sophisticated, and with a little muted atmosphere.

<img src="img\palette.jpeg">

-Hex Codes:

#9B89B3, this color represents a shade of purple. We have a red value that is 9B (155 in decimals), a green value that is 89 (137 in decimal), and a blue value that is B3 (179 in decimal). This color is a medium-dark shade of purple that you could use as a primary color. 

<img src="img\9B89B3.jpeg">

#362B48, this color represents a shade of dark blue-purple. We have a red value that is 36 (54 in decimal), the green value that is 2B (43 in decimal), and the blue value that is 48 (72 in decimal). This color is a deep shade that could be used as a background. 

<img src="img\362B48.jpeg">

#FDF7FF, this color represents a shade of white. We have a red value that is FD (253 in decimal), the green value that is F7 (247 in decimal), and the blue value that is FF (255 in decimal). This color is a pure white color that could be used as a background or accent color. 

<img src="img\FDF7FF.jpeg">

# My Decisions in this Project

-Navigation bar:

This one was one of the hardest sections because I was having so many issues with it. 

I designed my new logo on https://www.figma.com/, and I wanted my logo to look like that because I wanted something classy but simple. Normally it is very difficult to match my initials but I was able to make them stand out very well together and achieve that style that I was looking for from the beginning.

I used the light purple for the background because I wanted to have a connection on the colors for my whole website. The logo that I created is styled with flexbox and the navigation list is hidden by default. 

I created the hamburger icon because it helps my website on small devices, so when they click it, the menu will appear and the can select the section the want to see. I used a toggle for it so the visibility of the nav links looks better on small devices as I explained before. For the list items, I gave them some margin for better spacing because I was having some issues with that, and it actually helped my navigation bar to look better. 

For the media query I styled it for larger devices by displaying the navigation list, I changed the flex direction of the navbar, and I hid the hamburger icon. For the small devices, the nav list is hidden by default and displayed when someone click the hamburger icon. 

-Hero:

For my here section I was not sure what I wanted to do. I wanted to add an outline border with some LED colors that that move in one direction. When I did I didn't like the idea because it did not fit the style my website was having, so I decided to remove it.  

This is when I realized that I did not need something very extrabagante, so I used https://unsplash.com/ to place an image that represented me a little and that combined with my website. I used several images, until I found the one I liked which is the plane, the city in the background and the pink sky. I also replace my hero with a photo of me that was as normal as possible and add a circular shape because I thought it stood out very well.

When you open my website my name and where I live have an effect that when they appear, one comes from top and the other from the bottom.

-Biography

I knew that I wanted to do something different. That is why I decided to use a flip card that can show a little bit of my personal information and I knew that it would be fun and it would also benefit my website visually.

In my code I used a display so I could align and position the content of the flip card. I also used the transform property to flip the card over on a 3D effect with a transition on hover. I also added the box-shadow property to add a shadow effect to the card and the background property to add gradient backgrounds to both sides of the card.

For my media queries, the small devices, where the layout is, I had to adjust it to be more responsive because at the beggining the cards were everywhere so this helped it to look good on this kind of devices. 

-My Hobbies

This section was really hard because I did not want it to be simple. I got the images from https://www.flaticon.com/, so it would give my section a different style insted of just text. In the CSS stylesheet it includes rules for the layout and appearance of my "hobbies" section, as well as rules for a "skills" section with clickable boxes displaying icons and text. 

In the "hobbies" section, I centered the text alignment and I added a bottom margin. For each list item, I added a 5px bottom margin. The "container" section, I wanted three columns that could have equal width, so I used a repeated funcion. The gap that the grid items have is 1rem. I also justify the text because for me, visually looks so much better.

For the imagenes, I created a circle with half white and gray background to match a little bit my picture shape on the hero section. When people click over one my hobbies, the background will change to white and the text color will change to black. I wanted to do this because if you look at this section, it looks simple. So I found this effect interesting because it gives you a different perspective of each hobbie once you click it. 

I also included the responsive design rules to adjust the layout for different screen sizes. For the devices with a maximum of 768px, it changes to two columns and the padding will set to 1rem and 20px. For the devices with a maximum width of 480px, the container changes to one column, and the padding will set to 1rem and 10px.

I am really proud of my final product in this section. 

-Gallery

For this section I knew that I wanted to do a polaroid style, but I knew it would not be easy because I had issues with fitting the images on all devices before. 

In my first try, each card contained a thumbnail image of the main photo in the background and a larger version of the photo in the foreground, along with a category, heading, and author information. I put source images for the thumbnails and foreground photos in the src and srcset attributes. The srcset attribute helps the browser to choose the best image based on the device's pixel density and viewport size. However, it was not working for me so it was really frustating because I did not know what to do. Each card had a figure element with a class attribute set to "card". 

The first thing I did, it did not work, that is why I started playing with the elements of my code so I could see if something else could make it look better. It took me like 2 hrs to remember about sizes (max-width: 600px) calc(100vw - 20px). When you use that the browser adapts the image based on the device's screen size.

At the end I kept the section with the ID of "gallery" that contains three figures, each with a class of "card." Inside each figure, I change the images (I change two images because I wanted them to have the same height) and I kept the image tag with the source URL and alt text. The images also have a srcset attribute with a list of URLs and their corresponding sizes for responsive images (which helped me to fit all the images on all the devices). Additionally, I kept the divs inside each figure for category with the heading, and author information. Finally, I added some inline styling to ensure the images fill their respective cards.

-Video

I did not have to do that much on this section because it was just adding a video, and of course I wanted to add some text that could complement my video.

At first I had a lot of problems because the video was on the left all the time, I coul not make it occupy 100% horizontally, and It was not fitting on all devices. 

I used CSS to style the properties for the section, such as the background color, padding, margin, font family, and text alignment. Additionally, I fixed the font size and line height for the heading and paragraph text. I used a class called 'video-wrapper', in which I used some padding to maintain a fixed aspect ratio. I made sure that the video is positioned (this is what it helped me to fix my issue) using the 'video' class with absolute positioning, and its width and height are set to 100% while removing its border.

-CSS Animation

In this section I wanted to do something impressive but what I wanted to do required javascript, so I decided to go with an animation is very common that is the hover effect and the bar loader. It was very fun to do it because you can do it in the way you want, you can add that animations to photos and texts, so I found it very interesting to include those two animations on my website.

At the beggining I modified the hover width and the padding several times so I could give a better visual appearance because at first everything looked very simple. 

I wanted to keep some information with the purple background and other information with the lighter color, so I decided to put the explanation of how to achieve the effect with the clear effect so to maintain that visual constancy.

I had a problem before that I did not how to screenshot my code so I could show it in my explaination. That why I had to install an extension called CodeSnap, so it will allow me to show my screenshot in a good looking way. 

-Contact Form

For the contact form I wanted something simple and functional, that allowed the users to put their name, email, phone number, phone type, message and whether or not they would like a reply. I used the same colors so I can create a shade of the purple and white. For the submit button I added a purple background that changes to white on hover. I wanted to add the hover effect to the submit button, because I noticed that is something that a lot of websites have and it gives it a small difference 

# Citation 

Flip Cards Animation: 

CSS Flip Animation: How to Do It. (n.d.). Blog.hubspot.com. Retrieved April 25, 2023, from https://blog.hubspot.com/website/css-flip-animation

‌How To Create a Flip Card with CSS. (n.d.). Www.w3schools.com.    https://www.w3schools.com/howto/howto_css_flip_card.asp

Navigation Bar:

Duggal, S. (2022, August 8). Build a custom sticky navbar with CSS. LogRocket Blog. https://blog.logrocket.com/build-custom-sticky-navbar-css/

‌Create a CSS Navigation Bar Easily: Learn CSS Menu Styling. (n.d.). Www.bitdegree.org. Retrieved April 25, 2023, from https://www.bitdegree.org/learn/css-navigation-bar/

‌Polaroid Gallery:

CSS box-shadow property. (n.d.). Www.w3schools.com. Retrieved April 25, 2023, from https://www.w3schools.com/cssref/css3_pr_box-shadow.php#:~:text=This%20example%20demonstrates%20how%20to%20create%20%22polaroid%22%20pictures

‌Studio, S. (2015, August 10). Tutorial: Make Your Images Look Like Polaroid Pictures With HTML and CSS. Medium. https://medium.com/@SavvStudio/tutorial-make-your-images-look-like-polaroid-pictures-with-html-and-css-7b1120732dd1

‌CSS Animation:

animation - CSS: Cascading Style Sheets | MDN. (n.d.). Developer.mozilla.org. https://developer.mozilla.org/en-US/docs/Web/CSS/animation

‌The Ultimate Guide to Animations in CSS. (n.d.). Blog.hubspot.com. Retrieved April 25, 2023, from https://blog.hubspot.com/website/css-animation

‌Hover Effect:

Fitzgerald, A. (n.d.). What Are CSS Hover Animations & How Can You Use Them? Blog.hubspot.com. https://blog.hubspot.com/website/css-hover-animation

‌Loader Bar:

Sebastian. (2022, August 22). How To Implement A CSS Loader. CodingTheSmartWay. https://medium.com/codingthesmartway-com-blog/how-to-implement-a-css-loader-d4bf7da54580

