// Here, we are creating our own react library

const customRender = (reactElement, container) => {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // console.log(domElement)

    // // Adding the custom DOM element to the container provided
    // container.appendChild(domElement)

    // The above code is not good for different types of tags as the no. of attributes may differ, for different types of tags we will use the following approach:
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// This the anchor tag that we will take into our dom dneoted by mainElement, the below written code is our custom way of how react presumes any HTML tag  such as anchor(a) tag.
const reactElement = {
    type: 'a', 
    props: {
        href: 'https://www.google.com', 
        target: '_blank'
    }, 
    children: 'Click me to visit google.'
}

const mainContainer = document.getElementById('root')
console.log(mainContainer)

// Now we will render this react element into our DOM
customRender(reactElement, mainContainer)
