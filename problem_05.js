//! 5) How will you display
//! a) programming er coddogosti
//! b) VW
//! c) Bangladesh

let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}


//! a) programming er coddogosti

const programmingErCoddogosti = instructor.additionalData.books[1];
console.log(programmingErCoddogosti);

//! b) VW

const outputVW = instructor.additionalData.moreDetails.hometown.state;
console.log(outputVW);

//! c) Bangladesh

const outputBangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(outputBangladesh);