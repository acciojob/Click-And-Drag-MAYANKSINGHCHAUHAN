document.querySelectorAll(".cube").forEach(cube => {
    let isDragging = false;
    let offsetX, offsetY;

    cube.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - cube.offsetLeft;
        offsetY = e.clientY - cube.offsetTop;
        cube.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const container = document.querySelector(".container");
        const containerRect = container.getBoundingClientRect();
        const cubeSize = cube.offsetWidth;

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Constrain within container
        newX = Math.max(0, Math.min(newX, containerRect.width - cubeSize));
        newY = Math.max(0, Math.min(newY, containerRect.height - cubeSize));

        cube.style.left = `${newX}px`;
        cube.style.top = `${newY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        cube.style.cursor = "grab";
    });
});
