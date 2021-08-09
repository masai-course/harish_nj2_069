async function getData(url)
{
    try
    {
        let res = await fetch(url)
        let data = await res.json();
        return data;
    }
    catch (e)
    {
        console.log(e);
    }
}

function appendData(products, parent)
{
    products.forEach(({ author, title, description, url }) => {
        let div = document.createElement("div");
        
        let p = document.createElement("p");
        p.innerText = author;

        let p1 = document.createElement("p");
        p1.innerText = title;

        let p2 = document.createElement("p");
        p2.innerText = description;

        let p3 = document.createElement("p");
        p3.innerText = url;

        div.append(p, p1, p2, p3);

        parent.append(div);

    })
}

export {getData, appendData}