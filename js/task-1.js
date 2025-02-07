document.addEventListener("DOMContentLoaded", function() {
    
    const categories = document.querySelector('#categories');
    
    const categoryItems = categories.querySelectorAll('.item');
    
    
    console.log(`Number of categories: ${categoryItems.length}`);
    
   
    categoryItems.forEach(category => {
        const header = category.querySelector('h2').textContent;
        const items = category.querySelectorAll('ul li');
        console.log(`Category: ${header}, Items: ${items.length}`);
    });
});
