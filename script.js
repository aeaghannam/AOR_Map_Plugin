
document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);

    document.querySelectorAll(".hoverable-path").forEach(function (el) {
        const title = el.querySelector("title")?.textContent;
        if (!title) return;

        el.addEventListener("mouseenter", function () {
            tooltip.textContent = title;
            tooltip.style.display = "block";
        });

        el.addEventListener("mousemove", function (e) {
            tooltip.style.left = e.pageX + 10 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        });

        el.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
        });
    });
});
