# hover-intent
Hover-intent will add the class `.hi-intent` when the user's mouse hovers over a list item nested within a `&lt;nav&gt;` and is stationary for 0.25 seconds. Then the class `.hi-intent` will be removed when the user's mouse leaves the list item and is again stationary for 0.25 seconds. 

Practically meaning that the user's mouse can leave a list item, then return, without the class `.hi-intent` being removed, just so long as the mouse is not stationary for greater than 0.25 seconds before returning. Useful for nested dropdown menus.

Also the class `.hi-hover` will be added when the mouse hovers over the list item

less than 400 bytes when minified and compressed
