// const str1 = "JavaScript";

// const x = str1.toLowerCase().endsWith("script")
// const x = str1.indexOf("J");
// console.log("x:",x);

/**
 * ! includes
const arr = [
    {
        restaurant:"Burger King",
        add:"Delhi Chandni Chowk"
    },
    {
        restaurant: "Burger singh",
        add:"Noida 15"
    },
    {
        restaurant: "Mac D",
        add: "Noida 16"
    },
    {
        restaurant:"Dominoz",
        add:"Noida 16"
    }
]

function filteredRestaurant(search)
{
   const result = arr.filter(element =>{
       return   element.restaurant.toLowerCase().includes(search);
    });

    console.log("result:",result);
}

const restaurantName = prompt("Enter restaurant name");
filteredRestaurant(restaurantName.toLowerCase());
 */

/**
 * ! replace, replaceAll
const str = "Java is High Level Language. java is OOPL";
const x = str.toLowerCase().replaceAll("java","JavaScript");
console.log("x:",x);
 */

/**
 * ! padStart(), padEnd()
const str ="Javaa";
const str = "150"

const x = str.padStart(5,"0")
const x = str.padEnd(6,"/-");
console.log("x:",x);
 */
/**
 * endsWith ✅
 * indexOf ✅
 * ! includes (important)
 * match
 * matchAll
 * replace ✅
 * replaceAll ✅
 * padEnd ✅
 * padStart ✅
 * slice ✅
 * ! split (important)  convert string to array
 * ! join  (important)  convert array to string
 *  startswith ✅
 * toLowerCase ✅
 * toUpperCase ✅
 * ! trim (important) ✅
 * substr ✅
 * substring ✅
 */

/**
 * ! slice(a,b)
const s1 = "Javascript";
const x = s1.slice(0,4);
console.log("x:",x);
 */

/**
 * ! split
 * string to array


const str = "Hello World Namaste Developers";

const x = str.split(" ");
console.log("x:",x);

// x = ["Hello","World","Namaste","Developers"]
const y = x.join(" ");
console.log("y:",y);


const z = str.toLowerCase().startsWith("h");
console.log("z:",z);
 */

/**
 * ! trim()
 * ! trimStart()
 * ! trimEnd()
const user = "   chombu   ";
console.log(user.trim());
console.log("Mr "+ user.trimStart() + "Singh");
console.log("Mr "+ user.trimEnd() + " Singh");
 */

/**
 * ! substr():- same as slice but depricated works only with positive args
 * ! substring()
 
const str = "JavaScript";
console.log(str.substr(0,4));
console.log(str.substring(0,4));*/

/**
 * ! match()
 */

const string = "The rain in Spain stays mainly in the plain";
const x = string.matchAll("ain");
console.log("x:", x);
