import React from 'react'

function Buttons({btnText, btnStyle}) {
    // React props (properties) are cummunication or passing data between components. Props can be passed down that means from parent to child

    // function greet(person1, person2) {
    //     console.log(`Hello ${person1} & ${person2}`)
    // }

    // greet("Nech", "Ifeanyi")

    return (
        <button className={`${btnStyle} rounded-full p-2 border border-blue-600 cursor-pointer`}>{btnText}</button>
    )
}

export default Buttons