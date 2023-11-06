/* 
!   DOM
        - Document Object Model
        - Only through the browser
    
    Frame:
        - Document: HTML page
            - "document" - Is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement

*/
/*
    - Data representation of objects that comprise the structure and content of a document on the web.

    Basic Structure:
    - Document
        - HTML
            - Head
                - Meta
                - Link
                - Title
            -Body
                - Nav
                - Header
                - Divs
                - And any of their attributes
*/
/*
*   BOM
        - Browser Object Model
        - Window variable that we can gain access.
        - various methods available
*/

/* 
!   Creating Elements
        Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node
        - textContent: returns the full text.
            ex: 
                <p>Hello <b>World</b></p>
            ~ innerText would return just "Hello"
            ~ textContent would return "Hello World".
*/

/* 
    Chain of Events:
    1. Create our element
    2. Apply our value
    3. Place our element
*/

/* 
!  Finding Elements
*  HTMLCollection
    - An array-like object.
    - Allows access to index, properties, and methods to help navigate and modify.
    - Does NOT allow to modify a group of elements all at once.
    - Can loop through it
    - Can use .length property to get the size of the list.

    To Get Element
    - use array notation
    - use .item() method

    Accessing Multiple Elements requires these methods:
    - getElementsByTagName()
    - querySelectorAll
    - getElementsByClassName()
*/

/* 
*   .querySelector()
        - Grabs first instance of an element or null if nothing found.
        - can target by ID, Class, or Element
            - will need to append # for ID
            - will need to append . for Class
*/

/* 
    .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
        * static: will not update
*/
