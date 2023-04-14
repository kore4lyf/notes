# Pro Design Patterns for HTML & CSSS

## Introduction 
### Innovations
Here are the innovative concepts, terms, and approaches used in the book.

1. **Six Box Models**: CSS officially has one box model that defines a common set of properties and behaviors. A single box model is a very useful concept, but it is oversimplified. Over the years, we learned the hard way that box model properties work differently depending on the type of box. 
This is one reason why so many people struggle with CSS. The box model seems simple, yet when one uses a box model property, such as width, it works only some of the time or may work differently than expected. For example, the width property sets the interior width of a block box, but on table boxes it sets the outer width of the border, and on inline boxes it does absolutely nothing. 
Rather than treating different behaviors as an exception to one very complicated box model, we define six simple box models that specify the behavior for each type of box. 
Chapter 4 presents the six box models, which are 
    a. inline
    b. inline-block
    c. block
    d. table
    e. absolute
    f. float
Furthermore, each box model defines its own way that it flows or is positioned. 
For example: 
**inline boxes** flow horizontally and wrap across lines. 
**Block boxes** flow vertically. 
**Tables flow** their cells in columns and rows. 
**Floats** flow horizontally, wrap below other floats, and push inline boxes and tables out of the way. 
**Absolute and fixed boxes** do not flow; instead, they are removed from the flow and are positioned relative to their closest positioned ancestor.

2. Box Model Extents 
Another innovation in the book is the concept that there are three ways a box can be dimensioned: it can be
- Sized
- Shrinkwrapped
- Stretched

3. Box Model Placement 
Another innovation is the idea that there are three ways a box can be placed in relation to its container or its siblings: specifically, it can be **indented** (or outdented), **offset** from its siblings, or **aligned** and offset from its container. 
Indenting, offsetting, and aligning are different behaviors. For example, an indented box is stretched and its margins shrink its width, whereas an aligned box is sized or shrinkwrapped and its margins do not shrink its width. Aligned and indented boxes are aligned to their containers, whereas offset boxes can be offset from their container or offset from their siblings.


4. Column Layouts 
Another innovation is the discovery, naming, and documenting of 12 automated techniques built into 
browsers for laying out columns in tables. 
All the major browsers include these powerful column layout features. They are compatible across the major browsers and are very reliable. Even though using tables for page layout is not recommended, tabular data still needs to be laid out, and you can take advantage of these column layouts to make tabular data look great.

5. Fluid Layouts
We present four simple design patterns you can use to create complex fluid layouts with confidence and predictability in all major browsers.
The Fluid Layout design pattern creates columnar layouts with the versatility of tables but without using tables. Even better than tables, these layouts automatically adjust their width and reflow from columns into rows as needed to fit into narrow displays

6. Event Styling 

Another innovation is the Event Styling JavaScript Framework presented in Chapter 17. This is a simple, powerful, open source framework for dynamically and interactively styling a document. It uses the latest best practices to ensure that HTML markup is completely free of JavaScript code and completely accessible, and all styling is done with CSS. Furthermore, the framework allows you to select elements in JavaScript using the same selectors you use to select elements in CSS. This vastly simplifies and unifies the styling and scripting of a dynamic HTML document!


## C H A P T E R 1: Design Patterns: Making CSS Easy!