function catNumbers() {
    const categoryItems = document
      .getElementById("categories")
      .querySelectorAll("li.item");

    console.log(`Кількість категорій: ${categoryItems.length}`);

    categoryItems.forEach((item) => {
        const categoryName = item.querySelector("h2").textContent;
        const subcategories = item.querySelectorAll("ul li");
        console.log(`${categoryName}: ${subcategories.length} елементів`);
    });
}

catNumbers();
