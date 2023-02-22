//! 4) How will you display
//! a) Petersburg
//! b) Herry

let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {

            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}

//! a) Petersburg
const outputPetersburg = students[2222].address.city;
console.log(outputPetersburg);

//! b) Herry

const outputHerry = students[3333].name;
console.log(outputHerry);