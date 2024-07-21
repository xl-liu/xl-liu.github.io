const galleryContainer = document.querySelector('.gallery');
const galleryItems = galleryContainer.querySelectorAll('.gallery-item');
const indicator = document.querySelector('.indicator');

const defaultItemFlex = '0 1 50px';
const hoverItemFlex = '1 1 600px';

const updateGalleryItems = () => {
    galleryItems.forEach((item) => {
        let flex = defaultItemFlex;
        if (item.isHovered) {
            flex = hoverItemFlex;
        }
        item.style.flex = flex;
    });
};

galleryItems.forEach((item) => {
    item.isHovered = false; // Ensure all items are collapsed by default
});

updateGalleryItems();

galleryItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        galleryItems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item;
        });
        updateGalleryItems();
    });
});

galleryContainer.addEventListener('mousemove', (e) => {
    indicator.style.left = `${e.clientX - galleryContainer.getBoundingClientRect().left}px`;
});
