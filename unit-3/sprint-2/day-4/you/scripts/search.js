async function search1(url)
{
    try {
        let res = await fetch(url)
        let data = await res.json();
        return data;
       // console.log(data);
    }
    catch (err) 
    { 
        console.log(err);
    }
}

async function getData(url)
{
        let res = await fetch(url);
        let data = await res.json();
        return data;
        //console.log(e);
}

function appendData({ meals: [{ strMealThumb, strMeal, strCategory, strInstructions }] }, parent) {
    let div = document.createElement('div');

    let p = document.createElement('p');
    p.innerText = strMeal;

    let img = document.createElement('img');

    img.src = strMealThumb;

    let p1 = document.createElement('p');
    p1.innerText = strCategory;
    
    let p2 = document.createElement('p');

    p2.innerText = strInstructions;

    div.append(p, img, p1, p2);

    parent.append(div);

}

// function appendData1({ categories: [{ strCategory, strCategoryThumb, strCategoryDescription }] } , parent)
//     {
// let div = document.createElement('div');

//     let p = document.createElement('p');
//     p.innerText = strCategory;

//     let img = document.createElement('img');

//     img.src = strCategoryThumb;

//     let p1 = document.createElement('p');

//     p1.innerText = strCategoryDescription;

//     div.append(p, img, p1);

//     parent.append(div);

// }

function appendData1(products, parent)
{
    products.forEach(({ categories: [{ strCategory, strCategoryThumb, strCategoryDescription }] }) => {
      
    let div = document.createElement('div');

    let p = document.createElement('p');
    p.innerText = strCategory;

    let img = document.createElement('img');

    img.src = strCategoryThumb;

    let p1 = document.createElement('p');

    p1.innerText = strCategoryDescription;
    

    div.append(p, img, p1);

    parent.append(div);
        
    })
}

export {search1, getData, appendData, appendData1 }

