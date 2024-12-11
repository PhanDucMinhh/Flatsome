function renderUI(product){
    let productNameDom = document.getElementById('productName')
    productNameDom.innerText = product.name

    let productImageList = document.getElementsByClassName('productImage')
    for(let i=0; i < productImageList.length; i++){
        productImageList[i].setAttribute('src', product.image)
    }
}

function findProduct(id){
    for(let i=0; i < productList.length; i++){
        if(id == productList[i].id) return productList[i]
    }

    return null
}
function loadData(){
    let params = new URLSearchParams(location.search)
    let productId = params.get('productId')
    let product = findProduct(productId)

    renderUI(product)
}

loadData()