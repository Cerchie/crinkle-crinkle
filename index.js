// Proposition from Cassidy Williams newsletter: https://cassidoo.co/newsletter/

// You have to order wrapping paper for presents.
//  Given the length, width, and height of the boxes you need to wrap,
//  return the number of square feet (or whatever units you want)
//  of wrapping paper you need to order.
//  Extra credit: allow for other shapes of presents and their dimensions!

// First implementation: in a perfect world, we don't need overlap:

function getOrthotopeSurfaceArea(length, width, height) {
    let firstVal = length * width * 2
    let secondVal = length * height * 2
    let thirdVal = height * width * 2

    return firstVal + secondVal + thirdVal
}

// console.log('testing func output', getOrthotopel,.≥l.,SurfaceArea(2, 3, 4))

// Second implementation: take the margins into account!

function arrangeByValue(l, w, h) {
    let arrayToSort = [l, w, h]
    let firstVal
    let secondVal
    let thirdVal
    for (let i = 0; i < arrayToSort.length - 1; i++) {
        let firstPointer = arrayToSort[i]
        let secondPointer = arrayToSort[i + 1]

        if (secondPointer > firstPointer) {
            let originalSmallerVal = arrayToSort[i]
            arrayToSort[i] = arrayToSort[i + 1]
            arrayToSort[i + 1] = originalSmallerVal
        }
    }
    return arrayToSort
}
console.log(arrangeByValue(10, 376, 10))
//in inches
function wrapThatGift(length, width, height) {
    let arrangedArray = arrangeByValue(length, width, height)

    let longest = arrangedArray[0]
    let middle = arrangedArray[1]
    let shortest = arrangedArray[2]

    let widthTolerance
    if (middle <= 4) {
        widthTolerance = middle * 0.5
    }
    if (middle > 4) {
        widthTolerance = 2
    }

    let lengthTolerance
    if (length <= 4) {
        lengthTolerance = length * 0.5
    }
    if (length > 4) {
        lengthTolerance = 2
    }
    let paperWidth = shortest + 2 * middle + 2 * widthTolerance
    let paperLength = longest + 2 * shortest + 2 * lengthTolerance

    let wrappingPaperSurfaceArea = paperLength * paperWidth

    return `${paperLength} inches by ${paperWidth} inches `
}

console.log(wrapThatGift(30, 100, 2))
