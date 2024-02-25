import "./index.css";
// import React, { Children } from "react";
import ReactDOM from "react-dom/client";

const firstBook = {
  sl: 1,
  img: "https://m.media-amazon.com/images/I/51Azhu94JlL._SY445_SX342_.jpg",
  title: "Interesting Facts For Curious Minds",
  author: "Jordan Moore",
};

const secondBook = {
  sl: 2,
  img: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CX11nGhWL._AC_UL600_SR600,400_.jpg",
  title: "Oath and Honor: A Memoir and a Warning",
  author: "Liz Cheney",
};

const thirdBook = {
  sl: 3,
  img: "https://m.media-amazon.com/images/I/91n7p-j5aqL._SY342_.jpg",
  title: "Fourth Wing (The Empyrean, 1)",
  author: "Rebecca Yarros",
};

const fourthBook = {
  sl: 4,
  img: "https://m.media-amazon.com/images/I/81Ry4nT+-lL._AC_UY218_.jpg",
  title: "No Brainer (Diary of a Wimpy Kid Book 18)",
  author: "Jeff Kinney",
};

const fifthBook = {
  sl: 5,
  img: "https://m.media-amazon.com/images/I/91GqAI8VDUL._AC_UY218_.jpg",
  title:
    "The Complete Cookbook for Young Chefs: 100+ Recipes that You'll Love to Cook and Eat",
  author: "America’s Test Kitchen Kids",
};

const sixthBook = {
  sl: 6,
  img: "https://m.media-amazon.com/images/I/91FcT02D2jL._AC_UY218_.jpg",
  title: "Iron Flame (The Empyrean, 2)",
  author: "Rebecca Yarros",
};

const seventhBook = {
  sl: 7,
  img: "https://m.media-amazon.com/images/I/71311cPaqnL._AC_UY218_.jpg",
  title: "The Heaven & Earth Grocery Store: A Novel",
  author: "James McBride",
};

const eighthBook = {
  sl: 8,
  img: "https://m.media-amazon.com/images/I/8155B+CMNFL._SY466_.jpg",
  title:
    "Paint by Sticker Kids: Holly Jolly Christmas: Create 10 Pictures One Sticker at a Time! Includes Glitter Stickers",
  author: "Workman Publishing",
};

const ninethBook = {
  sl: 9,
  img: "https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
};

const tenthBook = {
  sl: 10,
  img: "https://m.media-amazon.com/images/I/9192ZHx2HzL._AC_UY218_.jpg",
  title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
  author: "David Grann",
};

const eleventhBook = {
  sl: 11,
  img: "https://m.media-amazon.com/images/I/61qYCnOVadL._AC_UY218_.jpg",
  title: "The Woman in Me",
  author: "Britney Spears",
};

const twelvethBook = {
  sl: 12,
  img: "https://m.media-amazon.com/images/I/816UOE81WfL._AC_UY218_.jpg",
  title: "Where's Bluey?: A Search-and-Find Book",
  author: "Penguin Young Readers Licenses",
};

const thirteenthBook = {
  sl: 13,
  img: "https://m.media-amazon.com/images/I/91X6Rzd2VvL._AC_UY218_.jpg",
  title: "Guinness World Records 2024",
  author: "Guinness World Records",
};

const fourteenthBook = {
  sl: 14,
  img: "https://m.media-amazon.com/images/I/91A7TOSgJSL._AC_UY218_.jpg",
  title:
    "Difficult Riddles For Smart Kids: 300 Difficult Riddles And Brain Teasers Families Will Love (Thinking Books for Kids)",
  author: "M Prefontaine",
};

const fifteenthBook = {
  sl: 15,
  img: "https://m.media-amazon.com/images/I/71sDDGFkInL._AC_UY218_.jpg",
  title: "Lessons in Chemistry: A Novel",
  author: "Bonnie Garmus",
};

const sixteenthBook = {
  sl: 16,
  img: "https://m.media-amazon.com/images/I/81o-PyNHxbL._AC_UY218_.jpg",
  title: "Baking Yesteryear: The Best Recipes from the 1900s to the 1980s",
  author: "B. Dylan Hollis",
};

const seventeenthBook = {
  sl: 17,
  img: "https://m.media-amazon.com/images/I/71ZGdynmHyL._AC_UY218_.jpg",
  title:
    "How To Survive A Freakin’ Bear Attack: And 127 Other Survival Hacks You'll Hopefully Never Need",
  author: "Bill O'Neill",
};

const eighteenthBook = {
  sl: 18,
  img: "https://m.media-amazon.com/images/I/81AgoOPzO6L._AC_UY218_.jpg",
  title: "The Big Book of Silly Jokes for Kids",
  author: "Carole P. Roman",
};

const nineteenthBook = {
  sl: 19,
  img: "https://m.media-amazon.com/images/I/71BQlSjO1hL._AC_UY218_.jpg",
  title:
    "World of Eric Carle, Around the Farm 30-Button Animal Sound Book - Great for First Words - PI Kids",
  author: "PI Kids",
};

const twentiethBook = {
  sl: 20,
  img: "https://m.media-amazon.com/images/I/61l5e5KUSfL._AC_UY218_.jpg",
  title: "The Far Side® 2024 Off-the-Wall Day-to-Day Calendar",
  author: "Gary Larson",
};

const twentyfirstBook = {
  sl: 21,
  img: "https://m.media-amazon.com/images/I/71LFLVWVfYL._AC_UY218_.jpg",
  title: "How To Draw 101 Things For Kids",
  author: "Sophia Elizabeth",
};

const twentysecondBook = {
  sl: 22,
  img: "https://m.media-amazon.com/images/I/71NBFtzgMCL._AC_UY218_.jpg",
  title: "Cat Kid Comic Club: Influencers: A Graphic Novel",
  author: "Dav Pilkey",
};

const twentythirdBook = {
  sl: 23,
  img: "https://m.media-amazon.com/images/I/71nKtAPngQL._AC_UY218_.jpg",
  title: "Icebreaker: A Novel (The Maple Hills Series)",
  author: "Hannah Grace",
};

const twentyfourthBook = {
  sl: 24,
  img: "https://m.media-amazon.com/images/I/81Nc3VCqylL._AC_UY218_.jpg",
  title: "From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen",
  author: "Snoop Dogg",
};

const twentyfifthBook = {
  sl: 25,
  img: "https://m.media-amazon.com/images/I/711c-uf6AFL._AC_UY218_.jpg",
  title: "My First Library: Boxset of 10 Board Books for Kids",
  author: "Wonder House Books",
};

const twentysixthBook = {
  sl: 26,
  img: "https://m.media-amazon.com/images/I/91jwRAg09EL._AC_UY218_.jpg",
  title: "How to Catch a Dinosaur",
  author: "Adam Wallace",
};

const twentyseventhBook = {
  sl: 27,
  img: "https://m.media-amazon.com/images/I/41K354jKhYL._AC_UY218_.jpg",
  title: "The Creative Act: A Way of Being",
  author: "Rick Rubin",
};

const twentyeighthBook = {
  sl: 28,
  img: "https://m.media-amazon.com/images/I/7197sDsksNL._AC_UY218_.jpg",
  title: "The Screaming Goat (Book & Figure)",
  author: "Unknown",
};

const twentyninthBook = {
  sl: 29,
  img: "https://m.media-amazon.com/images/I/716MbQI14OL._AC_UY218_.jpg",
  title: "Wacky Waving Inflatable Tube Guy (RP Minis)",
  author: "Conor Riordan",
};

const thirtiethBook = {
  sl: 30,
  img: "https://m.media-amazon.com/images/I/81NI2A7rN1L._AC_UY218_.jpg",
  title: "2024 History Channel This Day in History Boxed Calendar",
  author: "History Channel",
};

const thirtyfirstBook = {
  sl: 31,
  img: "https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg",
  title: "Friends, Lovers, and the Big Terrible Thing: A Memoir",
  author: "Matthew Perry",
};

const thirtysecondBook = {
  sl: 32,
  img: "https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL600_SR600,400_.jpg",
  title: "A Court of Thorns and Roses (A Court of Thorns and Roses, 1)",
  author: "Sarah J. Maas",
};

const thirtythirdBook = {
  sl: 33,
  img: "https://images-na.ssl-images-amazon.com/images/I/91-Dqdv3a8L._AC_UL600_SR600,400_.jpg",
  title: "The Exchange: After The Firm (The Firm Series)",
  author: "John Grisham",
};

const thirtyfourthBook = {
  sl: 34,
  img: "https://images-na.ssl-images-amazon.com/images/I/61k7JqSWOUL._AC_UL600_SR600,400_.jpg",
  title:
    "The Ballad of Songbirds and Snakes (A Hunger Games Novel) (The Hunger Games)",
  author: "Suzanne Collins",
};

const thirtyfifthBook = {
  sl: 35,
  img: "https://images-na.ssl-images-amazon.com/images/I/81Xy1ugiWeL._AC_UL600_SR600,400_.jpg",
  title:
    "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
  author: "David Grann",
};

const thirtysixthBook = {
  sl: 36,
  img: "https://images-na.ssl-images-amazon.com/images/I/71mE7EDv8KL._AC_UL600_SR600,400_.jpg",
  title: "Super Interesting Facts For Smart Kids",
  author: "Jordan Moore",
};

const thirtyseventhBook = {
  sl: 37,
  img: "https://images-na.ssl-images-amazon.com/images/I/81P0RUDNlbL._AC_UL600_SR600,400_.jpg",
  title:
    "Polar Express 30th Anniversary Edition: A Christmas Holiday Book for Kids",
  author: "Chris Van Allsburg",
};

const thirtyeighthBook = {
  sl: 38,
  img: "https://images-na.ssl-images-amazon.com/images/I/71musw9bJWL._AC_UL300_SR300,200_.jpg",
  title: "My Name Is Barbra",
  author: "Barbra Streisand",
};

const thirtyninthBook = {
  sl: 39,
  img: "https://images-na.ssl-images-amazon.com/images/I/71BtO9AFrXL._AC_UL300_SR300,200_.jpg",
  title: "The Ultimate True Crime Puzzle Book",
  author: "Jack Rosewood",
};

const fortiethBook = {
  sl: 40,
  img: "https://images-na.ssl-images-amazon.com/images/I/61XUtQ7NTgL._AC_UL300_SR300,200_.jpg",
  title: "The 48 Laws of Power",
  author: "Robert Greene",
};

const fortyfirstBook = {
  sl: 41,
  img: "https://images-na.ssl-images-amazon.com/images/I/81PNtM1NfxL._AC_UL300_SR300,200_.jpg",
  title: "Little Blue Truck's Christmas: A Christmas Holiday Book for Kids",
  author: "Alice Schertle",
};

const fortysecondBook = {
  sl: 42,
  img: "https://images-na.ssl-images-amazon.com/images/I/61IIZc-UjPL._AC_UL300_SR300,200_.jpg",
  title: "How To Draw 101 Cute Stuff For Kids",
  author: "Sophia Elizabeth",
};

const fortythirdBook = {
  sl: 43,
  img: "https://images-na.ssl-images-amazon.com/images/I/81FQHXZ2sxL._AC_UL300_SR300,200_.jpg",
  title: "96 Facts About Taylor Swift: Quizzes, Quotes, Questions, and More!",
  author: "Arie Kaplan",
};

const fortyfourthBook = {
  sl: 44,
  img: "https://images-na.ssl-images-amazon.com/images/I/61Aey7UccxL._AC_UL300_SR300,200_.jpg",
  title: "Bob Ross by the Numbers (RP Minis)",
  author: "Bob Ross",
};

const fortyfifthBook = {
  sl: 45,
  img: "https://images-na.ssl-images-amazon.com/images/I/51v0gkGIaKL._AC_UL300_SR300,200_.jpg",
  title: "Harry Potter Paperback Box Set (Books 1-7)",
  author: "J. K. Rowling",
};

const fortysixthBook = {
  sl: 46,
  img: "https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL300_SR300,200_.jpg",
  title: "Holly",
  author: "Stephen King",
};

const fortyseventhBook = {
  sl: 47,
  img: "https://images-na.ssl-images-amazon.com/images/I/715DaQDKadL._AC_UL300_SR300,200_.jpg",
  title: "The Book of Unusual Knowledge",
  author: "Publications International Ltd.",
};

const fortyeighthBook = {
  sl: 48,
  img: "https://images-na.ssl-images-amazon.com/images/I/A1BSKa8kyFL._AC_UL300_SR300,200_.jpg",
  title: "Dragons Love Tacos",
  author: "Adam Rubin",
};

const fortyninthBook = {
  sl: 49,
  img: "https://images-na.ssl-images-amazon.com/images/I/81xwqkTl-YL._AC_UL300_SR300,200_.jpg",
  title: "Bluey: Hooray, It's Christmas!: A Sticker & Activity Book",
  author: "Penguin Young Readers Licenses",
};

const fiftiethBook = {
  sl: 50,
  img: "https://images-na.ssl-images-amazon.com/images/I/91mis0XfORL._AC_UL300_SR300,200_.jpg",
  title: "Snoop Dogg Presents Goon with the Spoon",
  author: "Snoop Dogg",
};

const BookList = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-16 px-8 py-12">
      <Book {...firstBook} />
      <Book {...secondBook} />
      <Book {...thirdBook} />
      <Book {...fourthBook} />
      <Book {...fifthBook} />
      <Book {...sixthBook} />
      <Book {...seventhBook} />
      <Book {...eighthBook} />
      <Book {...ninethBook} />
      <Book {...tenthBook} />
      <Book {...eleventhBook} />
      <Book {...twelvethBook} />
      <Book {...thirteenthBook} />
      <Book {...fourteenthBook} />
      <Book {...fifteenthBook} />
      <Book {...sixteenthBook} />
      <Book {...seventeenthBook} />
      <Book {...eighteenthBook} />
      <Book {...nineteenthBook} />
      <Book {...twentiethBook} />
      <Book {...twentyfirstBook} />
      <Book {...twentysecondBook} />
      <Book {...twentythirdBook} />
      <Book {...twentyfourthBook} />
      <Book {...twentyfifthBook} />
      <Book {...twentysixthBook} />
      <Book {...twentyseventhBook} />
      <Book {...twentyeighthBook} />
      <Book {...twentyninthBook} />
      <Book {...thirtiethBook} />
      <Book {...thirtyfirstBook} />
      <Book {...thirtysecondBook} />
      <Book {...thirtythirdBook} />
      <Book {...thirtyfourthBook} />
      <Book {...thirtyfifthBook} />
      <Book {...thirtysixthBook} />
      <Book {...thirtyseventhBook} />
      <Book {...thirtyeighthBook} />
      <Book {...thirtyninthBook} />
      <Book {...fortiethBook} />
      <Book {...fortyfirstBook} />
      <Book {...fortysecondBook} />
      <Book {...fortythirdBook} />
      <Book {...fortyfourthBook} />
      <Book {...fortyfifthBook} />
      <Book {...fortysixthBook} />
      <Book {...fortyseventhBook} />
      <Book {...fortyeighthBook} />
      <Book {...fortyninthBook} />
      <Book {...fiftiethBook} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center -mt-12 mb-4 p-4 bg-white rounded-b-xl">
        Amazon Bestseller Books
      </h1>
    </>
  );
};

const TopFiftyBooks = () => {
  return (
    <section className="px-8 py-12">
      <Heading />
      <BookList />
    </section>
  );
};

const Book = ({ sl, title, img, author }) => {
  // Function to truncate the title if it exceeds 15 characters
  const truncateTitle = (title) => {
    return title.length > 29 ? title.slice(0, 29) + "..." : title;
  };

  return (
    <div className="group flex flex-col items-center justify-center gap-3 mx-2 mb-2 -top-2 hover:-translate-y-2 transition ease-in cursor-pointer rounded-md bg-white">
      <div className="relative z-[10]">
        <img
          src={img}
          alt={title}
          className="w-80 aspect-[2.78/4] object-cover rounded-t-md select-none"
        />
        <div className="absolute aspect-square h-24 rounded-full -top-10 -left-[2.5rem] bg-yellow-400 -z-[1]"></div>

        <div className="absolute w-20 h-8 -top-2 rounded-l-md -right-5 bg-red-500 z-[3] py-0.5 px-4 text-xl text-white drop-shadow-md">
          # {sl}
        </div>
        <div className="absolute w-8 h-12 rotate-[64.5deg] -top-1 -right-[6.8px]  bg-red-700 -z-[2]"></div>
      </div>
      <div className="flex flex-col items-center justify-center pb-2 px-2">
        <h2 className="font-semibold mt-2">{truncateTitle(title)}</h2>
        <h2 className="text-sm md:text-base">{author}</h2>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TopFiftyBooks />);
