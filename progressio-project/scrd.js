// Sample data: Images grouped by classification
const foodData = {
    
    Top: [['CookingThePerfectSteak.jpg', 'crunchy-fish-sticks.jpg', 'ChocoCake.jpeg'], ['Certified Irish Angus Beef', 'Crispy Fish Sticks', 'Six-Layer Chocolate Motherlode Cake']],
    appetizers: [['naan.jpeg', 'SouthIndianCombo.jpg', 'Samosa.jpg', 'IndianComboMeal.jpg', 'HyderabadiBiryani.jpg', 'ClassicPuri.jpg'], ['Curry and Naan Bread', 'Great South Indian Combo', 'Grilled Samosa With Chutney', 'Indian Combo Meal', 'Hyderabadi Biryani', 'Classic Puri and Vegetable Curry']],
    mainCourses: [['Tacos.jpg', 'LaCheeseNachos.jpg', 'Spaghetti.jpg', 'CheeseBurst.jpg'], ['Friendly Tacos', 'Nachos With Cheese', 'Saucy Spaghetti', 'Pizza-Cheese Burst']],
    desserts: [['Macarons.jpg', 'BlueberryIcecream.jpg', 'CocoMilk.jpg', 'StrawCake.jpg'],['Macarons', 'Blueberry Icecream', 'Chocolate Milkshake', 'Strawberry Cake']],
    beverages: [['Coffee.jpg', 'Coke.jpg', 'FJ.jpg'], ['Cappucchino', 'All Drinks Available', 'Fruit Juices Available']],
};

const menuBoxes = document.querySelectorAll('.menu-box');
const menuImages = document.querySelector('.menu-images');

// Add click event listeners to classification boxes
menuBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        const classificationId = box.id;
        const images = foodData[classificationId];

        // Clear existing images
        menuImages.innerHTML = '';

        // Load and display images
        images[0].forEach((imageSrc) => {
            const foodImage = document.createElement('div');
            foodImage.classList.add('food-image');
            const img = document.createElement('img');
            img.src = imageSrc;
            foodImage.appendChild(img);
            menuImages.appendChild(foodImage);
        });
        counter = 0;
        images[1].forEach((textSrc) => {
            const foodImage = document.getElementsByTagName[counter];
            const text = document.createElement('p');
            text.innerText = textSrc;
            document.getElementsByClassName('food-image')[counter].appendChild(text);
            counter++;
        });
    });
});