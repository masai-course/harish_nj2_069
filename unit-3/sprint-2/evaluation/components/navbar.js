function navbar()
{
    return `<div id = "navbar">
        <h3><a href = "./home.html">Home</a></h3>

        <div class="options">
       <input type ="text" id="search" placeholder="Enter news topic"/>
       <input type = "submit" onclick = "search()"/>
        </div>
    </div>
    <div id = "data1"></div>`

}
export default navbar